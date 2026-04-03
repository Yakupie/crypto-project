<script>
    import { fly, fade } from 'svelte/transition';

    let isMenuOpen = $state(false);

    function toggleMenu() {
        isMenuOpen = !isMenuOpen;
        if (typeof document !== 'undefined') {
            document.body.style.overflow = isMenuOpen ? 'hidden' : 'auto';
        }
    }
</script>

<nav class="navbar">
    <div class="logoArea">
        <div class="logo">Crypto<span class="logoSpan">Stats</span></div>
    </div>

    <div class="navbarUl desktop-only">
        <ul>
            <li><a href="#1">Ana Sayfa</a></li>
            <li><a href="#4">Öğren</a></li>
            <li><a href="#4">Kripto</a></li>
            <li><a href="#5">Destek</a></li>
        </ul>
    </div>

    <div class="buttonArea desktop-only">
        <button id="loginButton">Giriş Yap</button>
        <button id="registerButton">Kayıt Ol</button>
    </div>

    <button 
        class="hamburger" 
        style="opacity: {isMenuOpen ? '0' : '1'}; pointer-events: {isMenuOpen ? 'none' : 'all'}"
        onclick={toggleMenu} 
        aria-label="Menu"
    >
        <div class="hamburger-box">
            <span class="line"></span>
            <span class="line"></span>
            <span class="line"></span>
        </div>
    </button>
</nav>

{#if isMenuOpen}
    <button class="overlay" onclick={toggleMenu} transition:fade></button>

    <div class="mobileMenu" transition:fly={{ x: 300, duration: 400, opacity: 1 }}>
        <button class="closeMenu" onclick={toggleMenu}>
            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
        </button>

        <ul class="mobileUl">
            <li><a href="#1" onclick={toggleMenu}>Ana Sayfa</a></li>
            <li><a href="#2" onclick={toggleMenu}>Trade</a></li>
            <li><a href="#4" onclick={toggleMenu}>Öğren</a></li>
            <li><a href="#5" onclick={toggleMenu}>Destek</a></li>
        </ul>
        
        <div class="mobileButtonArea">
            <button class="mobileLogin">Giriş Yap</button>
            <button class="mobileRegister">Kayıt Ol</button>
        </div>
    </div>
{/if}

<style>
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&family=Open+Sans:wght@400;600;700&display=swap');

    :root {
        --primary-purple: #8257e5;
        --dark-purple: #121214;
        --light-purple: #996dff;
        --menu-bg: #1a1a1e;
    }

    :global(body) {
        margin: 0;
        background-color: var(--dark-purple);
        font-family: 'Open Sans', sans-serif;
        color: white;
    }
    .navbar {
        width: 100%;
        height: 12vh;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 8%;
        box-sizing: border-box;
        position: relative;
        z-index: 100;
    }

    .logo {
        font-family: 'Montserrat', sans-serif;
        color: white;
        font-size: 2.2rem;
        font-weight: 700;
        letter-spacing: -1px;
    }

    .logoSpan { color: var(--light-purple); }

    .navbarUl ul {
        display: flex;
        list-style: none;
        gap: clamp(15px, 3vw, 40px);
        margin: 0;
        padding: 0;
    }

    .navbarUl ul li a {
        text-decoration: none;
        color: white;
        font-family: 'Open Sans', sans-serif;
        font-weight: 600;
        font-size: 1.1rem;
        transition: 0.3s ease;
    }

    .navbarUl ul li a:hover { 
        color: var(--light-purple); 
    }

    .buttonArea {
        display: flex;
        align-items: center;
        gap: 10px;
    }

    #loginButton, #registerButton {
        padding: clamp(8px, 1.5vh, 12px) clamp(15px, 2vw, 28px);
        border-radius: 0.8rem;
        font-family: 'Montserrat', sans-serif;
        font-weight: 700;
        font-size: 0.9rem;
        cursor: pointer;
        transition: 0.3s;
        white-space: nowrap;
    }

    #loginButton { 
        background: transparent; 
        color: white; 
        border: 2px solid rgba(255, 255, 255, 0.5); 
    }
    
    #loginButton:hover {
        border-color: white;
        background: rgba(255, 255, 255, 0.05);
    }

    #registerButton { 
        background: var(--primary-purple); 
        color: white; 
        border: none;
    }

    #registerButton:hover {
        background: var(--light-purple);
        transform: translateY(-2px);
    }
    .hamburger {
        display: none;
        background: rgba(130, 87, 229, 0.1);
        border: 1px solid var(--primary-purple);
        padding: 10px;
        border-radius: 8px;
        cursor: pointer;
        z-index: 1001;
    }

    .hamburger-box { width: 25px; height: 18px; position: relative; }
    .line { position: absolute; width: 100%; height: 2px; background: var(--light-purple); }
    .line:nth-child(1) { top: 0; }
    .line:nth-child(2) { top: 8px; width: 70%; right: 0; }
    .line:nth-child(3) { top: 16px; }

    .mobileMenu {
        position: fixed;
        top: 0;
        right: 0;
        width: 80%;
        max-width: 320px;
        height: 100vh;
        background: var(--menu-bg);
        z-index: 1000;
        display: flex;
        flex-direction: column;
        padding: 30px;
        box-sizing: border-box;
        border-left: 2px solid var(--primary-purple);
    }

    .closeMenu { background: none; border: none; color: var(--light-purple); align-self: flex-end; }
    .mobileUl { list-style: none; padding: 0; margin: 20px 0; }
    .mobileUl li { margin: 20px 0; border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 15px; }
    .mobileUl li a { color: white; text-decoration: none; font-size: 1.4rem; font-weight: 700; font-family: 'Montserrat', sans-serif; }

    .mobileButtonArea { display: flex; flex-direction: column; gap: 15px; margin-top: 20px; }
    .mobileLogin, .mobileRegister { width: 100%; padding: 15px; border-radius: 0.8rem; font-family: 'Montserrat', sans-serif; font-weight: 700; cursor: pointer; }
    .mobileLogin { background: transparent; color: white; border: 2px solid white; }
    .mobileRegister { background: var(--primary-purple); color: white; border: none; }

    .overlay {
        position: fixed;
        inset: 0;
        background: rgba(0,0,0,0.8);
        backdrop-filter: blur(5px);
        z-index: 999;
        border: none;
    }

    @media (max-width: 1100px) {
        .navbar { padding: 0 4%; }
        .logo { font-size: 1.8rem; }
    }

    @media (max-width: 830px) {
        .desktop-only { display: none !important; }
        .hamburger { display: flex; }
        .navbar { height: 10vh; }
    }
</style>