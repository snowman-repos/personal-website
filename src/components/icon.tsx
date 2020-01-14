import * as React from 'react'
import styled from 'styled-components'

const IconElement = styled.span`
  & > svg {
    display: inline-block;
    height: 1em;
    margin: 0 0.25em;
    pointer-events: none;
    vertical-align: middle;
  }

  @media (min-width: 55em) {
    & > svg {
      margin: 0 0.5em 0 0;
    }
  }
`

const Icon = ({ icon }: { icon: string }): React.ReactElement => {
  const SVG = require(`../images/icons/${icon}.svg`) as string
  return (
    <IconElement>
      <SVG />
    </IconElement>
  )
}

export default Icon
