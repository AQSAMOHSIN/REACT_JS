import React,{Component} from "react";
import ReactDOM from "react-dom";
import "./Demo.css";
import Avatar from "./avatar";
import "tachyons";
import avatar from "./avatar";



class Demo extends Component{

       constructor() {
                super();
                this.state={
        names:"THIS IS AVATAR WORLD"
}}

namechange()
{
        this.setState({
                names:"you are part of aqsa team"
        })
}
render(){
       
        const arraylist=[
                { id:1,
                name:"aqsa",
                work:"web developer"
        
            },
            { id:2,
                name:"vinod",
                work:"frontend devep"
        
            },
            { id:3,
                name:"sufyan",
                work:"backend devop"
        
            },
            { id:4,
                name:"usama",
                work:"android devep"
        
            }
        
        ]

        const list = arraylist.map((e,i)=>{

                return <Avatar key={i} id={e.id} name={e.name} work={e.work}/>
        }) 

        return <div className="kon">
                <h1>{this.state.names}</h1>
               {list}
                <button type="submit" onClick={()=>this.namechange() }>SUSCRIBE</button>

        </div>
        
}}

export default Demo 