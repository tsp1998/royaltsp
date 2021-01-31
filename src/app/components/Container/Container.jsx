import React, { useRef } from 'react'

//components
import Hero from '../Hero/Hero'
import Introduction from '../Introduction/Introduction'

//styles
import styled from 'styled-components'
const ContainerStyled = styled.div`
  width: 100%;
  background: #f8f7f7;
`

const Container = () => {
  const introductionRef = useRef(null)

  const scrollToIntroductionSection = () => introductionRef.current.scrollIntoView({
    behavior: 'smooth', block: 'end'
  });

  return (
    <ContainerStyled className="container">
      <Hero scrollToIntroductionSection={scrollToIntroductionSection} />
      <hr width="50%" style={{ margin: '0 auto 8rem' }} />
      <Introduction introductionRef={introductionRef} />
      <hr width="50%" style={{ margin: '2rem auto 5rem' }} />
    </ContainerStyled>
  )
}

export default Container