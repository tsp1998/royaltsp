import React from 'react'

//components
import Container from '../components/Container/Container'
import SideBar from '../components/SideBar/SideBar'

//styled
import styled from 'styled-components'
const IndexPageStyled = styled.div`
  display: flex;
  margin: auto 1rem;

  @media only screen and (max-width: 37.5em) {
    /* phone //600px */
  }
`

const IndexPage = () => {
  return (
    <IndexPageStyled className="index-page">
      <SideBar />
      <Container />
    </IndexPageStyled>
  )
}

export default IndexPage
