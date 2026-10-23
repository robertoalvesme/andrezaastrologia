<script setup lang="ts">
// Sobre mim: a historia, o jeito de atender e a formacao - para criar confianca
// antes da compra. Textos em Lorem ipsum para a cliente trocar.
useSeoMeta({
  title: 'Sobre mim — Andreza Astrologia',
  description: 'Conheça a Andreza: a história, a formação e o jeito de atender na astrologia e no tarot.',
  ogImage: '/img/andreza-carta.webp',
})

const pillars = [
  { icon: '☉', title: 'Lorem ipsum', text: 'Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.' },
  { icon: '☾', title: 'Dolor sit', text: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.' },
  { icon: '✦', title: 'Amet elit', text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.' },
]

const timeline = [
  { year: '20XX', title: 'Lorem ipsum dolor', text: 'Sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.' },
  { year: '20XX', title: 'Consectetur adipiscing', text: 'Ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.' },
  { year: '20XX', title: 'Sed do eiusmod', text: 'Exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
  { year: 'Hoje', title: 'Tempor incididunt', text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.' },
]
</script>

<template>
  <div>
    <!-- APRESENTACAO -->
    <section class="relative overflow-hidden">
      <div class="pointer-events-none absolute -right-40 -top-32 h-[520px] w-[520px] rounded-full bg-coral-soft/80 blur-3xl" aria-hidden="true" />
      <div class="container-page relative grid items-center gap-12 py-14 sm:py-20 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div class="arch mx-auto aspect-[3/4] w-full max-w-md bg-ivory-deep shadow-2xl shadow-wine/10">
          <img src="/img/andreza-carta.webp" alt="Andreza sorrindo e mostrando uma carta de tarot, com vestido vermelho" class="h-full w-full object-cover" width="1000" height="1500" fetchpriority="high">
        </div>
        <div>
          <p class="eyebrow">Sobre mim</p>
          <h1 class="mt-5 text-5xl font-medium leading-[1] sm:text-6xl">Lorem ipsum, eu sou a <em class="font-normal text-coral">Andreza</em>.</h1>
          <p class="lead mt-6">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
          </p>
          <p class="mt-5 leading-relaxed text-ink-soft">
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
          </p>
          <div class="mt-9 flex flex-col gap-3 sm:flex-row">
            <NuxtLink to="/loja" class="btn-primary">Agendar um atendimento</NuxtLink>
            <NuxtLink to="/contato" class="btn-secondary">Falar comigo</NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- CITACAO -->
    <section class="bg-wine text-ivory">
      <div class="container-page py-16 text-center sm:py-20">
        <MoonPhases />
        <blockquote class="mx-auto mt-6 max-w-3xl font-display text-3xl italic leading-snug text-ivory sm:text-4xl">
          “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.”
        </blockquote>
      </div>
    </section>

    <!-- COMO EU ATENDO -->
    <section class="bg-white" aria-labelledby="atendo-titulo">
      <div class="container-page py-20">
        <div class="mx-auto max-w-2xl text-center">
          <p class="eyebrow">Como eu atendo</p>
          <h2 id="atendo-titulo" class="section-title mt-3">Lorem ipsum dolor sit amet</h2>
        </div>
        <div class="mt-12 grid gap-6 md:grid-cols-3">
          <div v-for="p in pillars" :key="p.title" class="rounded-3xl bg-ivory p-8 text-center">
            <span class="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-lavender-light font-display text-2xl text-lavender-dark" aria-hidden="true">{{ p.icon }}</span>
            <h3 class="mt-5 text-2xl">{{ p.title }}</h3>
            <p class="mt-3 leading-relaxed text-ink-soft">{{ p.text }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- TRAJETORIA -->
    <section class="bg-ivory" aria-labelledby="trajetoria-titulo">
      <div class="container-page grid gap-12 py-20 lg:grid-cols-[1fr_1fr] lg:items-start">
        <div>
          <p class="eyebrow">Trajetória</p>
          <h2 id="trajetoria-titulo" class="section-title mt-3">Lorem ipsum da formação</h2>
          <ol class="mt-10 border-l border-gold/50">
            <li v-for="item in timeline" :key="item.title" class="relative pb-10 pl-8 last:pb-0">
              <span class="absolute -left-[7px] top-1.5 h-3.5 w-3.5 rounded-full border-2 border-ivory bg-coral" aria-hidden="true" />
              <p class="text-xs font-medium uppercase tracking-[0.24em] text-gold-dark">{{ item.year }}</p>
              <h3 class="mt-1 text-2xl">{{ item.title }}</h3>
              <p class="mt-2 leading-relaxed text-ink-soft">{{ item.text }}</p>
            </li>
          </ol>
        </div>
        <div class="grid grid-cols-2 gap-4">
          <div class="arch col-span-2 aspect-[4/3] bg-ivory-deep sm:aspect-[16/10]">
            <img src="/img/astrologia-livro.webp" alt="Andreza lendo um livro de astrologia" class="h-full w-full object-cover object-[50%_35%]" loading="lazy" width="1000" height="1500">
          </div>
          <div class="overflow-hidden rounded-3xl bg-ivory-deep">
            <img src="/img/andreza-roda.webp" alt="Andreza ajoelhada no centro de um círculo de cartas" class="aspect-square h-full w-full object-cover" loading="lazy" width="1000" height="1500">
          </div>
          <div class="overflow-hidden rounded-3xl bg-ivory-deep">
            <img src="/img/constelacao.webp" alt="Andreza com o tabuleiro de astrologia" class="aspect-square h-full w-full object-cover object-top" loading="lazy" width="1000" height="1500">
          </div>
        </div>
      </div>
    </section>

    <CtaBand title="Lorem ipsum: vamos olhar o seu céu juntas?" />
  </div>
</template>
