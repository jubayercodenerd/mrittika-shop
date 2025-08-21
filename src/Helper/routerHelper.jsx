import HomePage from "../Pages/HomePage/HomePage.jsx";
import ProductPage from "../Pages/ProductPage/ProductPage.jsx"
import ProductListingPage from "../Pages/ProductListingPage/ProductListingPage.jsx";
import ProfilePage from "../Pages/ProfilePage/ProfilePage.jsx";
import CartPage from "../Pages/CartPage/CartPage.jsx";
import CheckOutPage from "../Pages/CheckOutPage/CheckOutPage.jsx";
import OrdersPage from "../Pages/OrdersPage/OrdersPage.jsx";

export const allRoutes = [
    {
        path: "/",
        element: HomePage,
        isPrivate: false
    },
    {
        path: "/product/:slug",
        element: ProductPage,
        isPrivate: false
    },
    {
        path: "/products",
        element: ProductListingPage,
        isPrivate: false
    },
    {
        path: "products/search/:search-term",
        element: ProductListingPage,
        isPrivate: false
    },
    {
        path: "products/category/:category",
        element:ProductListingPage,
        isPrivate: false
    },
    {
        path: "/profile",
        element: ProfilePage,
        isPrivate: true,
        role: "user"
    },
    {
        path: "/cart",
        element: CartPage,
        isPrivate: true
    },
    {
        path: "/checkout",
        element: CheckOutPage,
        isPrivate: true
    },
    {
        path: "/orders",
        element: OrdersPage,
        isPrivate: true
    }
]