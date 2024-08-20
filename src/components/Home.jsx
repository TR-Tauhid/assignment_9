import { MapContainer, Marker, Popup, TileLayer, useMapEvent } from "react-leaflet";
import 'leaflet/dist/leaflet.css';
import Estates from "./Estates";
import Slide from "./Slider";
import { useLoaderData } from "react-router-dom";
import { useRef } from "react";
import { PropTypes } from "prop-types";
import { GrMapLocation } from "react-icons/gr";

function SetViewOnClick({ animateRef }) {
    const map = useMapEvent('click', (e) => {
        map.setView(e.latlng, map.getZoom(), {
            animate: animateRef.current || false,
        })
    })
    return null
}
const Home = () => {

    const animateRef = useRef(false)
    const position = [23.8138, 90.4250];

    const properties = useLoaderData();


    return (

        <div className="w-11/12 mx-auto block mb-20 text-center">
            <Slide properties={properties}></Slide>
            <Estates properties={properties}></Estates>

            <div className="text-center bg-[url('/src/assets/prismBg.svg')] h-72 rounded-xl my-10" >
                <h1 className="font-bold text-4xl py-4 md:py-8">What we do ? </h1>
                <p className="text-sm md:text-xl lg:font-medium lg:w-2/3 mx-auto pt-3 p-2 md:px-4 text-justify lg:p-7 shadow-xl rounded-xl" style={{ textShadow: "1px 1px 2px gray " }}>
                    Where luxury meets excellence. We specialize in offering a curated selection of the most exquisite and prestigious properties around the globe. Our mission is to connect discerning buyers with their dream homes, whether it is an elegant penthouse in a bustling city, a serene beachfront villa, or a majestic countryside estate.
                </p>
            </div>

            <div className="w-full outline outline-1 outline-gray-500 "></div>


            <div className="h-fit w-full my-20 rounded-xl">
                <div className="mb-8 gap-y-3">

                    <h1 className="font-bold text-4xl">Where are we...? </h1>
                    <h1 className="font-semibold text-2xl">Find us here:- </h1>
                    <div className="flex justify-center items-center gap-x-3">
                        <GrMapLocation /> <p className="font-medium text-xl">Jamuna Future Park.</p>
                    </div>
                </div>

                <MapContainer className="min-h-[50vh] rounded-xl outline-fuchsia-600 outline-4 outline" center={position} zoom={13} scrollWheelZoom={false}>
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <SetViewOnClick animateRef={animateRef} />
                    <Marker position={position}>
                        <Popup>
                            A pretty CSS3 popup. <br /> Easily customizable.
                        </Popup>
                    </Marker>
                </MapContainer>

            </div>
        </div>
    );
};

SetViewOnClick.propTypes = {
    animateRef: PropTypes.shape({
        current: PropTypes.bool
    })
}

export default Home;