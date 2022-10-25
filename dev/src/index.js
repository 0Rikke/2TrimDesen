import React from 'react';
import ReactDOM from 'react-dom/client';
import { Workspace } from './components/workspace/Workspace';
import {NavBar} from './components/Nav/NavBar';
import { BottomGadg } from './components/Gadgets/BottomGadg';
import './index.css'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NavBar/>
    <Workspace/>
    <BottomGadg/>

  </React.StrictMode>
);

