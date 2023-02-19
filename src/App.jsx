import { useState } from "react";
import { Tldraw } from '@tldraw/tldraw'
import reactLogo from "./assets/react.svg";
import { invoke } from "@tauri-apps/api/tauri";
import "./App.css";

function App() {
 

 

  return (
    <div className="container">
      <Tldraw  />
      
    </div>
  );
}

export default App;
