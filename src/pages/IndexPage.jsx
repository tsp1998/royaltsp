import React from 'react'

//components
import Container from '../components/Container/Container'
import SideBar from '../components/SideBar/SideBar'
import SideBarToggleButton from '../components/SideBar/SideBarToggleButton'
import VideoCard from '../components/Card/VideoCard'

//styled
import styled from 'styled-components'
const IndexPageStyled = styled.div`
  display: flex;

  @media only screen and (max-width: 37.5em) {
    /* phone //600px */
  }
`

const IndexPage = ({ sideBarData }) => {
  return (
    <IndexPageStyled className="index-page">
      <SideBarToggleButton sideBarData={sideBarData} />
      <SideBar sideBarData={sideBarData} />
      <Container />
      {/* <VideoCard /> */}
    </IndexPageStyled>
  )
}

export default IndexPage
