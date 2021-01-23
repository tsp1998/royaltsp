import React from 'react'
import { NavLink } from 'react-router-dom'

//styles
import styled from 'styled-components'
const LinksStyled = styled.div`
  display: flex;
  justify-content: space-around;
  width: ${({ isSideBarOpen }) => isSideBarOpen ? 70 : 80}%;
  margin-right: ${({ isSideBarOpen }) => isSideBarOpen ? 30 : 0}rem;
`

const Link = styled(NavLink)`
  text-transform: uppercase;
  
  :hover {
    color: #1903e1;
    /* border-bottom: 1px solid #1903e1; */
  }
`

const Links = ({ isSideBarOpen, className, style }) => {
  return (
    <LinksStyled isSideBarOpen={isSideBarOpen} className={`links ${className}`} style={style}>
      <Link to='/'>About</Link>
      <Link to='/'>Services</Link>
      <Link to='/'>Projects</Link>
      <Link to='/'>Gallery</Link>
      <Link to='/'>Achievements</Link>
      <Link to='/'>Singing</Link>
      <Link to='/'>Dancing</Link>
      <Link to='/'>Hobbies</Link>
    </LinksStyled>
  )
}

export default Links