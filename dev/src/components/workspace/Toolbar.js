import React from "react";
import { Button } from "../button/Button";
const style ={
    display:"flex",
    border:"solid 1px black",
    padding:"3vh",
    overflow:"hidden",
    margin:"10px",
    textAlign:"center",
    justifyContent:"center",

}
export const Toolbar = ()=>{
    return(
        <div>
            <div style={style}>
                <Button/>
                <Button/>
            </div>
        </div>
        
    )
}