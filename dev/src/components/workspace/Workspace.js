import React from "react";
import { Toolbar } from "./Toolbar";
import { Workarea } from "./Workarea";

const workspace = {
    // height:"800px",
    width:"800px"
}

export const Workspace = ()=>{
    return(
        <div>
            <Workarea/>
            <Toolbar/>
        </div>
    )
}