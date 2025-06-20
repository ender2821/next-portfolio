import React, { useRef } from "react";
import { IconButton } from "@mui/material";
import { useFieldArray, Controller } from "react-hook-form";
import { X } from "lucide-react";
import SiteButton from "./SiteButton";

interface FileUploadProps {
  control: any; // Replace 'any' with the appropriate type for 'control' if known
}

const FileUpload: React.FC<FileUploadProps> = ({ control }) => {
  const { fields, append, remove } = useFieldArray({
    control,
    name: "files",
    keyName: "fileId",
  });

  const hiddenFileInput = useRef<HTMLInputElement>(null);

  const onAddFiles = () => {
    if (hiddenFileInput.current) {
      hiddenFileInput.current.click();
    }
  };

  const handleAddFiles = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) return;

    const uploadedFiles = Array.from(event.target.files);

    const encodeFileToBase64 = (file: File): Promise<string> => {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => {
          const base64Content = reader.result?.toString().split(",")[1]; // Extract Base64 content
          resolve(base64Content || "");
        };
        reader.onerror = (error) => reject(error);
        reader.readAsDataURL(file);
      });
    };

    Promise.all(
      uploadedFiles.map(async (file) => ({
        file,
        name: file.name,
        type: file.type,
        content: await encodeFileToBase64(file), // Base64 encode the file
      }))
    ).then((files) => {
      append(files);

      if (hiddenFileInput.current) {
        hiddenFileInput.current.value = "";
      }

      console.log(files); // Logs the files with Base64 content
    });
  };

  return (
    <>
      <input
        ref={hiddenFileInput}
        type="file"
        multiple
        onChange={handleAddFiles}
        className="hidden"
      />

      <div>
        {/* @ts-ignore */}
        {fields.map(({ fileId, file }, index) => (
          <div key={fileId} className={"flex items-center"}>
            <Controller
              control={control}
              name={`files.${index}`}
              render={() => (
                <>
                  <span className="text-black-bg">{file.name}</span>
                  <IconButton aria-label="Remove" onClick={() => remove(index)}>
                    <X />
                  </IconButton>
                </>
              )}
            />
          </div>
        ))}

        <SiteButton
          selected={true}
          textHover={"dark"}
          className="mb-16 lg:mb-0 max-w-[300px] w-full before:border-t-white-border before:border-b-white-border after:border-t-white-border after:border-b-white-border hover:after:border-b-white-border after:bg-white-border"
          onClick={onAddFiles}
        >
          Add Files
        </SiteButton>
      </div>
    </>
  );
};

export default FileUpload;
