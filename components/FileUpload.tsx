import React, { useRef } from "react";
import { IconButton, Button } from "@mui/material";
import { useFieldArray, Controller } from "react-hook-form";
import { Delete } from "lucide-react";

interface FileUploadProps {
  control: any;
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
        <label>Files</label>

        {fields.map(({ fileId, file }, index) => (
          <div key={fileId}>
            <Controller
              control={control}
              name={`files.${index}`}
              render={() => (
                <>
                  <span>{file.name}</span>
                  <IconButton aria-label="Remove" onClick={() => remove(index)}>
                    <Delete />
                  </IconButton>
                </>
              )}
            />
          </div>
        ))}

        <Button variant="text" onClick={onAddFiles}>
          Add Files
        </Button>
      </div>
    </>
  );
};

export default FileUpload;
