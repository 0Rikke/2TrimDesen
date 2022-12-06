import React from "react";

const title ={
    
    backgroundColor:"#111",
    color:"white",
    textAlign:"center",
    width:'70vw',
    border:"solid 1px black",
    height:"7vh",
    borderTopLeftRadius:"7px",
    borderTopRightRadius:"7px"


}
export const Title = ({categories})=>{

    // console.log(categories)
    return(
        <div style={title}>
            <h1>{categories.projectName}</h1>
        </div>
    )
}