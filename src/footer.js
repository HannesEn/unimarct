import "./footer.css";
export function Footer({}) {
  return (
    <div className="footer-main">
      <div className="footer-logo">
        <a href="/" className="footer-logo-main">
          Unimarct
        </a>
      </div>
      <div className="footer-company">
        <span className="footer-company-title">Company</span>
        <span className="footer-company-items">
          <a>About</a>
          <a>Contact</a>
        </span>
      </div>
      <div className="footer-legal">
        <span className="footer-legal-title">Legal</span>
        <span className="footer-legal-items">
          <a>Cookie Policy</a>
          <a>Privacy Policy</a>
          <a>Terms of Service</a>
        </span>
      </div>
    </div>
  );
}
