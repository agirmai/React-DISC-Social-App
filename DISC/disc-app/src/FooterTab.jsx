import './footertab.css';

function FooterTab() {
    return (
        <footer>
  <nav className="nav-bar">
    <ul className="nav-list">
      <li className="nav-left">
      <a href= "#top" className="footer link">Social Medias</a>
      </li>
      <li className="nav-center">
      <a href= "#top" className="footer link button">Sign In</a>
      <a href= "#top" className="footer link button">Register</a>
      </li>
      <li className="nav-right">
      <a href= "#top" className="footer link">Help</a>
      </li>
    </ul>
  </nav>
</footer>
    );
}
export default FooterTab;