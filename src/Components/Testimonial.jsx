import React from "react";
import Slider from "react-slick";
import { FaStar, FaStarHalfAlt, FaRegStar, FaCheckCircle } from "react-icons/fa";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import LiveChatButton from "../Components/LiveChatButton";
const TestimonialSlider = () => {
  const reviews = [
    {
      id: 1,
      name: "Neeraj Arora",
      review:
        "Booked my Delhi to Mumbai flight in just 2 minutes! Got an amazing deal and the e-ticket came instantly. Flyanza is my go-to for flight bookings.",
      rating: 5,
    },
    {
      id: 2,
      name: "Priya Sharma",
      review:
        "Found the cheapest flights to Goa for my family vacation. The price comparison feature saved me over ₹5000. Highly recommended!",
      rating: 5,
    },
    {
      id: 3,
      name: "Rajesh Kumar",
      review:
        "Excellent service! Booked international flights to Dubai and the whole process was seamless. Great discounts too!",
      rating: 4.5,
    },
    {
      id: 4,
      name: "Anita Desai",
      review:
        "I travel frequently for work and Flyanza always finds me the best flight deals. Their customer support helped me reschedule my ticket hassle-free.",
      rating: 5,
    },
    {
      id: 5,
      name: "Vikram Singh",
      review:
        "Booked last-minute flights to Bangalore and got a great price. The app is super easy to use and payment was secure.",
      rating: 4.5,
    },
    {
      id: 6,
      name: "Meena Iyer",
      review:
        "Best platform for domestic flight bookings! Got my Chennai to Kolkata tickets at the lowest price. Will use again!",
      rating: 5,
    },
    {
      id: 7,
      name: "Amit Patel",
      review:
        "Very impressed with the flight options available. Booked round-trip tickets to Jaipur and the prices were unbeatable.",
      rating: 4,
    },
    {
      id: 8,
      name: "Sunita Reddy",
      review:
        "Smooth booking experience for my Hyderabad to Delhi flight. Instant confirmation and great customer service!",
      rating: 5,
    },
    {
      id: 9,
      name: "Karan Malhotra",
      review:
        "Flyanza helped me find affordable business class tickets. The exclusive deals are amazing. Highly satisfied!",
      rating: 5,
    },
    {
      id: 10,
      name: "Deepika Nair",
      review:
        "Booked flights for my entire family to Kerala. The group booking feature made it so convenient. Great prices!",
      rating: 4.5,
    },
    {
      id: 11,
      name: "Rohit Gupta",
      review:
        "Got amazing discounts on my Pune to Lucknow flight. The booking process was quick and the e-ticket arrived immediately.",
      rating: 5,
    },
    {
      id: 12,
      name: "Kavita Joshi",
      review:
        "Excellent flight booking platform! Found cheap tickets to Singapore for my honeymoon. Thank you Flyanza!",
      rating: 5,
    },
    {
      id: 13,
      name: "Suresh Menon",
      review:
        "Reliable service for all my flight bookings. The price alerts feature helped me grab the best deal to Bangkok.",
      rating: 4.5,
    },
    {
      id: 14,
      name: "Pooja Agarwal",
      review:
        "Booked my first international flight through Flyanza. The process was simple and I got a great price for my London trip!",
      rating: 5,
    },
    {
      id: 15,
      name: "Manish Tiwari",
      review:
        "Super fast booking! Got my Indore to Mumbai flight tickets in minutes. The app works flawlessly.",
      rating: 4,
    },
    {
      id: 16,
      name: "Lakshmi Krishnan",
      review:
        "Amazing deals on flight tickets! Saved so much on my Coimbatore to Delhi booking. Will definitely recommend to friends.",
      rating: 5,
    },
    {
      id: 17,
      name: "Arjun Saxena",
      review:
        "The best flight booking experience I've had. Booked tickets to New York and got excellent rates. Very professional!",
      rating: 5,
    },
    {
      id: 18,
      name: "Sneha Kapoor",
      review:
        "Found last-minute flight deals to Amritsar. The customer support team was very helpful when I needed to modify my booking.",
      rating: 4.5,
    },
    {
      id: 19,
      name: "Vivek Choudhary",
      review:
        "Trustworthy platform for flight bookings. Booked multiple trips this year and always got the best prices. Highly satisfied!",
      rating: 5,
    },
    {
      id: 20,
      name: "Ritu Bansal",
      review:
        "Flyanza made booking international flights so easy. Got great deals on my Thailand trip. The cancellation policy is also very flexible.",
      rating: 4.5,
    },
    {
      id: 21,
      name: "Gaurav Mishra",
      review:
        "Excellent service! Booked emergency flight tickets and the support team helped me throughout. Quick and reliable!",
      rating: 5,
    },
    {
      id: 22,
      name: "Anjali Verma",
      review:
        "The flight search is so fast and shows all options clearly. Booked my Chandigarh to Bangalore tickets at a great price!",
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
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    cssEase: "ease-in-out",
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (

    <>
    <LiveChatButton/>
        <div className="p-8 md:p-16 bg-gray-50 " id="reviews">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
        What Our Customers Say
      </h2>
      <Slider {...settings}>
        {reviews.map((review) => (
          <div key={review.id} className="px-2 md:px-3 mb-4">
            <div className="bg-white rounded-lg shadow-md p-4 md:p-6 min-h-[180px] md:h-48 flex flex-col">
              <h3 className="text-lg md:text-xl font-semibold mb-2 flex items-center gap-2">
                {review.name}
                <FaCheckCircle className="text-blue-500 text-sm" title="Verified Customer" />
              </h3>
              <div className="flex items-center mb-2 md:mb-3">{renderStars(review.rating)}</div>
              <p className="text-gray-600 text-sm md:text-base flex-1 line-clamp-4 md:line-clamp-3">{review.review}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
    </>

  );
};

export default TestimonialSlider;
