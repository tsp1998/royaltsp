import React, { useRef } from 'react'

//components
import Container from '../components/Container/Container'
import Hero from '../components/Hero/Hero'
import Introduction from '../components/Introduction/Introduction'
import Experience from '../components/Experience/Experience'

//styled
import styled from 'styled-components'
const IndexPageStyled = styled.div`
  display: flex;

  @media only screen and (max-width: 37.5em) {
    /* phone //600px */
  }
`

const IndexPage = ({ sideBarData }) => {
  
  const introductionRef = useRef(null)

  const scrollToIntroductionSection = () => introductionRef.current.scrollIntoView({
    behavior: 'smooth', block: 'end'
  });

  return (
    <IndexPageStyled className="index-page">
      <Container>
        <Hero scrollToIntroductionSection={scrollToIntroductionSection} />
        <hr width="50%" style={{ margin: '0 auto 8rem' }} />
        <Introduction introductionRef={introductionRef} />
        <hr width="50%" style={{ margin: '2rem auto 5rem' }} />
        <Experience />
        <hr width="50%" style={{ margin: '2rem auto 5rem' }} />
      </Container>
      {/* <VideoCard /> */}
    </IndexPageStyled>
  )
}

export default IndexPage
