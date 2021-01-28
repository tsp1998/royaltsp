import React from 'react'

//components
import ProfileImage from '../Image/ProfileImage'

//styles
import styled, { css } from 'styled-components'

const SideBarToggleButtonStyled = styled.div`
  /* padding: 1.1rem .5rem; */
  padding: .3rem;
  /* border-radius: .5rem; */
  width: 4.5rem;
  height: 4.5rem;
  border-radius: ${({ isSideBarOpen }) => isSideBarOpen ? '15%' : '50%'};
  box-shadow: .2rem .2rem .5rem rgba(0,0,0, .5);
  z-index: 2;
  cursor: pointer;
  margin-right: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;

  ${({ isSideBarOpen }) => isSideBarOpen && css`
    position: absolute;
    top: 1.5rem;
    right: .5rem;
  `}

  @media only screen and (max-width: 37.5em) {
    /* phone //600px */
    width: 4rem;
    height: 4rem;
  }
`

const SideBarToggleButtonBars = styled.div`
  /* display: none; */
  position: relative;

  &, :before, :after {
    width: 3rem;
    height: .2em;
    background: ${({ isSideBarOpen }) => isSideBarOpen ? '#fff' : '#000'};
    display: inline-block;
  }

  :before, :after {
    content: '';
    position: absolute;
    background: #000;
    transition: all .2s;
  }

  :before { 
    top: ${({ isSideBarOpen }) => isSideBarOpen ? 0 : '-.75rem'};  
    transform: rotate(${({ isSideBarOpen }) => isSideBarOpen ? '135deg' : '0deg'}); 
  }
  :after { 
    top: ${({ isSideBarOpen }) => isSideBarOpen ? 0 : '.75rem'};  
    transform: rotate(${({ isSideBarOpen }) => isSideBarOpen ? '-135deg' : '0deg'}); 
  }
`

const SideBarToggleButtonCloseBars = styled.div`
  /* display: none; */
  position: relative;

  &, :before, :after {
    width: 2.5rem;
    height: .2em;
    background: #fff;
    display: inline-block;
  }

  :before, :after {
    content: '';
    position: absolute;
    background: #000;
    transition: all .2s;
  }

  :before { 
    top: 0;  
    transform: rotate(135deg); 
  }
  :after { 
    top: 0;  
    transform: rotate(-135deg); 
  }
`

const SideBarToggleButton = ({ sideBarData: { isSideBarOpen, setIsSideBarOpen } }) => {
  
  return (
    <SideBarToggleButtonStyled isSideBarOpen={isSideBarOpen} onClick={setIsSideBarOpen}>
      {isSideBarOpen ? <SideBarToggleButtonCloseBars /> : <ProfileImage size="small" />}
    </SideBarToggleButtonStyled>
  )
}

export default SideBarToggleButton