import React from 'react'

//styles
import styled from 'styled-components'
const AuthorImageStyled = styled.img`
  width: 35rem;
  height: 35rem;
  border-radius: 2rem;
  box-shadow: 10px 10px 50px rgba(0,0,0, .5);

  :hover {
    transform: scale(1.05);
    transition: transform .7s ease;
  }
`

const AuthorImage = ({ className, style, ...rest }) => {
  return (
    <AuthorImageStyled
      src="/images/author.jpg"
      alt="Author Image"
      className={`author-image ${className}`}
      style={style}
    />
  )
}

export default AuthorImage