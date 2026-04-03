import { writable } from 'svelte/store';

export const cryptoData = writable([
    { id: 1, name: "Bitcoin", symbol: "BTC", change: "+6.23", high: "2.150.000", low: "2.100.000", image: "/btc.webp" },
    { id: 2, name: "Ethereum", symbol: "ETH", change: "+4.12", high: "85.000", low: "82.000", image: "/eth.webp" },
    { id: 3, name: "Solana", symbol: "SOL", change: "-2.15", high: "4.500", low: "4.100", image: "/sol.png" }
]);