import React from "react";
import { useContext } from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import Context from "../../context/context";
import { Cross as Hamburger } from "hamburger-react";
import { motion } from "framer-motion";
import "../../style.css";
import { Link } from "react-router-dom";

export const Header = () => {
  const {
    darkSide,
    toggleDarkMode,
    logo,
    colorTheme,
    isOpen,
    setOpen,
    setOpenMobileMenu,
    openMobileMenu,
  } = useContext(Context);

  return (
    <>
      <header className="top-0 left-0 right-0 fixed h-24 w-full flex flex-row justify-between items-center bg-white dark:bg-darkThemeAppColor shadow-lg z-50">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            delay: 0.5,
            duration: 0.8,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          className="ml-7 sm:ml-16 md:ml-20 lg:ml-36 xl:ml-40 2xl:ml-72"
        >
          <Link className="navbar-brand" to="/">
            <img src={logo} alt="" title="RE" style={{ height: 70 }} />
          </Link>
        </motion.div>

        <div className="flex flex-row justify-center items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              delay: 0.5,
              duration: 0.8,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            className="block md:hidden p-2 rounded-md mr-1 z-50"
          >
            <Hamburger
              toggled={isOpen}
              toggle={setOpen}
              size={25}
              color={colorTheme == "light" ? "white" : "black"}
              onToggle={(toggled) => {
                if (toggled) {
                  setOpenMobileMenu(true);
                } else {
                  setOpenMobileMenu(false);
                }
              }}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              delay: 0.5,
              duration: 0.8,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            className="hidden md:block mr-3"
          >
            <ul className="flex flex-row">
              <li>
                <Link className="nav-link" to="/">
                  Ana Sayfa
                </Link>
              </li>
              <li>
                <Link className="nav-link" to="hakkimda">
                  Hakkımda
                </Link>
              </li>
              <li>
                <Link className="nav-link" to="portfolyo">
                  Portfolyo
                </Link>
              </li>
              {/* <li>
                <Link className="nav-link" to="blog">
                  Blog
                </Link>
              </li> */}
              <li>
                <Link className="nav-link" to="iletisim">
                  İletişim
                </Link>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              delay: 0.5,
              duration: 0.8,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            className="mr-7 border-l border-l-gray-400 sm:mr-10 md:mr-12 lg:mr-12 transition-none"
          >
            <DarkModeSwitch
              className="ml-5 transition-none"
              checked={darkSide}
              onChange={toggleDarkMode}
              size={30}
            />
          </motion.div>
        </div>
      </header>

      <div
        className={`bg-white  dark:bg-darkThemeAppColor  dark:text-white text-black z-50 ${
          openMobileMenu == true
            ? "w-screen h-screen fixed top-24"
            : "w-0 h-0 hidden"
        }`}
      >
        <div>
          <ul className="flex flex-col items-center h-screen">
            <li className="nav-link-dropdown">
              <Link
                to="/"
                onClick={() => {
                  setOpenMobileMenu(!openMobileMenu);
                  setOpen(!openMobileMenu);
                }}
              >
                Ana Sayfa
              </Link>
            </li>
            <li className="nav-link-dropdown">
              <Link
                to="hakkimda"
                onClick={() => {
                  setOpenMobileMenu(!openMobileMenu);
                  setOpen(!openMobileMenu);
                }}
              >
                Hakkımda
              </Link>
            </li>
            <li className="nav-link-dropdown">
              <Link
                to="portfolyo"
                onClick={() => {
                  setOpenMobileMenu(!openMobileMenu);
                  setOpen(!openMobileMenu);
                }}
              >
                Portfolyo
              </Link>
            </li>
            {/* <li className="nav-link-dropdown">
              <Link
                to="blog"
                onClick={() => {
                  setOpenMobileMenu(!openMobileMenu);
                  setOpen(!openMobileMenu);
                }}
              >
                Blog
              </Link>
            </li> */}

            <li className="nav-link-dropdown">
              <Link
                to="iletisim"
                onClick={() => {
                  setOpenMobileMenu(!openMobileMenu);
                  setOpen(!openMobileMenu);
                }}
              >
                İletişim
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
