import { promises as fs } from "node:fs";
import { resolve } from "node:path";
import { type NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const fileName = searchParams.get("file");
  if (!fileName) {
    return new NextResponse("File not found", { status: 404 });
  }

  const dirPath = resolve(process.cwd(), "./uploads");
  const files = await fs.readdir(dirPath);
  if (!files.includes(fileName)) {
    return new NextResponse("File not found", { status: 404 });
  }

  const filePath = resolve(dirPath, fileName);
  const fileContent = await fs.readFile(filePath);

  const headers = new Headers({
    "Content-Disposition": `attachment; filename=${fileName}`,
  });

  return new NextResponse(fileContent, { headers });
}
