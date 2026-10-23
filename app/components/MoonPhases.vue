<script setup lang="ts">
// As fases da lua do vestido da Andreza: um divisor decorativo.
// Crescente, quarto, cheia, quarto e minguante.
const phases = [
  'M12 3a9 9 0 1 0 0 18a6 9 0 1 1 0-18Z',
  'M12 3a9 9 0 1 0 0 18Z',
  null,
  'M12 3a9 9 0 1 1 0 18Z',
  'M12 3a9 9 0 1 1 0 18a6 9 0 1 0 0-18Z',
]
</script>

<template>
  <div class="flex items-center justify-center gap-3 text-gold" aria-hidden="true">
    <svg v-for="(d, i) in phases" :key="i" class="h-4 w-4" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="9" :fill="d ? 'none' : 'currentColor'" stroke="currentColor" stroke-width="1.2" />
      <path v-if="d" :d="d" fill="currentColor" />
    </svg>
  </div>
</template>
