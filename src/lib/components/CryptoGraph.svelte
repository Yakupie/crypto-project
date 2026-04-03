<script>
  let { name, symbol, change, high, low, image} = $props();

  const isPositive = parseFloat(change) > 0;
</script>

<div class="component">
    <div class="componentHeader">
<div class="headerLeft">
    <div class="headerImage">
        {#if image}
            <img src={image}/>
        {:else}
            <div class="placeholder"></div>
        {/if}
    </div>
</div>
        <div class="headerBottom">
            <div class="header">{name}</div>
            <div class="text">{symbol}</div>
        </div>
<div class="headerRight">
    <div class="rightHeader">Değişim</div>
    
    {#if parseFloat(change) >= 0}
        <div class="rightText positive">
            {change}%
        </div>
    {:else}
        <div class="rightText negative">
            {change}%
        </div>
    {/if}
</div>
    </div>
    
    <div class="componentMain"></div>
    
    <div class="componentBottom">
        <div class="componentLeft">
            <div class="highestPrice">En Yüksek: {high} TL</div>
            <div class="lowestPrice">En Düşük: {low} TL</div>
        </div>
        <div class="componentRight">
            <button id="analyse">Devam Et</button>
        </div>
    </div>
</div>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@600;700;800&family=Inter:wght@500;600;700&display=swap');

.component {
    width: 30%;
    height: 90%;
    /* Kenarlık rengini daha belirgin bir mor yaptık */
    border: 1.5px solid rgba(130, 87, 229, 0.4);
    border-radius: 2rem;
    background: #0a0a0c;
    /* Mor dış parıltı (glow) ekledik */
    box-shadow: 0 10px 10px rgba(130, 87, 229, 0.15);
    display: flex;
    flex-direction: column;
    overflow: hidden;
    transition: 0.3s ease;
}

.component:hover {
    border-color: #996dff;
    box-shadow: 0 15px 40px rgba(130, 87, 229, 0.25);
}

.componentHeader {
    width: 100%;
    height: 25%;
    display: flex;
    padding: 10px 15px;
    box-sizing: border-box;
}

.headerLeft {
    width: 20%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.headerImage {
    width: 55px !important;
    height: 55px !important;
    border-radius: 100%;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #1a1a1a; /* Resim yoksa siyah bir daire görünmeli */
}

.headerImage img {
    width: 100% !important;
    height: 100% !important;
    object-fit: contain; /* 'cover' yerine 'contain' dene, resim tam görünsün */
    display: block;
}


.headerBottom {
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    padding-left: 12px;
}

.header {
    font-size: 1.6rem; /* Yazıyı büyüttük */
    font-weight: 800; /* Daha kalın (Extra Bold) */
    color: #ffffff;
    font-family: 'Plus Jakarta Sans', sans-serif;
    line-height: 1.1;
}

.text {
    font-size: 1rem; /* Okunabilirliği artırdık */
    font-weight: 700; 
    color: #a885f7; /* Daha açık, okunabilir bir mor */
    font-family: 'Inter', sans-serif;
    margin-top: 4px;
}

.headerRight {
    width: 30%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    flex-direction: column;
}

.rightHeader {
    font-size: 0.8rem; 
    font-weight: 700;
    color: #6d6d75;
    text-transform: uppercase;
    font-family: 'Inter', sans-serif;
}

.rightText {
    font-size: 1.2rem; /* Yüzdeyi büyüttük */
    font-weight: 800;
    color: #4ade80; /* Pozitif yeşil aynı kalabilir veya mor tonlu yeşil yapabilirsin */
    font-family: 'Plus Jakarta Sans', sans-serif;
}

.componentMain {
    width: 100%;
    height: 50%;
    background-color: transparent;
}

.componentBottom {
    width: 100%;
    height: 25%;
    display: flex;
    padding: 0 20px;
    box-sizing: border-box;
    background: rgba(130, 87, 229, 0.03); /* Alt kısma çok hafif mor zemin */
}

.componentLeft {
    width: 65%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
}

.highestPrice, .lowestPrice {
    font-size: 0.9rem; /* Fiyat yazılarını büyüttük */
    font-weight: 700; 
    color: #ffffff;
    font-family: 'Inter', sans-serif;
    margin-bottom: 4px;
}

.lowestPrice {
    color: #b0b0b8; /* En düşük fiyatı biraz daha gri yaparak hiyerarşi kurduk */
}

.componentRight {
    width: 35%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
}

#analyse {
    width: 110px;
    height: 45px;
    color: white;
    border: none;
    border-radius: 12px;
    font-family: 'Plus Jakarta Sans', sans-serif;
    font-weight: 800;
    font-size: 0.9rem;
    cursor: pointer;
    transition: 0.3s ease;
    background: #8257e5;
    box-shadow: 0 8px 20px rgba(130, 87, 229, 0.4);
}

#analyse:hover {
    background: #996dff;
    transform: translateY(-3px);
    box-shadow: 0 12px 25px rgba(130, 87, 229, 0.5);
}
.rightText.positive {
    color: #4ade80; /* Yeşil */
}

.rightText.negative {
    color: #f87171; /* Kırmızı */
}
</style>