import React from "react";
import { useForm, SubmitHandler, FormProvider, FieldValues, DefaultValues } from "react-hook-form";

type FormContainerProps<TFormValues extends FieldValues> = {
  defaultValues: DefaultValues<TFormValues> | undefined;
  children: React.ReactNode;
  onSubmit: SubmitHandler<TFormValues>;
};

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
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          {children}
          <button type="submit">送信</button>
        </form>
      </FormProvider>
    );
  };
};
