import { useState } from 'react'
import ProductCard from "./components/ui/ProductCard.jsx";
import HeroSwiper from "./components/ui/HeroSwiper.jsx"
import './App.css'

function App() {
    const handleClick = () => {
        alert('Hello World!')
    }
  return (
    <>
        <HeroSwiper />
        <div className={"space-x-5"}>
            <ProductCard imageUrl={"/public/clayPot2.webp"} message={"Low Stock!"}  onClick={handleClick} />
            <ProductCard imageUrl={"/public/clayPot3.webp"} message={""}  onClick={handleClick} />
            <ProductCard imageUrl={"/public/clayPot1.webp"} message={"Stock Out!"}  onClick={handleClick} />
        </div>
    </>
  )
}

export default App
