import Vector from "./Vector.svg";

const Toast=()=>{
    return(
        <div className="position:absolute w-128 h-128 rounded bg-regal-blue mb-4 ">
            <div className="flex">
            <div className="ml-20 mr-53 w-149 h-42 mt-4 font-inter-800 text-ms">Access Free Project Management Courses</div>
          <img src={Vector} alt="vector" className="ml-4"></img>
            </div>
            <div className="ml-20 mr-53 w-149 h-42 mt-4 font-thin-800 text-ms">
                 Access free courses 
            </div>
        </div>
    )
}

export default Toast;