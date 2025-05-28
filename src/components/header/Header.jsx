import "./Header.css";
import { Link } from "react-router-dom";
import { motion } from 'framer-motion';
import { useState, useEffect } from "react";

const items = [
  { label: 'Spots', link: '#spots' },
  { label: 'Espèces', link: '#especes' },
  { label: 'Forum', link: '#forum' },
  { label: 'Règlement', link: '#reglement' },
];


export default function Header(){
  const [open, setOpen] = useState(false);
  const toggleMenu = () => setOpen(!open);

    return (

        <div className="line-container">
          <div className="menu-icon" onClick={toggleMenu}>
          <i className={open ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
      <div className="line" />
      {open && items.map((item, index) => (
        <motion.a
          key={index}
          href={item.link}
          className="line-item"
          style={{ top: `${index * 130 + 100}px` }}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 + index * 0.2, duration: 0.6 }}
          whileHover={{ scale: 1.1, rotate: [0, 1, -1, 0] }}
        >
          <div className="hook" />
          <div className="label">{item.label}</div>
        </motion.a>
      ))}
    </div>

    );
}