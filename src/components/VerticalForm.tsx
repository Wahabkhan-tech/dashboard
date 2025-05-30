import React, { ReactNode, isValidElement } from "react";
import { FieldValues, Resolver, useForm } from "react-hook-form";

interface VerticalFormProps<TFormValues extends FieldValues> {
  defaultValues?: TFormValues;
  resolver?: Resolver<TFormValues>;
  children?: ReactNode;
  onSubmit: (data: TFormValues) => void;
  formClass?: string;
}

const VerticalForm = <TFormValues extends Record<string, any> = Record<string, any>>(
  { defaultValues, resolver, children, onSubmit, formClass }: VerticalFormProps<TFormValues>
) => {
  /*
   * form methods
   */
  const methods = useForm<TFormValues>({ resolver });

  const {
    handleSubmit,
    register,
    control,
    formState: { errors },
  } = methods;

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={formClass ?? ""} noValidate>
      {React.Children.map(children, (child) => {
        if (isValidElement(child) && child.props && child.props.name) {
          return React.createElement(child.type, {
            ...{
              ...child.props,
              register,
              key: child.props.name,
              errors,
              control,
            },
          });
        }
        return child;
      })}
    </form>
  );
};

export default VerticalForm;