<script>
import Navbar from '../lib/components/Navbar.svelte';
import Container from '../lib/components/Container.svelte';
import MainAnalysis from '$lib/components/MainAnalysis.svelte';
</script>

<div class="container">
<Navbar/>
<Container/>
</div>
<div class="container2">
    <MainAnalysis/>
</div>

<style>
    :global(*){
        margin: 0;
        padding: 0;
    }

    .container{
        width: 100%;
        height: 100vh;
        background: url("../lib/assets/background.jpg") rgba(0,0,0,0.8);
        background-position: center;
        background-size: cover;
        background-blend-mode: darken;
    }
    .container2{
        
    }
</style>