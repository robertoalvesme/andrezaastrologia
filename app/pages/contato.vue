<script setup lang="ts">
// Contato: os canais de verdade (WhatsApp com mensagem pronta, e-mail e
// Instagram), o horario de atendimento e o atalho para quem ja quer agendar.
// Sem formulario: nao ha onde ele chegar, e o WhatsApp responde mais rapido.
useSeoMeta({
  title: 'Contato — Andreza Astrologia',
  description: 'Fale com a Andreza pelo WhatsApp, e-mail ou Instagram, ou agende um atendimento pelo site.',
})

const site = useSite()
const topics = [
  { label: 'Quero saber qual atendimento é para mim', message: 'Olá, Andreza! Quero ajuda para escolher o atendimento ideal para mim.' },
  { label: 'Tenho uma dúvida sobre o meu pedido', message: 'Olá, Andreza! Tenho uma dúvida sobre o meu pedido.' },
  { label: 'Quero falar sobre parcerias', message: 'Olá, Andreza! Gostaria de conversar sobre uma parceria.' },
]
</script>

<template>
  <div>
    <section class="relative overflow-hidden">
      <div class="pointer-events-none absolute -left-32 top-0 h-[480px] w-[480px] rounded-full bg-lavender-light/80 blur-3xl" aria-hidden="true" />
      <div class="container-page relative py-14 sm:py-20">
        <div class="max-w-2xl">
          <p class="eyebrow">Contato</p>
          <h1 class="mt-5 text-5xl font-medium leading-[1] sm:text-6xl">Lorem ipsum, vamos <em class="font-normal text-coral">conversar</em>?</h1>
          <p class="lead mt-6">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</p>
        </div>

        <div class="mt-12 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <!-- WhatsApp: o canal principal, com assuntos que ja abrem a conversa -->
          <div class="card">
            <div class="flex items-center gap-4">
              <span class="flex h-12 w-12 items-center justify-center rounded-full bg-coral-soft text-coral" aria-hidden="true">
                <svg class="h-6 w-6" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.2-.4.2-.4.7-1.3.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.7 11.8 11.8 0 0 0 4.5 4c1.7.7 2.3.8 3.2.6a2.7 2.7 0 0 0 1.7-1.2 2.2 2.2 0 0 0 .2-1.2c-.1-.1-.3-.2-.5-.3Z" /></svg>
              </span>
              <div>
                <h2 class="text-3xl">WhatsApp</h2>
                <p class="text-sm text-ink-soft">{{ site.whatsappLabel }} · resposta no horário de atendimento</p>
              </div>
            </div>
            <p class="mt-6 text-sm font-medium text-wine">Sobre o que você quer falar?</p>
            <ul class="mt-3 grid gap-3">
              <li v-for="t in topics" :key="t.label">
                <a :href="site.whatsappUrl(t.message)" target="_blank" rel="noopener" class="flex min-h-[52px] items-center justify-between gap-4 rounded-2xl border border-wine/15 px-5 py-3 text-ink transition-colors hover:border-coral hover:bg-coral-soft/40">
                  {{ t.label }} <span class="text-coral" aria-hidden="true">→</span>
                </a>
              </li>
            </ul>
            <a :href="site.whatsappUrl()" target="_blank" rel="noopener" class="btn-primary mt-6 w-full sm:w-auto">Abrir o WhatsApp</a>
          </div>

          <div class="grid gap-6">
            <a :href="`mailto:${site.email}`" class="card group block">
              <p class="eyebrow">E-mail</p>
              <p class="mt-3 break-all font-display text-2xl text-wine group-hover:text-coral">{{ site.email }}</p>
            </a>
            <a :href="site.instagram" target="_blank" rel="noopener" class="card group block">
              <p class="eyebrow">Instagram</p>
              <p class="mt-3 font-display text-2xl text-wine group-hover:text-coral">{{ site.instagramHandle }}</p>
              <p class="mt-2 text-sm text-ink-soft">Lorem ipsum dolor sit amet, conteúdos e novidades.</p>
            </a>
            <div class="card">
              <p class="eyebrow">Horário de atendimento</p>
              <p class="mt-3 leading-relaxed text-ink">{{ site.hours }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Quem ja sabe o que quer nao precisa esperar resposta -->
    <section class="bg-ivory-deep">
      <div class="container-page flex flex-col items-center gap-6 py-14 text-center md:flex-row md:justify-between md:text-left">
        <div>
          <h2 class="text-3xl leading-tight sm:text-4xl">Já sabe o que quer? Lorem ipsum.</h2>
          <p class="mt-2 text-ink-soft">Escolha o atendimento, pague com o Mercado Pago e marque o seu horário na hora.</p>
        </div>
        <NuxtLink to="/loja" class="btn-primary shrink-0">Ver os atendimentos</NuxtLink>
      </div>
    </section>
  </div>
</template>
