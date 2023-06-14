// import Outline from "./Outline"
import Border from "./Border";
import Outline from "./Outline";
import Primary from "./Primary"
import Dis from "./Dis";

const Variantp=(classs)=>{
    return(
        <div >
        { 
            classs.classs ==='primary' ? ( <Primary/> ) : classs.classs ==='outline' ? (<Outline/>) : classs.classs==="border" ? (<Border/>) : <Dis/>
        }
        </div>
    )
}
export default Variantp;