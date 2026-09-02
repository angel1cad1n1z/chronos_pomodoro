import styles from "./menu.module.css";
import { useState, useEffect } from "react";
import {
  HistoryIcon,
  HouseIcon,
  MoonIcon,
  Settings,
  SunIcon,
} from "lucide-react";

type AvailableThemes = "light" | "dark";

export function Menu() {
  // Estado para armazenar o tema atual, inicializado como "dark"
  const [theme, setTheme] = useState<AvailableThemes>(() => {
    const storageTheme = localStorage.getItem(
      "theme",
    ) as AvailableThemes | null;
    return storageTheme; // Se não houver tema armazenado, usa "dark" como padrão
  });

  // Define um objeto que mapeia os temas para os ícones correspondentes
  const nextThemeIcon = {
    dark: <SunIcon />,
    light: <MoonIcon />,
  };

  function handleThemeChange(
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) {
    e.preventDefault(); // Impede o comportamento padrão do link, que é navegar para outra página

    setTheme((prevTheme) => {
      // Alterna entre os temas "dark" e "light"
      const newTheme = prevTheme === "dark" ? "light" : "dark";
      return newTheme;
    });
  }

  // Executa apenas quando o valor de theme muda
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme); // Armazena o tema atual no localStorage para persistência
  }, [theme]);

  return (
    <nav className={styles.menu}>
      <a className={styles.menuLink} href="#" aria-label="Home" title="Home">
        <HouseIcon />
      </a>
      <a
        className={styles.menuLink}
        href="#"
        aria-label="History"
        title="History"
      >
        <HistoryIcon />
      </a>
      <a
        className={styles.menuLink}
        href="#"
        aria-label="Settings"
        title="Settings"
      >
        <Settings />
      </a>
      <a
        className={styles.menuLink}
        href="#"
        aria-label="Theme"
        title="Theme"
        onClick={handleThemeChange}
      >
        {/* mostra o tema atual */}
        {nextThemeIcon[theme]}
      </a>
    </nav>
  );
}
