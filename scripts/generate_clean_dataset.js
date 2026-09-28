const fs = require("fs");
const path = require("path");

const data = JSON.parse(fs.readFileSync("./scripts_bootstrap.json", "utf8"));

// 1. Map all media
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

// 2. Map all videos
const videoMap = {};
if (data.page.F) {
  data.page.F.forEach(item => {
    if (item.id && item.files && item.files[0]) {
      videoMap[item.id] = item.files[0].url;
    }
  });
}

// 3. Map all fonts
const fontMap = {
  "YACgEZ1cb1Q": "Arimo",
  "YAD0vgIBnsw": "Intro Rust",
  "YAFdJmCOLzM": "Intro Pro",
  "YALBsz_QJ6o": "Give You Glory"
};

// 4. Map all embeds
const embedList = (data.page.H || []).map(em => ({
  url: em.A,
  name: em.B,
  timestamp: em.D,
  html: em.E
}));

// 5. Structure all pages
const pages = data.page.A.A.map((p, pageIdx) => {
  const pageId = p.P || String(pageIdx + 1);
  const title = p.B || "Page " + (pageIdx + 1);

  const blocks = (p.t || []).map((block, blockIdx) => {
    const width = block.C?.A || 1366;
    const height = block.C?.B || 768;
    
    // Check background image
    let bgUrl = null;
    const bgMediaId = block.D?.B?.A?.A;
    if (bgMediaId && mediaMap[bgMediaId]) {
      const bestBg = mediaMap[bgMediaId][mediaMap[bgMediaId].length - 1];
      bgUrl = bestBg?.url ? "/" + bestBg.url.replace(/^\/+/, "") : null;
    }

    const elements = (block.E || []).map(el => {
      const bounds = {
        top: el.A,
        left: el.B,
        width: el.D,
        height: el.C,
        rotate: el.E || 0
      };

      const link = el.G || null;

      // Text Element
      if (el["A?"] === "K" || el.a?.A) {
        let textChunks = [];
        if (Array.isArray(el.a?.A)) {
          textChunks = el.a.A.map(t => (typeof t === "object" ? t.A || "" : String(t)));
        } else if (typeof el.a?.A === "string") {
          textChunks = [el.a.A];
        }
        
        const fullText = textChunks.join("").replace(/\\n/g, "\n");
        let color = "#000000";
        let fontSize = 20;
        let fontFamily = "Intro Pro";
        let textAlign = "left";
        let fontWeight = "normal";
        let isUnderline = false;
        let elLink = link;

        const styleRuns = el.a?.B || [];
        styleRuns.forEach(s => {
          if (s["A?"] === "A" && s.A) {
            if (s.A.color?.B) color = s.A.color.B;
            if (s.A["font-size"]?.B) fontSize = parseFloat(s.A["font-size"].B);
            if (s.A["font-family"]?.B) {
              const fId = s.A["font-family"].B.split(",")[0];
              if (fontMap[fId]) fontFamily = fontMap[fId];
            }
            if (s.A["text-align"]?.B) textAlign = s.A["text-align"].B === "end" ? "right" : (s.A["text-align"].B === "center" ? "center" : "left");
            if (s.A["font-weight"]?.B) fontWeight = s.A["font-weight"].B;
            if (s.A.decoration?.B === "underline") isUnderline = true;
            if (s.A.link?.B) elLink = s.A.link.B;
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
          link: elLink,
          semantic: el.N || "p"
        };
      }

      // Video element
      if (el["A?"] === "V" || el.a?.C?.A?.A) {
        const vidId = el.a?.C?.A?.A;
        const vidRelUrl = videoMap[vidId];
        return {
          type: "video",
          bounds,
          vidId,
          url: vidRelUrl ? "/" + vidRelUrl.replace(/^\/+/, "") : null,
          link
        };
      }

      // Image / Graphic element
      if (el["A?"] === "I" || el.a?.B?.A?.A) {
        const imgId = el.a?.B?.A?.A;
        const files = mediaMap[imgId] || [];
        const bestFile = files[files.length - 1] || files[0];
        const url = bestFile?.url ? "/" + bestFile.url.replace(/^\/+/, "") : null;
        return {
          type: "image",
          bounds,
          imgId,
          url,
          link,
          width: bestFile?.width || bounds.width,
          height: bestFile?.height || bounds.height
        };
      }

      // Embed element
      if (el["A?"] === "M") {
        return {
          type: "embed",
          bounds,
          embedData: el
        };
      }

      return {
        type: "other",
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

fs.writeFileSync("./src/data/pages_data.json", JSON.stringify(pages, null, 2));
fs.writeFileSync("./src/data/embeds_data.json", JSON.stringify(embedList, null, 2));
console.log(`Successfully generated src/data/pages_data.json with ${pages.length} pages!`);
