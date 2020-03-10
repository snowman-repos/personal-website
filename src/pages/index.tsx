import React from 'react'
import styled from 'styled-components'

import Context from '../context/context'

import Intro from '../components/intro'
import Layout from '../templates/layout'
import Modal from '../components/modal'
import SEO from '../components/seo'
import Snowfall from '../components/snowfall'

const PageProvider = Context.Provider

class IndexPage extends React.Component {
  state = {
    page: {
      modalOpen: false,
    },
  }

  render() {
    return (
      <Layout>
        <SEO title="Darryl Snow: Digital Product Manager" />
        <PageProvider
          value={{
            state: this.state.page,
            actions: {
              toggleModal: () => {
                this.setState(() => ({
                  page: {
                    modalOpen: !this.state.page.modalOpen,
                  },
                }))
              },
            },
          }}
        >
          <section className="o-section">
            <Snowfall />
            <Intro isFullyInViewport="true" />
          </section>
          <Modal isOpen={this.state.page.modalOpen} />
        </PageProvider>
      </Layout>
    )
  }
}

export default IndexPage
