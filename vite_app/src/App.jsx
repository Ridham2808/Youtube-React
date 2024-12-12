import React, { useState } from 'react';
import Sidebar from './Componants/Sidebar';
import Body from './Componants/Body';
import './App.css'

function App() {
  const [videoCategory, setVideoCategory] = useState("random videos");

  return (
    <div className="app">
      <Sidebar setVideoCategory={setVideoCategory} />
      <Body videoCategory={videoCategory} />
    </div>
  );
}

export default App;
