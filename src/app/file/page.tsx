import { FileList } from "@/app/file/_components/FileList";
import { UploadForm } from "@/app/file/_components/UploadForm";

export const dynamic = "force-dynamic";

export default function Page() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <div className="mt-6">
          <UploadForm />
        </div>
        <div className="mt-6">
          <FileList />
        </div>
      </div>
    </div>
  );
}
