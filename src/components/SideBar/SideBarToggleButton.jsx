import React from 'react'

//styles
import styled from 'styled-components'

const SideBarToggleButtonStyled = styled.div`
  display: none;
  position: absolute;
  top: 1.5rem;
  right: 2rem;
  padding: 1.1rem .5rem;
  border-radius: .5rem;
  box-shadow: .2rem .2rem .5rem rgba(0,0,0, .5);
  z-index: 1;
  cursor: pointer;

  @media only screen and (max-width: 37.5em) {
    /* phone //600px */
    display: block;
  }
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
    <SideBarToggleButtonStyled onClick={setIsSideBarOpen}>
      <SideBarToggleButtonBar isSideBarOpen={isSideBarOpen} />
    </SideBarToggleButtonStyled>
  )
}

export default SideBarToggleButton