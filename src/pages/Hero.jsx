import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import hero1 from '../assets/images/hero1.jpg';
import hero2 from '../assets/images/hero2.jpg';
import hero3 from '../assets/images/hero3.jpg';
import hero4 from '../assets/images/hero4.jpg';

const slidesData = [
  {
    title: "Innovate.<br />Transform.<br />Succeed.",
    description: "Empowering businesses with cutting-edge solutions for a digital future.",
    backgroundImage: hero1,
    buttons: [
      { text: "Get Started", link: "#", style: "bg-white text-blue-900" },
      { text: "Learn More", link: "#", style: "border-2 border-white text-white" },
    ],
    features: [
      { iconColor: "text-yellow-400", text: "Lightning-fast Performance" },
      { iconColor: "text-green-400", text: "Bank-grade Security" },
      { iconColor: "text-purple-400", text: "AI-powered Insights" },
    ],
  },
  {
    title: "Experience.<br />Excellence.<br />Growth.",
    description: "We deliver outstanding digital services to fuel your business growth.",
    backgroundImage: hero2,
    buttons: [
      { text: "Discover Now", link: "#", style: "bg-white text-blue-900" },
      { text: "Our Services", link: "#", style: "border-2 border-white text-white" },
    ],
    features: [
      { iconColor: "text-red-400", text: "24/7 Customer Support" },
      { iconColor: "text-green-400", text: "Scalable Solutions" },
      { iconColor: "text-blue-400", text: "Innovative Technology" },
    ],
  },
  {
    title: "Connect.<br />Inspire.<br />Thrive.",
    description: "Join us in shaping the future with our cutting-edge technology and solutions.",
    backgroundImage: hero3,
    buttons: [
      { text: "Join Us", link: "#", style: "bg-white text-blue-900" },
      { text: "Contact Us", link: "#", style: "border-2 border-white text-white" },
    ],
    features: [
      { iconColor: "text-teal-400", text: "Global Impact" },
      { iconColor: "text-orange-400", text: "Collaborative Innovation" },
      { iconColor: "text-blue-400", text: "Sustainable Growth" },
    ],
  },
  {
    title: "Empower.<br />Achieve.<br />Excel.",
    description: "Transform your business with innovative technology and solutions.",
    backgroundImage: hero4,
    buttons: [
      { text: "Get Started", link: "#", style: "bg-white text-blue-900" },
      { text: "Learn More", link: "#", style: "border-2 border-white text-white" },
    ],
    features: [
      { iconColor: "text-teal-400", text: "Innovative Solutions" },
      { iconColor: "text-purple-400", text: "Customizable Services" },
      { iconColor: "text-red-400", text: "Dedicated Support" },
    ],
  },
];

const HeroSection = () => {
  return (
    <main>
      <section className="relative overflow-hidden h-screen">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={10}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          loop={true}
          className="relative bg-gradient-to-br text-white"
          style={{ transitionDuration: '800ms', transitionTimingFunction: 'ease-in-out' }}
        >
          {slidesData.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="absolute inset-0 bg-black opacity-50"></div>
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${slide.backgroundImage})` }}
              ></div>
              <div className="container mx-auto px-4 py-24 md:py-32 relative z-10">
                <div className="flex flex-col md:flex-row items-center justify-between">
                  <div className="w-full md:w-1/2 mb-12 md:mb-0">
                    <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight" dangerouslySetInnerHTML={{ __html: slide.title }}></h1>
                    <p className="text-xl mb-8 text-gray-300">{slide.description}</p>
                    <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                      {slide.buttons.map((button, idx) => (
                        <a
                          key={idx}
                          href={button.link}
                          className={`${button.style} font-semibold px-8 py-3 rounded-full hover:bg-opacity-75 transition duration-800 ease-in-out text-center`}
                        >
                          {button.text}
                        </a>
                      ))}
                    </div>
                  </div>
                  <div className="w-full md:w-1/2 md:pl-12">
                    <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl p-8 shadow-2xl">
                      <h2 className="text-2xl font-semibold mb-6">Why You Should Choose Us?</h2>
                      <ul className="space-y-4">
                        {slide.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center">
                            <svg
                              className={`w-6 h-6 mr-3 ${feature.iconColor}`}
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M13 10V3L4 14h7v7l9-11h-7z"
                              ></path>
                            </svg>
                            <span>{feature.text}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0">
                <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
                    fill="white"
                  />
                </svg>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </main>
  );
};

export default HeroSection;
