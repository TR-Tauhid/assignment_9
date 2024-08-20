import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { useEffect } from "react";
import AOS from "aos";
import 'aos/dist/aos.css';

const Root = () => {

    useEffect(() => {
        AOS.init({});
    }, []);

    
return (
    <div className="overflow-hidden">
        <Navbar></Navbar>
        <Outlet></Outlet>
        <Footer></Footer>
    </div>
)
};

export default Root;