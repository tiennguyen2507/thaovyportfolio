import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const MIME_TYPES: Record<string, string> = {
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".svg": "image/svg+xml",
  ".webp": "image/webp",
  ".gif": "image/gif",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
  ".css": "text/css",
  ".mp4": "video/mp4",
  ".webm": "video/webm",
};

export async function GET(
  request: NextRequest,
  context: { params: Promise<{ path: string[] }> }
) {
  const { path: pathSegments } = await context.params;
  const assetPath = pathSegments.join("/");
  
  // 1. Check local public/_assets directory first
  const localFilePath = path.join(process.cwd(), "public", "_assets", assetPath);
  if (fs.existsSync(localFilePath)) {
    try {
      const fileBuffer = fs.readFileSync(localFilePath);
      const ext = path.extname(localFilePath).toLowerCase();
      const contentType = MIME_TYPES[ext] || "application/octet-stream";
      return new NextResponse(fileBuffer, {
        headers: {
          "Content-Type": contentType,
          "Cache-Control": "public, max-age=31536000, immutable",
        },
      });
    } catch (e) {
      console.error("Error reading local asset:", e);
    }
  }

  // 2. Fallback to live server
  const targetUrl = `https://hoangphamthuyanh.com/_assets/${assetPath}`;

  try {
    const res = await fetch(targetUrl, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
        Referer: "https://hoangphamthuyanh.com/",
      },
    });

    if (!res.ok) {
      return new NextResponse(`Asset not found (${res.status})`, { status: res.status });
    }

    const contentType = res.headers.get("content-type") || "application/octet-stream";
    const arrayBuffer = await res.arrayBuffer();

    return new NextResponse(arrayBuffer, {
      headers: {
        "Content-Type": contentType,
        "Cache-Control": "public, max-age=31536000, immutable",
      },
    });
  } catch (error) {
    console.error("Error fetching remote asset:", error);
    return new NextResponse("Error fetching asset", { status: 500 });
  }
}
