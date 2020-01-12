import React from 'react'

import Icon from './Icon'

const listStyles = {
  fontSize: '1.25em',
  display: 'grid',
  gridAutoFlow: 'column',
  gridTemplateRows: '1fr 1fr',
  gridTemplateColumns: '1fr 1fr',
  gridRowGap: '0.5em',
  paddingTop: '0.5rem',
}

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
    <ul className="o-list--unstyled" style={listStyles}>
      <li>
        <Icon icon="placeholder" color="green" />
        <a
          className="o-link"
          href="https://www.google.com/maps/place/Singapore/@1.3139843,103.5633599,10z/data=!3m1!4b1!4m5!3m4!1s0x31da11238a8b9375:0x887869cf52abf5c4!8m2!3d1.352083!4d103.819836"
          title="See where Singapore is on a map"
        >
          Singapore
        </a>
      </li>
      <li>
        <Icon icon="time" color="green" />
        {time}
      </li>
      <li>
        <Icon icon="success" color="green" />
        English
      </li>
      <li>
        <Icon icon="success" color="green" />
        &#20013;&#25991;
      </li>
    </ul>
  )
}

export default MetaInfo
