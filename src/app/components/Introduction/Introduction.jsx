import React, { useRef, useEffect } from 'react'

//components
import ImageSection from '../Image/ImageSection'

//styles
import styled from 'styled-components'
const IntroductionStyled = styled.div`
  display: flex;
  
  margin: 0 10rem;

  .image-section {
    .image {
      /* box-shadow: 1rem 1rem 1rem rgba(0,0,0, .2); */
    }
  }
`

const IntroSection = styled.div`
  margin-left: 1rem;
  width: 60%;
`

const IntroHeading = styled.h1`
  font-size: 3.5rem;
`

const IntroText = styled.span`
  color: #444;
  display: inline-block;
  font-size: 2rem;
  text-align: justify;
`

const Introduction = ({ introductionRef }) => {
  return (
    <IntroductionStyled ref={introductionRef}>
      <ImageSection src="/images/software.svg" alt="software image" />
      <IntroSection>
        <IntroHeading>
          LET ME
          INTRODUCE
        </IntroHeading>
        <IntroText>
          I am a Software Engineer with knowledge of many Programming Languages and Technologies. I have worked lot on Web Development Projects. My aim is to provide the products which are fully Dynamic and Responsive.
        </IntroText>
      </IntroSection>
    </IntroductionStyled>
  )
}

export default Introduction