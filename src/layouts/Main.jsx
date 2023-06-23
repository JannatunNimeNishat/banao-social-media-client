import { Outlet } from "react-router-dom";
import Navbar from "../pages/share/Navbar/Navbar";
import Footer from "../pages/share/Footer/Footer";



const Main = () => {
    return (
        // <div className="bg-[#000000]">
        <div className="">
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>

        </div>
    );
};

export default Main;