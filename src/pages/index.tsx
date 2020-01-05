import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import Icon from '../components/Icon'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Snowfall from '../components/snowfall'

// const StarIcon = require('../images/icons/star.svg') as string

const imageStyles = {
  borderRadius: '100%',
  maxWidth: '200px',
  textAlign: 'right',
}

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

const IndexPage = (): React.ReactElement => {
  const [time, setTime] = React.useState(getTime())
  setInterval(() => {
    setTime(getTime())
  }, 60000)

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

  return (
    <Layout>
      <SEO title="Darryl Snow: Digital Product Manager" />
      <div className="c-section">
        <Snowfall />
        <div className="c-media">
          <div className="c-media-image">
            <Img alt="Darryl Snow" fluid={imageData.placeholderImage.childImageSharp.fluid} style={imageStyles} />
          </div>
          <div className="c-media-text">
            <h1>Darryl Snow</h1>
            <p className="c-tagline">Digital Product Manager</p>
            <ul className="o-list--unstyled c-link-list">
              <li>
                <Icon icon="linkedin" color="" />
              </li>
              <li>
                <Icon icon="github" color="" />
              </li>
              <li>
                <Icon icon="at" color="" />
              </li>
            </ul>
            <ul className="o-list--unstyled" style={listStyles}>
              <li>
                <Icon icon="placeholder" color="green" />
                Singapore
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
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
