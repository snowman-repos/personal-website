import React from 'react'
import styled from 'styled-components'

import Icon from './Icon'

const List = styled.ul`
  font-size: 1.25em;
  display: grid;
  grid-auto-flow: column;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr 1fr;
  grid-row-gap: 0.5em;
  padding-top: 0.5rem;
  margin: 0 auto;
  transition: 0.3s 0.15s opacity ease-in-out;
  width: 20rem;

  & svg {
    fill: var(--colors-highlight);
  }

  @media (min-width: 55rem) {
    margin: 0;
  }

  .isSticky & {
    opacity: 0;
    pointer-events: none;
    transition: 0.15s opacity ease-in-out;
  }
`

const getTime = (): string => {
  const asiaTimeString: string = new Date().toLocaleString('en-US', { timeZone: 'Asia/Singapore' })
  const asiaTimeDate: Date = new Date(asiaTimeString)
  return `${`0${asiaTimeDate.getHours()}`.slice(-2)}:${`0${asiaTimeDate.getMinutes()}`.slice(-2)}`
}

const MetaInfo = (): React.ReactElement => {
  const [time, setTime] = React.useState(getTime())
  setInterval(() => {
    setTime(getTime())
  }, 60000)
  return (
    <List className="o-list--unstyled">
      <li>
        <Icon icon="placeholder" />
        <a
          className="o-link"
          href="https://www.google.com/maps/place/Singapore/@1.3139843,103.5633599,10z/data=!3m1!4b1!4m5!3m4!1s0x31da11238a8b9375:0x887869cf52abf5c4!8m2!3d1.352083!4d103.819836"
          title="See where Singapore is on a map"
        >
          Singapore
        </a>
      </li>
      <li>
        <Icon icon="time" />
        {time}
      </li>
      <li>
        <Icon icon="success" />
        English
      </li>
      <li>
        <Icon icon="success" />
        &#20013;&#25991;
      </li>
    </List>
  )
}

export default MetaInfo
