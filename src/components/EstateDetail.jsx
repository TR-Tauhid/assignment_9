import { BiArea } from "react-icons/bi";
import { FaHandPointRight } from "react-icons/fa";
import { GoChecklist } from "react-icons/go";
import { GrMapLocation } from "react-icons/gr";
import { IoPricetagOutline } from "react-icons/io5";
import { MdDriveFileRenameOutline } from "react-icons/md";
import { Link, useLoaderData } from "react-router-dom";

const EstateDetail = () => {

    const property = useLoaderData();

    if (!property) {
        console.log('property worked')
        return (
            <div className="mx-auto text-center w-full ">
                <h1 className="mt-16">
                    Please select a property to view details...!!!
                </h1>
                <div className="my-20">
                    <Link to="/" className="btn">
                        Go back to Home.
                    </Link>
                </div>
            </div>
        )
    }

    return (
        <div>
            <div>
                {
                    <div
                        className="card my-5 flex-col drop-shadow-2xl justify-around" >
                        <figure className='w-full grow'>
                            <img
                                className='p-4 md:p-12 rounded-[2rem] md:rounded-[4rem] h-[70vh]'
                                src={property.image}
                                alt={property.name} />
                        </figure>
                        <div className="card-body text-left ">

                            <h2
                                className="font-bold text-5xl text-center my-4">{property.estate_title}</h2>
                            <p className="px-10 leading-relaxed text-justify">
                                {property.description}
                            </p>

                            <div className="w-full text-center font-semibold text-2xl md:text-3xl mt-10 mb-3">
                                <h1>Attractions:</h1>
                            </div>
                            <div className="md:grid grid-flow-row grid-cols-3 text-center gap-5 mb-10 font-medium md:text-xl">

                                <div className="flex md:justify-center items-center gap-x-3">
                                    <div><MdDriveFileRenameOutline /></div><div><p>{property.segment_name}</p></div>
                                </div>
                                <div className="flex md:justify-center items-center gap-x-3">
                                    <div><IoPricetagOutline /></div><div><p>${property.price}</p></div>
                                </div>
                                <div className="flex md:justify-center items-center gap-x-3">
                                    <div><GoChecklist /></div><div><p>Status: {property.status}</p></div>
                                </div>
                                <div className="flex md:justify-center items-center gap-x-3">
                                    <div><BiArea /></div><div><p>{property.area}</p></div>
                                </div>
                                <div className="flex md:justify-center items-center gap-x-3">
                                    <div><GrMapLocation /></div><div><p>{property.location}</p></div>
                                </div>

                            </div>
                            <div className="my-10">

                                <h3
                                    className='font-semibold text-3xl text-center underline'
                                >Facalities:</h3>
                                <ul
                                    className='md:grid grid-cols-3 self-auto gap-4 mt-5'>
                                    {property.facilities.map((facility, key) => {
                                        return (
                                            <div key={key} className="flex md:justify-center items-center gap-x-4 capitalize font-medium text-xl">
                                                <FaHandPointRight/>
                                                <li>{facility}</li>
                                            </div>
                                        )
                                    })}
                                </ul>
                            </div>
                        </div>
                    </div>
                }
            </div>
        </div>
    );
};

export default EstateDetail;