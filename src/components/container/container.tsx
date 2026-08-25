import styles from "./container.module.css";
import * as React from "react";

export function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.container}>
      <div className={styles.content}>{children}</div>
    </div>
  );
}
