import React from "react";
import { FormControl, FormGroup, FormLabel } from "react-bootstrap";

const FormInput = ({
  label,
  type = "text",
  register,
  name,
  error,
  ...rest
}) => {
  return (
    <>
      <FormGroup>
        <FormLabel>{label}</FormLabel>
        <FormControl name={name} type={type} {...register} />
      </FormGroup>
    </>
  );
};
export default FormInput;
