<script setup lang="ts">
// Sobre mim: a historia, o jeito de atender e a formacao - para criar confianca
// antes da compra. Textos da Andreza.
useSeoMeta({
  title: 'Sobre mim — Andreza Astrologia',
  description: 'Conheça a Andreza: astróloga, taróloga, consteladora familiar e terapeuta integrativa. A trajetória, a formação e o propósito do trabalho.',
  ogImage: '/img/andreza-carta.webp',
})

const pillars = [
  { icon: '☉', title: 'Compreender seus ciclos', text: 'Entender o momento que você vive, os seus movimentos e o que cada fase pede de você.' },
  { icon: '☾', title: 'Reconhecer padrões', text: 'Olhar para os vínculos, os padrões familiares e as histórias que carregamos.' },
  { icon: '✦', title: 'Escolher com consciência', text: 'Ampliar a consciência sobre as suas escolhas e construir uma relação mais verdadeira consigo mesma.' },
]

const timeline = [
  { step: 'A base', title: 'Enfermagem', text: 'Uma base importante sobre saúde, cuidado, corpo humano e acolhimento.' },
  { step: 'O corpo', title: 'Nutrologia e Acupuntura', text: 'Mais compreensão sobre o funcionamento do organismo, a relação entre corpo e equilíbrio e a importância de um olhar individualizado para cada pessoa.' },
  { step: 'Os símbolos', title: 'Astrologia e Tarot', text: 'Na Astrologia, uma linguagem simbólica capaz de oferecer novas perspectivas sobre personalidade, ciclos, potencialidades e desafios. No Tarot, uma ferramenta de reflexão e investigação dos caminhos possíveis, que convida ao exercício da consciência e da autonomia.' },
  { step: 'Crenças e vínculos', title: 'ThetaHealing e Constelação Sistêmica', text: 'No ThetaHealing, o aprofundamento sobre crenças e padrões de pensamento. Na Constelação Sistêmica, recursos para explorar as dinâmicas familiares, os vínculos e as histórias que podem influenciar nossa maneira de viver e nos relacionar.' },
  { step: 'Hoje', title: 'Terapia Integrativa', text: 'Uma abordagem que reúne esses conhecimentos e considera as múltiplas dimensões do ser humano, respeitando a singularidade, a história e o momento de cada pessoa.' },
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
          <h1 class="mt-5 text-5xl font-medium leading-[1] sm:text-6xl">Prazer, eu sou a <em class="font-normal text-coral">Andreza</em>.</h1>
          <p class="lead mt-6">
            Uma mulher em constante transformação, apaixonada pela vida e pelos mistérios da alma humana.
          </p>
          <p class="mt-5 leading-relaxed text-ink-soft">
            Minha trajetória começou na área da saúde, onde aprendi sobre o cuidado, a escuta e a importância de olhar para o outro com humanidade. Mas, ao longo do caminho, percebi que cuidar também significava ampliar o olhar: compreender não apenas o corpo, mas as emoções, os vínculos, os padrões familiares, as histórias que carregamos e a maneira como nos relacionamos com a própria existência.
          </p>
          <p class="mt-5 leading-relaxed text-ink-soft">
            Foi assim que meu caminho se encontrou com a astrologia, o tarot, a constelação familiar e as terapias integrativas. Mais do que novas ferramentas de trabalho, esses conhecimentos se tornaram caminhos de investigação, consciência e transformação pessoal.
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
          “Meu propósito é criar espaços onde você possa se escutar, se reconhecer e se reconectar com a própria essência.”
        </blockquote>
      </div>
    </section>

    <!-- COMO EU ATENDO -->
    <section class="bg-white" aria-labelledby="atendo-titulo">
      <div class="container-page py-20">
        <div class="mx-auto max-w-2xl text-center">
          <p class="eyebrow">Como eu atendo</p>
          <h2 id="atendo-titulo" class="section-title mt-3">Um trabalho que nasce do encontro entre saberes</h2>
          <p class="mt-5 leading-relaxed text-ink-soft">
            Sou astróloga, taróloga, consteladora familiar e terapeuta integrativa. Utilizo esses conhecimentos para ajudar pessoas a compreenderem seus ciclos, reconhecerem padrões, ampliarem a consciência sobre suas escolhas e construírem uma relação mais verdadeira consigo mesmas.
          </p>
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
          <h2 id="trajetoria-titulo" class="section-title mt-3">Formação para ampliar o olhar</h2>
          <p class="mt-5 leading-relaxed text-ink-soft">
            Minha trajetória profissional é construída a partir de diferentes áreas do conhecimento que se encontram em um propósito comum: compreender o ser humano em sua integralidade.
          </p>
          <ol class="mt-10 border-l border-gold/50">
            <li v-for="item in timeline" :key="item.title" class="relative pb-10 pl-8 last:pb-0">
              <span class="absolute -left-[7px] top-1.5 h-3.5 w-3.5 rounded-full border-2 border-ivory bg-coral" aria-hidden="true" />
              <p class="text-xs font-medium uppercase tracking-[0.24em] text-gold-dark">{{ item.step }}</p>
              <h3 class="mt-1 text-2xl">{{ item.title }}</h3>
              <p class="mt-2 leading-relaxed text-ink-soft">{{ item.text }}</p>
            </li>
          </ol>
          <div class="mt-12 space-y-5 leading-relaxed text-ink-soft">
            <p class="font-display text-2xl italic leading-snug text-ink">
              Mais do que acumular formações, minha escolha sempre foi ampliar o olhar.
            </p>
            <p>
              Acredito que nenhum conhecimento, isoladamente, consegue explicar toda a complexidade humana. Por isso, sigo estudando, pesquisando e integrando diferentes perspectivas, com responsabilidade, sensibilidade e respeito aos limites de cada abordagem.
            </p>
            <p>
              Meu trabalho é resultado desse encontro entre ciência, conhecimento terapêutico, simbolismo e espiritualidade, sempre com o propósito de favorecer processos de autoconhecimento, consciência e transformação.
            </p>
          </div>
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

    <CtaBand
      title="Seja bem-vindo ao meu universo."
      text="Aqui, o autoconhecimento é um convite para viver com mais consciência, presença e verdade."
    />
  </div>
</template>
