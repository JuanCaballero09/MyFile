import { useState, useEffect } from "react"
import { PuffLoader } from 'react-spinners'

export function LoadingDots() {
  const [dots, setDots] = useState("")

  useEffect(() => {
    const interval = setInterval(() => {
      setDots(prev => (prev.length < 3 ? prev + "." : ""))
    }, 300)

    return () => clearInterval(interval)
  }, [])

  return (
    <>
        
        <div style={{display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
            <PuffLoader speedMultiplier={.8} color="#16b9b3ff" size={50} />
            <h2>CARGANDO {dots}</h2>
        </div>
    </>
  )
}
