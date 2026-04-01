<section class="hero-content">
    <span class="subtitle">Algoritmik Takip Sistemi</span>

    <h1>
        Kripto Dünyasını <br />
        <span class="purple-gradient">Verilerle</span> Keşfedin.
    </h1>

    <p>
        Binlerce kripto varlığına ait anlık fiyat değişimlerini, hacim verilerini ve 
        piyasa analizlerini saniyeler içinde takip edin. 
        <span class="bold-white">Yatırımlarınızı şansa değil, verilere dayandırın.</span>
    </p>

    <div class="cta-group">
        <button class="primary-btn">Piyasayı İzle</button>
        <button class="secondary-btn">Analizleri Gör</button>
    </div>
</section>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@700&family=Open+Sans:wght@400;600&display=swap');

    .hero-content {
        text-align: center;
        padding: 100px 20px;
        max-width: 1000px;
        margin: 0 auto;
    }

    .subtitle {
        display: block;
        color: #996dff;
        font-family: 'Montserrat', sans-serif;
        text-transform: uppercase;
        letter-spacing: 2px;
        font-size: 0.9rem;
        margin-bottom: 20px;
        font-weight: 700;
    }

    h1 {
        font-family: 'Montserrat', sans-serif;
        font-size: clamp(2.5rem, 7vw, 4.5rem);
        color: white;
        line-height: 1.1;
        margin-bottom: 30px;
        font-weight: 700;
    }

    .purple-gradient {
        background: linear-gradient(90deg, #8257e5, #996dff);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    p {
        font-family: 'Open Sans', sans-serif;
        font-size: clamp(1rem, 2vw, 1.25rem);
        color: rgba(255, 255, 255, 0.7);
        line-height: 1.7;
        max-width: 750px;
        margin: 0 auto 40px auto;
    }

    .bold-white {
        color: white;
        font-weight: 600;
    }

    .cta-group {
        display: flex;
        gap: 20px;
        justify-content: center;
    }

    .primary-btn {
        background: #8257e5;
        color: white;
        border: none;
        padding: 15px 35px;
        border-radius: 10px;
        font-family: 'Montserrat', sans-serif;
        font-weight: 700;
        cursor: pointer;
        transition: 0.3s;
        box-shadow: 0 10px 20px rgba(130, 87, 229, 0.3);
    }

    .secondary-btn {
        background: transparent;
        color: white;
        border: 2px solid rgba(255, 255, 255, 0.2);
        padding: 15px 35px;
        border-radius: 10px;
        font-family: 'Montserrat', sans-serif;
        font-weight: 700;
        cursor: pointer;
        transition: 0.3s;
    }

    .primary-btn:hover { transform: translateY(-3px); background: #996dff; }
    .secondary-btn:hover { border-color: white; background: rgba(255, 255, 255, 0.05); }

    @media (max-width: 600px) {
        .cta-group {
            flex-direction: column;
        }
        .hero-content {
            padding: 60px 15px;
        }
    }
</style>