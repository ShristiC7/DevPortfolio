import { useRef, useEffect } from 'react'
import styles from './CosmosBackground.module.css'

export default function CosmosBackground() {
  const canvasRef = useRef()

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let W, H, stars = [], animId
    let mx = window.innerWidth / 2, my = window.innerHeight / 2

    function resize() {
      W = canvas.width = window.innerWidth
      H = canvas.height = window.innerHeight
      buildStars()
    }

    function buildStars() {
      stars = []
      const count = Math.floor(W * H / 2800)
      for (let i = 0; i < count; i++) {
        stars.push({
          x: Math.random() * W, y: Math.random() * H,
          r: Math.random() * 1.3 + 0.2,
          a: Math.random() * 0.8 + 0.2,
          speed: Math.random() * 0.004 + 0.001,
          offset: Math.random() * Math.PI * 2,
          depth: Math.random() * 3 + 1,
          color: Math.random() < 0.18 ? '#C4A8FF' : Math.random() < 0.09 ? '#FFB09A' : '#fff',
        })
      }
    }

    let t = 0
    function draw() {
      ctx.clearRect(0, 0, W, H)
      t += 0.008
      const pxR = mx / W - 0.5
      const pyR = my / H - 0.5
      stars.forEach(s => {
        const px = ((s.x + pxR * s.depth * 10) % W + W) % W
        const py = ((s.y + pyR * s.depth * 10) % H + H) % H
        const twinkle = 0.45 + 0.55 * Math.abs(Math.sin(t * s.speed * 80 + s.offset))
        ctx.beginPath()
        ctx.arc(px, py, s.r, 0, Math.PI * 2)
        ctx.fillStyle = s.color
        ctx.globalAlpha = s.a * twinkle
        ctx.fill()
      })
      ctx.globalAlpha = 1
      animId = requestAnimationFrame(draw)
    }

    window.addEventListener('resize', resize)
    window.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY })
    resize()
    draw()

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return <canvas ref={canvasRef} className={styles.canvas} />
}
