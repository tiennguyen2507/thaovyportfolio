const fs = require("fs");
const path = require("path");
const https = require("https");
const http = require("http");

const data = JSON.parse(fs.readFileSync("./scripts_bootstrap.json", "utf8"));
const baseUrl = "https://hoangphamthuyanh.com/";

const assetUrls = new Set();
function findUrls(obj) {
  if (!obj) return;
  if (typeof obj === "string") {
    if (obj.startsWith("_assets/") || obj.includes("/_assets/")) {
      let clean = obj.replace(/^\/+/, "");
      assetUrls.add(clean);
    }
  } else if (typeof obj === "object") {
    for (let k of Object.keys(obj)) {
      findUrls(obj[k]);
    }
  }
}
findUrls(data);

console.log(`Found ${assetUrls.size} assets to download...`);

function downloadFile(relUrl) {
  return new Promise((resolve) => {
    const fullUrl = baseUrl + relUrl;
    const destPath = path.join(__dirname, "../public", relUrl);
    
    if (fs.existsSync(destPath)) {
      const stat = fs.statSync(destPath);
      if (stat.size > 0) {
        return resolve({ status: "already_exists", file: relUrl });
      }
    }

    fs.mkdirSync(path.dirname(destPath), { recursive: true });

    const client = fullUrl.startsWith("https") ? https : http;
    const req = client.get(fullUrl, {
      headers: {
        "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
        "Referer": "https://hoangphamthuyanh.com/"
      }
    }, (res) => {
      if (res.statusCode === 200) {
        const fileStream = fs.createWriteStream(destPath);
        res.pipe(fileStream);
        fileStream.on("finish", () => {
          fileStream.close();
          resolve({ status: "success", file: relUrl });
        });
      } else {
        resolve({ status: "failed", code: res.statusCode, file: relUrl });
      }
    });

    req.on("error", (err) => {
      resolve({ status: "error", error: err.message, file: relUrl });
    });

    req.setTimeout(15000, () => {
      req.destroy();
      resolve({ status: "timeout", file: relUrl });
    });
  });
}

async function run() {
  const urls = Array.from(assetUrls);
  console.log(`Starting download of ${urls.length} files with concurrency 20...`);
  
  const concurrency = 20;
  let index = 0;
  let completed = 0;
  let successCount = 0;
  let failCount = 0;

  async function worker() {
    while (index < urls.length) {
      const current = urls[index++];
      const res = await downloadFile(current);
      completed++;
      if (res.status === "success" || res.status === "already_exists") {
        successCount++;
      } else {
        failCount++;
      }
      if (completed % 50 === 0 || completed === urls.length) {
        console.log(`Progress: ${completed}/${urls.length} (Success: ${successCount}, Failed: ${failCount})`);
      }
    }
  }

  const workers = Array.from({ length: concurrency }, () => worker());
  await Promise.all(workers);
  console.log(`Download finished! Success: ${successCount}, Failed: ${failCount}`);
}

run();
