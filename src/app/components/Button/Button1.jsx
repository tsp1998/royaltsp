import React from 'react'

//styles
import styled from 'styled-components'
import SIZES from '../../constants/sizes'

//library
import Button from '../library/Button/Button'

const ButtonStyled = styled(Button)`
  width: ${({ size }) => SIZES[size] * 70}px;
  height: ${({ size }) => SIZES[size] * 23}px;
  border-radius: 7px;
  font-size: ${({ size }) => SIZES[size] * 7.5}px;
  box-shadow: 2px 2px 10px rgba(0,0,0, .3);
  cursor: pointer;
  outline: none;

  :hover {
    transform: scale(1.05);
    transition: transform .5s ease;
  }
`

const Button1 = ({ children, className = '', style, size, isLoading, onClick, ...rest }) => {
  return (
    <ButtonStyled
      className={`btn ${className}`}
      style={style}
      onClick={onClick}
      size={size || 'medium'}
      {...rest}
    >
      {children}
    </ButtonStyled>
  )
}

export default Button1