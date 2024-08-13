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
        breakpoint: 520,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };


  return (
    <div className="max-w-full">
      <Slider {...setting}>

        {
          properties.map((property, key) => {
            return (

              <div
                data-aos="fade-left"
                data-aos-anchor="#example-anchor"
                data-aos-offset="500"
                data-aos-duration="1000"
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
