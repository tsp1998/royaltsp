import React from 'react'

//components
import ImageSection from './ImageSection'

//styles
import styled from 'styled-components'
const AuthorImageStyled = styled.div`
  .image-section {
    width: 35rem;

    .image {
      box-shadow: 1rem 1rem 1rem rgba(0,0,0, .1), -1rem -1rem 1rem rgba(0,0,0, .1);
    }
  }
`

const AuthorImage = ({ className = '', style, ...rest }) => {
  return (
    <AuthorImageStyled>
      <ImageSection src="/images/author.jpg" alt="Author Image" />
    </AuthorImageStyled>
  )
}

export default AuthorImage