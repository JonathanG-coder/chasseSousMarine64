import React from "react";
import "./Header.css";
import { useState } from "react";
import { motion } from "framer-motion";
import { FaWater, FaTimes } from "react-icons/fa"; // Icons
import { Link } from "react-router-dom";

// Import des images en sombre
import iconBoatB from "../../assets/iconNavbar/icon-boat-b.png"
import iconFishB from "../../assets/iconNavbar/icon-fish-b.png";
import iconPlongB from "../../assets/iconNavbar/icon-plong-b.png";
import iconBubbleW from "../../assets/iconNavbar/icon-bubble-w.png";

// Import des images en clair
import iconBoatW from "../../assets/iconNavbar/icon-boat-w.png"
import iconFishW from "../../assets/iconNavbar/icon-fish-w.png";
import iconPlongW from "../../assets/iconNavbar/icon-plong-w.png";
import iconBubbleB from "../../assets/iconNavbar/icon-bubble-b.png";

// Import des elements pour le DarkMode
import { useTheme } from "../../context/themeContext";

// Liste des éléments du menu
const items = [
  {
    label: "Spots",
    link: "/spot",
    iconLight: iconBoatB,
    iconDark: iconBoatW,
  },
  {
    label: "Espèces",
    link: "/especes",
    iconLight: iconFishB,
    iconDark: iconFishW,
  },
  {
    label: "Forum",
    link: "/forum",
    iconLight: iconBubbleB,
    iconDark: iconBubbleW,
  },
  {
    label: "Règlement",
    link: "/reglement",
    iconLight: iconPlongB,
    iconDark: iconPlongW,
  },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const { darkMode } = useTheme();  // import de useTheme via component ThemeContext

  const toggleMenu = () => setOpen(!open);

  return (
    <>
      {/* Menu burger à droite */}
      <div className={`line-container ${darkMode ? "dark" : ""}`}>
        <div className="menu-icon" onClick={toggleMenu}>
          {open ? <FaTimes size={28} /> : <FaWater size={28} />}
        </div>

        <div className="line" />

        {open &&
          items.map((item, index) => (
            <motion.div
              key={index}
              className="line-item"
              style={{ top: `${index * 130 + 40}px`, position: "absolute" }}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.2, duration: 0.6 }}
              whileHover={{ scale: 1.1, rotate: [0, 1, -1, 0] }}
            >
              <Link to={item.link}>
                <img
                  src={darkMode ? item.iconDark : item.iconLight}
                  alt={item.label}
                  className="hook-img"
                />
                <div className="label">{item.label}</div>
              </Link>
            </motion.div>
          ))}
      </div>
    </>
  );
}
