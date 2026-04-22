/* components.js — shared nav and footer injected on all pages */

const NAV_HTML = `
<nav class="site-nav" aria-label="Main navigation">
  <div class="nav-inner">
    <a href="index.html" class="nav-logo">
      <div class="nav-logo-mark">BX</div>
      <span class="nav-logo-text">Bx Realty</span>
    </a>
    <ul class="nav-links" id="nav-links">
      <li><a href="index.html">Home</a></li>
      <li><a href="listings.html">Listings</a></li>
      <li><a href="services.html">Services</a></li>
      <li><a href="pricing.html">Pricing</a></li>
      <li><a href="team.html">Our Team</a></li>
      <li><a href="blog.html">News</a></li>
      <li><a href="contact.html">Contact</a></li>
    </ul>
    <a href="appraisal.html" class="btn btn-primary nav-cta" style="display:none;" id="nav-appraisal-btn">Get Appraisal</a>
    <button class="nav-hamburger" aria-label="Toggle menu" onclick="toggleMenu()">
      <span></span><span></span><span></span>
    </button>
  </div>
</nav>`;

const FOOTER_HTML = `
<div class="cta-bar">
  <p>Ready to make a move? Call Ellie today — <a href="tel:0498193223">0498 193 223</a></p>
</div>
<footer class="site-footer">
  <div class="footer-inner">
    <div class="footer-grid">
      <div class="footer-brand">
        <div class="footer-logo-mark">BX</div>
        <p>Bx Realty is a dedicated real estate agency serving Bathurst and the surrounding region. We deliver honest, professional property services for buyers, sellers, and investors.</p>
        <div class="social-links">
          <a href="https://www.instagram.com/ellie_agentchapman_realtor/" class="social-link" aria-label="Instagram" target="_blank" rel="noopener">&#x1F4F7;</a>
          <a href="https://www.facebook.com/profile.php?id=61573810007004" class="social-link" aria-label="Facebook" target="_blank" rel="noopener">f</a>
          <a href="https://www.tiktok.com/@ellie.begg.realto" class="social-link" aria-label="TikTok" target="_blank" rel="noopener">&#x266B;</a>
        </div>
      </div>
      <div class="footer-col">
        <h4>Navigate</h4>
        <ul>
          <li><a href="index.html">Home</a></li>
          <li><a href="listings.html">Listings</a></li>
          <li><a href="services.html">Services</a></li>
          <li><a href="pricing.html">Pricing</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Company</h4>
        <ul>
          <li><a href="team.html">Our Team</a></li>
          <li><a href="blog.html">News &amp; Insights</a></li>
          <li><a href="appraisal.html">Get an Appraisal</a></li>
          <li><a href="contact.html">Contact Us</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Contact</h4>
        <ul>
          <li><a href="tel:0498193223">0498 193 223</a></li>
          <li><a href="mailto:ellie@bxrealty.com.au">ellie@bxrealty.com.au</a></li>
          <li><a href="#">Bathurst, NSW 2795</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <span>&copy; 2025 Bx Realty. All rights reserved.</span>
      <span><a href="#">Privacy Policy</a> &nbsp;|&nbsp; <a href="#">Terms of Use</a></span>
    </div>
  </div>
  <div class="licence-bar">
    <div class="container">Licence No. [PENDING] &mdash; Bx Realty Pty Ltd &mdash; Member of the Real Estate Institute of NSW</div>
  </div>
</footer>`;

function injectComponents() {
  const navTarget = document.getElementById('site-nav');
  const footerTarget = document.getElementById('site-footer');
  if (navTarget) navTarget.innerHTML = NAV_HTML;
  if (footerTarget) footerTarget.innerHTML = FOOTER_HTML;

  // Mark active nav link
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(a => {
    if (a.getAttribute('href') === path) a.classList.add('active');
  });

  // Show appraisal CTA btn on desktop
  const btn = document.getElementById('nav-appraisal-btn');
  if (btn && window.innerWidth > 900) btn.style.display = 'inline-flex';
}

function toggleMenu() {
  const links = document.getElementById('nav-links');
  if (!links) return;
  const open = links.style.display === 'flex';
  links.style.display = open ? '' : 'flex';
  links.style.flexDirection = 'column';
  links.style.position = 'absolute';
  links.style.top = '68px';
  links.style.left = '0';
  links.style.right = '0';
  links.style.background = '#fff';
  links.style.padding = '16px 24px';
  links.style.borderBottom = '1px solid #eeede9';
  links.style.boxShadow = '0 4px 16px rgba(0,0,0,0.10)';
  links.style.zIndex = '99';
}

document.addEventListener('DOMContentLoaded', injectComponents);
