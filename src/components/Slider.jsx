import Slider from "react-slick";
import PropTypes from 'prop-types';

const Slide = ({ properties }) => {


    const setting = {
        dots: true,
        autoplay: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
    };


    return (
        <div>
            <Slider {...setting}>

                {
                    properties.map((property, key) => {
                        console.log('working')
                        return (

                            <div
                                className="w-full h-80"
                                key={key}
                                id={property.id} >
                                <img
                                    className={`w-full h-full object-cover px-5`}
                                    src={property.image}
                                    alt={`${property.name} image`}
                                />
                            </div>
                        )
                    })
                }
            </Slider>
        </div>
    );
};

Slide.propTypes = {
    properties: PropTypes.array,
}

export default Slide;
