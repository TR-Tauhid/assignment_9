import PropTypes from 'prop-types';
import { BiArea } from 'react-icons/bi';
import { GoChecklist } from 'react-icons/go';
import { GrMapLocation } from 'react-icons/gr';
import { IoPricetagOutline } from 'react-icons/io5';
import { MdDriveFileRenameOutline } from 'react-icons/md';
import { Link } from 'react-router-dom';


const Estates = ({ properties }) => {


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
                                    className="card card-side bg-base-100 my-5 flex-col lg:flex-row-reverse drop-shadow-2xl justify-around" key={key}>
                                    <figure className='w-full grow'>
                                        <img
                                            data-aos="zoom-in"
                                            data-aos-delay="300"
                                            data-aos-easing="ease-in-sine"
                                            className='p-4 md:p-12 rounded-[2rem] md:rounded-[4rem] grow h-full'
                                            src={property.image}
                                            alt={property.name} />
                                    </figure>
                                    <div className="card-body text-left lg:max-w-[40%]">

                                        <h2
                                            data-aos="fade-left"
                                            data-aos-delay="350"
                                            className="card-title ">{property.estate_title}</h2>
                                        {
                                            property.description.length > 500 ?
                                                (
                                                    <p
                                                        data-aos="fade-left"
                                                        data-aos-delay="400"
                                                    >
                                                        {property.description.slice(0, 200)}...<button>See more</button>
                                                    </p>
                                                )
                                                :
                                                (
                                                    <p
                                                        data-aos-delay="450"
                                                    >
                                                        {property.description}
                                                    </p>
                                                )
                                        }

                                        <div
                                            data-aos="fade-left"
                                            data-aos-delay="500"
                                            className='flex items-center'>
                                            <MdDriveFileRenameOutline /><p className='pl-4'>{property.segment_name}</p>
                                        </div>
                                        <div
                                            data-aos="fade-left"
                                            data-aos-delay="600"
                                            className='flex items-center'>
                                            <IoPricetagOutline /><h2 className='pl-4'>${property.price}</h2>
                                        </div>
                                        <div
                                            data-aos="fade-left"
                                            data-aos-delay="700"
                                            className='flex items-center'>
                                            <GoChecklist /><p className='pl-4'>Status: {property.status}</p>
                                        </div>
                                        <div
                                            data-aos="fade-left"
                                            data-aos-delay="800"
                                            className='flex items-center'>
                                            <BiArea /><p className='pl-4'>{property.area}</p>
                                        </div>
                                        <div
                                            data-aos="fade-left"
                                            data-aos-delay="900"
                                            className='flex items-center'>
                                            <GrMapLocation /><p className='pl-4'>{property.location}</p>
                                        </div>

                                        <h3
                                            className='card-title'
                                            data-aos="fade-left"
                                            data-aos-delay="950"
                                        >Facalities:</h3>
                                        <ul
                                            data-aos="fade-left"
                                            data-aos-delay="1000"
                                            className='list-disc ml-6 pl-3'>
                                            {property.facilities.map((facility, key) => {
                                                return <li key={key}>{facility}</li>
                                            })}
                                        </ul>

                                        <div
                                            data-aos="fade-left"
                                            data-aos-delay="1050"
                                            className="card-actions justify-end">
                                            <Link to={`/estateDetail/${property?.id}`}>
                                                <button className="btn btn-primary justify-end">View Property</button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>

                            )
                                :
                                (
                                    <div
                                        data-aos="fade-left"
                                        data-aos-duration="2000"
                                        className="card card-side bg-base-100 my-5 flex-col lg:flex-row drop-shadow-2xl justify-around" key={key}>
                                        <figure className='w-full grow'>
                                            <img
                                                data-aos="zoom-in"
                                                data-aos-delay="300"
                                                data-aos-easing="ease-in-sine"
                                                className='p-4 md:p-12 rounded-[2rem] md:rounded-[4rem] grow h-full'
                                                src={property.image}
                                                alt={property.name} />
                                        </figure>

                                        <div className="card-body text-left lg:max-w-[40%]">

                                            <h2
                                                data-aos="fade-left"
                                                data-aos-delay="400"
                                                className="card-title ">{property.estate_title}</h2>
                                            {
                                                property.description.length > 500 ?
                                                    (
                                                        <p
                                                            data-aos="fade-left"
                                                            data-aos-delay="500"
                                                        >
                                                            {property.description.slice(0, 200)}...<button>See more</button>
                                                        </p>
                                                    )
                                                    :
                                                    (
                                                        <p
                                                            data-aos-delay="600"
                                                        >
                                                            {property.description}
                                                        </p>
                                                    )
                                            }

                                            <div
                                                data-aos="fade-left"
                                                data-aos-delay="700"
                                                className='flex items-center'>
                                                <MdDriveFileRenameOutline /><p className='pl-4'>{property.segment_name}</p>
                                            </div>
                                            <div
                                                data-aos="fade-left"
                                                data-aos-delay="800"
                                                className='flex items-center'>
                                                <IoPricetagOutline /><h2 className='pl-4'>${property.price}</h2>
                                            </div>
                                            <div
                                                data-aos="fade-left"
                                                data-aos-delay="900"
                                                className='flex items-center'>
                                                <GoChecklist /><p className='pl-4'>Status: {property.status}</p>
                                            </div>
                                            <div
                                                data-aos="fade-left"
                                                data-aos-delay="1000"
                                                className='flex items-center'>
                                                <BiArea /><p className='pl-4'>{property.area}</p>
                                            </div>
                                            <div
                                                data-aos="fade-left"
                                                data-aos-delay="1100"
                                                className='flex items-center'>
                                                <GrMapLocation /><p className='pl-4'>{property.location}</p>
                                            </div>

                                            <h3
                                                className='card-title'
                                                data-aos="fade-left"
                                                data-aos-delay="1150"
                                            >Facalities:</h3>
                                            <ul
                                                data-aos="fade-left"
                                                data-aos-delay="1200"
                                                className='list-disc ml-6 pl-3'>
                                                {property.facilities.map((facility, key) => {
                                                    return <li key={key}>{facility}</li>
                                                })}
                                            </ul>

                                            <div

                                                data-aos="fade-left"
                                                data-aos-delay="1250"
                                                className="card-actions justify-end">
                                                <Link to={`/estateDetail/${property?.id}`}>
                                                    <button className="btn btn-primary justify-end">View Property</button>
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