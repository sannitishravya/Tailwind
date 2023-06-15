import ArrowMobile from "./ArrowMobile.png";
import Vector from "./Vector.svg";
import yellow from "./yellow.svg";
const MobileToast = () => {
  return (
    <div className="bg-gradient-to-r from-grad-one to-grad-two flex  absolute bottom-0 rounded-md border-borde border w-230 h-89 mb-4 ml-4 visible md:invisible">
      <div className="h-50 w-50 mr-4">
        <img
          src={yellow}
          alt="free"
          className="w-50 h-50 my-20px mr-5px ml-11px"
        ></img>
      </div>
      <div className="font-inter font-medium text-fs w-127 h-30 mt-16px leading-15 text-white">
        Access <span className="text-yelloww font-bold">Free</span> Project
        Management Courses
        <div className="font-inter font-bold underline text-fs  flex mt-12px">
          <a href="www">Explore Now</a>
          <img src={ArrowMobile} alt="arrow" className=" ml-11px" />
        </div>
      </div>
      <img
        src={Vector}
        alt="vector"
        className="w-6 h-6 mt-8px mr-8px absolute right-0"
      ></img>
    </div>
  );
};

export default MobileToast;
