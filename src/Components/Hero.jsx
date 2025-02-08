import React from "react";

const Hero = () => {
  return (
    <header className="flex items-center justify-between gap-8 w-full max-w-[1600px] mx-auto px-6 py-6 md:pt-36 pb-16 flex-col md:flex-row">
      <div>
        <h1 className=" text-textColor font-[700] text-[35px] md:text-[60px] leading-[3rem] md:leading-[4.5rem]">
          <span className="text-brandColor">Empower Future</span> <br></br>With Quality Education!
        </h1>
        <p className="text-[16px] md:text-[20px] font-[500] text-textColor mt-3 w-full md:w-[50%]">
        Your Journey to Excellence, Starts Here!
        </p>

        <div className="flex items-center gap-5 mt-8">
          <button className="py-2 px-6 bg-brandColor rounded-3xl text-[#fff]">
            Apply Now
          </button>
         
          <button className="py-2 px-6 border border-brandColor rounded-3xl text-brandColor" onClick={()=>{
            const targetElement = document.getElementById('contactfornow');
            if(targetElement){
              window.scrollTo({
                top: 4500,
                behavior: "smooth"
              });
              // console.log(targetElement.offsetTop)
            }
          }}>
            Contact Us
          </button>
      
          
        </div>
      </div>

      <img
        src="/heroImage.PNG"
        alt="hero image"
        className="w-full md:w-[600px]"
      />
    </header>
  );
};

export default Hero;
