import React from 'react'

//styles
import styled from 'styled-components'
const ContainerStyled = styled.div`
  width: 80%;
  margin-left: 20%;
  background: #fff;
`

const Container = () => {
  return (
    <ContainerStyled className="container">
      Container
    </ContainerStyled>
  )
}

export default Container