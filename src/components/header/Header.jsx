import "./Header.css";
import { Link } from "react-router-dom";
import { motion } from 'framer-motion';
import { useState } from "react";
//Import des images--
import iconBoatB from '../../assets/iconNavbar/iconBoatB.png';
import iconForum from '../../assets/iconNavbar/iconForumB.png';
import iconFish from '../../assets/iconNavbar/iconFishB.png';
import iconPlonge from '../../assets/iconNavbar/iconPlongB.png';
//Import LighthouseMenu --
import { GiLighthouse } from "react-icons/gi";



const items = [
  { label: 'Spots', link: '#spots', icon : iconBoatB },
  { label: 'Espèces', link: '#especes', icon : iconFish },
  { label: 'Forum', link: '#forum', icon : iconForum },
  { label: 'Règlement', link: '#reglement', icon : iconPlonge },
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
          style={{ top: `${index * 130 + 40}px` }}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 + index * 0.2, duration: 0.6 }}
          whileHover={{ scale: 1.1, rotate: [0, 1, -1, 0] }}
        >
          <img src={item.icon} alt={item.label} className="hook-img" />
          <div className="label">{item.label}</div>
        </motion.a>
      ))}
    </div>

    );
}