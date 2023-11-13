import { ComponentProps } from "react";

interface DateInputProps extends ComponentProps<"input"> {
  type: string;
  id: string;
  label: string;
}

export const DateInput = ({ type, id, label, ...props }: DateInputProps) => {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input type={type} name={id} id={id} {...props} />
    </div>
  );
};
