import ArrowMobile from "./ArrowMobile.png";
import Vector from "./Vector.svg";
import yellow from "./yellow.svg";
const MobileToast = ({ isMobile, cardTitle, cardSubtitle }) => {
  return (
    <div className="bg-gradient-to-r from-grad-one to-grad-two flex  absolute bottom-0 rounded-md border-borde border w-230p h-89p mb-4 ml-4 visible md:invisible">
      <div className="h-50p w-50p mr-4">
        <img
          src={yellow}
          alt="free"
          className="w-50p h-50p my-20p mr-5p ml-11p"
        ></img>
      </div>
      <div className="font-inter font-medium text-fs w-127p h-30p mt-4 leading-15 text-white">
        Access <span className="text-yelloww font-bold">Free</span> Project
        Management Courses
        <div className="font-inter font-bold underline text-fs  flex mt-12p">
          <a href="www">Explore Now</a>
          <img src={ArrowMobile} alt="arrow" className=" ml-11p" />
        </div>
      </div>
      <img
        src={Vector}
        alt="vector"
        className="w-6p h-6p mt-8p mr-8p absolute right-0"
      ></img>
    </div>
  );
};

export default MobileToast;
