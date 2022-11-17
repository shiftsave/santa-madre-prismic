import React from "react";
import { Global, css } from "@emotion/react";
import { useLocation } from '@reach/router';
import styled from "@emotion/styled";
import { COLOR } from "../constants";
import { Above } from "../utils/mq";

export const Container = styled.div`
  display: flex;
  flex-direction: ${props => props.stacked ? "column" : "row"};
  flex-grow: ${props => props.grow ? props.grow : 0};
  padding: ${props => props.padding ? props.padding : "16px"};
  width: 100%;
  margin: 0 auto;
  margin-bottom: 40px;
  max-width: 720px;
`;

export const Divider = styled.div`
  align-items: center;
  height: 40px;
  display: flex;
  padding: 16px;

  &:after {
    content: "";
    background: ${COLOR.INK};
    height: 2px;
    margin-top: 8px;
    width: 24px;
  
    ${Above[1]} {
      margin-top: 12px;
    }
  }
`

export const Wrapper = ({ children }) => {
  // Find the current section and match to sub-sections
  const loc = useLocation();
  console.log(loc.pathname)
  
  const findTerm = (term) => {
    if (loc.pathname.includes(term)){
      return loc.pathname;
    }
  };
  function backgroundColor(section) {
    switch(section) {
      case '/':
        return '#F8D7A4';
      case findTerm('/destilados'):
        return '#C3DBCE';
      case findTerm('/cocktails'):
        return '#CBDDF9';
      case '/about':
      return '#F9DCCB';
      default:
        return '#F8D7A4';
    }
  }
  return(
  <div>
    <Global
      styles={css`
        @font-face {
          font-family: "Romana";
          src: url("/fonts/romana-regular.woff") format("truetype");
        }

        @font-face {
          font-family: "Maison";
          src: url("/fonts/Maison-Regular.woff2") format("truetype");
        }

        body {
          -moz-osx-font-smoothing: grayscale;
          -webkit-font-smoothing: antialiased;
          background-color: ${backgroundColor(loc.pathname)};
          color: black;
          font-family: "Maison", serif;
          font-weight: normal;
          font-display: block;
        }

        a {
          color: inherit;
          font-family: inherit;
          text-decoration: none;
          position: relative;
        }
      `}
    />
    {children}
  </div>
  )
}