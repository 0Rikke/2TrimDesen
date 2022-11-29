import React from "react";

const title ={
    textAlign:"center",
    border:"solid 1px black"
}
export const Title = ({titulo})=>{
    return(
        <div style={title}>
            <h1>{titulo}</h1>
        </div>
    )
}