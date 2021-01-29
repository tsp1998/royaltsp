import React from 'react'

//styles
import styled from 'styled-components'
const SideBarStyled = styled.div`
  width: 20%;
  background: blue;
  position: absolute;
    top: 0; right: 0;
  height: 100vh;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  transform: scale(${({ isSideBarOpen }) => isSideBarOpen ? 1 : 0});
  pointer-events: ${({ isSideBarOpen }) => isSideBarOpen ? 'all' : 'none'};
  transition: all .5s;
  z-index: 1;

  @media only screen and (max-width: 37.5em) {
    /* phone //600px */
    /* opacity: 0; */
    position: absolute;
    pointer-events: none;
    width: 100%;
  }
`

const AuthorBio = styled.div`
  width: 98%;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 0;
  border-radius: .5rem;
  box-shadow: .5rem .5rem 1rem rgba(0,0,0, .5);

  @media only screen and (max-width: 37.5em) {
    /* phone //600px */
    padding: 4rem 0;
  }

  h2 {
    font-weight: 500;
    text-align: center;
  }
`

const AuthorImage = styled.img`
  width: 10rem;
  height: 10rem;
  border-radius: 50%;
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

const SideBar = ({ sideBarData: { isSideBarOpen } }) => {
  return (
    <SideBarStyled className="side-bar" isSideBarOpen={isSideBarOpen}>
      <AuthorBio className="author-bio">
        <AuthorImage src="/images/author-profile.jpg" alt="Author" className="img-author" />
        <h1>Shubham Tandale</h1>
        <h2>Full Stack Developer</h2>
        <SocialLinksContainer className="social-links">
          <a onClick={alert} href="http://linkedin.com/in/royaltsp"><SocialLinkImage src="/images/logos/linked-in.png" alt="Linked In" /></a>
          <a onClick={alert} href="https://github.com/tsp1998"><SocialLinkImage src="/images/logos/github.png" alt="GitHub" /></a>
          <a onClick={alert} href="http://linkedin.com/in/royaltsp"><SocialLinkImage src="/images/logos/facebook.png" alt="Facebook" /></a>
          <a onClick={alert} href="https://twitter.com/royaltsp"><SocialLinkImage src="/images/logos/twitter.png" alt="Twiiter" /></a>
          <a onClick={alert} href="http://linkedin.com/in/royaltsp"><SocialLinkImage src="/images/logos/instagram.png" alt="Instagram" /></a>
          <a onClick={alert} href="https://www.sololearn.com/Profile/1458532"><SocialLinkImage src="/images/logos/sololearn.jpg" alt="Solo Learn" /></a>
          <a onClick={alert} href="http://linkedin.com/in/royaltsp"><SocialLinkImage src="/images/logos/discord.webp" alt="Discord" /></a>
        </SocialLinksContainer>
      </AuthorBio>
    </SideBarStyled>
  )
}

export default SideBar