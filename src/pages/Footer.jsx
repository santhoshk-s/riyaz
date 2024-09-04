// import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import Logo from "../assets/images/mlogo.png";
// import { NavLink } from "react-router-dom";

const Footer = () => {
    return (
      <>
        <footer className="w-full bg-[#0D1117]">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-4 lg:gap-8 py-14 max-w-xs mx-auto sm:max-w-2xl md:max-w-3xl lg:max-w-full">
              <div className="col-span-full mb-10 lg:col-span-2 lg:mb-0">
                <div className="bg-white rounded-md w-[285px] mb-10">
                  <img src={Logo} alt="Logo" />
                </div>
                <div className="flex mt-4 space-x-4 justify-center lg:justify-start sm:mt-0">
                  <a
                    href="javascript:;"
                    className="w-9 h-9 rounded-full bg-[#67F529] flex justify-center items-center hover:bg-indigo-600"
                  >
                    <FaFacebookF className="text-white" size={20} />
                  </a>
                  <a
                    href="javascript:;"
                    className="w-9 h-9 rounded-full bg-[#67F529] flex justify-center items-center hover:bg-indigo-600"
                  >
                    <FaInstagram className="text-white" size={20} />
                  </a>
                  <a
                    href="javascript:;"
                    className="w-9 h-9 rounded-full bg-[#67F529] flex justify-center items-center hover:bg-indigo-600"
                  >
                    <FaLinkedinIn className="text-white" size={20} />
                  </a>
                  <a
                    href="javascript:;"
                    className="w-9 h-9 rounded-full bg-[#67F529] flex justify-center items-center hover:bg-indigo-600"
                  >
                    <FaYoutube className="text-white" size={20} />
                  </a>
                </div>
              </div>
  
              <div className="lg:mx-auto text-center sm:text-left">
                <h4 className="text-lg text-white font-medium mb-7">Pages</h4>
                <ul className="text-sm transition-all duration-500">
                  <li className="mb-6">
                    <a href="javascript:;" className="text-white">
                      Home
                    </a>
                  </li>
                  <li className="mb-6">
                    <a href="javascript:;" className="text-white">
                      About Us
                    </a>
                  </li>
                  <li className="mb-6">
                    <a href="javascript:;" className="text-white">
                      Help
                    </a>
                  </li>
                  <li>
                    <a href="javascript:;" className="text-white">
                      Sales
                    </a>
                  </li>
                </ul>
              </div>
  
              <div className="lg:mx-auto text-center sm:text-left">
                <h4 className="text-lg text-white font-medium mb-7">Contact</h4>
                <ul className="text-sm transition-all duration-500">
                  <li className="mb-6">
                    <a href="javascript:;" className="text-white">
                      +971 555 696 711
                    </a>
                  </li>
                  <li className="mb-6">
                    <a href="javascript:;" className="text-white">
                      +971 429 454 38
                    </a>
                  </li>
                  <li className="mb-6">
                    <a href="javascript:;" className="text-white">
                      info@exceednetsec.com
                    </a>
                  </li>
                  <li>
                    <a href="javascript:;" className="text-white">
                      info@exceedme.com
                    </a>
                  </li>
                </ul>
              </div>
  
              <div className="lg:mx-auto text-center sm:text-left">
                <h4 className="text-lg text-white font-medium mb-7">Key Solutions</h4>
                <ul className="text-sm transition-all duration-500">
                  <li className="mb-6">
                    <a href="javascript:;" className="text-white">
                      Network Security
                    </a>
                  </li>
                  <li className="mb-6">
                    <a href="javascript:;" className="text-white">
                      Email Security
                    </a>
                  </li>
                  <li className="mb-6">
                    <a href="javascript:;" className="text-white">
                      Cloud Security
                    </a>
                  </li>
                  <li>
                    <a href="javascript:;" className="text-white">
                      Endpoint Security
                    </a>
                  </li>
                </ul>
              </div>
              <div className="lg:mx-auto text-center sm:text-left">
                    <h4 className="text-lg text-white font-medium mb-7">About Us</h4>
                    <p className="text-left text-white" >
                    Established in 2009 in the Middle East, Exceed NetSec specializes in advanced IT security and network solutions. 
                    </p>
                    {/* <ul class="text-sm  transition-all duration-500">
                        <li class="mb-6"><a href="javascript:;"  class="text-white hover:text-gray-900">News</a></li>
                        <li class="mb-6"><a href="javascript:;"  class=" text-white hover:text-gray-900">Tips & Tricks</a></li>
                        <li class="mb-6"><a href="javascript:;"  class=" text-white hover:text-gray-900">New Updates</a></li>
                        <li><a href="javascript:;"  class=" text-white hover:text-gray-900">Events</a></li>
                    </ul> */}
                </div>
            </div>
            <div className="py-7 border-t border-gray-200">
                <div className="flex items-center justify-center flex-col lg:justify-between lg:flex-row">
                    <span className="text-sm text-white "> © Copy rights Exceeded Netsec 2024 All rights reserved.</span>
                    <ul className="flex items-center gap-9 mt-4 lg:mt-0">

                        <li><a href="javascript:;"  className="text-sm text-gray-500"></a></li>
                    </ul>
                </div>
            </div>
          </div>
        </footer>
      </>
    );
  };
  
  export default Footer;
  
