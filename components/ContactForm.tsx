"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import Input from "@mui/material/Input";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import FormControlLabel from "@mui/material/FormControlLabel";
import { sendEmail } from "@/utils";
import { useState } from "react";

export type FormData = {
  name: string;
  company: string;
  email: string;
  phone: string;
  projectInMind: boolean;
  subject: string;
};

export default function ContactForm() {
  const [projectInMind, setProjectInMind] = useState(false); // Add state for checkbox

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormData>();
  const onSubmit: SubmitHandler<FormData> = (data) => sendEmail(data);

  console.log(watch("name")); // watch input value by passing the name of it
  console.log(errors);
  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form onSubmit={handleSubmit(onSubmit)}>
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
        <Input placeholder="project" {...register("project")} />
      ) : (
        <Input placeholder="subject" {...register("subject")} />
      )}
      <Button type="submit">Submit</Button>
    </form>
  );
}
