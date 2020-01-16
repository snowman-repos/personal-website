import React from 'react'
// @ts-ignore
import { Watch } from 'scrollmonitor-react'
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
  padding-top: 0.5rem;
  text-align: center;
  transition: 0.15s all ease-in-out;
  width: 100%;
  z-index: var(--z-index-page-content);

  h1 {
    transition: 0.15s font-size ease-in-out;
  }

  &.isSticky {
    grid-template-rows: auto;
    position: fixed;
    top: 0;

    h1 {
      font-size: 1.5em;
    }
  }

  @media (min-width: 55em) {
    grid-column-gap: var(--spacing);
    grid-row-gap: 0;
    grid-template-columns: 1fr 2fr;
    grid-template-rows: 1fr;
    text-align: left;
    width: 75%;

    &.isSticky {
      position: fixed;
      top: 0;

      h1 {
        font-size: 3em;
      }
    }
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

  .isSticky & {
    display: none;
  }

  @media (min-width: 55em) {
    & > div:first-child {
      margin: 0 0 0 auto;
    }

    .isSticky & {
      display: block;
    }
  }
`

const Tagline = styled.p`
  font-size: 1.25em;
  margin: 0.5rem 0.1em;
  transition: 0.15s opacity ease-in-out;

  @media (min-width: 55em) {
    font-size: 2em;
  }

  .isSticky & {
    opacity: 0;
    pointer-events: none;
    transition: 0.3s 0.15s opacity ease-in-out;
  }
`
type MyProps = {
  isFullyInViewport: boolean
}

class Intro extends React.Component<MyProps> {
  render() {
    const isSticky = this.props.isFullyInViewport ? '' : 'isSticky'
    const imageStyles = this.props.isFullyInViewport
      ? {
          borderRadius: '100%',
          maxWidth: '200px',
          textAlign: 'right',
          transition: '0.5s 0.15s all ease-in-out',
        }
      : {
          borderRadius: '100%',
          maxWidth: '80px',
          textAlign: 'right',
          transition: '0.3s all ease-in-out',
        }
    return (
      <Container className={isSticky}>
        <ImageContainer>
          <ProfilePicture styles={imageStyles} />
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

export default Watch(Intro)
