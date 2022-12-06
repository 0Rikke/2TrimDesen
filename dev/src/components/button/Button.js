import React from "react";
import { Icon } from "./Icon";

const buttonDIv ={
    marginLeft:"10px",
}
const button={
    width:"95px"
}
export const Button = ({onClick, name})=>{

    
    return(
        
            <button onClick={onClick}style={button}>
                <Icon icon={name}/>
            </button>

    )
}