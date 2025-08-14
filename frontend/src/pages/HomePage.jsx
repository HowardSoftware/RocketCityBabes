import { useState } from 'react'
import '../styles/homepage.css'
import Header from '../components/Header'

function HomePage() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <main style={{ paddingBottom:650, color:"#D686C1" }}>
        <h1>Rocket City Batchelorette and Banner Designs</h1>
      </main>
    </>
  )
}

export default HomePage
