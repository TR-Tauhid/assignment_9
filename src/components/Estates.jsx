import PropTypes from 'prop-types';
import { BiArea } from 'react-icons/bi';
import { GoChecklist } from 'react-icons/go';
import { GrMapLocation } from 'react-icons/gr';
import { IoPricetagOutline } from 'react-icons/io5';
import { MdDriveFileRenameOutline } from 'react-icons/md';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
const Estates = ({ properties }) => {


    useEffect(() => {
        AOS.init({});
    }, []) 
    return (
        <div className="mt-20">

            <div>
                {
                    properties.map((property, key) => {

                        return (
                            property.id % 2 === 0 ? (

                                <div
                                    data-aos="fade-left"
                                    data-aos-duration="2000"
                                    className="card card-side bg-base-100 my-5 flex-col lg:flex-row drop-shadow-2xl justify-around" key={key}>
                                    <figure className='w-full grow'>
                                        <img
                                            data-aos="zoom-in"
                                            data-aos-delay="500"
                                            data-aos-easing="ease-in-sine"
                                            className='p-12 rounded-[4rem] grow h-full'
                                            src={property.image}
                                            alt={property.name} />
                                    </figure>
                                    <div className="card-body text-left lg:max-w-[40%]">

                                        <h2 className="card-title ">{property.estate_title}</h2>
                                        {
                                            property.description.length > 500 ?
                                                (
                                                    <p>
                                                        {property.description.slice(0, 200)}...<button>See more</button>
                                                    </p>
                                                )
                                                :
                                                (
                                                    property.description
                                                )
                                        }

                                        <div className='flex items-center'>
                                            <MdDriveFileRenameOutline /><p className='pl-4'>{property.segment_name}</p>
                                        </div>
                                        <div className='flex items-center'>
                                            <IoPricetagOutline /><h2 className='pl-4'>${property.price}</h2>
                                        </div>
                                        <div className='flex items-center'>
                                            <GoChecklist /><p className='pl-4'>Status: {property.status}</p>
                                        </div>
                                        <div className='flex items-center'>
                                            <BiArea /><p className='pl-4'>{property.area}</p>
                                        </div>
                                        <div className='flex items-center'>
                                            <GrMapLocation /><p className='pl-4'>{property.location}</p>
                                        </div>

                                        <ul className='list-disc'>
                                            {property.facilities.map((facility, key) => {
                                                return <li key={key}>{facility}</li>
                                            })}
                                        </ul>

                                        <div className="card-actions justify-end">
                                            <button className="btn btn-primary justify-end">View Property</button>
                                        </div>
                                    </div>
                                </div>

                            )
                                :
                                (
                                    <div
                                        data-aos="fade-right"
                                        data-aos-duration="2000"
                                        className="card card-side bg-base-100 my-5 drop-shadow-2xl flex-col justify-around lg:flex-row-reverse " key={key}>
                                        <figure className='w-full grow'>
                                            <img
                                                data-aos="zoom-in"
                                                data-aos-delay="500"
                                                data-aos-easing="ease-in-sine"
                                                className='p-12 rounded-[4rem] grow h-full'
                                                src={property.image}
                                                alt={property.name} />
                                        </figure>
                                        <div className="card-body lg:text-left lg:max-w-[40%]">

                                            <h2 className="card-title lg:text-left">{property.estate_title}</h2>
                                            {
                                                property.description.length > 500 ?
                                                    (
                                                        <p>

                                                            {property.description.slice(0, 500)}...<button>See more</button>
                                                        </p>
                                                    )
                                                    :
                                                    (
                                                        property.description
                                                    )
                                            }

                                            <div className='flex items-center'>
                                                <MdDriveFileRenameOutline /><p className='pl-4'>{property.segment_name}</p>
                                            </div>
                                            <div className='flex items-center'>
                                                <IoPricetagOutline /><h2 className='pl-4'>${property.price}</h2>
                                            </div>
                                            <div className='flex items-center'>
                                                <GoChecklist /><p className='pl-4'>Status: {property.status}</p>
                                            </div>
                                            <div className='flex items-center'>
                                                <BiArea /><p className='pl-4'>{property.area}</p>
                                            </div>
                                            <div className='flex items-center'>
                                                <GrMapLocation /><p className='pl-4'>{property.location}</p>
                                            </div>

                                            <ul className='list-disc'>
                                                {property.facilities.map((facility, key) => {
                                                    return <li key={key}>{facility}</li>
                                                })}
                                            </ul>
                                            <div className="card-actions justify-start">
                                                <Link to="/estatedetail">
                                                    <button className="btn btn-primary ">View Property</button>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                )
                        )
                    })
                }
            </div>

        </div >
    );
};

Estates.propTypes = {
    properties: PropTypes.array.isRequired,
}
export default Estates;