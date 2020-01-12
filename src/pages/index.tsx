import React from 'react'

import Layout from '../components/layout'
import MetaInfo from '../components/meta-info'
import ProfilePicture from '../components/profile-picture'
import SEO from '../components/seo'
import Snowfall from '../components/snowfall'
import SocialLinks from '../components/social-links'

const IndexPage = (): React.ReactElement => {
  return (
    <Layout>
      <SEO title="Darryl Snow: Digital Product Manager" />
      <div className="c-section">
        <Snowfall />
        <div className="c-media">
          <ProfilePicture />
          <div className="c-media-text">
            <h1>Darryl Snow</h1>
            <p className="c-tagline">Digital Product Manager</p>
            <SocialLinks />
            <MetaInfo />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
