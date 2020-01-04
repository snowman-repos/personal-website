import React from 'react'
import PropTypes from 'prop-types'

import './layout.css'

const Layout: React.FC = ({ children }) => (
  <>
    <main>{children}</main>
    <footer>
      &copy;
      {new Date().getFullYear()}
      ,&nbsp;
      <a href="mailto:darryl@yourweb.expert">Darryl Snow</a>
    </footer>
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
