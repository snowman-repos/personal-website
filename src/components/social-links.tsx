import React from 'react'
import styled from 'styled-components'

import Icon from './Icon'

const ContactMethods = [
  {
    icon: 'linkedin',
    link: 'https://www.linkedin.com/in/darrylsnow/',
    title: 'Go to my Linkedin Profile',
  },
  {
    icon: 'github',
    link: 'https://github.com/darryl-snow?tab=repositories',
    title: 'See my Github Repos',
  },
  {
    icon: 'at',
    link: 'malto:dazsnow@gmail.com',
    title: 'Email me',
  },
]

const Link = styled.a`
  & svg {
    fill: var(--colors-body-text);
    transition: 0.3s fill ease-in-out;
  }

  &:active svg,
  &:focus svg,
  &:hover svg {
    fill: var(--colors-highlight);
  }
`

const List = styled.ul`
  display: inline-block;
  font-size: 2.5em;
  margin: calc(var(--spacing) / 2) 0;
  transition: 0.15s 0.15s opacity ease-in-out;

  & li {
    display: inline-block;
  }

  & svg {
    fill: var(--colors-icons);
  }

  .is-fixed & {
    opacity: 0;
    pointer-events: none;
    transition: 0.15s 0.15s opacity ease-in-out;
  }
`

class SocialLinks extends React.Component {
  render() {
    return (
      <List className="o-list--unstyled">
        {ContactMethods.map(method => {
          return (
            <li key={method.icon}>
              <Link href={method.link} title={method.title}>
                <Icon icon={method.icon} />
              </Link>
            </li>
          )
        })}
      </List>
    )
  }
}

export default SocialLinks
