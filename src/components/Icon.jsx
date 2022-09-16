import React from "react";
import styled from "@emotion/styled";
import { Link } from "../components";

// Icons
import Logo from "../../static/logos/logo.svg";
import LogoBadge from "../../static/logos/logo_badge.svg";
import MenuIcon from "../../static/icons/menu.svg";
import CartIcon from "../../static/icons/cart.svg";
import DestiladoIcon from "../../static/icons/destilados.svg";


const Container = styled.button`
    background: transparent;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    outline: 0;
`;

    
function IconName(name) {
  switch (name) {
    case 'cart':
      return <CartIcon />;
    case 'menu':
      return <MenuIcon />;
    case 'logo':
      return <Logo />;
    case 'logo-badge':
      return <LogoBadge />;
    case 'destilados':
      return <DestiladoIcon />;
    default:
      return null;
  }
}

const Icon = ({name, onClick, to}) => {  
  return (
    to ?
      <Link onClick={onClick} to={to}>
        {IconName(name)}
      </Link>
      :
      <Container onClick={onClick}>
        {IconName(name)}
      </Container>
  )
}

export default Icon;