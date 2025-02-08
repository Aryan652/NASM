import React, { useEffect, useState } from "react";

// react icons
import { IoIosArrowDown } from "react-icons/io";

const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`${
        scrolling && "backdrop-blur-lg shadow-md"
      } fixed top-0 left-0 w-full max-w-[1600px] mx-auto px-6 py-3 items-left  gap-5 z-50 hidden justify-between md:flex`}
    >
      <div className="flex justify-start gap-4">
      <img src="/logo.png" alt="logo" className="w-[110px]" />
      <span className="text-brandColor left-4 font-[750] text-[10px] md:text-[30px] leading-[1rem] md:leading-[3rem]">National <br></br>Academy</span>
      </div>
     
      <ul className="flex items-center gap-12 font-[500] text-textColor z-50">
        <li>
          <a href="#home">Home</a>
        </li>
        <li className=" overflow-hidden hover:overflow-visible group relative">
          <a href="#Courses" className="flex items-center gap-3 " onClick={()=>{
            const targetElement = document.getElementById('contactfornow');
            if(targetElement){
              window.scrollTo({
                top: 3200,
                behavior: "smooth"
              });
            }
          }}>
            Courses{" "}
            {/* <IoIosArrowDown className=" group-hover:rotate-[180deg] transition-all duration-300" /> */}
          </a>

          {/* <div className="flex flex-col gap-5 w-[250px] shadow-drop p-6 translate-y-[100px] opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 absolute top-[25px] left-0 bg-[#fff]">
            <p className="hover:text-brandColor hover:tracking-wider transition-all duration-300 cursor-pointer">
              Web Development
            </p>
            <p className="hover:text-brandColor hover:tracking-wider transition-all duration-300 cursor-pointer">
              Machine Learning
            </p>
            <p className="hover:text-brandColor hover:tracking-wider transition-all duration-300 cursor-pointer">
              UI/UX Design
            </p>
            <p className="hover:text-brandColor hover:tracking-wider transition-all duration-300 cursor-pointer">
              AI Robotics
            </p>
          </div> */}
        </li>
        <li className=" overflow-hidden hover:overflow-visible group relative">
          <a href="#Article" className="flex items-center gap-3">
            Articles
            {/* <IoIosArrowDown className=" group-hover:rotate-[180deg] transition-all duration-300" /> */}
          </a>
          {/* <div className="flex flex-col gap-5 w-[250px] shadow-drop p-6 translate-y-[100px] opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 absolute top-[25px] left-0 bg-[#fff]">
            <p className="hover:text-brandColor hover:tracking-wider transition-all duration-300 cursor-pointer">
              Web Development
            </p>
            <p className="hover:text-brandColor hover:tracking-wider transition-all duration-300 cursor-pointer">
              Website SEO
            </p>
            <p className="hover:text-brandColor hover:tracking-wider transition-all duration-300 cursor-pointer">
              System Design
            </p>
            <p className="hover:text-brandColor hover:tracking-wider transition-all duration-300 cursor-pointer">
              Remote Job
            </p>
          </div> */}
        </li>
        <li>
          <a href="#Support" onClick={()=>{
            window.scrollTo({
              top : 4500,
              behavior: "smooth"
            });
          }}>Support</a>
        </li>

        <button className="py-2 px-6 bg-brandColor rounded-md text-[#fff]">
          Register Now
        </button>
      </ul>
    </nav>
  );
};

export default Navbar;
