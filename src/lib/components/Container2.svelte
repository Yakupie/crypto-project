<script>
import CryptoGraph from "./CryptoGraph.svelte";
import FakeComment from "./FakeComment.svelte";
import { cryptoData } from "../../store";
</script>

<div class="container">

<div class="containerWrapper">

    <div class="cardWrapper">
    <FakeComment/>
  </div>

  <div class="cryptoWrapper">
    <div class="cryptoHeader">
      <div class="header">Canlı Kripto Analizi</div>
      <div class="text">En popüler kripto varlıkların canlı durumu</div>
    </div>
<div class="cryptoArea">
{#each $cryptoData as coin}
  <CryptoGraph 
    name={coin.name} 
    symbol={coin.symbol} 
    change={coin.change} 
    high={coin.high} 
    low={coin.low} 
    color={coin.color} 
    image={coin.image}
  />
{/each}
</div>
  </div>

</div>

</div>


<style>
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&family=Open+Sans:wght@400;600;700&display=swap');

.container{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
}
.containerWrapper{
  width: 90%;
  height: 90%;
}
.cryptoWrapper{
  width: 100%;
  height: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.cryptoHeader{
  width: 100%;
  height: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 5%;
}
.header {
  font-family: 'Montserrat', sans-serif;
  font-weight: 800;
  font-size: 3.5rem;
  
  background: linear-gradient(
    to right, 
    #8257e5,
    #996dff,
    #3b0066,
    #8257e5
  );

  background-size: 200% auto;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  
  animation: shine 1s linear infinite;
}

@keyframes shine {
  to {
    background-position: 200% center;
  }
}
.text{
  font-family: 'Open Sans', sans-serif;
  font-weight: 400;
  font-size: clamp(1rem, 2vw, 1.25rem);
  color: rgba(255, 255, 255, 0.7);
}
.cryptoArea{
  width: 100%;
  height: 80%;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.cardWrapper{
  height: 30%;
  width: 100%;
}
@media (max-width: 1000px) {
    .cryptoArea{
      display: flex;
      flex-direction: column;
      gap: 2%;
    }
    .containerWrapper{
      height: 250vh;
    }
    .cardWrapper{
      height: 50vh;
    }
    .container{
      height: 300vh;
    }
    .header{
      font-size: 2rem;
    }
    .cryptoWrapper{
      height: 70%;
    }
}
</style>