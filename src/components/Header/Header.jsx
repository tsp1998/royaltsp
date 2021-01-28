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
  font-weight: 500;
  font-size: 2.2rem;
  background: linear-gradient(to right, #fa0175, #6900b5);
  color: #fff;
  width: 10%;
  text-align: center;
  margin-left: ${({ isSideBarOpen }) => isSideBarOpen ? 3 : 2.1}rem;
  padding: .5rem 1rem;
  box-shadow: .3rem .3rem .3rem rgba(0,0,0, .3), -.3rem -.3rem .3rem rgba(0,0,0, .3);
  border-radius: .5rem;
  z-index: 2;

  :hover {
    cursor: pointer;
    transform: scale(1.1);
    transition: transform .5s;
  }

  @media only screen and (max-width: 37.5em) {
    /* phone //600px */
    width: 30%;
    font-size: 1.8rem;
    padding: .5rem;
    margin-left: 2.3rem;
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