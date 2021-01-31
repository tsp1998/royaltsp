import React from 'react'

//styles
import styled from 'styled-components'
const ImageSectionStyled = styled.div`
  display: flex;
  justify-content: center;

  :hover {
    transform: scale(1.05);
    transition: transform .7s ease;
  }
`

const Image = styled.img`
  width: 90%;
  height: 90%;
  border-radius: 2rem;
`

const ImageSection = ({ src, alt, className = '', style, background, ...rest }) => {
  return (
    <ImageSectionStyled className={`image-section ${className}`} style={style}>
      <Image 
        className="image"
        src={src || "/images/author.jpg"}
        alt={alt || "Image"}
      />
    </ImageSectionStyled>
  )
}

export default ImageSection