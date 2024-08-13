import Estates from "./Estates";
import Slide from "./Slider";
import { useLoaderData } from "react-router-dom";

const Home = () => {


    const properties = useLoaderData();

    return (
        <div className="w-11/12 mx-auto text-center">
            <Slide properties={properties}></Slide>
            <Estates properties={properties}></Estates>
        </div>
    );
};

export default Home;