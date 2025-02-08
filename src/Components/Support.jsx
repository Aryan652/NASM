import React from "react";

const Support = () => {
  return (
    <section className="w-full mt-8 md:mt-16 bg-[#F1F7FF] overflow-hidden">
      <div className="w-full max-w-[1600px] mx-auto px-6 py-24 flex items-center justify-between gap-10 flex-col md:flex-row">
        <img
          src="support.png"
          alt="image"
          className="w-full md:w-[550px] bg-cover"
        />

        <div className="w-full md:w-[45%]">
          <h4 className="text-[16px] md:text-[20px] text-textColor font-[500]">
            Contact Us
          </h4>
          <h2 className="text-[20px] md:text-[30px] text-textColor font-[700] mt-5">
            Get in Touch
          </h2>
          <p className="text-[14px] md:text-[18px] font-[500] text-textColor mt-3 mb-8">
            We're here to help! Contact us for any inquiries or assistance.
          </p>

          <div className="flex flex-col space-y-4">
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010 .456c.115.523.547.946 1.067 1.067l5.423 2.25a1.012 1.012 0 01.455 0l5.423-2.25a1.012 1.012 0 011.067-.455M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5-5a7 7 0 10-14 0 7 7 0 0014 0z" />
              </svg>
              <a href="tel:+9779810552500" className="text-[14px] md:text-[18px] font-[500] text-brandColor hover:underline">
                +977 9810552500
              </a>
            </div>

            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8.46A5.119 5.119 0 018.25 3h7.5A5.119 5.119 0 0118.75 8.46M3 12A5.119 5.119 0 018.25 6h7.5A5.119 5.119 0 0118.75 12M3 15.54A5.119 5.119 0 018.25 9h7.5A5.119 5.119 0 0118.75 15.54m0 0L21 12a9 9 0 11-18 0" />
              </svg>
              <a href="mailto:NationalAcademy.rbb@gmail.com" className="text-[14px] md:text-[18px] font-[500] text-brandColor hover:underline">
              <span className="text-[14px] md:text-[18px] font-[500] text-brandColor hover:underline">
                NationalAcademy.rbb@gmail.com
              </span>
              </a>
            </div>

            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.172 21m0 0L9.75 17.573m2.928 2.928L18 14.5m-4.878 4.878L12 21m0 0L7.122 16.122" />
              </svg>
              <span className="text-[14px] md:text-[18px] font-[500] text-textColor">
              Sansari Maisthan, Main Road, 
              Biratnagar, Morang
              </span>
            </div>
          </div>
          <span className="text-[14px] md:text-[15px] font-[400] text-textColor">
                <br></br>If Interested Leave us message<br></br>
              </span>
          <button className="py-3 px-6 bg-brandColor rounded-3xl text-[#fff] mt-8">
            Leave a Message
          </button>
        </div>
      </div>
    </section>
  );
};

export default Support;
