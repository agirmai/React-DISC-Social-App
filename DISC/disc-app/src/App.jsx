import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HeaderTab from './HeaderTab';
import ProfileButton from './profileButton';
import FooterTab from './FooterTab';
import YourProfile from './YourProfile';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="App">
      <HeaderTab />
      <div className="main-layout">
      <YourProfile />
      <div className="profile-grid">
        <ProfileButton name="JoJo" hobbies="Fighting" interests="Marine Biology" want_to_try="Trip to Egypt"/>
        <ProfileButton name="Abem" hobbies="Eating" interests="Eating" want_to_try="Food"/>
        <ProfileButton name="John" hobbies="Cooking" interests="Food Reviews" want_to_try="5 Star Food"/>
        <ProfileButton name="Mark" hobbies="Writing" interests="Movies" want_to_try="Directing"/>
        <ProfileButton name="Ben" hobbies="Football" interests="Anime" want_to_try="Rugby"/>
        <ProfileButton name="Dove" hobbies="Bird Watching" interests="Sculpting" want_to_try="Pottery"/>
        <ProfileButton name="Lisa" hobbies="Snowboarding" interests="Sports" want_to_try="Sailing"/>
        <ProfileButton name="Kenpachi" hobbies="Fighting" interests="Fighting" want_to_try="Fighting"/>
        <ProfileButton name="Jessie" hobbies="Swimming" interests="Water" want_to_try="Surfing"/>
      </div>
      </div>
      <FooterTab />
    </div>
    </>
  );
}

export default App
