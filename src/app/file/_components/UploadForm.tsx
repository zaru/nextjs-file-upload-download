"use client";

import { uploadFile } from "@/app/file/_commands/uploadFile";

export function UploadForm() {
  return (
    <div className="overflow-hidden rounded-lg bg-white shadow">
      <div className="px-4 py-5 sm:p-6">
        <form action={uploadFile} className="flex gap-4 justify-between">
          <input type="file" name="file" />
          <button
            type="submit"
            className="rounded bg-indigo-600 px-2 py-1 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            アップロード
          </button>
        </form>
      </div>
    </div>
  );
}
