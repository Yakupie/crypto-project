<script>
  let { 
    coinName = "Bitcoin", 
    coinSymbol = "BTC", 
    coinImage = "/btc.png",
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
    @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@600;700;800&family=Inter:wght@400;500;600&display=swap');

    .info-card {
        display: flex;
        width: 95%;
        max-width: 1000px;
        background: #0a0a0c;
        border: 1.5px solid rgba(130, 87, 229, 0.3);
        border-radius: 1.5rem;
        padding: clamp(15px, 4vw, 30px);
        box-shadow: 0 10px 10px rgba(130, 87, 229, 0.1);
        font-family: 'Inter', sans-serif;
        margin: 20px auto;
        transition: all 0.3s ease;
        gap: 20px;
    }

    .info-card:hover {
        transform: translateY(-5px);
        box-shadow: 0 15px 40px rgba(130, 87, 229, 0.2);
        border-color: rgba(130, 87, 229, 0.6);
    }

    .card-left {
        display: flex;
        align-items: flex-start;
        flex-shrink: 0;
    }

    .coin-image-container {
        width: clamp(60px, 10vw, 85px);
        height: clamp(60px, 10vw, 85px);
        border-radius: 50%;
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
        object-fit: contain;
        padding: 8px;
    }

    .card-main {
        flex: 1;
        display: flex;
        flex-direction: column;
        min-width: 0;
    }

    .card-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 15px;
        gap: 10px;
    }

    .card-title {
        font-family: 'Plus Jakarta Sans', sans-serif;
        font-size: clamp(1.2rem, 3vw, 1.8rem); 
        font-weight: 800;
        color: #ffffff;
        margin: 0;
    }

    .coin-tag {
        font-size: 0.8rem;
        font-weight: 700;
        color: #a885f7;
        background: rgba(130, 87, 229, 0.1);
        padding: 4px 10px;
        border-radius: 12px;
        white-space: nowrap;
    }

    .card-body {
        margin-bottom: 20px;
    }

    .card-description {
        font-size: clamp(0.9rem, 2vw, 1rem);
        line-height: 1.6;
        color: #b0b0b8;
        margin: 0;
        text-align: left;
    }

    .card-footer {
        display: flex;
        justify-content: flex-end;
        margin-top: auto;
    }

    .learn-more {
        background: #8257e5;
        color: #ffffff;
        border: none;
        padding: 12px 24px;
        border-radius: 10px;
        font-family: 'Plus Jakarta Sans', sans-serif;
        font-weight: 700;
        font-size: clamp(0.85rem, 2vw, 0.95rem);
        cursor: pointer;
        transition: all 0.3s ease;
        width: auto;
    }

    .learn-more:hover {
        background: #996dff;
        transform: translateY(-2px);
        box-shadow: 0 8px 20px rgba(130, 87, 229, 0.4);
    }

    @media (max-width: 640px) {
        .info-card {
            flex-direction: column;
            align-items: center;
            text-align: center;
            padding: 20px;
        }

        .card-left {
            padding-right: 0;
            margin-bottom: 10px;
        }

        .card-header {
            flex-direction: column;
            justify-content: center;
            gap: 8px;
        }

        .card-main {
            padding-left: 0;
            width: 100%;
        }

        .card-footer {
            justify-content: center;
            width: 100%;
        }

        .learn-more {
            width: 100%;
            max-width: 250px;
        }
        
        .card-description {
            text-align: center;
        }
    }
</style>