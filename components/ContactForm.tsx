"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import Input from "@mui/material/Input";

type Inputs = {
  example: string;
  exampleRequired: string;
};

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  console.log(watch("example")); // watch input value by passing the name of it

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
      <Input defaultValue="test" {...register("example")} />

      {/* include validation with required or other standard HTML validation rules */}
      <Input {...register("exampleRequired", { required: true })} />
      {/* errors will return when field validation fails  */}
      {errors.exampleRequired && <span>This field is required</span>}

      <Input type="submit" />
    </form>
  );
}
