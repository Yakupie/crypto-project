<footer class="footer-container">
  <div class="footer-content">
    
    <div class="footer-top">
      <div class="info-section">
        <h3 class="title">Proje Hakkında</h3>
        <p class="description">
          Bu çalışma, <strong>Fırat Üniversitesi İstatistik Bölümü</strong> 
          kapsamında geliştirilen akademik bir veri analiz projesidir.
        </p>
        <div class="status-badge">
          <span class="pulse-icon"></span>
          Açık Kaynaklı Proje
        </div>
      </div>

      <div class="links-section">
        <h3 class="title">Bağlantılar</h3>
        <nav class="footer-nav">
          <a href="/">Ana Sayfa</a>
          <a href="https://github.com/Yakupie/crypto-project" target="_blank">GitHub Repo</a>
          <a href="https://www.firat.edu.tr/tr" target="_blank">Fırat Üniversitesi</a>
        </nav>
      </div>
    </div>

    <div class="divider"></div>

    <div class="footer-bottom">
      <div class="logo-area">
        <div class="logo-placeholder">
          <img src="/logo.webp" alt="Logo" />
        </div>
      </div>
      
      <div class="copyright">
        &copy; 2026 İstatistik Bölümü. Tüm hakları saklıdır.
      </div>
    </div>
  </div>
</footer>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@700;800&family=Inter:wght@500;600&display=swap');

  .footer-container {
    width: 100%;
    background: #0a0a0c;
    padding: 60px 20px 30px 20px;
    border-top: 1.5px solid rgba(130, 87, 229, 0.3);
    font-family: 'Inter', sans-serif;
    color: #ffffff;
    box-shadow: 0 -10px 30px rgba(130, 87, 229, 0.05);
    box-sizing: border-box;
  }

  .footer-content {
    max-width: 1200px;
    margin: 0 auto;
  }

  .footer-top {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 40px;
    margin-bottom: 40px;
  }

  .info-section {
    flex: 2;
    min-width: 300px;
  }

  .title {
    font-family: 'Plus Jakarta Sans', sans-serif;
    font-weight: 800;
    font-size: 1.2rem;
    color: #a885f7;
    margin-bottom: 15px;
    text-transform: uppercase;
    letter-spacing: 1px;
  }

  .description {
    color: #b0b0b8;
    line-height: 1.6;
    font-size: 1rem;
    margin-bottom: 20px;
  }

  .status-badge {
    display: inline-flex;
    align-items: center;
    background: rgba(130, 87, 229, 0.1);
    border: 1px solid rgba(130, 87, 229, 0.3);
    padding: 6px 16px;
    border-radius: 50px;
    font-size: 0.85rem;
    font-weight: 700;
    color: #4ade80;
  }

  .pulse-icon {
    width: 8px;
    height: 8px;
    background: #4ade80;
    border-radius: 50%;
    margin-right: 10px;
    box-shadow: 0 0 10px #4ade80;
    animation: pulse 2s infinite;
  }

  .links-section {
    flex: 1;
    min-width: 150px;
  }

  .footer-nav {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .footer-nav a {
    color: #868e96;
    text-decoration: none;
    font-weight: 600;
    transition: 0.3s ease;
  }

  .footer-nav a:hover {
    color: #ffffff;
    padding-left: 5px;
  }

  .divider {
    height: 1.5px;
    background: linear-gradient(90deg, rgba(130, 87, 229, 0.4) 0%, transparent 100%);
    margin-bottom: 30px;
  }

  .footer-bottom {
    display: flex;
    justify-content: space-between;
    align-items: flex-end
  }

  .logo-placeholder {
    width: 65px;
    height: 65px;
    background: #1a1a1a;
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
  }

  .logo-placeholder img {
    width: 80%;
    height: auto;
    object-fit: contain;
  }

  .copyright {
    font-size: 0.85rem;
    color: #6d6d75;
    font-weight: 600;
  }

  @keyframes pulse {
    0% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(74, 222, 128, 0.7); }
    70% { transform: scale(1); box-shadow: 0 0 0 10px rgba(74, 222, 128, 0); }
    100% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(74, 222, 128, 0); }
  }

  @media (max-width: 600px) {
    .footer-bottom {
      flex-direction: column;
      align-items: flex-start;
      gap: 20px;
    }
    .copyright {
      text-align: left;
    }
  }
</style>