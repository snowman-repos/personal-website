import React from 'react'

import Icon from './Icon'

class SocialLinks extends React.Component {
  render() {
    return (
      <ul className="o-list--unstyled c-link-list">
        <li>
          <a className="c-icon-link" href="https://www.linkedin.com/in/darrylsnow/" title="Go to my Linkedin Profile">
            <Icon icon="linkedin" color="" />
          </a>
        </li>
        <li>
          <a className="c-icon-link" href="https://github.com/darryl-snow?tab=repositories" title="See my Github Repos">
            <Icon icon="github" color="" />
          </a>
        </li>
        <li>
          <a className="c-icon-link" href="malto:darryl@yourweb.expert" title="Email me">
            <Icon icon="at" color="" />
          </a>
        </li>
      </ul>
    )
  }
}

export default SocialLinks
