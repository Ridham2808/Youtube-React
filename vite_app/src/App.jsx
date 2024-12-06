import { useState } from 'react'
import './App.css'
import Sidebar from './componants/Sidebar.jsx'
import Navebar from './Componants/Navebar.jsx'
import Body from './Componants/Body.jsx'

function App() {
  return (
    <>
      <Sidebar />
      <Navebar />
      <Body />
    </>
  )
}

export default App
