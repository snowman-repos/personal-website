import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const ProfilePicture = (props: any): React.ReactElement => {
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
  return <Img alt="Darryl Snow" fluid={imageData.placeholderImage.childImageSharp.fluid} style={props.styles} />
}

export default ProfilePicture
