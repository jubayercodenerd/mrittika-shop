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

const columns = [
    {key: "id",  label: "order Id"},
    {key: "date",  label: "Date"},
    {key: "price",  label: "Total Price"},
    {key: "status",  label: "Status"},
    {key: "actions",
        label: "Actions",
        render: (row) => (
            <div className={"h-full flex justify-around items-center p-[2px] space-x-1"}>
                <Button onClick={() => alert("edit " + row.id)} variation={"primary"} className={"px-2 h-full text-lg font-semibold"}>View</Button>
                <Button onClick={() => alert("cancel " + row.id)} variation={"primary"} className={"px-2 h-full text-lg font-semibold"}>Cancel</Button>
            </div>
        )
    }
]
const data = [
    {
        id: "ORD001",
        date: "2025-08-01",
        price: "৳ 1250",
        status: "Pending"
    },
    {
        id: "ORD002",
        date: "2025-08-01",
        price: "৳ 890",
        status: "Processing"
    },
    {
        id: "ORD003",
        date: "2025-07-30",
        price: "৳ 1490",
        status: "Delivered"
    }
];

function App() {
    const handleClick = () => {
        alert('Hello World!')
    }
  return (
      //<HomePage/>
      //<ProductListingPage/>
      //<CartPage/>
      //<CheckOutPage/>
      <ProfilePage/>
  )
}

export default App
