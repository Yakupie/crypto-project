<script>
  // Svelte 5 Runes yapısı ile dışarıdan veri alıyoruz
  let { 
    coinName = "Bitcoin", 
    coinSymbol = "BTC", 
    coinImage = "/btc.png", // static klasöründeki btc.png
    title = "Bitcoin Nedir?", 
    description = "Bitcoin, 2008 yılında Satoshi Nakamoto takma adını kullanan kişi veya grup tarafından geliştirilen, merkezi bir otoriteye veya bankaya bağlı olmayan, uçtan uca şifreli, açık kaynaklı bir dijital para birimidir. Geleneksel para birimlerinin aksine, Bitcoin'in üretimi ve transferi Blockchain (Blok Zinciri) adı verilen dağıtık bir defter teknolojisi ile şeffaf bir şekilde yönetilir."
  } = $props();
</script>

<div class="info-card">
    <div class="card-left">
        <div class="coin-image-container">
            {#if coinImage}
                <img src={coinImage} alt={coinName} class="coin-logo" />
            {:else}
                <div class="coin-placeholder"></div>
            {/if}
        </div>
    </div>
    
    <div class="card-main">
        <div class="card-header">
            <h2 class="card-title">{title}</h2>
            <span class="coin-tag">{coinSymbol}</span>
        </div>
        
        <div class="card-body">
            <p class="card-description">
                {description}
            </p>
        </div>
        
        <div class="card-footer">
            <button class="learn-more">Daha Fazla Oku</button>
        </div>
    </div>
</div>

<style>
    /* Projenin genel yazı tiplerini kullanıyoruz */
    @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@600;700;800&family=Inter:wght@400;500;600&display=swap');

    .info-card {
        display: flex;
        width: 100%;
        max-width: 1000px; /* Dikdörtgen genişliği */
        background: #0a0a0c; /* Koyu arka plan */
        border: 1.5px solid rgba(130, 87, 229, 0.3); /* Mor kenarlık */
        border-radius: 1.5rem;
        padding: 25px;
        box-shadow: 0 10px 10px rgba(130, 87, 229, 0.1); /* Hafif mor gölge */
        font-family: 'Inter', sans-serif;
        margin: 20px auto; /* Ortalamak için */
        transition: transform 0.3s ease, box-shadow 0.3s ease;
    }

    .info-card:hover {
        transform: translateY(-5px);
        box-shadow: 0 15px 40px rgba(130, 87, 229, 0.2);
        border-color: rgba(130, 87, 229, 0.6);
    }

    /* Sol Kısım: Logo */
    .card-left {
        display: flex;
        align-items: flex-start; /* Logoyu yukarıda tut */
        padding-right: 25px;
        border-right: 1px solid rgba(255, 255, 255, 0.05); /* Ayırıcı çizgi */
    }

    .coin-image-container {
        width: 80px;
        height: 80px;
        border-radius: 100%;
        overflow: hidden;
        display: flex;
        justify-content: center;
        align-items: center;
        background: #141416;
        border: 2px solid rgba(130, 87, 229, 0.2);
    }

    .coin-logo {
        width: 100%;
        height: 100%;
        object-fit: contain; /* Logoyu kutuya sığdırır */
        padding: 5px; /* Logoya nefes aldır */
    }

    .coin-placeholder {
        width: 100%;
        height: 100%;
        background: linear-gradient(135deg, #8257e5 0%, #3b0066 100%);
    }

    /* Ana Kısım: İçerik */
    .card-main {
        flex: 1; /* Kalan alanı doldur */
        padding-left: 25px;
        display: flex;
        flex-direction: column;
    }

    .card-header {
        display: flex;
        align-items: center;
        justify-content: space-between; /* Başlık ve Tag'i ayır */
        margin-bottom: 15px;
    }

    .card-title {
        font-family: 'Plus Jakarta Sans', sans-serif;
        font-size: 1.8rem;
        font-weight: 800;
        color: #ffffff;
        margin: 0;
    }

    .coin-tag {
        font-size: 0.9rem;
        font-weight: 700;
        color: #a885f7; /* Açık mor */
        background: rgba(130, 87, 229, 0.1);
        padding: 6px 12px;
        border-radius: 20px;
        text-transform: uppercase;
    }

    .card-body {
        margin-bottom: 20px;
    }

    .card-description {
        font-size: 1rem;
        line-height: 1.6; /* Okunabilirliği artırır */
        color: #b0b0b8; /* Hafif gri yazı */
        margin: 0;
        text-align: justify; /* Metni iki yana yasla */
    }

    /* Alt Kısım: Buton */
    .card-footer {
        display: flex;
        justify-content: flex-end; /* Butonu sağa yasla */
        margin-top: auto; /* İçerik azsa bile altta kal */
    }

    .learn-more {
        background: #8257e5; /* Mor buton */
        color: #ffffff;
        border: none;
        padding: 12px 24px;
        border-radius: 10px;
        font-family: 'Plus Jakarta Sans', sans-serif;
        font-weight: 700;
        font-size: 0.95rem;
        cursor: pointer;
        transition: 0.3s ease;
        box-shadow: 0 5px 15px rgba(130, 87, 229, 0.3);
    }

    .learn-more:hover {
        background: #996dff;
        transform: translateY(-2px);
        box-shadow: 0 8px 20px rgba(130, 87, 229, 0.4);
    }
</style>