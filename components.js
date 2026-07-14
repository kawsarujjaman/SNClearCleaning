(function () {
  const headerMarkup = `
  <!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>SN Clear Contracting and Cleaning Services | Qatar</title>
    <link rel="stylesheet" href="styles.css" />
    </head>
    <body>

    <header>
      <div class="container navbar">
    
       <a class="logo" href="index.html"><img width="120" height="80"  src="./src/img/logo.webp"></a>


        <nav>
          <ul>
            <li><a data-nav href="index.html">Home</a></li>
            <li><a data-nav href="about.html">About Us</a></li>
            <li><a data-nav href="services.html">Services</a></li>
            <li><a data-nav href="contact.html">Contact Us</a></li>
          </ul>
        </nav>
        <a class="button" href="https://wa.me/+97466731916" target="_blank" rel="noreferrer">WhatsApp Us</a>
      </div>
    </header>
  `;

  const footerMarkup = `
    <footer>
      <div class="container footer-top">
        <div class="footer-grid">
          <div>
            <h3>SN Clear Contracting and Cleaning Services</h3>
            <p>Premium home cleaning across Qatar with expert sofa, mattress, carpet, and curtain care.</p>
          </div>
          <div>
            <h3>Quick links</h3>
            <ul>
              <li><a href="index.html">Home</a></li>
              <li><a href="about.html">About Us</a></li>
              <li><a href="services.html">Services</a></li>
              <li><a href="contact.html">Contact Us</a></li>
            </ul>
          </div>
        </div>
        <div class="footer-badges">
          <div class="trust-card">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2L4 5v6c0 5.55 3.84 10.74 8 11 4.16-.26 8-5.45 8-11V5l-8-3zm3.59 8.59L10 16.17l-1.59-1.58L9 13l1 1 4.59-4.59L16 9.59z"></path></svg>
            <span>Trusted in Qatar</span>
          </div>
          <div class="trust-card">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2L4 5v6c0 5.55 3.84 10.74 8 11 4.16-.26 8-5.45 8-11V5l-8-3zm3.59 8.59L10 16.17l-1.59-1.58L9 13l1 1 4.59-4.59L16 9.59z"></path></svg>
            <span>Secure Booking</span>
          </div>
        </div>
        <small>© 2026 SN Clear Contracting and Cleaning Services. <a href="privacy-policy.html">Privacy Policy</a></small>
      </div>
    </footer>
  `;

  function activateNav(pageName) {
    const links = document.querySelectorAll('[data-nav]');
    links.forEach((link) => {
      const href = link.getAttribute('href');
      if (href === pageName) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }

  document.addEventListener('DOMContentLoaded', () => {
    const headerContainer = document.getElementById('site-header');
    const footerContainer = document.getElementById('site-footer');
    const pageName = window.location.pathname.split('/').pop() || 'index.html';

    if (headerContainer) {
      headerContainer.innerHTML = headerMarkup;
    }

    if (footerContainer) {
      footerContainer.innerHTML = footerMarkup;
    }

    activateNav(pageName);
  });
})();
