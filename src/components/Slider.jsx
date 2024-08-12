import Slider from "react-slick";
import PropTypes from 'prop-types';

const Slide = ({ properties }) => {


    const setting = {
        dots: true,
        autoplay: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
    };


    return (
        <div>
            <Slider {...setting}>

                {
                    properties.map((property, key) => {
                        return (

                            <div
                                className="w-full min-w-full"
                                key={key}
                                id={property.id} >
                                <img
                                    className={`w-full h-[40vh] mt-4 object-cover px-5`}
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
