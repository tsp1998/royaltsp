import React from 'react'
import { withRouter } from 'react-router-dom'

//components
import Button from '../Button/Button'
import AuthorImage from '../Image/AuthorImage'

//assets
import Resume from '../../assets/PDFs/Resume.pdf'

//styles
import styled from 'styled-components'
const HeroStyled = styled.div`
  width: 100%;
  height: 50rem;
  padding: 6rem 10rem;
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 37.5em) {
    /* phone //600px */
    padding: 3rem 5rem;
  }
`

const IntroSection = styled.div`
  
`

const BannerSection = styled.div`
  @media only screen and (max-width: 37.5em) {
    /* phone //600px */
    display: none;
  }
`

const Greeting = styled.h1`
  font-size: 4rem;
  font-weight: normal;
  position: relative;
  text-transform: uppercase;
  letter-spacing: .4rem;
  color: #111;

  @media only screen and (max-width: 37.5em) {
    /* phone //600px */
    font-size: 2rem;
    letter-spacing: .2rem;
    word-spacing: .1rem !important;
    margin-bottom: .5rem;
  }
`

const GreetingWithLine = styled(Greeting)`
  :after {
    content: '';
    position: absolute;
      top: 50%; left: 17rem;
    background: #111;
    width: 40rem;
    height: 2px;

    @media only screen and (max-width: 37.5em) {
      /* phone //600px */
      display: none;
    }
  }
`

const Role = styled.h1`
  font-size: 3rem;
  font-weight: normal;
  position: relative;
  text-transform: uppercase;
  letter-spacing: .4rem;
  color: #111;

  @media only screen and (max-width: 37.5em) {
    /* phone //600px */
    font-size: 1.5rem;
    letter-spacing: .2rem;
  }
`

const Buttons = styled.div`
  width: 48%;
  display: flex;
  justify-content: space-around;
  margin-top: 2rem;

  @media only screen and (max-width: 37.5em) {
    /* phone //600px */
    width: 100%;
    flex-direction: column;
  }

  .btn {
    @media only screen and (max-width: 37.5em) {
      /* phone //600px */
      margin-bottom: 1rem;
    }
  }
`

const Hero = (props) => {

  const getCV = () => {
    // props.history.push(Resume);
    window.open(Resume, '_self');
  }

  return (
    <HeroStyled>
      <IntroSection>
        <GreetingWithLine>Hello</GreetingWithLine>
        <Greeting style={{ fontWeight: 'bold', wordSpacing: '1rem', color: '#000' }}>I am Shubham Tandale</Greeting>
        <Role>Software Engineer</Role>
        <Role>Full Stack Developer</Role>
        <Role>Blockchain Developer</Role>
        <Buttons>
          <Button
            style={{ textTransform: 'uppercase', background: '#4000d6', color: '#fff' }}
            size="medium"
          >
            Know More
          </Button>
          <Button style={{ textTransform: 'uppercase' }} size="medium" onClick={getCV}>Get CV</Button>
        </Buttons>
      </IntroSection>
      <BannerSection>
        <AuthorImage />
      </BannerSection>
    </HeroStyled>
  )
}

export default withRouter(Hero)