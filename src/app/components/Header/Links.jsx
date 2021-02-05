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
  font-size: 1.7rem;
  color: #222;
  text-transform: uppercase;
  padding: .5rem 1rem;
  box-shadow: .2rem .2rem .5rem rgba(0,0,0, .1);
  border-radius: .5rem;

  
  :hover {
    color: #fff;
    background: #1cc93e;
    box-shadow: .2rem .2rem .5rem rgba(113, 209, 75, .9);
    transition: background .5s ease-in;
  }
`

const Links = ({ isSideBarOpen, className = '', style }) => {
  return (
    <LinksStyled isSideBarOpen={isSideBarOpen} className={`links ${className}`} style={style}>
      <Link to='/'>About</Link>
      <Link to='/'>Services</Link>
      <Link to='/'>Projects</Link>
      <Link to='/'>Gallery</Link>
      <Link to='/'>Achievements</Link>
      {/* <Link to='/'>Singing</Link>
      <Link to='/'>Dancing</Link> */}
      <Link to='/'>Hobbies</Link>
    </LinksStyled>
  )
}

export default Links