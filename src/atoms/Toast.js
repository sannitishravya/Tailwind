import Arrow2 from "./Arrow2.svg";
import Group from "./Group.png";
import Maskgroup from "./Maskgroup.svg";
import Vector from "./Vector.svg";

const Toast = () => {
  return (
    <div className="position:absolute w-287 h-100 rounded bg-regal-blue mb-4 absolute right-0 bottom-0 mr-20  flex invisible md:visible">
      <div className="w-71 h-44 ml-14px ">
        <img src={Group} alt="group" className="absolute -top-8"></img>

        <img
          src={Maskgroup}
          alt="maskgroup"
          className="absolute bottom-0 left-0"
        ></img>
      </div>
      <div className="ml-16 w-149 h-42 mt-16px  font-inter text-white font-medium text-ms">
        Access <span className="text-yelloww font-bold">Free</span> Project
        Management Courses
        <div className="flex mt-3   font-inter text-fs  font-bold  leading-12 underline">
          <a href="www">Access free Courses</a>
          <img src={Arrow2} alt="arrow2" className="ml-11px"></img>
        </div>
      </div>
      <img
        src={Vector}
        alt="vector"
        className="ml-4 w-10 h-10 mt-16px mr-16px absolute right-0"
      ></img>
    </div>
  );
};

export default Toast;
