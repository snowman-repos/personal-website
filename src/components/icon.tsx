import * as React from 'react'

const Icon = ({ icon, color }: { icon: string; color: string }): React.ReactElement => {
  const IconElement = require(`../images/icons/${icon}.svg`) as string
  return (
    <span className={color === 'green' ? 'c-icon c-icon--green' : 'c-icon'}>
      <IconElement />
    </span>
  )
}

export default Icon
