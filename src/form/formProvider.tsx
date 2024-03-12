import React from "react";
import { DefaultValues, FieldValues, FormProvider, SubmitHandler, useForm } from "react-hook-form";

type FormContainerProps<TFormValues extends FieldValues> = {
  defaultValues: DefaultValues<TFormValues> | undefined;
  children: React.ReactNode;
  onSubmit: SubmitHandler<TFormValues>;
};

const handleSubmit = (data: unknown) => {
    console.log(data);
    }
export const formProvider = () => {
    <TFormValues extends FieldValues>({
      defaultValues,
      children,
      onSubmit,
    }: FormContainerProps<TFormValues>) => {
      const methods = useForm<TFormValues>({
        defaultValues,
      });
  
    return (
        <FormProvider {...methods}>
            <form onSubmit={handleSubmit}>
                {children}
                <button type="submit">送信</button>
            </form>
        </FormProvider>
    );
    };
  };