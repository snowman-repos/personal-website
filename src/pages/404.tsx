import React from 'react'
import styled from 'styled-components'

import Layout from '../templates/layout'
import SEO from '../components/seo'

const Container = styled.div`
  text-align: center;
`

const Snowman = styled.div`
  animation: blink 8s linear infinite, floating 3s ease-in-out infinite;
  background-image: radial-gradient(#333 8%, transparent 8%), radial-gradient(#333 8%, transparent 8%),
    radial-gradient(#fff 100%, transparent 100%);
  background-position: -30px -25px, 5px -20px, 0px 0px;
  background-repeat: no-repeat;
  background-size: 120px 120px, 120px 120px, 120px 120px;
  border-radius: 50%;
  box-shadow: inset -5px -5px 0px rgba(0, 0, 0, 0.05);
  margin: auto auto 150px auto;
  position: relative;
  width: 100px;
  height: 100px;

  &:before {
    border-bottom: solid 8px transparent;
    border-right: solid 40px #fa0;
    border-top: solid 8px transparent;
    content: '';
    height: 1px;
    left: 6px;
    position: absolute;
    top: 44px;
    transform: rotateZ(14deg);
    width: 1px;
  }

  &:after {
    content: '';
    height: 160px;
    left: -30px;
    margin: 0 auto;
    position: absolute;
    top: 80px;
    width: 160px;
    background-image: linear-gradient(30deg, transparent 70%, #9c3b3b 0%),
      linear-gradient(9deg, transparent 50%, #dc3b3b 0%), radial-gradient(#333 3%, transparent 3%),
      radial-gradient(#333 3.5%, transparent 3.5%), radial-gradient(#333 4%, transparent 4%),
      radial-gradient(#fff 100%, transparent 100%);
    background-position: 30px 0px, 0px 0px, -28px 16px, -33px -7px, -34px -34px, 0px 0px;
    background-repeat: no-repeat;
    background-size: 100px 120px, 200px 70px, 200px 200px, 200px 200px, 200px 200px, 200px 200px;
    border-bottom-width: 10px;
    border-color: rgba(0, 0, 0, 0.05);
    border-left-width: 0px;
    border-radius: 50%;
    border-right-width: 10px;
    border-style: solid;
    border-top-width: 0px;
    box-sizing: border-box;
    box-shadow: inset 25px 5px 0px rgba(255, 255, 255, 0.2);
    z-index: -1;
  }

  @keyframes blink {
    0% {
      background-position: -30px -30px, 5px -25px, 0px 0px;
      background-size: 120px 120px, 120px 120px, 120px 120px;
    }
    1% {
      background-position: -30px 30px, 5px 35px, 0px 0px;
      background-size: 120px 0px, 120px 0px, 120px 120px;
    }
    2% {
      background-position: -30px -30px, 5px -25px, 0px 0px;
      background-size: 120px 120px, 120px 120px, 120px 120px;
    }
    31% {
      background-position: -30px -30px, 5px -25px, 0px 0px;
      background-size: 120px 120px, 120px 120px, 120px 120px;
    }
    32% {
      background-position: -30px -30px, 5px -25px, 0px 0px;
      background-size: 120px 120px, 120px 120px, 120px 120px;
    }
    33% {
      background-position: -30px 30px, 5px 35px, 0px 0px;
      background-size: 120px 0px, 120px 0px, 120px 120px;
    }
    34% {
      background-position: -30px -30px, 5px -25px, 0px 0px;
      background-size: 120px 120px, 120px 120px, 120px 120px;
    }
    40% {
      background-position: -30px -30px, 5px -25px, 0px 0px;
      background-size: 120px 120px, 120px 120px, 120px 120px;
    }
    41% {
      background-position: -30px -30px, 5px -25px, 0px 0px;
      background-size: 120px 120px, 120px 120px, 120px 120px;
    }
    42% {
      background-position: -30px 30px, 5px 35px, 0px 0px;
      background-size: 120px 0px, 120px 0px, 120px 120px;
    }
    43% {
      background-position: -30px -30px, 5px -25px, 0px 0px;
      background-size: 120px 120px, 120px 120px, 120px 120px;
    }
    100% {
      background-position: -30px -30px, 5px -25px, 0px 0px;
      background-size: 120px 120px, 120px 120px, 120px 120px;
    }
  }

  @keyframes floating {
    0% {
      transform: translate3d(0, 0, 0);
    }
    45% {
      transform: translate3d(0, -15%, 0);
    }
    55% {
      transform: translate3d(0, -15%, 0);
    }
    100% {
      transform: translate3d(0, 0, 0);
    }
  }
`

const Shadow = styled.div`
  animation: floatingShadow 3s ease-in-out infinite;
  background-color: rgba(200, 200, 200, 0.75);
  border-radius: 50%;
  height: 20px;
  margin-left: auto;
  margin-right: auto;
  width: 100px;

  @keyframes floatingShadow {
    0% {
      transform: scale(1);
    }
    45% {
      transform: scale(0.85);
    }
    55% {
      transform: scale(0.85);
    }
    100% {
      transform: scale(1);
    }
  }
`

const Link = styled.a`
  border-bottom: 1px solid transparent;
  color: var(--colors-highlight);
  text-decoration: none;
  transition: 0.15s border-bottom ease-in-out;

  &:active,
  &:focus,
  &:hover {
    border-bottom: 1px solid var(--colors-highlight);
  }
`

const NotFoundPage = (): React.ReactElement => (
  <Layout>
    <SEO title="404: Not found" />
    <section className="o-section">
      <Container>
        <Snowman />
        <Shadow />
        <h1>'S NO PAGE HERE&hellip;</h1>
        <Link href="/" title="Go to the main page">
          Is this the snowman you're looking for?
        </Link>
      </Container>
    </section>
  </Layout>
)

export default NotFoundPage
