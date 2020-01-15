import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import './layout.css'

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

const Layout: React.FC = ({ children }) => (
  <>
    <main>{children}</main>
    <Footer>
      &copy;
      {new Date().getFullYear()}
      &nbsp;
      <Link href="mailto:darryl@yourweb.expert">Darryl Snow</Link>
    </Footer>
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
