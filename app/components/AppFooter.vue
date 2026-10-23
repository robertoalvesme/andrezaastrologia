<script setup lang="ts">
const site = useSite()
const links = useSiteMenu()
const year = new Date().getFullYear()
</script>

<template>
  <footer class="bg-night text-ivory/80">
    <div class="container-page grid gap-12 py-16 md:grid-cols-[1.4fr_1fr_1fr]">
      <div>
        <BrandMark tone="ivory" />
        <p class="mt-6 max-w-sm text-sm leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <MoonPhases class="mt-8 !justify-start" />
      </div>

      <nav aria-label="Rodapé">
        <p class="text-xs font-medium uppercase tracking-[0.28em] text-gold-light">Navegue</p>
        <ul class="mt-5 space-y-3 text-sm">
          <li v-for="link in links" :key="link.to"><NuxtLink :to="link.to" class="hover:text-ivory">{{ link.label }}</NuxtLink></li>
          <li><NuxtLink to="/minha-conta" class="hover:text-ivory">Minha conta</NuxtLink></li>
        </ul>
      </nav>

      <div>
        <p class="text-xs font-medium uppercase tracking-[0.28em] text-gold-light">Fale comigo</p>
        <ul class="mt-5 space-y-3 text-sm">
          <li><a :href="site.whatsappUrl()" target="_blank" rel="noopener" class="hover:text-ivory">WhatsApp {{ site.whatsappLabel }}</a></li>
          <li><a :href="`mailto:${site.email}`" class="hover:text-ivory">{{ site.email }}</a></li>
          <li><a :href="site.instagram" target="_blank" rel="noopener" class="hover:text-ivory">Instagram {{ site.instagramHandle }}</a></li>
        </ul>
        <p class="mt-5 text-xs leading-relaxed text-ivory/60">{{ site.hours }}</p>
      </div>
    </div>
    <div class="border-t border-ivory/10">
      <div class="container-page flex flex-col gap-2 py-6 text-xs text-ivory/60 sm:flex-row sm:justify-between">
        <p>© {{ year }} {{ site.name }}. Todos os direitos reservados.</p>
        <p>Pagamentos processados com segurança pelo Mercado Pago.</p>
      </div>
    </div>
  </footer>
</template>
