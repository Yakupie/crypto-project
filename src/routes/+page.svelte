<script>
import Navbar from '../lib/components/Navbar.svelte';
import Container from '../lib/components/Container.svelte';
import Container2 from '$lib/components/Container2.svelte';
import Footer from '$lib/components/Footer.svelte';
</script>

<svelte:head>
    <title>CryptoStats</title>
    <meta name="description" content="Python ile anlık kripto para verilerini analiz edin. API entegrasyonu ve veri çekme teknikleriyle Bitcoin, Ethereum ve altcoin piyasasını yakından takip edin." />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
</svelte:head>

<div class="container">
    <Navbar/>
    <div class="hero-wrapper">
        <Container/>
    </div>
</div>

<div class="container2">
    <Container2/>
</div>

<div class="container3">
    <Footer/>
</div>

<style>
    :global(*) {
        margin: 0;
        padding: 0;
    }

    .container {
        width: 100%;
        height: 95vh;
        background: url("../lib/assets/background.webp") rgba(0,0,0,0.8);
        background-position: center;
        background-size: cover;
        background-blend-mode: darken;
        position: relative;
        overflow: hidden;
    }

    /* 🔥 HERO ALTINA YUMUŞAK GEÇİŞ */
    .hero-wrapper::after {
        content: "";
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 180px;

        background: linear-gradient(
            to bottom,
            rgba(0,0,0,0) 0%,
            rgba(5,5,7,0.9) 60%,
            #050507 100%
        );

        pointer-events: none;
    }

    .hero-wrapper {
        position: relative;
        height: 100%;
    }

    /* 🔥 ALT SECTION (container2) */
.container2 {
    width: 100%;
    height: 160vh;
    margin-top: -100px; 
    padding-top: 120px;

    background: 
        /* Orta kısımdaki hafif mor parıltı */
        radial-gradient(
            circle at 50% 50%, 
            rgba(106, 13, 173, 0.15) 0%,   /* Merkeze daha doygun ama düşük opaklıkta mor */
            rgba(29, 2, 49, 0.05) 40%,    /* Hızlıca sönen bir geçiş */
            transparent 70%               /* Kenarlara ulaşmadan tamamen kaybolur */
        ),
        /* Ana arka plan geçişi */
        linear-gradient(
            to bottom,
            #010101 0%,
            #000000 40%,
            #000000 70%,
            #010101 100%
        );
    
    /* Parıltının daha iyi görünmesi için gerekirse ekleyebilirsin */
    background-blend-mode: screen; 
}
.container3{
    height: 50vh;
    width: 100%;
}
@media (max-width: 1000px) {
    .container2{
        height: 235vh;
    }
}
</style>