import React from 'react'

//components
import Hero from '../Hero/Hero'

//styles
import styled from 'styled-components'
const ContainerStyled = styled.div`
  width: 100%;
  background: #f8f7f7;
`

const Container = () => {
  return (
    <ContainerStyled className="container">
      <Hero />
    </ContainerStyled>
  )
}

export default Container