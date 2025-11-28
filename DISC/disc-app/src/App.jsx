import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HeaderTab from './HeaderTab';
import ProfileButton from './ProfileButton';
import FooterTab from './FooterTab';
import YourProfile from './YourProfile';
import Users from './Users';
import Home from './Home';
import { Routes, Route} from 'react-router-dom'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Users" element={<Users />} />
    </Routes>
  );
}

export default App