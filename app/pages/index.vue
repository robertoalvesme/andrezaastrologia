<script setup lang="ts">
// Home: quem e a Andreza, o que ela oferece (mapa astral digital, sessoes de
// astrologia e de tarot, a loja) e como comprar - sempre com um proximo passo
// a vista. Textos em Lorem ipsum para a cliente trocar.
useSeoMeta({
  title: 'Andreza Astrologia — Mapa astral, Astrologia e Tarot',
  ogTitle: 'Andreza Astrologia',
  description: 'Mapa astral digital, sessões de astrologia e de tarot com a Andreza, e a loja com produtos para o seu autoconhecimento.',
  ogImage: '/img/andreza-lua.webp',
})

const site = useSite()
const sampleOn = useState('site:sample-on', () => false)

const services = [
  {
    title: 'Mapa Astral Digital',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore.',
    detail: 'Leitura na sua conta',
    image: '/img/astrologia-livro.webp',
    alt: 'Andreza segurando um livro de astrologia, com cartas de tarot sobre a mesa',
  },
  {
    title: 'Sessão de Astrologia',
    text: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    detail: 'Online · com horário marcado',
    image: '/img/constelacao.webp',
    alt: 'Andreza posicionando bonecos sobre um tabuleiro de astrologia',
  },
  {
    title: 'Sessão de Tarot',
    text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    detail: 'Online · com horário marcado',
    image: '/img/tarot-mesa.webp',
    alt: 'Andreza abrindo cartas de tarot sobre uma mesa de mármore',
  },
]

const steps = [
  { title: 'Escolha o atendimento', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.' },
  { title: 'Pague com o Mercado Pago', text: 'Pix, cartão ou saldo. Ut enim ad minim veniam, quis nostrud exercitation.' },
  { title: 'Agende ou receba seu mapa', text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.' },
]

const testimonials = [
  { quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante venenatis dapibus.', name: 'Lorem I.', service: 'Mapa Astral Digital' },
  { quote: 'Sed posuere consectetur est at lobortis. Cras mattis consectetur purus sit amet fermentum, donec ullamcorper.', name: 'Ipsum D.', service: 'Sessão de Tarot' },
  { quote: 'Maecenas faucibus mollis interdum. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.', name: 'Dolor S.', service: 'Sessão de Astrologia' },
]

const faqs = [
  { q: 'Os atendimentos são online?', a: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id dolor id nibh ultricies vehicula ut id elit.' },
  { q: 'Como escolho o horário da sessão?', a: 'Depois do pagamento, a página da sua compra mostra os horários livres. Cras justo odio, dapibus ac facilisis in, egestas eget quam.' },
  { q: 'Quando recebo o meu mapa astral?', a: 'Depois do pagamento você informa a data, a hora e a cidade de nascimento. Donec sed odio dui, etiam porta sem malesuada.' },
  { q: 'Quais formas de pagamento são aceitas?', a: 'Pix, cartão de crédito e saldo do Mercado Pago. Vestibulum id ligula porta felis euismod semper.' },
]
</script>

<template>
  <div>
    <!-- HERO: quem e, o que oferece e as duas acoes principais -->
    <section class="relative overflow-hidden">
      <div class="pointer-events-none absolute -left-40 -top-40 h-[560px] w-[560px] rounded-full bg-lavender-light/70 blur-3xl" aria-hidden="true" />
      <div class="pointer-events-none absolute -right-24 bottom-0 h-[420px] w-[420px] rounded-full bg-coral-soft/80 blur-3xl" aria-hidden="true" />
      <div class="container-page relative grid items-center gap-12 py-14 sm:py-20 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        <div>
          <p class="eyebrow">Astrologia &amp; Tarot</p>
          <h1 class="mt-5 text-5xl font-medium leading-[0.98] sm:text-6xl lg:text-7xl">
            Lorem ipsum dolor <em class="font-normal text-coral">sit amet</em>, consectetur.
          </h1>
          <p class="lead mt-6 max-w-xl">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.
          </p>
          <div class="mt-9 flex flex-col gap-3 sm:flex-row">
            <NuxtLink to="/loja" class="btn-primary">Agendar um atendimento</NuxtLink>
            <NuxtLink v-if="sampleOn" to="/mapa-astral" class="btn-secondary">Mapa astral grátis</NuxtLink>
            <NuxtLink v-else to="/sobre-mim" class="btn-secondary">Conhecer a Andreza</NuxtLink>
          </div>
          <ul class="mt-10 grid max-w-xl grid-cols-1 gap-3 text-sm text-ink-soft sm:grid-cols-3">
            <li class="flex items-center gap-2"><span class="text-gold" aria-hidden="true">✦</span> Atendimento online</li>
            <li class="flex items-center gap-2"><span class="text-gold" aria-hidden="true">✦</span> Pix ou cartão</li>
            <li class="flex items-center gap-2"><span class="text-gold" aria-hidden="true">✦</span> Horário marcado</li>
          </ul>
        </div>

        <!-- No celular o texto e o botao vem primeiro; a foto, menor, logo abaixo. -->
        <div class="relative mx-auto w-full max-w-[17rem] sm:max-w-sm lg:max-w-md">
          <ZodiacWheel class="absolute -inset-10 text-gold/35" />
          <div class="arch relative aspect-[3/4] bg-lavender-light shadow-2xl shadow-wine/10">
            <img src="/img/andreza-lua.webp" alt="Andreza sentada diante de uma lua crescente, com saia lavanda" class="h-full w-full object-cover" width="1000" height="1500" fetchpriority="high">
          </div>
          <div class="card absolute -bottom-6 -left-4 flex items-center gap-3 !p-4 sm:-left-10">
            <span class="flex h-11 w-11 items-center justify-center rounded-full bg-coral-soft text-coral" aria-hidden="true">☾</span>
            <span class="text-sm leading-tight"><b class="block font-medium text-wine">Lorem ipsum</b><span class="text-ink-soft">dolor sit amet</span></span>
          </div>
        </div>
      </div>
    </section>

    <!-- SERVICOS: os tres atendimentos, cada um levando a loja -->
    <section class="bg-white" aria-labelledby="servicos-titulo">
      <div class="container-page py-20 sm:py-24">
        <div class="mx-auto max-w-2xl text-center">
          <p class="eyebrow">Atendimentos</p>
          <h2 id="servicos-titulo" class="section-title mt-3">Lorem ipsum dolor sit amet</h2>
          <p class="lead mt-5">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur.</p>
        </div>

        <div class="mt-14 grid gap-8 md:grid-cols-3">
          <article v-for="s in services" :key="s.title" class="group flex flex-col">
            <div class="arch aspect-[4/3] bg-ivory-deep sm:aspect-[4/5]">
              <img :src="s.image" :alt="s.alt" class="h-full w-full object-cover object-[50%_30%] transition-transform duration-700 group-hover:scale-105" loading="lazy" width="1000" height="1500">
            </div>
            <p class="mt-6 text-xs font-medium uppercase tracking-[0.24em] text-gold-dark">{{ s.detail }}</p>
            <h3 class="mt-2 text-3xl">{{ s.title }}</h3>
            <p class="mt-3 flex-1 leading-relaxed text-ink-soft">{{ s.text }}</p>
            <NuxtLink to="/loja" class="mt-6 inline-flex items-center gap-2 text-sm font-medium text-coral hover:text-coral-dark">
              Ver valores e agendar <span aria-hidden="true">→</span>
            </NuxtLink>
          </article>
        </div>
      </div>
    </section>

    <!-- COMO FUNCIONA: tira a duvida de "e depois que eu pagar?" -->
    <section class="bg-ivory-deep" aria-labelledby="como-titulo">
      <div class="container-page py-20">
        <div class="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div>
            <p class="eyebrow">Como funciona</p>
            <h2 id="como-titulo" class="section-title mt-3">Lorem ipsum em três passos</h2>
            <p class="lead mt-5">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium.</p>
          </div>
          <ol class="grid gap-5 sm:grid-cols-3">
            <li v-for="(step, i) in steps" :key="step.title" class="card">
              <span class="font-display text-5xl italic text-coral">{{ i + 1 }}</span>
              <h3 class="mt-3 text-2xl">{{ step.title }}</h3>
              <p class="mt-2 text-sm leading-relaxed text-ink-soft">{{ step.text }}</p>
            </li>
          </ol>
        </div>
      </div>
    </section>

    <!-- SOBRE: a pessoa por tras dos atendimentos -->
    <section class="bg-wine text-ivory" aria-labelledby="sobre-titulo">
      <div class="container-page grid items-center gap-12 py-20 md:grid-cols-2 md:gap-16">
        <div class="arch mx-auto aspect-[3/4] w-full max-w-sm bg-wine-dark">
          <img src="/img/andreza-noite.webp" alt="Andreza com vestido preto bordado com fases da lua, segurando cartas de tarot" class="h-full w-full object-cover" loading="lazy" width="853" height="1280">
        </div>
        <div>
          <p class="text-xs font-medium uppercase tracking-[0.28em] text-gold-light">Sobre mim</p>
          <h2 id="sobre-titulo" class="mt-4 font-display text-4xl leading-tight text-ivory sm:text-5xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
          <p class="mt-6 leading-relaxed text-ivory/80">
            Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur.
          </p>
          <NuxtLink to="/sobre-mim" class="btn-light mt-9">Conhecer a minha história</NuxtLink>
        </div>
      </div>
    </section>

    <!-- LOJA: os produtos a venda (kit) -->
    <FeaturedProducts />

    <!-- MAPA ASTRAL GRATIS: so quando a loja oferece a amostra -->
    <section v-if="sampleOn" class="bg-lavender-light">
      <div class="container-page flex flex-col items-center gap-8 py-16 text-center md:flex-row md:justify-between md:text-left">
        <div class="max-w-2xl">
          <p class="eyebrow !text-lavender-dark">Mapa astral grátis</p>
          <h2 class="mt-3 text-4xl leading-tight">Lorem ipsum: o seu Sol, a sua Lua e o seu Ascendente.</h2>
        </div>
        <NuxtLink to="/mapa-astral" class="btn-primary shrink-0">Quero o meu mapa grátis</NuxtLink>
      </div>
    </section>

    <!-- DEPOIMENTOS -->
    <section class="bg-white" aria-labelledby="depoimentos-titulo">
      <div class="container-page py-20">
        <div class="text-center">
          <p class="eyebrow">Depoimentos</p>
          <h2 id="depoimentos-titulo" class="section-title mt-3">Lorem ipsum dolor</h2>
        </div>
        <div class="mt-12 grid gap-6 md:grid-cols-3">
          <figure v-for="t in testimonials" :key="t.name" class="flex flex-col rounded-3xl bg-ivory p-8">
            <span class="font-display text-6xl leading-none text-coral-light" aria-hidden="true">“</span>
            <blockquote class="mt-2 flex-1 font-display text-xl leading-snug text-ink">{{ t.quote }}</blockquote>
            <figcaption class="mt-6 text-sm"><b class="font-medium text-wine">{{ t.name }}</b><span class="text-ink-soft"> · {{ t.service }}</span></figcaption>
          </figure>
        </div>
      </div>
    </section>

    <!-- PERGUNTAS FREQUENTES -->
    <section class="bg-ivory" aria-labelledby="faq-titulo">
      <div class="container-page grid gap-12 py-20 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p class="eyebrow">Dúvidas</p>
          <h2 id="faq-titulo" class="section-title mt-3">Perguntas frequentes</h2>
          <p class="lead mt-5">Não achou a sua? <a :href="site.whatsappUrl()" target="_blank" rel="noopener" class="text-coral underline-offset-4 hover:underline">Fale comigo no WhatsApp</a>.</p>
        </div>
        <div>
          <FaqItem v-for="f in faqs" :key="f.q" :question="f.q">{{ f.a }}</FaqItem>
        </div>
      </div>
    </section>

    <CtaBand />
  </div>
</template>
