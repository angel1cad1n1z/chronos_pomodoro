import styles from "./logo.module.css";
// import * as React from "react";
import { TimerIcon } from "lucide-react";

export function Logo() {
  return (
    <div className={styles.logo}>
      <a className={styles.logoLink} href="#">
        <TimerIcon />
        <span>Chronos</span>
      </a>
    </div>
  );
}
