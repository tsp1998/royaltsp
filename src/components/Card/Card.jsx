import React from 'react'

//styles
import styled from 'styled-components'

import SIZES from '../../constants/sizes'

const CardStyled = styled.div`
  width: ${({ size }) => SIZES[size] * 100}px;
  height: ${({ size }) => SIZES[size] * 100}px;
  background-color: #fff;
  box-shadow: 1px 1px 10px rgba(0,0,0, .2);
  box-shadow: 1px 1px 10px rgba(0,0,0, .2);
`

const Card = ({ children, className, size, style, isLoading }) => {
  return (
    <CardStyled
      className={`card ${className}`}
      style={style}
      size={size || 'medium'}
    >
      {children}
    </CardStyled>
  )
}

export default Card