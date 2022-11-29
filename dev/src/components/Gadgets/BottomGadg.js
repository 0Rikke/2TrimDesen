import React from "react";
import { Conf } from "./Conf";
import { Gadget } from "./Gadget";
const gad = {
    float:"right",
    display:"flex",
}
export const BottomGadg = ()=>{
    return(
        <div style={gad}>
            
            {/* buscar nas conf do user e fazer um foreach aqui pra cada gadget */}
            <Gadget/>
          
            
            <Conf/>
        </div>
    )
}