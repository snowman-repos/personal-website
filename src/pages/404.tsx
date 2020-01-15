import React from 'react'
import styled from 'styled-components'

import Layout from '../templates/layout'
import SEO from '../components/seo'

const Container = styled.div`
  text-align: center;
`

const NotFoundPage = (): React.ReactElement => (
  <Layout>
    <SEO title="404: Not found" />
    <section className="o-section">
      <Container>
        <h1>NOT FOUND</h1>
        <p>You just hit a route that doesn&#39;t exist&hellip; the sadness.</p>
      </Container>
    </section>
  </Layout>
)

export default NotFoundPage
