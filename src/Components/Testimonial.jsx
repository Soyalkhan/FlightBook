import React from "react";
import Slider from "react-slick";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const TestimonialSlider = () => {
  const reviews = [
    {
      id: 1,
      name: "Neeraj Arora",
      review:
        "Flyanza made my travel experience so smooth and hassle-free. Highly recommended!",
      rating: 5,
    },
    {
      id: 2,
      name: "Nikki Patel",
      review:
        "I was amazed by the deals I got! The booking process was so quick and easy.",
      rating: 4.5,
    },
    {
      id: 3,
      name: "Reen Chaudhary",
      review:
        "Good service but the support team took a while to respond. Still, great overall!",
      rating: 4,
    },
    {
      id: 4,
      name: "Amit Kumar Yadav",
      review:
        "The app is super user-friendly, and I got amazing discounts on flights.",
      rating: 5,
    },
    {
      id: 5,
      name: "Soyal Khan",
      review:
        "Fantastic customer service and the app is super easy to navigate. Highly recommended!",
      rating: 5,
    },
  ];

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<FaStar key={i} className="text-yellow-500" />);
      } else if (i - 0.5 === rating) {
        stars.push(<FaStarHalfAlt key={i} className="text-yellow-500" />);
      } else {
        stars.push(<FaRegStar key={i} className="text-yellow-500" />);
      }
    }
    return stars;
  };

  const settings = {
    dots: false, // Hide navigation dots
    infinite: true,
    speed: 500,
    slidesToShow: 2, // Show 2 slides in desktop
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000, // Auto-slide every 5 seconds
    responsive: [
      {
        breakpoint: 768, // Mobile breakpoint
        settings: {
          slidesToShow: 1, // Show 1 slide in mobile
        },
      },
    ],
  };

  return (
    <div className="p-8 md:p-16 bg-gray-50 ">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
        What Our Customers Say
      </h2>
      <Slider {...settings}>
        {reviews.map((review) => (
          <div
            key={review.id}
            className="p-6 mx-4 bg-gray-50  shadow-md "
          >
            <h3 className="text-xl font-semibold mb-2">{review.name}</h3>
            <div className="flex items-center mb-4">{renderStars(review.rating)}</div>
            <p className="text-gray-600">{review.review}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TestimonialSlider;
