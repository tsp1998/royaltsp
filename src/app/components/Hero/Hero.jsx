import React, { useState, useEffect } from 'react'

import { withRouter } from 'react-router-dom'

//data
import quotes from '../../data/quotes.json'

//components
import Button from '../Button/Button'
import AuthorImage from '../Image/AuthorImage'
import Loader from '../utils/Loader'

//styles
import styled from 'styled-components'
const HeroStyled = styled.div`
  width: 100%;
  padding: 6rem 10rem 2rem;
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 37.5em) {
    /* phone //600px */
    padding: 3rem 5rem;
  }
`

const ShortIntroSection = styled.div`
  
`

const BannerSection = styled.div`
  @media only screen and (max-width: 37.5em) {
    /* phone //600px */
    display: none;
  }
`

const Greeting = styled.h1`
  font-size: 3.5rem;
  font-weight: normal;
  position: relative;
  text-transform: uppercase;
  letter-spacing: .4rem;
  color: #222;

  @media only screen and (max-width: 37.5em) {
    margin-bottom: .5rem;
  }
`

const GreetingWithLine = styled(Greeting)`
  :after {
    content: '';
    position: absolute;
      top: 50%; left: 17rem;
    background: #222;
    width: 40rem;
    height: 2px;

    @media only screen and (max-width: 37.5em) {
      /* phone //600px */
      display: none;
    }
  }
`

const Role = styled.h1`
  font-size: 2rem;
  font-weight: normal;
  position: relative;
  text-transform: uppercase;
  letter-spacing: .4rem;
  color: #333;
`

const Buttons = styled.div`
  width: 48%;
  display: flex;
  justify-content: space-around;
  margin-top: 2rem;

  @media only screen and (max-width: 37.5em) {
    /* phone //600px */
    width: 100%;
  }

  .btn {
    @media only screen and (max-width: 37.5em) {
      /* phone //600px */
      margin-bottom: 1rem;
    }
  }
`

const Quote = styled.span`
  width: 80%;
  font-size: 2rem;
  display: inline-block;
  color: #47aa15;
  text-shadow: 1px 1px 1px rgba(0,0,0, .2);
  letter-spacing: .2rem;
  margin: 3rem auto;
  text-align: justify;
`

const Hero = ({ scrollToIntroductionSection }) => {

  const [quote, setQuote] = useState('')
  const [isLoading, setLoading] = useState(false);

  const getCV = () => {
    // props.history.push(Resume);
    setLoading(true);
    setTimeout(() => setLoading(false), 1000 * 5);
    window.open('https://onedrive.live.com/download?cid=5072862CE7D73399&resid=5072862CE7D73399%215279&authkey=ALySX1H55mqlEew&em=2', '_self');
  }

  const getQuote = () => quotes[Math.floor(Math.random() * quotes.length)];

  useEffect(() => setQuote(getQuote()), []);

  return (
    <HeroStyled>
      <ShortIntroSection>
        <GreetingWithLine>Hello</GreetingWithLine>
        <Greeting style={{ fontWeight: 'bold', wordSpacing: '1rem', color: '#222' }}>I am Shubham Tandale</Greeting>
        <Role>Software Engineer</Role>
        <Role>Full Stack / Blockchain Developer</Role>
        <Role>Artist, Singer and Dancer</Role>
        <Buttons>
          <Button
            style={{ textTransform: 'uppercase', background: '#4000d6', color: '#fff' }}
            size="medium"
            onClick={scrollToIntroductionSection}
          >
            Know More
          </Button>
          <Button
            style={{ textTransform: 'uppercase' }}
            size="medium"
            onClick={getCV}
          >
            {isLoading ? <Loader size=".7" dots="3" /> : 'Get CV'}
          </Button>
        </Buttons>

        <Quote>{quote}</Quote>
      </ShortIntroSection>
      <BannerSection>
        <AuthorImage />
      </BannerSection>
    </HeroStyled>
  )
}

export default withRouter(Hero)