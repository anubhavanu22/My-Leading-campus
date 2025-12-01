import { X, ChevronLeft } from 'lucide-react';
import { iconMap } from '../data/navbarData';
import './Navbar.css';
import "./megaMenu.css"
import { useState } from 'react';

export default function MobileMenu({ isOpen, onClose, navbarItems }) {
  
  const [screen, setScreen] = useState("main");

  
  const solutionsItem = navbarItems.find(item => item.menu === "Solutions");

  return (
    <div className={isOpen ? 'mobile-menu mobile-menu-open' : 'mobile-menu'}>
      <div className="mobile-menu-header">
        {screen === "main" ? (
          <button className="nav-icon-button" onClick={onClose}>
            <X />
          </button>
        ) : (
          <button className="nav-icon-button" onClick={() => setScreen("main")}>
            <ChevronLeft />
          </button>
        )}
      </div>

      {screen === "main" && (
        <>
          <ul className="mobile-menu-list">
            {navbarItems.map(item => (
              <li key={item.menu} className="mobile-menu-item">
            
                <button
                  className="mobile-menu-button"
                  onClick={() => {
                    item.menu === "Solutions"
                      ? setScreen("solutions")
                      : onClose(); 
                  }}
                >
                  {item.menu}
                </button>
              </li>
            ))}
          </ul>

          <div className="mobile-menu-footer">
            <button className="mobile-footer-btn">Sign in</button>
            <button className="mobile-footer-btn primary">Contact sales</button>
          </div>
        </>
      )}
      {screen === "solutions" && solutionsItem && (
        <div className="mobile-solutions-screen">
          {solutionsItem.sections.map(section => (
            <div key={section.title} className="mobile-solutions-section">
              <h4 className="mobile-solutions-title">{section.title}</h4>

              {section.items.map(item => {
                const Icon = iconMap[item.icon];
                return (
                  <a
                    key={item.label}
                    href={item.url}
                    className="mobile-sol-item-link"
                    target={item.external ? "_blank" : "_self"}
                    rel={item.external ? "noreferrer" : undefined}
                    onClick={onClose}
                  >
                    {Icon && <Icon size={18} className="mobile-sol-item-icon" />}
                    <span>{item.label}</span>
                  </a>
                );
              })}
            </div>
          ))}

          <div className="mobile-menu-footer">
            <button className="mobile-footer-btn">Sign in</button>
            <button className="mobile-footer-btn primary">Contact sales</button>
          </div>
        </div>
      )}
    </div>
  );
}
