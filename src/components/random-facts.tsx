import * as React from 'react'
import Emoji from 'react-emoji-render'
import styled from 'styled-components'

const FactContainer = styled.div`
  align-items: center;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  padding: 0 5vw;
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
    return Math.ceil(Math.random() * 30)
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
            I was Time Magazine&nbsp;
            <Link
              href="http://content.time.com/time/specials/packages/0,28757,2019341,00.html"
              title="I'm pretty sure they were referring to me..."
            >
              Person of the Year
            </Link>
            &nbsp;in 2006
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
            I designed the logo for&nbsp;
            <Link href="https://en.wikipedia.org/wiki/Snow_(beer)" title="Guess how I got this gig...">
              Snow beer
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
      case 12:
        return (
          <>
            I am the inventor of the&nbsp;
            <Link
              href="https://twitter.com/egyptian_bot"
              title="All the old paintings on the tombs they do the sand dance, don't you know."
            >
              Walk Like an Egyptian Twitter Bot
            </Link>
            <br />
            <Emoji text=":robot:" />
          </>
        )
        break
      case 13:
        return (
          <>
            I once&nbsp;
            <Link href="https://youtu.be/XwJ4tcCHQHg" title="I was the lead role, taught him everything he knows">
              co-starred
            </Link>
            &nbsp;in a production with Henry Cavill
            <br />
            <Emoji text=":superhero:" />
          </>
        )
        break
      case 14:
        return (
          <>
            I once won a horse spine in a game of poker.
            <br />
            <Emoji text=":horse:" />
          </>
        )
        break
      case 15:
        return (
          <>
            I used to have a pet Macaw that could fold clothes.
            <br />
            <Emoji text=":parrot:" />
          </>
        )
        break
      case 16:
        return (
          <>
            I have a dog called Fattypants.
            <br />
            <Emoji text=":dog:" />
          </>
        )
        break
      case 17:
        return (
          <>
            I was gifted an Apple Watch by Tim Cook.
            <br />
            <Emoji text=":watch:" />
          </>
        )
        break
      case 18:
        return (
          <>
            I have travelled to 31 countries.
            <br />
            <Emoji text=":globe_showing_asia-australia:" />
          </>
        )
        break
      case 19:
        return (
          <>
            I set up my own company at age 16 to pay for university.
            <br />
            <Emoji text=":money_with_wings:" />
          </>
        )
        break
      case 20:
        return (
          <>
            I once ran myself over with a jet ski.
            <br />
            <Emoji text=":water_wave:" />
          </>
        )
        break
      case 21:
        return (
          <>
            I got my first credit card, and first paid tax, at age 34.
            <br />
            <Emoji text=":credit_card:" />
          </>
        )
        break
      case 22:
        return (
          <>
            I will eat any part of any animal or vegetable. Except potato.
            <br />
            <Emoji text=":potato:" />
          </>
        )
        break
      case 23:
        return (
          <>
            I once got dysentery after drinking from a mountain stream.
            <br />
            <Emoji text=":mountain_snow:" />
          </>
        )
        break
      case 24:
        return (
          <>
            I was once tricked into&nbsp;
            <Link href="https://youtu.be/jHe8DPAIvbs" title="Watch the fateful song...">
              singing a song
            </Link>
            &nbsp;with a 6 year old girl on live TV.
          </>
        )
        break
      case 25:
        return (
          <>
            I once spent a night in a Beijing jail cell after refusing to apologise on behalf of the 8-nation alliance for burning down the Old Summer Palace in 1860.
            <br />
            <Emoji text=":police_officer:" />
          </>
        )
        break
      case 26:
        return (
          <>
            I sometimes like to sleep halfway down the bed so that my feet dangle off the end because it makes me feel tall.
            <br />
            <Emoji text=":sleeping_bed:" />
          </>
        )
        break
      case 27:
        return (
          <>
            My hand-eye coordination is so bad that I brush my teeth by moving my head instead of moving the toothbrush.
            <br />
            <Emoji text=":tooth:" />
          </>
        )
        break
      case 28:
        return (
          <>
            Despite 36 years of practice, I'm still no good at tying shoe laces.
            <br />
            <Emoji text=":running_shoe:" />
          </>
        )
        break
      case 29:
        return (
          <>
            I once smuggled a 2.2m man into a music festival using a suitcase and a fake ID.
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
