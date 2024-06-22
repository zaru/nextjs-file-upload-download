"use client";

import { deleteFile } from "@/app/file/_commands/deleteFile";
interface Props {
  file: string;
}
export function DeleteButton(props: Props) {
  return (
    <button
      type="button"
      onClick={async () => {
        await deleteFile(props.file);
      }}
      className="rounded bg-white px-2 py-1 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
    >
      Delete
    </button>
  );
}
