import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HeaderTab from './HeaderTab';
import ProfileButton from './ProfileButton';
import FooterTab from './FooterTab';
import YourProfile from './YourProfile';
import './profilebutton.css'

export default function Users() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`${import.meta.env.VITE_URL}/users`)
        .then(res => res.json())
        .then(data => {
            console.log("Fetched users:", data);
            setUsers(data);
            setLoading(false);
        })
        .catch(err => {
            console.error("Error fetching users: ", err);
            setLoading(false);
        });
    }, []);

    if (loading)
        return <div>Be patient, users loading........</div>;

    return (
        <div className="Page">
        <HeaderTab />
        <div className="container">
        <div className="profile-grid">
            {users.map(user => (
                <ProfileButton name={`${user.first_name} ${user.last_name}`}
                email = {user.email}
                />
            ))}
        </div>
        </div>
        <FooterTab />
        </div>

    )

}
