import React from 'react'

//styles
import styled from 'styled-components'
const SideBarStyled = styled.div`
  width: 20%;
  background: blue;
  position: fixed;
  height: 100vh;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;

  @media only screen and (max-width: 37.5em) {
    /* phone //600px */
    /* opacity: 0; */
    position: absolute;
    pointer-events: none;
    width: 100%;
  }
`

const AuthorImage = styled.img`
  width: 10rem;
  border-radius: 50%;
`

const AuthorBio = styled.div`
  width: 25rem;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5rem 0;
  border-radius: .5rem;
  box-shadow: .5rem .5rem 1rem rgba(0,0,0, .5);

  h2 {
    font-weight: 500;
    text-align: center;
  }
`
const SocialLinksContainer = styled.div`
  display: flex;
  width: 80%;
  margin-top: 1rem;
  justify-content: space-around;
`

const SocialLinkImage = styled.img`
  width: 2rem;
`

const SideBar = () => {
  return (
    <SideBarStyled className="side-bar">
      <AuthorBio className="author-bio">
        <AuthorImage src="/images/author.jpg" alt="Author" className="img-author" />
        <h1>Shubham Tandale</h1>
        <h2>Full Stack Developer</h2>
        <SocialLinksContainer className="social-links">
          <a href="http://linkedin.com/in/royaltsp"><SocialLinkImage src="/images/logos/linked-in.png" alt="Linked In" /></a>
          <a href="https://github.com/tsp1998"><SocialLinkImage src="/images/logos/github.png" alt="GitHub" /></a>
          <a href="http://linkedin.com/in/royaltsp"><SocialLinkImage src="/images/logos/facebook.png" alt="Facebook" /></a>
          <a href="https://twitter.com/royaltsp"><SocialLinkImage src="/images/logos/twitter.png" alt="Twiiter" /></a>
          <a href="http://linkedin.com/in/royaltsp"><SocialLinkImage src="/images/logos/instagram.png" alt="Instagram" /></a>
          <a href="https://www.sololearn.com/Profile/1458532"><SocialLinkImage src="/images/logos/sololearn.jpg" alt="Solo Learn" /></a>
          <a href="http://linkedin.com/in/royaltsp"><SocialLinkImage src="/images/logos/discord.webp" alt="Discord" /></a>
        </SocialLinksContainer>
      </AuthorBio>
    </SideBarStyled>
  )
}

export default SideBar