import Estates from "./Estates";
import Slide from "./Slider";
import { useLoaderData } from "react-router-dom";

const Home = () => {


    const properties = useLoaderData();

    return (
        <div className="w-11/12 mx-auto text-center">
            <Slide properties={properties}></Slide>
            <Estates properties={properties}></Estates>

            <div>
                <div className="text-center bg-[url('/src/assets/prismBg.svg')] h-72 rounded-xl" >
                    <h1 className="font-bold text-4xl py-8">What we do ? </h1>
                    <p className="text-xl font-medium w-2/3 mx-auto pb-4 shadow-xl rounded-xl" style={{textShadow: "1px 1px 2px gray "}}>
                        Where luxury meets excellence. We specialize in offering a curated selection of the most exquisite and prestigious properties around the globe. Our mission is to connect discerning buyers with their dream homes, whether it is an elegant penthouse in a bustling city, a serene beachfront villa, or a majestic countryside estate.
                    </p>


                </div>
            </div>
        </div>
    );
};

export default Home;