import React from "react";
import { useFormContext } from "react-hook-form";

type TextFieldProps = {
  name: string;
};

export const CheckBoxField: React.FC<TextFieldProps> = (props: TextFieldProps) => {
  const { name } = props;
  const { register } = useFormContext();

  return (
    <div>
      <label htmlFor={name}>{name}</label>
      <input type="checkbox" id={name} {...register(name)} />
    </div>
  );
};
