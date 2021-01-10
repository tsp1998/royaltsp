import React from 'react'

//styles
import styled, { keyframes } from 'styled-components'
const wave = keyframes`
  50%, 75% { transform: scale(2.5); }
  80%, 100% { opacity: 0; }
`

const LoaderStyled = styled.div`
  display: flex;
`
const LoaderDot = styled.div`
  position: relative;
  width: ${({ size }) => size}rem;
  height: ${({ size }) => size}rem;
  margin: 0.8em;
  border-radius: 50%;
  background: ${({ index }) => dotColors[index]};

  ::before {
    position: absolute;
    content: "";
    width: 100%;
    height: 100%;
    background: inherit;
    border-radius: inherit;
    animation: ${wave} 2s ease-out infinite;
    animation-delay: ${({ index }) => index * .2}s;
  }
`

const dotColors = ['#7ef9ff', '#89cff0', '#4682b4', '#0f52ba', '#000080']

const Loader = () => {
  return (
    <LoaderStyled className="loading">
      {
        dotColors.map((dotColor, i) => <LoaderDot className="dot" size='1' index={i} key={'dot' + i} />)
      }
    </LoaderStyled>
  )
}

export default Loader
