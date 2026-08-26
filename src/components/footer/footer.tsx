import Styles from "./footer.module.css";

export function Footer() {
  return (
    <footer className={Styles.footer}>
      <p>Chronos Pomodoro &copy; {new Date().getFullYear()} - Feito com ❤️</p>
    </footer>
  );
}
