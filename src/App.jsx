import { useState } from 'react'
import Button from './components/ui/Button.jsx'
import './App.css'

function App() {
    const handleClick = () => {
        alert('Hello World!')
    }
  return (
    <>
      <Button variation={"primary"} width={"150px"} height={"40px"} fontSize={'20px'} className={''} onClick={handleClick}>
        <p>hello world</p>
      </Button>
    </>
  )
}

export default App
