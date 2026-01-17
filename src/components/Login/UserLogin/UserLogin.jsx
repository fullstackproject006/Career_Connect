import React from "react";
import { useForm } from "react-hook-form";
import FormInput from "../../Common/FormInput";
import { Button, Form } from "react-bootstrap";

const UserLogin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (values) => {
    console.log("::values", values);
  };
  return (
    <>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <h2 className="mb-4">User Login</h2>
        <FormInput
          type="text"
          label="Email"
          name="Email"
          register={register("email")}
          errors={errors.email}
        />
        <FormInput
          type="text"
          label="Password"
          name="password"
          register={register("password")}
          errors={errors.password}
        />
        <Button type="submit">Login</Button>
      </Form>
    </>
  );
};
export default UserLogin;
