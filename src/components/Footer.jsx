import React from "react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-logo-section">
        <p className="footer-logo">novatra</p>
        <div className="footer-icon">
          <ion-icon class="footer-social-icon" name="logo-instagram"></ion-icon>
          <ion-icon class="footer-social-icon" name="logo-tiktok"></ion-icon>
        </div>
        <p className="footer-contact-info">info@novatra.com</p>
        <p className="footer-contact-info">+1 (438)-928-6809</p>
        <p className="footer-copyright">
          Copyright&copy; 2025 by novatra.Inc. All rights reserved.
        </p>
      </div>

      <div className="footer-info-section">
        <div className="footer-info">
          <p className="footer-info-title">Company</p>
          <ul>
            <li className="footer-info-list">About novatra</li>
            <li className="footer-info-list">For business</li>
            <li className="footer-info-list">Develop partners</li>
            <li className="footer-info-list">Careers</li>
          </ul>
        </div>
        <div className="footer-info">
          <p className="footer-info-title">Resources</p>
          <ul>
            <li className="footer-info-list">Helper center</li>
            <li className="footer-info-list">Privacy & terms</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
