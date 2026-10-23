<script setup lang="ts">
// Cabecalho fixo: a marca, o menu, a conta e a sacola (kit). No celular a sacola
// fica sempre a mao e o menu abre por cima da pagina.
const links = useSiteMenu()
const open = ref(false)
const route = useRoute()
watch(() => route.fullPath, () => { open.value = false })
const isActive = (to: string) => (to === '/' ? route.path === '/' : route.path.startsWith(to))
</script>

<template>
  <header class="sticky top-0 z-50 bg-ivory/95 backdrop-blur">
    <div class="container-page flex items-center justify-between gap-4 py-3">
      <NuxtLink to="/" aria-label="Andreza Astrologia — início">
        <BrandMark />
      </NuxtLink>

      <nav class="hidden items-center gap-7 lg:flex" aria-label="Principal">
        <NuxtLink
          v-for="link in links"
          :key="link.to"
          :to="link.to"
          class="relative py-2 text-sm tracking-wide transition-colors hover:text-coral"
          :class="isActive(link.to) ? 'text-coral after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:bg-coral' : 'text-ink-soft'"
        >
          {{ link.label }}
        </NuxtLink>
        <div class="az-header-actions">
          <RhAccountButton />
          <RhCartButton />
        </div>
      </nav>

      <div class="az-header-actions az-header-actions--mobile">
        <RhCartButton />
        <button
          class="flex h-11 w-11 items-center justify-center rounded-full text-wine"
          :aria-expanded="open"
          aria-controls="menu-mobile"
          :aria-label="open ? 'Fechar menu' : 'Abrir menu'"
          @click="open = !open"
        >
          <svg v-if="!open" class="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" d="M4 7h16M4 12h16M4 17h10" /></svg>
          <svg v-else class="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" d="M6 6l12 12M18 6 6 18" /></svg>
        </button>
      </div>
    </div>

    <nav v-if="open" id="menu-mobile" class="border-t border-gold/30 bg-ivory lg:hidden" aria-label="Principal">
      <div class="container-page flex flex-col py-3">
        <NuxtLink
          v-for="link in links"
          :key="link.to"
          :to="link.to"
          class="flex min-h-[48px] items-center border-b border-ivory-deep font-display text-2xl text-wine last:border-0"
        >
          {{ link.label }}
        </NuxtLink>
        <NuxtLink to="/minha-conta" class="flex min-h-[48px] items-center text-sm text-ink-soft">Minha conta</NuxtLink>
        <NuxtLink to="/minha-conta/pedidos" class="flex min-h-[48px] items-center text-sm text-ink-soft">Meus pedidos</NuxtLink>
      </div>
    </nav>

    <div class="gold-rule" />
  </header>
</template>
