import Arrow2 from "./Arrow2.svg";
import Group from "./Group.png";
import Maskgroup from "./Maskgroup.svg";
import Vector from "./Vector.svg";
import rectangle from"./Rectangle.png";
import rectangle0 from "./Rectangle0.png";
const Toast = ({cardSubtitle,cardTitle,isMobile}) => {
  return (
    <div className="position:absolute w-287p h-100p rounded bg-regal-blue mb-4 absolute right-0 bottom-0 mr-20  flex invisible md:visible">
      <div className="w-71p h-44p ml-14p ">
        <img src={Group} alt="group" className="absolute -top-8"></img>
        <img
          src={rectangle0}
          alt="maskgroup"
          className="absolute bottom-0 mb-10"
        ></img>

        <img
          src={Maskgroup}
          alt="maskgroup"
          className="absolute bottom-0 left-0"
        ></img>
                <img
          src={rectangle}
          alt="maskgroup"
          className="absolute bottom-0 ml-7 mb-2"
        ></img>

      </div>
      <div className="ml-16 w-149p h-42p mt-16p  font-inter text-white font-medium text-ms bold-second-word" id="text">
        {cardTitle}
        <div className="flex mt-3   font-inter text-fs  font-bold  leading-12 underline">
          <a href="www">{cardSubtitle}</a>
          <img src={Arrow2} alt="arrow2" className="ml-11p"></img>
        </div>
      </div>
      <img
        src={Vector}
        alt="vector"
        className="ml-4 w-10p h-10p mt-16p mr-16p absolute right-0"
      ></img>
    </div>
  );
};

export default Toast;
