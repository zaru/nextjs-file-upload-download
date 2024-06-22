"use server";
import { promises as fs } from "node:fs";
import { resolve } from "node:path";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

export async function deleteFile(fileName: string) {
  const dirPath = resolve(process.cwd(), "./uploads");
  const files = await fs.readdir(dirPath);
  if (!files.includes(fileName)) {
    return new NextResponse("File not found", { status: 404 });
  }

  const filePath = resolve(dirPath, fileName);
  await fs.unlink(filePath);

  revalidatePath("/file");
}
