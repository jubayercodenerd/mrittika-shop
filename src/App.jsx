import { useState } from 'react'
import ProductCard from "./components/ui/ProductCard.jsx";
import './App.css'

function App() {
    const handleClick = () => {
        alert('Hello World!')
    }
  return (
    <>
        <ProductCard message={"Low Stock!"}  onClick={handleClick} />
    </>
  )
}

export default App
