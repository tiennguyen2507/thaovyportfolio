const fs = require("fs");
const path = require("path");

const data = JSON.parse(fs.readFileSync("./scripts_bootstrap.json", "utf8"));

// Let us parse all the pages, sections, sub-blocks, typography, and media
const pages = data.page.A.A;
const mediaMap = {};

if (data.page.E) {
  data.page.E.forEach(item => {
    if (item.id && item.files) {
      if (!mediaMap[item.id]) mediaMap[item.id] = [];
      item.files.forEach(f => {
        mediaMap[item.id].push(f);
      });
    }
  });
}

const videoMap = {};
if (data.page.F) {
  data.page.F.forEach(item => {
    if (item.id && item.files) {
      videoMap[item.id] = item.files[0]?.url;
    }
  });
}

const fontMap = {};
if (data.page.I) {
  Object.values(data.page.I).forEach(group => {
    if (Array.isArray(group)) {
      group.forEach(font => {
        fontMap[font.A] = font.C; // id to font-family name
      });
    }
  });
}

console.log("Font map:", fontMap);

const structuredPages = pages.map((page, pIdx) => {
  const pageId = page.P || String(pIdx + 1);
  const title = page.B || "";
  
  const blocks = (page.t || []).map((block, bIdx) => {
    const width = block.C?.A || 1366;
    const height = block.C?.B || 768;
    const bgMediaId = block.D?.B?.A?.A;
    const bgUrl = bgMediaId && mediaMap[bgMediaId]?.[0]?.url;

    const elements = (block.E || []).map(el => {
      const elType = el["A?"];
      const bounds = {
        top: el.A,
        left: el.B,
        width: el.D,
        height: el.C,
        rotate: el.E || 0
      };

      // Text Element
      if (elType === "K" || el.a?.A) {
        let textChunks = [];
        if (Array.isArray(el.a?.A)) {
          textChunks = el.a.A.map(t => t.A);
        } else if (typeof el.a?.A === "string") {
          textChunks = [el.a.A];
        }
        
        const fullText = textChunks.join("").replace(/\\n/g, "\n");
        const styles = el.a?.B || [];
        let color = "#000000";
        let fontSize = 20;
        let fontFamily = "inherit";
        let textAlign = "start";
        let fontWeight = "normal";
        let isUnderline = false;
        let link = el.G || null;

        styles.forEach(s => {
          if (s["A?"] === "A" && s.A) {
            if (s.A.color?.B) color = s.A.color.B;
            if (s.A["font-size"]?.B) fontSize = parseFloat(s.A["font-size"].B);
            if (s.A["font-family"]?.B) {
              const fId = s.A["font-family"].B.split(",")[0];
              fontFamily = fontMap[fId] || fontFamily;
            }
            if (s.A["text-align"]?.B) textAlign = s.A["text-align"].B;
            if (s.A["font-weight"]?.B) fontWeight = s.A["font-weight"].B;
            if (s.A.decoration?.B === "underline") isUnderline = true;
            if (s.A.link?.B) link = s.A.link.B;
          }
        });

        return {
          type: "text",
          bounds,
          text: fullText,
          color,
          fontSize,
          fontFamily,
          textAlign,
          fontWeight,
          isUnderline,
          link,
          semantic: el.N || "p"
        };
      }

      // Image Element
      if (elType === "I" || el.a?.B?.A?.A) {
        const imgId = el.a?.B?.A?.A;
        const clipMaskId = el.a?.B?.I?.A;
        const imgFiles = mediaMap[imgId] || [];
        // best quality
        const bestFile = imgFiles[imgFiles.length - 1] || imgFiles[0];
        const link = el.G || null;

        return {
          type: "image",
          bounds,
          imgId,
          url: bestFile?.url || null,
          width: bestFile?.width,
          height: bestFile?.height,
          link
        };
      }

      // Video Element
      if (elType === "V" || el.a?.C?.A?.A) {
        const vidId = el.a?.C?.A?.A;
        const videoUrl = videoMap[vidId];
        return {
          type: "video",
          bounds,
          vidId,
          url: videoUrl,
          link: el.G || null
        };
      }

      // Embed element
      if (elType === "M") {
        return {
          type: "embed",
          bounds,
          data: el
        };
      }

      return {
        type: "unknown",
        bounds,
        raw: el
      };
    });

    return {
      width,
      height,
      bgUrl,
      elements
    };
  });

  return {
    id: pageId,
    title,
    blocks
  };
});

fs.writeFileSync("./src/data/portfolio_data.json", JSON.stringify(structuredPages, null, 2));
console.log(`Generated structured portfolio data for ${structuredPages.length} pages in src/data/portfolio_data.json`);
