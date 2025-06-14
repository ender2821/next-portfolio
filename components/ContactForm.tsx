"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";

import FormControlLabel from "@mui/material/FormControlLabel";
import { sendEmail } from "@/utils";
import MenuItem from "@mui/material/MenuItem";
import SiteButton from "./SiteButton";
import { Check, Square } from "lucide-react";
import { useState } from "react";
import FileUpload from "./FileUpload";

export type ContactFormData = {
  name: string;
  company: string;
  email: string;
  phone: string;
  projectInMind: boolean;
  subject: string;
  message: string;
  projectType: string;
  estimatedBudget: string;
  projectDescription: string;
  files: FileList;
};

const projectType = [
  { value: "projectType", label: "Project Type" },
  { value: "webSite", label: "Web Site" },
  { value: "webApp", label: "Web App" },
  { value: "logo", label: "Logo" },
  { value: "illustration", label: "Illustration" },
  { value: "branding", label: "Branding" },
  { value: "print", label: "Print Media" },
  { value: "other", label: "Other" },
];

const estimatedBudget = [
  { value: "estimatedBudget", label: "Estimated Budget" },
  { value: "lessThan1000", label: "Less than $1000" },
  { value: "1000to5000", label: "$1000 - $5000" },
  { value: "5000to10000", label: "$5000 - $10,000" },
  { value: "moreThan10000", label: "More than $10,000" },
];

export default function ContactForm() {
  const [selectedFileName, setSelectedFileName] = useState<string | null>(null);

  const {
    control,
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<ContactFormData>();
  const onSubmit: SubmitHandler<ContactFormData> = (data) => {
    console.log(data);
    sendEmail(data);
  };
  // const onSubmit: SubmitHandler<ContactFormData> = (data) => {
  //   const formData = new FormData();
  //   Object.entries(data).forEach(([key, value]) => {
  //     if (key === "file") {
  //       if (value instanceof FileList) {
  //         formData.append(key, value[0]); // Append the file
  //       }
  //     } else {
  //       formData.append(key, value as string);
  //     }
  //   });
  //   console.log(formData);
  //   sendEmail(formData); // Adjust `sendEmail` to handle FormData
  // };

  // const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   const file = event.target.files?.[0];
  //   setSelectedFileName(file ? file.name : null);
  // };

  const projectInMind = watch("projectInMind");
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-8">
      <div className="inputContain">
        <TextField
          placeholder="name"
          className="w-full"
          {...register("name", { required: "name is required" })}
        />
        <ErrorMessage
          errors={errors}
          name="name"
          render={({ message }) => (
            <p className="text-orange mb-0">{message}</p>
          )}
        />
      </div>
      <TextField placeholder="company" {...register("company")} />
      <div className="inputContain">
        <TextField
          placeholder="email"
          className="w-full"
          {...register("email", {
            required: "email is required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "invalid email address",
            },
          })}
        />
        <ErrorMessage
          errors={errors}
          name="email"
          render={({ message }) => (
            <p className="text-orange mb-0">{message}</p>
          )}
        />
      </div>
      <TextField placeholder="phone" {...register("phone")} />
      <FormControlLabel
        control={
          <Checkbox
            icon={<Square style={{ color: "transparent" }} />}
            checkedIcon={<Check style={{ color: "#242B2C" }} />}
            {...register("projectInMind")}
          />
        }
        label="Have a project in mind?"
        style={{
          color: "#242B2C",
        }}
      />
      {projectInMind ? (
        <>
          <TextField
            id="project-type"
            select
            defaultValue="projectType"
            {...register("projectType")}
          >
            {projectType.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            id="estimated-budget"
            select
            defaultValue="estimatedBudget"
            {...register("estimatedBudget")}
          >
            {estimatedBudget.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <div className="inputContain">
            <TextField
              {...register(
                "projectDescription",
                projectInMind && { required: "project description is required" }
              )}
              multiline
              placeholder="Project Description"
              className="w-full"
            />
            <ErrorMessage
              errors={errors}
              name="projectDescription"
              render={({ message }) => (
                <p className="text-orange mb-0">{message}</p>
              )}
            />
          </div>
        </>
      ) : (
        <>
          <div className="inputContain">
            <TextField
              placeholder="subject"
              className="w-full"
              {...register(
                "subject",
                !projectInMind && { required: "subject is required" }
              )}
            />
            <ErrorMessage
              errors={errors}
              name="subject"
              render={({ message }) => (
                <p className="text-orange mb-0">{message}</p>
              )}
            />
          </div>
          <div className="inputContain">
            <TextField
              {...register(
                "message",
                !projectInMind && { required: "message is required" }
              )}
              multiline
              placeholder="Message"
              className="w-full"
            />
            <ErrorMessage
              errors={errors}
              name="message"
              render={({ message }) => (
                <p className="text-orange mb-0">{message}</p>
              )}
            />
          </div>
        </>
      )}
      {/* TODO: Add upload file button and functionality */}
      {/* <div className="inputContain">
        <label
          htmlFor="file-upload"
          className="block text-sm font-medium text-gray-700"
        >
          Upload File
        </label>
        <input
          type="file"
          id="file-upload"
          className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-gray-50 file:text-gray-700 hover:file:bg-gray-100"
          {...register("file", {
            required: "File is required",
            validate: (value) =>
              value[0]?.size < 5 * 1024 * 1024 ||
              "File size must be less than 5MB",
          })}
          onChange={(e) => {
            handleFileChange(e); // Update state with selected file name
          }}
        />
        {selectedFileName && (
          <p className="text-black-bg mt-2">
            Selected File: {selectedFileName}
          </p>
        )}
        <ErrorMessage
          errors={errors}
          name="file"
          render={({ message }) => (
            <p className="text-orange mb-0 ">{message}</p>
          )}
        />
      </div> */}
      <FileUpload control={control} />

      <SiteButton
        selected={true}
        textHover={"dark"}
        type="submit"
        className="mb-16 lg:mb-0"
      >
        Submit
      </SiteButton>
    </form>
  );
}
