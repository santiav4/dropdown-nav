import { useState } from "react";
import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header";
import Navbar from "./Navbar";

function App() {
    const [isMenu, setIsMenu] = useState(false);
    const [menu, setMenu] = useState("right-[-9999px]");

    const handleMenu = () => {
        if (isMenu) {
            setMenu("right-[-9999px]");
            setIsMenu(false);
        } else {
            setMenu("right-0");
            setIsMenu(true);
        }
    };
    return (
        <div className=" w-screen bg-gray-100  mx-auto h-screen relative overflow-hidden">
            <Header handleMenu={handleMenu} menu={menu} />
            <Content />
        </div>
    );
}

export default App;
