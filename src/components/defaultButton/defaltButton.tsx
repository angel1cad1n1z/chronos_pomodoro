import styles from "./defaultButton.module.css";
import * as React from "react";
type DefaultButtonProps = {
  icon: React.ReactNode;
  color?: "green" | "red";
} & React.ComponentProps<"button">;
export function DefaultButton({
  icon,
  color = "green",
  ...props
}: DefaultButtonProps) {
  return (
    <>
      <button
        className={` ${styles.defaultButton} ${styles[color]}`}
        {...props}
      >
        {icon}
      </button>
    </>
  );
}
