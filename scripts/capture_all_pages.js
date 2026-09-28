const puppeteer = require("puppeteer-core");
const fs = require("fs");
const path = require("path");

const CHROME_PATH = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";

const pagesToCapture = [
  { slug: "home", url: "https://hoangphamthuyanh.com/", name: "01_home" },
  { slug: "about-me", url: "https://hoangphamthuyanh.com/about-me", name: "02_about_me" },
  { slug: "experience", url: "https://hoangphamthuyanh.com/experience", name: "03_experience" },
  { slug: "testimonies", url: "https://hoangphamthuyanh.com/testimonies", name: "04_testimonies" },
  { slug: "drawing", url: "https://hoangphamthuyanh.com/drawing", name: "05_drawing" },
  { slug: "speaking-and-singing", url: "https://hoangphamthuyanh.com/speaking-and-singing", name: "06_speaking_and_singing" },
  { slug: "photography", url: "https://hoangphamthuyanh.com/photography", name: "07_photography" },
  { slug: "writing", url: "https://hoangphamthuyanh.com/writing", name: "08_writing" },
  { slug: "grand-opening-starbucks-quang-trung", url: "https://hoangphamthuyanh.com/grand-opening-starbucks-quang-trung", name: "09_starbucks_quang_trung" },
  { slug: "starbucks-100th-store-open-celebration", url: "https://hoangphamthuyanh.com/starbucks-100th-store-open-celebration", name: "10_starbucks_100th" },
  { slug: "starbucks-fansipan-mountain-opening", url: "https://hoangphamthuyanh.com/starbucks-fansipan-mountain-opening", name: "11_starbucks_fansipan" },
  { slug: "3x3-hooptopia-uprising-2025", url: "https://hoangphamthuyanh.com/3x3-hooptopia-uprising-2025", name: "12_3x3_hooptopia_uprising" },
  { slug: "3x3-hooptopia-vietnamfinance-2025", url: "https://hoangphamthuyanh.com/3x3-hooptopia-vietnamfinance-2025", name: "13_3x3_hooptopia_vietnamfinance" },
  { slug: "5x5-hooptopia-season-i-2026", url: "https://hoangphamthuyanh.com/5x5-hooptopia-season-i-2026", name: "14_5x5_hooptopia" },
  { slug: "family-day", url: "https://hoangphamthuyanh.com/family-day", name: "15_family_day" },
  { slug: "drama-show---dinh-bo-linh-the-reed-flag-hero", url: "https://hoangphamthuyanh.com/drama-show---dinh-bo-linh-the-reed-flag-hero", name: "16_drama_show_dinh_bo_linh" },
  { slug: "gladia-by-the-water-event-in-hanoi", url: "https://hoangphamthuyanh.com/gladia-by-the-water-event-in-hanoi", name: "17_gladia_by_the_water" },
  { slug: "edufit-summer-intern-program", url: "https://hoangphamthuyanh.com/edufit-summer-intern-program", name: "18_edufit_summer_intern" },
  { slug: "dewey-university-fair-2023", url: "https://hoangphamthuyanh.com/dewey-university-fair-2023", name: "19_dewey_university_fair" },
  { slug: "prom", url: "https://hoangphamthuyanh.com/prom", name: "20_prom" },
  { slug: "mount-vernon-school-visit-2024", url: "https://hoangphamthuyanh.com/mount-vernon-school-visit-2024", name: "21_mount_vernon_visit" },
  { slug: "tet-market", url: "https://hoangphamthuyanh.com/tet-market", name: "22_tet_market" },
];

const outDir = path.join(__dirname, "../public/screenshots");
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

async function capture() {
  console.log("Launching Google Chrome at:", CHROME_PATH);
  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: "new",
    args: ["--no-sandbox", "--disable-setuid-sandbox", "--window-size=1440,900"]
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 2 });

  for (let i = 0; i < pagesToCapture.length; i++) {
    const item = pagesToCapture[i];
    const screenshotPath = path.join(outDir, `${item.name}.png`);
    console.log(`[${i + 1}/${pagesToCapture.length}] Navigating to: ${item.url}`);

    try {
      await page.goto(item.url, { waitUntil: "networkidle2", timeout: 30000 });
      
      // Auto scroll to trigger lazy loading of images
      await page.evaluate(async () => {
        await new Promise((resolve) => {
          let totalHeight = 0;
          let distance = 300;
          let timer = setInterval(() => {
            let scrollHeight = document.body.scrollHeight;
            window.scrollBy(0, distance);
            totalHeight += distance;

            if (totalHeight >= scrollHeight) {
              clearInterval(timer);
              window.scrollTo(0, 0);
              resolve();
            }
          }, 100);
        });
      });

      // Wait a bit for fonts and layout stabilization
      await new Promise(r => setTimeout(r, 1500));

      await page.screenshot({ path: screenshotPath, fullPage: true });
      console.log(`   Saved screenshot to: ${screenshotPath}`);
    } catch (err) {
      console.error(`   Error capturing ${item.url}:`, err.message);
    }
  }

  await browser.close();
  console.log("All screenshots captured successfully in public/screenshots/!");
}

capture();
