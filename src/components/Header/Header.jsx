import React from 'react'

//components
import SideBarToggleButton from '../SideBar/SideBarToggleButton'
import Links from './Links'

//styles
import styled from 'styled-components'
const HeaderStyled = styled.div`
  font-size: 1.6rem;
  font-weight: 500;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 7rem;
  box-shadow: 0px 1px 10px rgba(0,0,0, .2);

  @media only screen and (max-width: 37.5em) {
    /* phone //600px */
    justify-content: space-between;
  }

  .links {
    @media only screen and (max-width: 37.5em) {
      /* phone //600px */
      display: none;
    }
  }
`

const Brand = styled.div`
  font-weight: 600;
  background: #007ad6;
  color: #fff;
  width: 8%;
  margin-left: ${({ isSideBarOpen }) => isSideBarOpen ? 3 : 2}rem;
  z-index: 2;

  @media only screen and (max-width: 37.5em) {
    /* phone //600px */
    width: 28%;
  }
`

const Header = ({ sideBarData }) => {
  const { isSideBarOpen } = sideBarData;

  return (
    <HeaderStyled className="header">
      <Brand isSideBarOpen={isSideBarOpen}>ROYALTSP</Brand>
      <Links isSideBarOpen={isSideBarOpen} />
      <SideBarToggleButton sideBarData={sideBarData} />
    </HeaderStyled>
  )
}

export default Header