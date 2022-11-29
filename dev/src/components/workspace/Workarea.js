import React from "react";
const workarea ={
    // float:"right",
    border:"solid 1px black",
    display:"flex",
    margin:"10px",
    alignItens:"center",
    justifyContent:"center",
    padding:"190px",
    width:"500px"
    
}
export const Workarea = ()=>{
    return(
        <div>
            <div style={workarea}>
                Work Area
            </div>
        </div>
    )
}