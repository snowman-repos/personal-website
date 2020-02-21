import * as React from 'react'
import Emoji from 'react-emoji-render'
import styled from 'styled-components'

const FactContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  position: relative;
  opacity: 0;
  height: 100vh;
  width: 100vw;

  .is-open & {
    opacity: 1;
    transition: 0.15s 0.45s opacity ease-out;
  }
`

const Button = styled.button`
  background: none;
  border: none;
  box-shadow: none;
  color: var(--colors-background);
  cursor: pointer;
  font-size: 2em;
  font-weight: 600;
  left: 50%;
  opacity: 0.5;
  outline: none;
  position: absolute;
  top: var(--spacing);
  transition: opacity 0.15s ease-in-out;
  transform: translateX(-50%);

  &:active,
  &:hover {
    animation: 0.45s linear infinite rotate;
    opacity: 1;
  }

  @keyframes rotate {
    from {
      transform: translateX(-50%) rotate(0);
    }

    to {
      transform: translateX(-50%) rotate(1turn);
    }
  }
`

const Fact = styled.h2`
  color: var(--colors-background);
  font-size: 3em;
  opacity: 1;
  text-align: center;
  transition: 0.15s opacity ease-in-out;

  @media (min-width: 55em) {
    font-size: 4em;
  }

  &.is-faded-out {
    opacity: 0;
  }
`

const Link = styled.a`
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
          <>
            I like brewing beer
            <br />
            <Emoji text=":beer:" />
          </>
        )
        break
      case 2:
        return (
          <>
            I once delayed a Chinese military aircraft by accidentally bowling a sack of pomelos down the runway...
            <br />
            <Emoji text=":airplane:" />
          </>
        )
        break
      case 3:
        return (
          <>
            I once dressed up as a rabbit, walked into a supermarket, and bought all of the carrots.
            <br />
            <Emoji text=":rabbit:" />
          </>
        )
        break
      case 4:
        return (
          <>
            I was&nbsp;
            <Link
              href="http://content.time.com/time/specials/packages/0,28757,2019341,00.html"
              title="I'm pretty sure they were referring to me..."
            >
              Time Magazine Person of the Year in 2006
            </Link>
            <br />
            <Emoji text=":medal:" />
          </>
        )
        break
      case 5:
        return (
          <>
            I like listening to&nbsp;
            <Link href="https://youtu.be/s36eQwgPNSE" title="Listen to my totally tubular playlist">
              80's music
            </Link>
            <br />
            <Emoji text=":sunglasses:" />
          </>
        )
        break
      case 6:
        return (
          <>
            I designed&nbsp;
            <Link href="https://en.wikipedia.org/wiki/Snow_(beer)" title="Guess how I got this gig...">
              the logo for Snow beer
            </Link>
            <br />
            <small>
              <em>(the best-selling beer brand in the world)</em>
            </small>
            <br />
            <Emoji text=":beer:" />
          </>
        )
        break
      case 7:
        return (
          <>
            I like eating weird things...
            <br />
            <Emoji text=":brain:" />
          </>
        )
        break
      case 8:
        return (
          <>
            I like hot weather
            <br />
            <Emoji text=":sun:" />
          </>
        )
        break
      case 9:
        return (
          <>
            I like spicy food
            <br />
            <Emoji text=":spicy:" />
          </>
        )
        break
      case 10:
        return (
          <>
            I don't like reading fiction
            <br />
            <Emoji text=":book:" />
          </>
        )
        break
      case 11:
        return (
          <>
            I like swimming
            <br />
            <Emoji text=":swimmer:" />
          </>
        )
        break
      default:
        return (
          <>
            I used to be a&nbsp;
            <Link href="https://www.youtube.com/watch?v=8myh_7RrAck" title="Watch me in action!">
              TV weatherman
            </Link>
            <br />
            <Emoji text=":snowman:" />
          </>
        )
    }
  }

  const [fact, setFact] = React.useState(getRandomNumber())
  const [isFaded, changeFade] = React.useState(false)

  const getNewFact = () => {
    changeFade(true)
    setTimeout(() => {
      changeFade(false)
      setFact(getRandomNumber())
    }, 150)
  }

  return (
    <FactContainer>
      <Button onClick={getNewFact}>&#8635;</Button>
      <Fact className={isFaded ? 'is-faded-out' : ''}>{renderFact()}</Fact>
    </FactContainer>
  )
}

export default RandomFacts
