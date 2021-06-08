import react from "react";
import ReactDOM from "react-dom";
import "./avatar.css"
import "tachyons";

const avatar =(props)=>{
    return <div className="kon"> 
            <div className="style grow" >
                <img src={`//joeschmoe.io/api/v1/${props.name}`} alt="avatar" ></img>
                <p>{props.name}</p>
                <p>{props.work}</p>
            </div>
    </div>

}
export default avatar ;