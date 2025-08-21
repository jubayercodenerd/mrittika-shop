import ProductCard from "./components/ui/ProductCard.jsx";
import HeroSwiper from "./components/ui/HeroSwiper.jsx"
import Footer from "./components/shared/Footer.jsx"
import './App.css'
import QuantitySelector from "./components/ui/QuantitySelector.jsx";
import Table from "./components/ui/Table.jsx";
import Button from "./components/ui/Button.jsx";
import Navbar from "./components/shared/Navbar.jsx";
import ProductGrid from "./components/ui/ProductGrid.jsx";
import HomePage from "./Pages/HomePage/HomePage.jsx";
import ProductListingPage from "./Pages/ProductListingPage/ProductListingPage.jsx";
import CartPage from "./Pages/CartPage/CartPage.jsx";
import CheckOutPage from "./Pages/CheckOutPage/CheckOutPage.jsx";
import ProfilePage from "./Pages/ProfilePage/ProfilePage.jsx";
import OrdersPage from "./Pages/OrdersPage/OrdersPage.jsx";
import ProductViewDetailsPage from "./Pages/ProductPage/ProductPage.jsx";
import {allRoutes} from "./Helper/routerHelper.jsx";
import {BrowserRouter} from "react-router-dom";
import {Routes, Route, Navigate} from "react-router-dom";
import CommonLayout from "./components/Layouts/CommonLayout.jsx";

function App() {

  return (
        <Routes>
            <Route element={<CommonLayout/>}>
                {
                    allRoutes.map((route, index) => (
                            <Route
                                key = {index}
                                path = {route.path}
                                element={<route.element/>}
                            />
                        )
                    )
                }
            </Route>
        </Routes>
  )
}

export default App
