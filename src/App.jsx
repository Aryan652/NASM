import React from "react";

// all components
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Company from "./Components/Company";
import CourseOutlet from "./Components/CourseOutlet";
import Status from "./Components/Status";
import Instructor from "./Components/Instructor";
import CourseCategory from "./Components/CourseCategory";
import JoinCommunity from "./Components/JoinCommunity";
import UpcomingWorkshop from "./Components/UpcomingWorkshop";
import Review from "./Components/Review";
import Support from "./Components/Support";
import Footer from "./Components/Footer";
import MobileNav from "./Components/MobileNav";
import Registration from "./Components/Registration";

const App = () => {
  return (
    <div className=" overflow-hidden">
      <MobileNav />
      <Navbar />
      <Hero />
      <Company />
      <Status />  
      <CourseOutlet />
    <div className="realtive">
        <Instructor />
      <img src="/CourseCategory/computersci.jpg" alt="shared img" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
        <JoinCommunity />
    </div>
      <CourseCategory />
      {/* <UpcomingWorkshop /> */}
      <Review />
      <Support />
      <Registration />
      <Footer />
    </div>
  );
};

export default App;
