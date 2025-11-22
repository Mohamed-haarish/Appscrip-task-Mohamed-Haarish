import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>BE THE FIRST TO KNOW</h3>
          <p>Subscribe to our newsletter for updates and exclusive offers.</p>
          <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              className="newsletter-input"
              placeholder="Enter your email"
              aria-label="Email address"
            />
            <button type="submit" className="newsletter-button">SUBSCRIBE</button>
          </form>
        </div>

        <div className="footer-section">
          <h3>CONTACT US</h3>
          <a href="mailto:contact@example.com">contact@example.com</a>
        </div>

        <div className="footer-section">
          <h3>CURRENCY</h3>
          <select aria-label="Currency selector" style={{ padding: '0.5rem', background: '#2a2a2a', color: 'white', border: '1px solid #444', width: '100%' }}>
            <option>USD</option>
            <option>EUR</option>
            <option>GBP</option>
          </select>
        </div>

        <div className="footer-section">
          <h3>WORLDWIDE SHIPPING</h3>
          <p>Free shipping on orders over $100</p>
        </div>

        <div className="footer-section">
          <h3>QUICK LINKS</h3>
          <a href="#about">About Us</a>
          <a href="#shipping">Shipping Policy</a>
          <a href="#returns">Returns</a>
          <a href="#faq">FAQ</a>
        </div>

        <div className="footer-section">
          <h3>FOLLOW US</h3>
          <div className="social-icons">
            <a href="#" className="social-icon" aria-label="Facebook">FB</a>
            <a href="#" className="social-icon" aria-label="Instagram">IG</a>
            <a href="#" className="social-icon" aria-label="Pinterest">PI</a>
            <a href="#" className="social-icon" aria-label="Twitter">TW</a>
          </div>
        </div>

        <div className="footer-section">
          <h3>WE ACCEPT</h3>
          <div className="payment-icons">
            <div className="payment-icon">VISA</div>
            <div className="payment-icon">MC</div>
            <div className="payment-icon">AMEX</div>
            <div className="payment-icon">PP</div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;

