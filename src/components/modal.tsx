import * as React from 'react'
import Emoji from 'react-emoji-render'
import styled from 'styled-components'

import Context from '../pages/context'
import RandomFacts from './random-facts'

const PageConsumer = Context.Consumer

const FullScreen = styled.div`
  background-color: var(--colors-highlight);
  height: 10vh;
  left: 45vw;
  opacity: 0;
  overflow-y: scroll;
  pointer-events: none;
  position: fixed;
  top: 45vh;
  transition: 0.25s all ease-out;
  width: 10vw;
  z-index: 4;

  &.is-open {
    height: 100vh;
    left: 0;
    opacity: 1;
    pointer-events: auto;
    top: 0;
    transition: 0.25s all ease-in;
    width: 100vw;
  }
`

const CloseButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  display: inline-block;
  height: 2em;
  line-height: 2em;
  opacity: 0.5;
  position: absolute;
  right: var(--spacing);
  top: var(--spacing);
  transition: 0.15s opacity ease-out;
  width: 2em;

  &::before,
  &::after {
    background-color: #fff;
    content: '';
    display: block;
    height: 0.4em;
    left: 50%;
    position: absolute;
    margin-left: -1em;
    margin-top: -0.2em;
    top: 50%;
    transform: rotate(-45deg);
    width: 2em;
  }

  &::after {
    transform: rotate(-135deg);
  }

  &:active,
  &:hover {
    opacity: 1;
  }
`

type Props = {
  isOpen: boolean
}

class Modal extends React.Component<Props> {
  constructor(props: Props) {
    super(props)
  }

  render() {
    const html: HTMLElement = document.getElementsByTagName('html')[0]
    this.props.isOpen ? html.classList.add('has-open-modal') : html.classList.remove('has-open-modal')
    return (
      <PageConsumer>
        {(context: any) => (
          <FullScreen className={this.props.isOpen ? 'is-open' : ''}>
            <RandomFacts />
            <CloseButton onClick={context.actions.toggleModal} />
          </FullScreen>
        )}
      </PageConsumer>
    )
  }
}

export default Modal
