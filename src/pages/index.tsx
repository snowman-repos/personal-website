import React from 'react'
import styled from 'styled-components'

import Intro from '../components/Intro'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Snowfall from '../components/snowfall'

const TemporaryStyles = {
  background: 'linear-gradient(to right, #2bc0e4, #eaecc6)',
  filter: 'opacity(0.5)',
}

const Section = styled.section`
  background: #2bc0e4;
  background: -webkit-linear-gradient(to right, #2bc0e4, #eaecc6);
  background: linear-gradient(to right, #2bc0e4, #eaecc6);
  filter: opacity(0.5);
  position: relative;

  &::before {
    background: rgb(255, 255, 255);
    background: linear-gradient(180deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 100%);
    content: '';
    height: 40%;
    left: 0;
    pointer-events: none;
    position: absolute;
    top: 0;
    width: 100%;
  }
`

const IndexPage = (): React.ReactElement => {
  return (
    <Layout>
      <SEO title="Darryl Snow: Digital Product Manager" />
      <section className="o-section">
        <Snowfall />
        <Intro />
      </section>
      <Section className="o-section" />
    </Layout>
  )
}

export default IndexPage
