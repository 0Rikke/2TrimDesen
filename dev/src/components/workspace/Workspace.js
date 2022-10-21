import React from "react";
import { Toolbar } from "./Toolbar";
import { Workarea } from "./Workarea";

export const Workspace = ()=>{
    return(
        <div>
            <Workarea/>
            <Toolbar/>
        </div>
    )
}