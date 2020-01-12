import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const imageStyles = {
  borderRadius: '100%',
  maxWidth: '200px',
  textAlign: 'right',
}

const ProfilePicture = (): React.ReactElement => {
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
    <div className="c-media-image">
      <Img alt="Darryl Snow" fluid={imageData.placeholderImage.childImageSharp.fluid} style={imageStyles} />
    </div>
  )
}

export default ProfilePicture
