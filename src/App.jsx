import ProductCard from "./components/ui/ProductCard.jsx";
import HeroSwiper from "./components/ui/HeroSwiper.jsx"
import Footer from "./components/shared/Footer.jsx"
import './App.css'
import QuantitySelector from "./components/ui/QuantitySelector.jsx";
import Table from "./components/ui/Table.jsx";
import Button from "./components/ui/Button.jsx";

const columns = [
    {key: "id",  label: "order Id"},
    {key: "date",  label: "Date"},
    {key: "price",  label: "Total Price"},
    {key: "status",  label: "Status"},
    {key: "actions",
        label: "Actions",
        render: (row) => (
            <div className={"h-full flex justify-around items-center p-.5"}>
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
    <>  <div className={"min-h-screen space-y-5 flex flex-col justify-between items-center"}>
            <HeroSwiper />
            <div className={"space-x-5 space-y-5"}>
                <ProductCard imageUrl={"/public/clayPot2.webp"} message={"Low Stock!"}  onClick={handleClick} />
                <ProductCard imageUrl={"/public/clayPot3.webp"} message={""}  onClick={handleClick} />
                <ProductCard imageUrl={"/public/clayPot1.webp"} message={"Stock Out!"}  onClick={handleClick} />
            </div>
            <QuantitySelector/>
            <div className={"w-[55%]"}>
                <Table columns={columns} data={data}/>
            </div>
            <Footer />
        </div>
    </>
  )
}

export default App
