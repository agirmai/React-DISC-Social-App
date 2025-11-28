import './footertab.css';

function FooterTab() {
    return (
        <footer>
  <nav className="footer-bar">
    <ul className="footer-list">
      <li className="footer-left">
      <a href= "#top" className="footer footer-link">Social Medias</a>
      </li>
      <li className="footer-center">
      <a href= "#top" className="footer footer-link button">Sign In</a>
      <a href= "#top" className="footer footer-link button">Register</a>
      </li>
      <li className="footer-right">
      <a href= "#top" className="footer footer-link">Help</a>
      </li>
    </ul>
  </nav>
</footer>
    );
}
export default FooterTab;