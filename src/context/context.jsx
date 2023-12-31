import { createContext, useState, useEffect } from "react";
import useDarkSide from "../hooks/useDarkSide";
import LogoBlack from "./../assets/img/logo-black.png";
import LogoWhite from "./../assets/img/logo-white.png";
// import { useEffect } from "react";

const Context = createContext();

function Provider({ children }) {
  //* windowSize
  const [windowDimensions, setWindowDimensions] = useState({
    winWidth: window.innerWidth,
    winHeight: window.innerHeight,
  });

  const detectSize = () => {
    setWindowDimensions({
      winWidth: window.innerWidth,
      winHeight: window.innerHeight,
    });
  };

  useEffect(() => {
    window.addEventListener('resize', detectSize);
 
    return () => {
      window.removeEventListener('resize', detectSize);

    }
  }, [windowDimensions])
  



  //! windowSize

  //* menu < >

  const [colorTheme, setTheme] = useDarkSide();
  const [darkSide, setDarkSide] = useState(
    colorTheme === "light" ? true : false
  );
  const [isOpen, setOpen] = useState(false);
  const [openMobileMenu, setOpenMobileMenu] = useState(false);
  const [logo, setLogo] = useState(
    localStorage.theme == "light" ? LogoBlack : LogoWhite
  );

  const toggleDarkMode = (checked) => {
    setTheme(colorTheme);
    setDarkSide(checked);
    setLogo(colorTheme == "light" ? LogoBlack : LogoWhite);
  };

  //! menu < >

  const sharedValue = {
    colorTheme,
    darkSide,
    setDarkSide,
    setTheme,
    toggleDarkMode,
    logo,
    isOpen,
    setOpen,
    openMobileMenu,
    setOpenMobileMenu,
    windowDimensions
  };
  return <Context.Provider value={sharedValue}>{children}</Context.Provider>;
}

export { Provider };
export default Context;
