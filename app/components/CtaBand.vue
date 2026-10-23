<script setup lang="ts">
// Faixa de chamada final: noite estrelada com a lua, e duas acoes.
const site = useSite()
withDefaults(defineProps<{ title?: string }>(), { title: 'Lorem ipsum dolor sit amet, consectetur adipiscing.' })
</script>

<template>
  <section class="relative overflow-hidden bg-night text-ivory">
    <ZodiacWheel class="pointer-events-none absolute -right-32 top-1/2 h-[520px] w-[520px] -translate-y-1/2 text-gold/15" />
    <div class="container-page relative py-20 text-center sm:py-24">
      <MoonPhases />
      <h2 class="mx-auto mt-6 max-w-3xl font-display text-4xl leading-tight text-ivory sm:text-5xl">{{ title }}</h2>
      <p class="mx-auto mt-5 max-w-xl text-ivory/75">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</p>
      <div class="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
        <NuxtLink to="/loja" class="btn-light">Agendar um atendimento</NuxtLink>
        <a :href="site.whatsappUrl()" target="_blank" rel="noopener" class="inline-flex min-h-[48px] items-center justify-center rounded-full border border-ivory/30 px-7 py-3 text-sm font-medium tracking-wide text-ivory transition-colors hover:border-ivory hover:bg-ivory/10">
          Tirar dúvidas no WhatsApp
        </a>
      </div>
    </div>
  </section>
</template>
