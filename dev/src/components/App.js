import React, { useState } from 'react';
import { Workspace } from './workspace/Workspace';
import { SideBarTask } from './sideBarTask/sideBarTask';
import {NavBar} from './Nav/NavBar';
import { BottomGadg } from './Gadgets/BottomGadg';
import Context from './Context';
import "./app.css";
export default function App() {
  const [select, setSelect] = useState(false);

  return (
    <Context.Provider value={[select, setSelect]}>
        <NavBar/>
        <div className='main'> 
            <div>
              <SideBarTask/>
            </div> 
            
            <div>
              <Workspace/>
            </div>  
        </div>

    <BottomGadg/>
        
    </Context.Provider>
  );
}
