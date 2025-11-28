import './headercss.css';
import { Link } from 'react-router-dom'

function HeaderTab() {
    return(
        <header className="nav-bar" id="top">
    <div className="nav-name">
      <h1 className="title">WhosOnNU</h1>
    </div>
      <ul className="nav-list">
        <li><Link to="/" className="header link">Home</Link></li>
        <li><Link to="/Users" className="header link">Explore</Link></li>
        <li><Link to="/me" className="header link">Me</Link></li>
        <li><Link to="/msgs" className="header link">Msgs</Link></li>
      </ul>
</header>
    );
}

export default HeaderTab;