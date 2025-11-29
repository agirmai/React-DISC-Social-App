import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HeaderTab from './HeaderTab';
import ProfileButton from './ProfileButton';
import FooterTab from './FooterTab';
import YourProfile from './YourProfile';


function Home() {
    const [count, setCount] = useState(0)
    return(
    <div className="App">
      <HeaderTab />
      <div className="main-layout">
      <YourProfile />
      <div className="container">
      <div className="profile-grid">
        <ProfileButton name="JoJo" email="frontpage@example.com"/>
        <ProfileButton name="Abem" email="frontpage@example.com"/>
        <ProfileButton name="John" email="frontpage@example.com"/>
        <ProfileButton name="Mark" email="frontpage@example.com"/>
        <ProfileButton name="Ben" email="frontpage@example.com"/>
        <ProfileButton name="Dove" email="frontpage@example.com"/>
        <ProfileButton name="Lisa" email="frontpage@example.com"/>
        <ProfileButton name="Kenpachi" email="frontpage@example.com"/>
        <ProfileButton name="Jessie" email="frontpage@example.com"/>
      </div>
      </div>
      </div>
      <FooterTab />
    </div>
    );
}

export default Home