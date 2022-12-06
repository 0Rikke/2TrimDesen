import React from "react";


export const Task =({taskName,taskColor})=>{

    if(taskColor === 'high'){
        taskColor = 'red'
    }else if (taskColor === 'medium'){
        taskColor = 'yellow'
    }else{
        taskColor = 'green'
    }
    
    const task ={
        // textAlign:"center",
        padding:"10px",
        color:"white",
        fontSize:"25px",
        backgroundColor: taskColor,
        margin:"20px",
       
    }


    return(
        <div>
            <div style={task}>
                <p style={{textAlign:"end"}}>{taskName}</p>  
                <i >star</i>
            </div>
         
        </div>
        
    )
}