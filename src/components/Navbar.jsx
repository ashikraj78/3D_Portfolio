import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { styles } from "../style";
import { logoPresonal, menu, close } from "../assets";
import { navLinks } from "../constants";

const Navbar = () => {
  const location = useLocation();
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    // Close mobile menu when route changes
    setToggle(false);
  }, [location]);

  // Helper function to determine if link should use Link or anchor
  const renderNavLink = (link) => {
    if (link.id === "blog") {
      return <Link to="/blog">{link.title}</Link>;
    }

    // If we're not on the homepage, all section links should navigate to homepage first
    if (location.pathname !== "/") {
      // Use the correct ID format based on your SectionWrapper implementation
      return <Link to={`/#${link.id}`}>{link.title}</Link>;
    }

    // On homepage, use anchor links
    return <a href={`#${link.id}`}>{link.title}</a>;
  };

  // For debugging - log the IDs of sections when on homepage
  useEffect(() => {
    if (location.pathname === "/") {
      setTimeout(() => {
        console.log(
          "Available sections:",
          Array.from(document.querySelectorAll("[id]")).map((el) => ({
            id: el.id,
            tagName: el.tagName,
          }))
        );
      }, 1000);
    }
  }, [location.pathname]);

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img
            src={logoPresonal}
            alt="logo"
            className="w-12 h-12 object-contain"
          />
          <p className="text-white text-[18px] font-bold cursor-pointer flex">
            Ashik &nbsp;<span className="sm:block hidden">| Portfolio</span>
          </p>
        </Link>
        <ul className="list-none hidden sm:flex flex-row items-center gap-10">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => {
                setActive(link.title);
              }}
            >
              {renderNavLink(link)}
            </li>
          ))}
          <li className="hover:text-white hover:border-white text-secondary font-poppins font-medium cursor-pointer text-[18px] border border-slate-400 px-2 py-1 rounded">
            <a href="Ashik_Raj_Resume.pdf" download="Ashik_Raj_Resume.pdf">
              Resume
            </a>
          </li>
        </ul>
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-col gap-4">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    active === link.title ? "text-white" : "text-secondary"
                  } font-poppins font-medium cursor-pointer text-[16px]`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(link.title);
                  }}
                >
                  {renderNavLink(link)}
                </li>
              ))}
              <li className="text-secondary font-poppins font-medium cursor-pointer text-[16px] border border-slate-400 px-2 py-1 rounded">
                <a href="Ashik_Raj_Resume.pdf" download="Ashik_Raj_Resume.pdf">
                  Resume
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
