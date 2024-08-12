import PropTypes from 'prop-types';
const Estates = ({ properties }) => {

    return (
        <div className="mt-20">

            <div>
                {
                    properties.map((property, key) => {

                        return (
                            property.id % 2 === 0 ? (

                                <div className="card card-side bg-base-100 my-5 shadow-2xl justify-around" key={key}>
                                    <figure>
                                        <img
                                            className='p-4 rounded-full max-w-60 max-h-80'
                                            src={property.image}
                                            alt={property.name} />
                                    </figure>
                                    <div className="card-body text-right lg:max-w-[40%]">

                                        <h2 className="card-title justify-end">{property.estate_title}</h2>
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
                                        <p>{property.segment_name}</p>
                                        <div className="card-actions justify-end">
                                            <button className="btn btn-primary justify-end">Watch</button>
                                        </div>
                                    </div>
                                </div>

                            )
                                :
                                (
                                    <div className="card card-side bg-base-100 my-5 shadow-2xl justify-around flex-row-reverse " key={key}>
                                        <figure>
                                            <img
                                                className='p-4 rounded-full max-w-60 max-h-80'
                                                src={property.image}
                                                alt={property.name} />
                                        </figure>
                                        <div className="card-body text-left lg:max-w-[40%]">

                                            <h2 className="card-title text-left">{property.estate_title}</h2>
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
                                            
                                            <p>{property.segment_name}</p>
                                            <div className="card-actions justify-start">
                                                <button className="btn btn-primary ">Watch</button>
                                            </div>
                                        </div>
                                    </div>
                                )
                        )
                    })
                }
            </div>

        </div>
    );
};

Estates.propTypes = {
    properties: PropTypes.array.isRequired,
}
export default Estates;