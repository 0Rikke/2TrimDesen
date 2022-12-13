import React from "react";
// import { useEffect } from "react";
// import { useState } from "react";
import { Button } from "../button/Button";


const style ={
    display:"flex",
    padding:"1vw",
    overflow:"hidden",
    width:"68vw",
    backgroundColor:"#111",
    color:"white",
    marginTop:"15px",
    borderBottomLeftRadius:"7px",
    borderBottomRightRadius:"7px"
}

export const Toolbar = ({categories})=> {

    const func = ()=>{ window.alert("tarefas da categoria")};
    
    return (
        <div>
            <div style={style}>          
            {
                Object.keys(categories).map((key) =>{
                        if(categories[key] > 0){
                         return <Button key={key}name={key} onClick={func}/>
                        }                  
                })
            }
          </div>
        </div>
    )
}