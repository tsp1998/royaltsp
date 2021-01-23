import React from 'react'

//styles
import styled from 'styled-components'

import SIZES from '../../constants/sizes'

const ButtonStyled = styled.div`
  width: ${({ size }) => SIZES[size] * 70}px;
  height: ${({ size }) => SIZES[size] * 23}px;
  border-radius: 7px;
  font-size: ${({ size }) => SIZES[size] * .8}rem;
  background-color: #fff;
  color: #333;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  box-shadow: 2px 2px 10px rgba(0,0,0, .3);

  :hover {
    transform: scale(1.05);
    transition: transform .5s ease;
  }
`

const Button = ({ children, className, style, size, isLoading, onClick, ...rest }) => {
  return (
    <ButtonStyled
      className={`btn ${className}`}
      style={style}
      onClick={onClick}
      size={size || 'medium'}
    >
      {children}
    </ButtonStyled>
  )
}

export default Button