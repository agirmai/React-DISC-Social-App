import './headercss.css';

function HeaderTab() {
    return(
        <header className="nav-bar" id="top">
    <div className="nav-name">
      <h1 className="title">WhosOnNU</h1>
    </div>
      <ul className="nav-list">
        <li><a href= "#top" className="header link">Home</a></li>
        <li><a href= "#top" className="header link">Explore</a></li>
        <li><a href= "#top" className="header link">Me</a></li>
        <li><a href= "#top" className="header link">Msgs</a></li>
      </ul>
</header>
    );
}

export default HeaderTab;