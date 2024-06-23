import { promises as fs } from "node:fs";
import { resolve } from "node:path";
import { DeleteButton } from "@/app/file/_components/DeleteButton";

export async function FileList() {
  const dirPath = resolve(process.cwd(), "./uploads");
  const files = await fs.readdir(dirPath);

  return (
    <ul className="divide-y divide-gray-200">
      {files.map((file) => (
        <li key={file} className="py-4 flex justify-between">
          {file}
          <div className="flex gap-4 items-center">
            <a
              href={`/file/download?file=${file}`}
              className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
            >
              Download
            </a>
            <DeleteButton file={file} />
          </div>
        </li>
      ))}
    </ul>
  );
}
