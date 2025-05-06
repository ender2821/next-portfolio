"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import Input from "@mui/material/Input";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

import FormControlLabel from "@mui/material/FormControlLabel";
import { sendEmail } from "@/utils";
import { useState } from "react";
import MenuItem from "@mui/material/MenuItem";

export type FormData = {
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
  const [projectInMind, setProjectInMind] = useState(false); // Add state for checkbox

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormData>();
  const onSubmit: SubmitHandler<FormData> = (data) => sendEmail(data);

  console.log(watch("projectType")); // watch input value by passing the name of it
  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
      {/* register your input into the hook by invoking the "register" function */}
      <Input
        placeholder="name"
        {...register("name", { required: "name is required" })}
      />
      <ErrorMessage
        errors={errors}
        name="name"
        render={({ message }) => <p className="text-orange">{message}</p>}
      />
      <Input placeholder="company" {...register("company")} />
      <Input
        placeholder="email"
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
        render={({ message }) => <p className="text-orange">{message}</p>}
      />
      <Input placeholder="phone" {...register("phone")} />
      <FormControlLabel
        control={
          <Checkbox onChange={(e) => setProjectInMind(e.target.checked)} />
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
          <TextField
            {...register("projectDescription")}
            multiline
            placeholder="Project Description"
          />
        </>
      ) : (
        <>
          <Input placeholder="subject" {...register("subject")} />
          <TextField {...register("message")} multiline placeholder="Message" />
        </>
      )}
      <Button type="submit">Submit</Button>
    </form>
  );
}
