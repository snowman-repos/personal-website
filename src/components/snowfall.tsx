import React from 'react'

type Props = {}

const canvasStyles: React.CSSProperties = {
  left: 0,
  position: 'fixed',
  pointerEvents: 'none',
  top: 0,
  zIndex: 1,
}

class Snowfall extends React.Component<Props> {
  private canvas: any = React.createRef()

  constructor(props: Props) {
    super(props)
  }

  componentDidMount() {
    const ctx = this.canvas.current.getContext('2d')
    const W = window.innerWidth
    const H = window.innerHeight

    this.canvas.current.width = W
    this.canvas.current.height = H

    const numberFlakes = 60
    const flakes: any = []

    for (let i = 0; i < numberFlakes; i++) {
      flakes.push({
        x: Math.random() * W,
        y: Math.random() * H,
        radius: Math.random() * 3 + 1,
      })
    }

    let angle = 0

    function moveFlakes() {
      angle += 0.01
      for (let i = 0; i < numberFlakes; i++) {
        const f = flakes[i]
        // cos and sin for moving diagonally
        f.y += Math.cos(angle) + 1 + f.radius / 2
        f.x += Math.sin(angle) * 2

        // Start flakes over at top
        if (f.x > W + 5 || f.x < -5 || f.y > H) {
          // Introduces some more random behavior to make the snowfall look real
          if (i % 3 > 0) {
            flakes[i] = { x: Math.random() * W, y: -10, radius: f.radius }
          } else {
            // flake leaves from right
            if (Math.sin(angle) > 0) {
              // come in from left
              flakes[i] = { x: -5, y: Math.random() * H, radius: f.radius }
            } else {
              // come in from right
              flakes[i] = { x: W + 5, y: Math.random() * H, radius: f.radius }
            }
          }
        }
      }
    }

    function drawFlakes() {
      // Have to clear it every time to redraw
      ctx.clearRect(0, 0, W, H)

      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)'
      ctx.beginPath()
      for (let i = 0; i < numberFlakes; i++) {
        const f = flakes[i]
        ctx.moveTo(f.x, f.y)
        ctx.arc(f.x, f.y, f.radius, 0, Math.PI * 2, true)
      }
      ctx.fill()
      moveFlakes()
    }

    setInterval(() => {
      drawFlakes()
    }, 30)
  }

  render() {
    return <canvas ref={this.canvas} style={canvasStyles} />
  }
}

export default Snowfall
