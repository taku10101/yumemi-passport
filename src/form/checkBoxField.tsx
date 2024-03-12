import React from "react";
import { useFormContext } from "react-hook-form";

type TextFieldProps = {
  name: string;
};

export const checkBoxField: React.FC<TextFieldProps> = ({ name }) => {
  const {
    register,
  } = useFormContext();


  return (
    <div>
      <input type="checkbox" id={name} {...register(name)} />
    </div>
  );
};

