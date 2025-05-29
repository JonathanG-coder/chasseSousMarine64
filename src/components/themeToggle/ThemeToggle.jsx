import { useTheme } from "../../context/themeContext";

export default function ThemeToggle() {
  const { darkMode, toggleDarkMode } = useTheme();

  return (
    <button onClick={toggleDarkMode}>
      {darkMode ? "☀️ Mode Clair" : "🌙 Mode Sombre"}
    </button>
  );
}
