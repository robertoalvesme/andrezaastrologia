<script setup lang="ts">
// A marca: a lua crescente (a do fundo das fotos) com uma estrela, e o nome.
// `compact` mostra so o simbolo.
withDefaults(defineProps<{ compact?: boolean, tone?: 'wine' | 'ivory' }>(), { compact: false, tone: 'wine' })
// Cada marca na pagina (cabecalho e rodape) com a sua mascara.
const maskId = `az-moon-${useId()}`
</script>

<template>
  <span class="inline-flex items-center gap-3" :class="tone === 'ivory' ? 'text-ivory' : 'text-wine'">
    <svg class="h-10 w-10 shrink-0" viewBox="0 0 64 64" aria-hidden="true">
      <mask :id="maskId">
        <rect width="64" height="64" fill="#fff" />
        <circle cx="38" cy="26" r="19" fill="#000" />
      </mask>
      <circle cx="28" cy="34" r="22" fill="currentColor" :mask="`url(#${maskId})`" />
      <path d="m48 12 1.6 3.9 3.9 1.6-3.9 1.6L48 23l-1.6-3.9-3.9-1.6 3.9-1.6Z" class="fill-gold" />
    </svg>
    <span v-if="!compact" class="flex flex-col leading-none">
      <span class="font-display text-[1.65rem] font-medium italic">Andreza</span>
      <span class="mt-1 text-[0.62rem] font-medium uppercase tracking-[0.42em] opacity-80">Astrologia</span>
    </span>
  </span>
</template>
