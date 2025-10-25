import React from 'react'
import ToggleBtn from './Components/ToggleBtn'
import Card from './Components/Card'
import { ThemeProvider } from './Context/Theme'



const App = () => {
  return (
    <>
      <ThemeProvider>
        <ToggleBtn />
        <Card />
      </ThemeProvider>
    </>
  )
}

export default App
