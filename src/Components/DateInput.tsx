import { ComponentProps } from "react";
import styles from "./DateInput.module.css";

interface DateInputProps extends ComponentProps<"input"> {
  type: string;
  id: string;
  label: string;
}

export const DateInput = ({ type, id, label, ...props }: DateInputProps) => {
  return (
    <div>
      <label htmlFor={id} className={styles.label}>{label}</label>
      <input type={type} name={id} id={id} {...props} className={styles.input}/>
    </div>
  );
};
