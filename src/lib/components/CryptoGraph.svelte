<script>
  let { name, symbol, change, high, low, image } = $props();
  const isPositive = parseFloat(change) >= 0;
</script>

<div class="component">
    <div class="componentHeader">
        <div class="headerLeft">
            <div class="headerImage">
                {#if image}
                    <img src={image} alt={name}/>
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
            <div class="rightText {isPositive ? 'positive' : 'negative'}">
                {isPositive ? '' : ''}{change}%
            </div>
        </div>
    </div>
    
    <div class="componentMain">
        </div>
    
    <div class="componentBottom">
        <div class="componentLeft">
            <div class="highestPrice">Yüksek: {high} TL</div>
            <div class="lowestPrice">Düşük: {low} TL</div>
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
    height: 80%;
    border: 1.5px solid rgba(130, 87, 229, 0.4);
    border-radius: 1.5rem;
    background: #0a0a0c;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    transition: 0.3s ease;
}

.component:hover {
    border-color: #996dff;
    box-shadow: 0 15px 40px rgba(130, 87, 229, 0.25);
    transform: translateY(-5px);
}

.componentHeader {
    width: 100%;
    display: flex;
    padding: 15px;
    box-sizing: border-box;
}

.headerLeft { flex-shrink: 0; }

.headerImage {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    overflow: hidden;
    background: #1a1a1a;
    display: flex;
    justify-content: center;
    align-items: center;
}

.headerImage img {
    width: 100%;
    height: 100%;
    object-fit: contain;
}

.headerBottom {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 12px;
}

.header {
    font-size: clamp(1.1rem, 2vw, 1.4rem);
    font-weight: 800;
    color: #ffffff;
    font-family: 'Plus Jakarta Sans', sans-serif;
}

.text {
    font-size: 0.85rem;
    font-weight: 700;
    color: #a885f7;
    font-family: 'Inter', sans-serif;
}

.headerRight {
    text-align: right;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.rightHeader {
    font-size: 0.7rem;
    font-weight: 700;
    color: #6d6d75;
    text-transform: uppercase;
}

.rightText {
    font-size: 1.1rem;
    font-weight: 800;
}

.rightText.positive { color: #4ade80; }
.rightText.negative { color: #f87171; }

.componentMain {
    flex-grow: 1;
    min-height: 100px;
}

.componentBottom {
    display: flex;
    padding: 15px;
    background: rgba(130, 87, 229, 0.03);
    margin-top: auto;
}

.componentLeft { flex: 1; }

.highestPrice, .lowestPrice {
    font-size: 0.85rem;
    font-weight: 700;
    color: #ffffff;
    font-family: 'Inter', sans-serif;
}

.lowestPrice { color: #b0b0b8; }

#analyse {
    padding: 10px 18px;
    color: white;
    border: none;
    border-radius: 10px;
    font-family: 'Plus Jakarta Sans', sans-serif;
    font-weight: 800;
    cursor: pointer;
    background: #8257e5;
}
@media (max-width: 1000px) {
    .component{
        width: 90%;
        height: 50%;
    }
}
</style>