import React from "react";

export const Task =({taskName,taskColor})=>{

    const task ={
        // textAlign:"center",
        padding:"10px",
        color:"white",
        fontSize:"25px",
        backgroundColor: taskColor,
        margin:"20px",
       
    }

    // const star ={
    //     // position:"relative",
    //     // overflow:"hidden",
    //     // bottom:"0px",
    //     // right:"0px"
    // }
    return(
        <div>
            <div style={task}>
                <p style={{textAlign:"end"}}>{taskName}</p>  
                <i >star</i>
            </div>
         
        </div>
        
    )
}