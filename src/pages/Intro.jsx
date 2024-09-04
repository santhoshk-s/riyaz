// import CountUp from "react-countup";
// import { useRef } from "react";
import one from "../assets/images/img1.png"
import two from "../assets/images/img2.png"
import three from "../assets/images/img3.png"



const Intro = () => {
//   const countUpRef = useRef(null);

  return (
    <>
  {/* component */}
  <section>
    <div className="bg-white text-gray-700">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="flex flex-col w-full lg:w-1/3 justify-center items-start p-8">
          <h1 className="text-8xl md:text-5xl p-2 text-pink-400 tracking-loose font-qwitcher">
            About US
          </h1>
          <h2 className="text-3xl md:text-5xl leading-relaxed md:leading-snug mb-2">
          Products and Advanced IT Technology
          </h2>
          <p className="text-sm md:text-base text-gray-700 mb-4">
          Our Team Offers you an unprecedented, personal level of service while freeing up your resources to focus on growing your 
          <span className="font-bold text-black underline  decoration-[#79df13] underline-offset-8 ml-2">Business.</span> 
          We take responsibility for building custom software solutions that automate your 
                 business processes and improve <span className="font-bold text-black underline decoration-[#79df13] underline-offset-8">Efficiency.</span>
          </p>
          {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-5 text-center w-[89%] ">
                <div className=" bg-gray-50 border-2 border-gray-300 w-28 p-1 rounded-md">
                  <h2 className="uppercase font-bold text-[30px] leading-snug text-pink-300">
                    <CountUp
                      end={150}
                      duration={20}
                      separator=" "
                      suffix=" +"
                      ref={countUpRef}
                      onEnd={() => console.log("Completed Projects Counter Ended!")}
                      onStart={() => console.log("Completed Projects Counter Started!")}
                    />
                  </h2>
                  <h3 className="uppercase font-bold text-[16px] leading-snug text-[#407088]">
                    Completed <br /> Projects
                  </h3>
                </div>

                <div className="bg-gray-50 border-2 border-gray-300 w-28 p-1 rounded-md">
                  <h2 className="uppercase font-bold text-[30px] leading-snug text-pink-300">
                    <CountUp
                      end={91}
                      duration={30}
                      separator=" "
                      suffix=" +"
                      ref={countUpRef}
                      onEnd={() => console.log("Happy Clients Counter Ended!")}
                      onStart={() => console.log("Happy Clients Counter Started!")}
                    />
                  </h2>
                  <h3 className="uppercase font-bold text-[16px] leading-snug text-[#407088]">
                    Happy <br /> Clients
                  </h3>
                </div>

                <div className="bg-gray-50 border-2 border-gray-300 w-28 p-1 rounded-md">
                  <h2 className="uppercase font-bold text-[30px] leading-snug text-pink-300">
                    <CountUp
                      end={110}
                      duration={25}
                      separator=" "
                      suffix=" +"
                      ref={countUpRef}
                      onEnd={() => console.log("Customer Service Counter Ended!")}
                      onStart={() => console.log("Customer Service Counter Started!")}
                    />
                  </h2>
                  <h3 className="uppercase font-bold text-[16px] leading-snug text-[#407088]">
                    Customer <br />
                    Service
                  </h3>
                </div>
              </div> */}
        </div>
        <div className="p-8 mt-12 mb-6 md:mb-0 md:mt-0 ml-0 md:ml-12 lg:w-2/3  justify-center">
          <div className="h-48 flex flex-wrap content-center">
            <div>
              <img
                className="inline-block w-48 h-60 mt-28 hidden xl:block"
                src={two}
              />
            </div>
            <div>
              <img
                className="inline-block w-96 h-full mt-24 md:mt-0 p-8 md:p-0"
                src={one}
              />
            </div>
            <div>
              <img
                className="inline-block w-48 h-60 mt-28 hidden lg:block"
                src={three}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</>

  )
}
export default Intro