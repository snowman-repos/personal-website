import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import './layout.css'

const Mountains = styled.div`
  height: 6rem;
  position: relative;

  &::after {
    background: linear-gradient(180deg, rgba(250, 250, 250, 1) 20%, rgba(250, 250, 250, 0) 100%);
    content: '';
    height: 80%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
  }
`

const Mountain = styled.div`
  border-bottom: ${props => props.height}rem solid
    rgba(${props => props.red}, ${props => props.green}, ${props => props.blue}, 1);
  border-left: ${props => props.leftWidth}vw solid transparent;
  border-right: ${props => props.rightWidth}vw solid transparent;
  bottom: 0;
  left: ${props => props.left}%;
  position: absolute;
`

const Footer = styled.footer`
  background-color: #222;
  color: var(--colors-background);
  padding: var(--spacing);
  position: relative;
  text-align: center;
  z-index: var(--z-index-page-content);
`

const Link = styled.a`
  color: var(--colors-background);
  text-decoration: none;
  transition: 0.15s color ease-in-out;

  &:active,
  &:focus,
  &:hover {
    color: var(--colors-highlight);
  }
`

const renderMountain = i => {
  const blue = 240 + Math.ceil(Math.random() * 10)
  const green = 220 + Math.ceil(Math.random() * 20)
  const height = 1 + Math.ceil(Math.random() * 5)
  const left = -20 + Math.ceil(Math.random() * 120)
  const leftWidth = 10 + +Math.ceil(Math.random() * 10)
  const red = 220 + Math.ceil(Math.random() * 20)
  const rightWidth = 10 + +Math.ceil(Math.random() * 10)
  return (
    <Mountain
      key={i}
      blue={blue}
      green={green}
      height={height}
      left={left}
      leftWidth={leftWidth}
      red={red}
      rightWidth={rightWidth}
    />
  )
}

const Layout: React.FC = ({ children }) => {
  const theMountains = []
  for (let i = 0; i < 5; i++) {
    theMountains.push(renderMountain(i))
  }
  return (
    <>
      <main>{children}</main>
      <Mountains>{theMountains}</Mountains>
      <Footer>
        &copy;
        {new Date().getFullYear()}
        &nbsp;
        <Link href="mailto:0nkn4ztf@anonaddy.com">Darryl Snow</Link>
      </Footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
