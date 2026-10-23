<script setup lang="ts">
// A rosa dos ventos do tabuleiro de astrologia das fotos: fundo decorativo.
const ticks = Array.from({ length: 72 }, (_, i) => i * 5)
const houses = Array.from({ length: 12 }, (_, i) => i * 30)
</script>

<template>
  <svg viewBox="0 0 400 400" fill="none" stroke="currentColor" aria-hidden="true">
    <circle cx="200" cy="200" r="196" stroke-width="1" />
    <circle cx="200" cy="200" r="170" stroke-width="0.8" />
    <circle cx="200" cy="200" r="96" stroke-width="0.8" stroke-dasharray="2 6" />
    <circle cx="200" cy="200" r="40" stroke-width="0.8" />
    <line v-for="a in ticks" :key="`t${a}`" x1="200" y1="4" x2="200" :y2="a % 30 === 0 ? 30 : 16" stroke-width="0.8" :transform="`rotate(${a} 200 200)`" />
    <line v-for="a in houses" :key="`h${a}`" x1="200" y1="30" x2="200" y2="160" stroke-width="0.6" :transform="`rotate(${a} 200 200)`" />
    <path d="M200 60 214 186 340 200 214 214 200 340 186 214 60 200 186 186Z" stroke-width="0.9" />
    <path d="M200 110 207 193 290 200 207 207 200 290 193 207 110 200 193 193Z" stroke-width="0.7" transform="rotate(45 200 200)" />
  </svg>
</template>
