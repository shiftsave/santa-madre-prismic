import React, {useState, useEffect} from "react";
import { globalHistory as history } from '@reach/router'
import "@reach/skip-nav/styles.css";
import SkipNavLink from "./SkipNavLink";
import i18n from "../../config/i18n";
import {
  Wrapper,
  Paragraph,
  Navigation,
  NavItem,
  NavMenu,
  NavMenuGroup,
  Link,
  Icon
} from "../components";
import { EASING } from "../constants";

import { datadogRum } from '@datadog/browser-rum'

datadogRum.init({
  applicationId: 'b6e182ba-aa9c-4593-8a76-95b0e0bdc3a0',
  clientToken: 'pub2e6abf63e397fb2fb561e69163614efa',
  datacenter: 'us',
  resourceSampleRate: 100,
  sampleRate: 100
})

// Hook to watch the window size
function useWindowSize() {
  const isClient = typeof window === 'object';

  function getSize() {
    return {
      width: isClient ? window.innerWidth : undefined,
    };
  }

  const [windowSize, setWindowSize] = useState(getSize);

  useEffect(() => {
    if (!isClient) {
      return false;
    }
    
    function handleResize() {
      setWindowSize(getSize());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []); // Empty array ensures that effect is only run on mount and unmount

  return windowSize;
}

const LocaleContext = React.createContext();

const Layout = ({ children, pageContext: { locale } }) => {
  const { location } = history;

  // Toggles Menu
  const [isMenuOpen, setToggle] = useState(false)
  const toggleMenu = () => setToggle(!isMenuOpen);

  // Resize handler
  let windowWidth = useWindowSize().width;
  
  return (
    <LocaleContext.Provider value={{ locale, i18n }}>
      <Wrapper location={location}>
        <SkipNavLink />
        <Navigation transition={EASING.QUINT} animate={{ y: 144, opacity: 1 }}>
          <NavItem>
            <Icon name='menu' onClick={()=> toggleMenu()} />
          </NavItem>
          {windowWidth <= 620 
            ? <Icon name='logo-badge' to="/" />
            : <Icon name='logo' to="/" />
          }
          <NavItem>
          </NavItem>
        </Navigation>
        
        {/* Side Menu */}
        <NavMenu animate={{ x: isMenuOpen ? 360 : 0 }}>
          <NavMenuGroup grow={2} />
          <NavMenuGroup grow={4}>
            <Paragraph>{i18n[locale].destilados}</Paragraph>
            <Link to="/destilados/nahum" onClick={()=> toggleMenu()}>Nahúm</Link>
            <Link to="/destilados/odisea-mixteca" onClick={()=> toggleMenu()}>Odisea Mixteca</Link>
            <Link to="/destilados/espina-roja" onClick={()=> toggleMenu()}>Espina Roja</Link>
            <Link to="/destilados/la-palenquerita" onClick={()=> toggleMenu()}>La Palenquerita</Link>
          </NavMenuGroup>
          <NavMenuGroup row>
              <NavMenuGroup secondary>
                <Link to="/" onClick={()=> toggleMenu()}>Home</Link>
                <Link to="/about" onClick={()=> toggleMenu()}>About us</Link>
                <Link to="/destilados" onClick={()=> toggleMenu()}>Distillates</Link>
                {/* <Link to="/cocktails" onClick={()=> toggleMenu()}>Cocktails</Link> */}
              </NavMenuGroup>
            {/* <NavMenuGroup tertiary>
              <a href="https://instagram.com/esmatrero" target="_blank">INSTAGRAM</a>
            </NavMenuGroup> */}
          </NavMenuGroup>
        </NavMenu>
        {children}
      </Wrapper>
    </LocaleContext.Provider>
  );
};

export { LocaleContext, Layout };