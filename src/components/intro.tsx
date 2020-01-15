import React from 'react'
import styled from 'styled-components'

import MetaInfo from './meta-info'
import ProfilePicture from './profile-picture'
import SocialLinks from './social-links'

const Container = styled.div`
  display: grid;
  grid-column-gap: 0;
  grid-row-gap: var(--spacing);
  grid-template-columns: 1fr;
  grid-template-rows: 200px auto;
  text-align: center;
  transition: width 0.15s ease-in-out;
  width: 100%;
  z-index: var(--z-index-page-content);

  @media (min-width: 55em) {
    grid-column-gap: var(--spacing);
    grid-row-gap: 0;
    grid-template-columns: 1fr 2fr;
    grid-template-rows: 1fr;
    text-align: left;
    width: 75%;
  }
`

const ImageContainer = styled.div`
  text-align: right;

  & > div:first-child {
    margin: 0 auto;
    position: relative;
  }

  & > div:first-child::before {
    background-color: rgba(0, 0, 0, 0.08);
    border-radius: 100%;
    content: '';
    height: 94%;
    left: 3%;
    position: absolute;
    top: 6%;
    width: 94%;
  }

  @media (min-width: 55em) {
    & > div:first-child {
      margin: 0 0 0 auto;
    }
  }
`

const Tagline = styled.p`
  font-size: 1.25em;
  margin: 0.5rem 0.1em;

  @media (min-width: 55em) {
    font-size: 2em;
  }
`

class Intro extends React.Component {
  render() {
    return (
      <Container>
        <ImageContainer>
          <ProfilePicture />
        </ImageContainer>
        <div>
          <h1>Darryl Snow</h1>
          <Tagline>Digital Product Manager</Tagline>
          <SocialLinks />
          <MetaInfo />
        </div>
      </Container>
    )
  }
}

export default Intro
