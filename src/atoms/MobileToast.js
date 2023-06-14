import Vector from "./Vector.svg";
import yellow from "./yellow.svg";
import Arrows from"./Arrows.svg";
const MobileToast = () => {
  return (
    <div className="bg-gradient-to-r from-grad-one to-grad-two flex justify-around position-absolute rounded-lg border-borde border-2 w-128 h-128 mb-4 ml-4">
      <div className="h-50 w-50">
        <img src={yellow} alt="free" className="w-50 h-50 my-5 mr-1 ml-3"></img>
      </div>
      <div className="font-inter text-fs w-127 h-30 mt-4 ml-px ">
        Access <span className="text-yelloww font-bold">Free</span> Project Management Courses
        <div className="font-inter underline text-fs  flex mt-3">
        <a href="www">
          Explore Now
        </a>
        <img src={Arrows} alt="arrow" className="w-8 h-4 ml-3 mt-2"/>
        </div>
      </div>
      <img src={Vector} alt="vector" className="w-6 h-6 mt-2 mr-2 "></img>
    </div>
  );
};

export default MobileToast;
