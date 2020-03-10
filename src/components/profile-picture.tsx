import React, { MouseEvent } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'

const Link = styled.a`
  display: block;
  position: relative;

  &::before {
    bottom: 1.5em;
    color: var(--colors-highlight);
    content: 'more?';
    display: none;
    font-family: var(--fonts-heading);
    font-size: 2em;
    max-width: 200px;
    opacity: 0;
    position: absolute;
    right: 50%;
    text-align: center;
    transform: translateX(50%);
    transition: 0.25s all cubic-bezier(0.175, 0.885, 0.32, 1.275);
    width: 100%;
  }

  &::after {
    background: #74ebd5;
    background: -webkit-linear-gradient(to right, #74ebd5, #acb6e5);
    background: linear-gradient(to right, #74ebd5, #acb6e5);
    border-radius: 100%;
    bottom: 0;
    content: '';
    display: block;
    filter: blur(1em) opacity(0);
    height: 95%;
    max-width: 200px;
    mix-blend-mode: soft-light;
    position: absolute;
    right: 50%;
    outline: thin solid red;
    transform: translateX(50%);
    transition: 0.15s filter ease-in-out;
    width: 100%;
  }

  .is-fixed & {
    &::before {
      color: var(--colors-body-text);
      font-size: 1em;
      max-width: 80px;
    }
    &::after {
      max-width: 80px;
    }
  }

  &:active,
  &:hover {
    &::before {
      bottom: -1.5em;
      opacity: 1;
    }
    &::after {
      filter: blur(1em) opacity(1);
    }
  }

  @media (min-width: 55em) {
    &::before {
      display: block;
      right: 0;
      transform: translateX(0);
    }
    &::after {
      right: 0;
      transform: translateX(0);
    }
  }
`

const ProfilePicture = (props: any): React.ReactElement => {
  const imageData = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "darryl-snow.png" }) {
        childImageSharp {
          fluid(maxWidth: 200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  function handleClick(e: MouseEvent<HTMLButtonElement | HTMLAnchorElement>) {
    e.preventDefault()
    props.handleClick()
  }
  return (
    <Link href="" onClick={handleClick} title="Find out more about me...">
      <Img alt="Darryl Snow" fluid={imageData.placeholderImage.childImageSharp.fluid} style={props.styles} />
    </Link>
  )
}

export default ProfilePicture
