import "./Nav.css";
function Nav(title) {
  return (
    <div className="body">
      <div className="nav">
        <div className="list">
          <a href="/" className="logo-main">
            Unimarct
          </a>
          <a className="search-button">Search</a>
          <a href="/" className="home-button">
            Home
          </a>
          <a className="company-button">Company</a>
          <a className="profile-icon">Profile</a>
        </div>
      </div>
    </div>
  );
}

export default Nav;
