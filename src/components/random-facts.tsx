import * as React from 'react'
import Emoji from 'react-emoji-render'
import styled from 'styled-components'

const FactContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  opacity: 0;
  height: 100vh;
  width: 100vw;

  .is-open & {
    opacity: 1;
    transition: 0.15s 0.45s opacity ease-out;
  }

  h2 {
    color: var(--colors-background);
    font-size: 3em;
    text-align: center;

    @media (min-width: 55em) {
      font-size: 4em;
    }
  }

  a {
    border-bottom: 1px solid var(--colors-highlight);
    color: var(--colors-background);
    font-weight: 600;
    opacity: 0.75;
    text-decoration: none;
    transition: all 0.15s ease-in-out;

    &:active,
    &:focus,
    &:hover {
      border-bottom: 1px solid var(--colors-background);
      opacity: 1;
    }
  }
`

type Props = {}

const RandomFacts = (props: any): React.ReactElement => {
  const getRandomNumber = () => {
    return Math.ceil(Math.random() * 12)
  }

  const renderFact = () => {
    switch (fact) {
      case 1:
        return (
          <h2>
            I like brewing beer
            <br />
            <Emoji text=":beer:" />
          </h2>
        )
        break
      case 2:
        return (
          <h2>
            I once delayed a Chinese military aircraft by accidentally bowling a sack of pomelos down the runway...
            <br />
            <Emoji text=":airplane:" />
          </h2>
        )
        break
      case 3:
        return (
          <h2>
            I once dressed up as a rabbit, walked into a supermarket, and bought all of the carrots.
            <br />
            <Emoji text=":rabbit:" />
          </h2>
        )
        break
      case 4:
        return (
          <h2>
            I was&nbsp;
            <a
              href="http://content.time.com/time/specials/packages/0,28757,2019341,00.html"
              title="I'm pretty sure they were referring to me..."
            >
              Time Magazine Person of the Year in 2006
            </a>
            <br />
            <Emoji text=":medal:" />
          </h2>
        )
        break
      case 5:
        return (
          <h2>
            I like listening to&nbsp;
            <a href="https://youtu.be/s36eQwgPNSE" title="Listen to my totally tubular playlist">
              80's music
            </a>
            <br />
            <Emoji text=":sunglasses:" />
          </h2>
        )
        break
      case 6:
        return (
          <h2>
            I designed&nbsp;
            <a href="https://en.wikipedia.org/wiki/Snow_(beer)" title="Guess how I got this gig...">
              the logo for Snow beer
            </a>
            <br />
            <small>
              <em>(the best-selling beer brand in the world)</em>
            </small>
            <br />
            <Emoji text=":beer:" />
          </h2>
        )
        break
      case 7:
        return (
          <h2>
            I like eating weird things...
            <br />
            <Emoji text=":brain:" />
          </h2>
        )
        break
      case 8:
        return (
          <h2>
            I like hot weather
            <br />
            <Emoji text=":sun:" />
          </h2>
        )
        break
      case 9:
        return (
          <h2>
            I like spicy food
            <br />
            <Emoji text=":spicy:" />
          </h2>
        )
        break
      case 10:
        return (
          <h2>
            I don't like reading fiction
            <br />
            <Emoji text=":book:" />
          </h2>
        )
        break
      case 11:
        return (
          <h2>
            I like swimming
            <br />
            <Emoji text=":swimmer:" />
          </h2>
        )
        break
      default:
        return (
          <h2>
            I used to be a&nbsp;
            <a href="https://www.youtube.com/watch?v=8myh_7RrAck" title="Watch me in action!">
              TV weatherman
            </a>
            <br />
            <Emoji text=":snowman:" />
          </h2>
        )
    }
  }

  const [fact, setFact] = React.useState(getRandomNumber())

  return (
    <FactContainer>
      <button onClick={() => setFact(getRandomNumber())}>new</button>
      {renderFact()}
    </FactContainer>
  )
}

export default RandomFacts
