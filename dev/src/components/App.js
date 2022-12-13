import React, {  } from 'react';
import { Workspace } from './workspace/Workspace';
import { SideBarTask } from './sideBarTask/sideBarTask';
import {NavBar} from './Nav/NavBar';


import "./app.css";
export default function App() {


  return (
    <div>
        <NavBar/>
        <div className='main'> 
            <div>
              <SideBarTask/>
            </div> 
            
            <div>
              <Workspace/>
            </div>  
        </div>
      </div>

  );
}
