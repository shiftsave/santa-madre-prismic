import React from 'react'
import PropTypes from 'prop-types'

import { Link as GatsbyLink } from 'gatsby'
import styled from "@emotion/styled";
import {COLOR} from "../constants";

const BaseLink = styled(GatsbyLink)`
  margin-left: 0;
  font-size: 15px;
  text-decoration: underline;
`

export const Button = styled.a`
  align-items: center;
  border: none;
  border-radius: 6px;
  background: ${props => props.disabled ? `${COLOR.SUBTLE}` : `${COLOR.INK}`};
  color: ${props => props.disabled ? `${COLOR.INK}` : `${COLOR.PAPER}`};
  cursor: pointer;
  display: flex;
  font-size: 16px;
  justify-content: center;
  height: 56px;
  padding: 0 48px;

  :hover {
    :after {
      width: 0%;
    }
  }
`;

export const NakedButton = styled.button`
  background: transparent;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  outline: 0;
  z-index: 99;
`;

export const Link = ({ to, ...props }) => {
  const isIndex = to === '/'
  const path = `${to}`
  return <BaseLink {...props} to={path} />
}

Link.propTypes = {
  to: PropTypes.string.isRequired,
}
