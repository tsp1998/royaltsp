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
  border-radius: 50%;
  box-shadow: .2rem .2rem .5rem rgba(0,0,0, .5);
  z-index: 2;
  cursor: pointer;
  margin-right: 2rem;

  ${({ isSideBarOpen }) => isSideBarOpen && css`
    position: absolute;
    top: 1.5rem;
    right: .5rem;
  `}

`

const SideBarToggleButtonBar = styled.div`
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

const SideBarToggleButton = ({ sideBarData: { isSideBarOpen, setIsSideBarOpen } }) => {
  return (
    <SideBarToggleButtonStyled isSideBarOpen={isSideBarOpen} onClick={setIsSideBarOpen}>
      {/* <SideBarToggleButtonBar isSideBarOpen={isSideBarOpen} /> */}
      <ProfileImage size="small" />
    </SideBarToggleButtonStyled>
  )
}

export default SideBarToggleButton