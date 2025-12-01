import { useEffect, useState } from "react";
import { navbarItems } from "../data/navbarData";
import { ChevronDown, Menu } from "lucide-react";
import MobileMenu from "./MobileMenu";
import './Navbar.css';
import SolutionMegaMenu from "./SolutionMegaMenu";
 export default function Navbar(){
    const [isSolutionsOpen,setIsSolutionOpen]=useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
     const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);
    const solutionsItem=navbarItems.find(item=>item.menu==="Solutions")
 
 
    useEffect(() => {
    function handleResize() {
      const isWide = window.innerWidth >= 768;
      setIsDesktop(isWide);

      if (isWide) setIsMobileMenuOpen(false);
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
 
 
  useEffect(() => {
  document.body.style.overflow = isMobileMenuOpen ? "hidden" : "auto";
}, [isMobileMenuOpen]);

    function handelSolutionsEnter(){
        setIsSolutionOpen(true)
    }
     function handelSolutionsLeve(){
        setIsSolutionOpen(false)
    }
    return(
<header className="nav-wrapper">
      <nav className="nav-root">
        <div className="nav-inner">
          <div className="nav-left">
            <div className="nav-logo">StripeClone</div>

           
            {isDesktop && (
              <ul className="nav-menu">
                {navbarItems.map(item => {
                  const isSolutions = item.menu === 'Solutions';

                  return (
                    <li
                      key={item.menu}
                      className="nav-menu-item"
                      onMouseEnter={isSolutions ? handelSolutionsEnter : undefined}
                      onMouseLeave={isSolutions ? handelSolutionsLeve : undefined}
                    >
                      <button
                        className={
                          isSolutions && isSolutionsOpen
                            ? 'nav-menu-button nav-menu-button-active'
                            : 'nav-menu-button'
                        }
                        type="button"
                      >
                        <span>{item.menu}</span>

                        {item.sections && (
                          <ChevronDown
                            size={14}
                            className={
                              isSolutions && isSolutionsOpen
                                ? 'nav-chevron nav-chevron-open'
                                : 'nav-chevron'
                            }
                          />
                        )}
                      </button>
                    </li>
                  );
                })}
              </ul>
            )}
          </div>

        
          <div className="nav-right">
        
            {isDesktop && (
              <>
                <button className="nav-link-button">Sign in</button>
                <button className="nav-cta-button">Contact sales</button>
              </>
            )}

        
            {!isDesktop && (
              <button
                className="nav-icon-button"
                onClick={() => setIsMobileMenuOpen(true)}
              >
                <Menu/>
              </button>
            )}
          </div>
        </div>

    
        {isDesktop && solutionsItem && (
          <div
            className={
              isSolutionsOpen ? 'mega-container mega-container-open' : 'mega-container'
            }
          >
            <SolutionMegaMenu sections={solutionsItem.sections} />
          </div>
        )}

        {!isDesktop && (
          <MobileMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
            navbarItems={navbarItems}
          />
        )}

      </nav>
    </header>

  );
    
}
