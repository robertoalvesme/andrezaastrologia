<script setup lang="ts">
// Pergunta frequente: <details> nativo - abre com teclado e leitor de tela sem JS.
defineProps<{ question: string }>()
</script>

<template>
  <details class="group border-b border-wine/15 py-5">
    <summary class="flex min-h-[44px] cursor-pointer list-none items-center justify-between gap-6 font-display text-xl text-wine sm:text-2xl">
      {{ question }}
      <span class="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-wine/20 text-wine transition-transform group-open:rotate-45" aria-hidden="true">+</span>
    </summary>
    <div class="pt-3 leading-relaxed text-ink-soft">
      <slot />
    </div>
  </details>
</template>
