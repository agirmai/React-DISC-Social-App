import { useState } from "react";
import { useEffect } from "react";

import './profilebutton.css';

function ProfileButton({name, email}) {
    const [isFavorited, setIsFavorited] = useState(false);
    const [count, setCount] = useState(0);
    useEffect(() => {
        console.log("Amount favorited: ", count);
    }, [count]);
    return (
        <div className={`profilebox container ${isFavorited ? "favorited" : ""}`}
        onClick={() => {
            setIsFavorited(!isFavorited);
            setCount(count + 1);
        }}
        >
    <img src="https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?semt=ais_hybrid&w=740&q=80" alt="small pfp of other"/>
    <ul className="profile">
      <li className="profile-name">{name}</li>
      <li className="profile-info">Email: {email}</li>
    </ul>
  </div>
    );
}

export default ProfileButton;
