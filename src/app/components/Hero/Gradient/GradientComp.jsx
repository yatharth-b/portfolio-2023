'use client'
import { useEffect } from "react"

export default function GradientComp() {

  useEffect(() => {
    import('./Gradient.js').then(g=> new g.Gradient().initGradient("#gradient-canvas"))

    return () => {
   const canvas=document.getElementById("#gradient-canvas");

      canvas.getContext("2d").clearRect(0, 0, canvas.width, canvas.height)
    }
  }, [])

  return (
    <canvas id="gradient-canvas" style={{width:'100vw', height: '100vh'}}></canvas>
  )
}