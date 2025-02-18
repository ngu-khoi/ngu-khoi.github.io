import { getPlaiceholder } from "plaiceholder"
import fs from "fs"
import path from "path"

export async function getBlurDataUrl(src: string) {
  if (!src.startsWith("http")) {
    // For local files, read from filesystem
    const filePath = path.join(process.cwd(), "public", src)
    const buffer = fs.readFileSync(filePath)
    const { base64 } = await getPlaiceholder(buffer)
    return base64
  }

  // For remote URLs, fetch the image
  const response = await fetch(src)
  const buffer = await response.arrayBuffer()
  const { base64 } = await getPlaiceholder(Buffer.from(buffer))
  return base64
} 