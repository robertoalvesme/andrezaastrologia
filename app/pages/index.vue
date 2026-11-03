<script setup lang="ts">
// Home: quem e a Andreza, o que ela oferece (mapa astral digital, sessoes de
// astrologia e de tarot, a loja) e como comprar - sempre com um proximo passo
// a vista. Textos da Andreza.
useSeoMeta({
  title: 'Andreza Astrologia — Astrologia, Tarot e Constelação Familiar',
  ogTitle: 'Andreza Astrologia',
  description: 'Mapa astral, revolução solar, sinastria, astrocartografia, mapa da carreira, mapa infantil, constelação familiar e tarot com a Andreza.',
  ogImage: '/img/andreza-lua.webp',
})

const site = useSite()
const sampleOn = useState('site:sample-on', () => false)

// Astrologia: os mapas, em cards de texto; Constelacao e Tarot: com foto e valor.
const astrology = [
  { icon: '☉', title: 'Mapa Astral', text: 'A foto do céu no momento do seu nascimento. Ajuda a compreender sua personalidade, missão de vida, relacionamentos e seus movimentos internos. Um convite para parar de tentar caber em expectativas externas e começar a compreender sua própria essência.' },
  { icon: '↻', title: 'Revolução Solar', text: 'O mapa do momento em que o Sol retorna à posição do seu nascimento, marcando um novo ciclo pessoal. Mostra os temas que podem ganhar destaque entre um aniversário e outro e as áreas da vida que merecem atenção.' },
  { icon: '♡', title: 'Sinastria Amorosa', text: 'Ajuda a compreender por que certas dinâmicas se repetem, onde estão as afinidades e quais diferenças precisam ser acolhidas. Não diz se duas pessoas foram feitas uma para a outra: oferece consciência para relações mais maduras e verdadeiras.' },
  { icon: '✈', title: 'Astrocartografia', text: 'O seu mapa astral pelo mundo. Para quem pensa em mudar de cidade, morar fora, viajar ou estudar, ou quer compreender sua relação simbólica com diferentes lugares. Não indica um lugar perfeito: amplia a reflexão sobre onde e como construir sua vida.' },
  { icon: '✦', title: 'Mapa da Carreira', text: 'Investiga sua relação com a vida profissional. Para quem está em transição, quer empreender, sente que está no caminho errado ou busca novas possibilidades de realização. Conhecer seus potenciais ajuda a construir caminhos com mais consciência e sentido.' },
  { icon: '☆', title: 'Mapa Infantil', text: 'Ajuda os pais a compreenderem que nem todas as crianças sentem, aprendem ou reagem da mesma maneira. Não determina quem a criança será: oferece novas perspectivas para acolher quem ela já está descobrindo ser.' },
]

const sessions = [
  {
    title: 'Constelação Familiar',
    price: 'R$ 230,00',
    text: 'Um olhar para situações recorrentes sob uma nova perspectiva, reconhecendo a influência das relações em sua trajetória. Não se trata de procurar culpados, mas de reconhecer os vínculos da sua história e escolher o que deseja continuar carregando e o que deseja transformar.',
    image: '/img/constelacao.webp',
    alt: 'Andreza posicionando bonecos sobre um tabuleiro',
  },
  {
    title: 'Tarot',
    price: 'R$ 130,00',
    text: 'O Tarot ajuda a organizar pensamentos, reconhecer sentimentos confusos e observar uma situação por ângulos diferentes. A leitura não traz previsão nem substitui suas decisões: é um espaço de escuta, reflexão e consciência para escolhas mais alinhadas com o que você deseja construir.',
    image: '/img/tarot-mesa.webp',
    alt: 'Andreza abrindo cartas de tarot sobre uma mesa de mármore',
  },
]

const steps = [
  { title: 'Escolha o atendimento', text: 'Veja os mapas e as sessões na loja e escolha o que faz sentido para o seu momento.' },
  { title: 'Pague com o Mercado Pago', text: 'Pix, cartão ou saldo do Mercado Pago, em ambiente seguro.' },
  { title: 'Agende ou envie seus dados', text: 'Nas sessões, você escolhe o horário na página da compra. Nos mapas, informa a data, a hora e a cidade de nascimento.' },
]

// Sem depoimentos reais ainda: a secao so aparece quando a lista tiver itens.
const testimonials: { quote: string, name: string, service: string }[] = []

const faqs = [
  { q: 'Como escolho o horário da sessão?', a: 'Depois do pagamento, a página da sua compra mostra os horários livres. É só escolher o que for melhor para você.' },
  { q: 'O que preciso para fazer um mapa?', a: 'A data, a hora e a cidade do seu nascimento. A hora faz diferença: se puder, confira na certidão de nascimento.' },
  { q: 'O Tarot faz previsões?', a: 'Não. A leitura não tem o propósito de trazer previsão, não determina o comportamento de terceiros e não substitui suas decisões. Ela oferece um espaço de escuta, reflexão e consciência.' },
  { q: 'A Sinastria diz se fomos feitos um para o outro?', a: 'Não, e também não garante a duração de uma relação. O propósito é oferecer consciência para construir relações mais maduras, respeitosas e verdadeiras.' },
  { q: 'Quais formas de pagamento são aceitas?', a: 'Pix, cartão de crédito e saldo do Mercado Pago.' },
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
          <p class="eyebrow">Astrologia · Tarot · Constelação</p>
          <h1 class="mt-5 text-5xl font-medium leading-[0.98] sm:text-6xl lg:text-7xl">
            Olhar para si por uma <em class="font-normal text-coral">nova perspectiva</em>.
          </h1>
          <p class="lead mt-6 max-w-xl">
            Mais do que descobrir o que o futuro reserva, a proposta é compreender o presente, ampliar a consciência sobre suas escolhas e encontrar maneiras mais conscientes de viver a própria história.
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
            <span class="text-sm leading-tight"><b class="block font-medium text-wine">Mapa astral</b><span class="text-ink-soft">a foto do céu do seu nascimento</span></span>
          </div>
        </div>
      </div>
    </section>

    <!-- ASTROLOGIA: os mapas, cada um levando a loja -->
    <section class="bg-white" aria-labelledby="servicos-titulo">
      <div class="container-page py-20 sm:py-24">
        <div class="mx-auto max-w-2xl text-center">
          <p class="eyebrow">Astrologia</p>
          <h2 id="servicos-titulo" class="section-title mt-3">Compreender quem você é</h2>
          <p class="lead mt-5">A astrologia nos permite compreender melhor como sentimos, pensamos, nos relacionamos e nos movimentamos pela vida. Por meio do mapa, reconhecemos potencialidades, desafios, padrões e necessidades emocionais.</p>
        </div>

        <div class="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <article v-for="m in astrology" :key="m.title" class="flex flex-col rounded-3xl bg-ivory p-8">
            <span class="flex h-12 w-12 items-center justify-center rounded-full bg-lavender-light font-display text-xl text-lavender-dark" aria-hidden="true">{{ m.icon }}</span>
            <h3 class="mt-5 text-3xl">{{ m.title }}</h3>
            <p class="mt-3 flex-1 leading-relaxed text-ink-soft">{{ m.text }}</p>
            <NuxtLink to="/loja" class="mt-6 inline-flex items-center gap-2 text-sm font-medium text-coral hover:text-coral-dark">
              Ver valores <span aria-hidden="true">→</span>
            </NuxtLink>
          </article>
        </div>

        <p class="mx-auto mt-12 max-w-2xl text-center font-display text-2xl italic leading-snug text-wine">
          Cada mapa é uma oportunidade de olhar para si por uma nova perspectiva.
        </p>
      </div>
    </section>

    <!-- SESSOES: constelacao e tarot, com foto e valor -->
    <section class="bg-ivory" aria-labelledby="sessoes-titulo">
      <div class="container-page py-20 sm:py-24">
        <div class="mx-auto max-w-2xl text-center">
          <p class="eyebrow">Sessões</p>
          <h2 id="sessoes-titulo" class="section-title mt-3">Constelação Familiar e Tarot</h2>
        </div>

        <div class="mt-14 grid gap-10 md:grid-cols-2">
          <article v-for="s in sessions" :key="s.title" class="group flex flex-col">
            <div class="arch aspect-[4/3] bg-ivory-deep sm:aspect-[5/4]">
              <img :src="s.image" :alt="s.alt" class="h-full w-full object-cover object-[50%_30%] transition-transform duration-700 group-hover:scale-105" loading="lazy" width="1000" height="1500">
            </div>
            <p class="mt-6 text-xs font-medium uppercase tracking-[0.24em] text-gold-dark">Com horário marcado · {{ s.price }}</p>
            <h3 class="mt-2 text-3xl">{{ s.title }}</h3>
            <p class="mt-3 flex-1 leading-relaxed text-ink-soft">{{ s.text }}</p>
            <NuxtLink to="/loja" class="mt-6 inline-flex items-center gap-2 text-sm font-medium text-coral hover:text-coral-dark">
              Agendar <span aria-hidden="true">→</span>
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
            <h2 id="como-titulo" class="section-title mt-3">Em três passos</h2>
            <p class="lead mt-5">Tudo pelo site: da escolha do atendimento ao horário marcado.</p>
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
          <h2 id="sobre-titulo" class="mt-4 font-display text-4xl leading-tight text-ivory sm:text-5xl">Uma mulher em constante transformação, apaixonada pela vida e pelos mistérios da alma humana.</h2>
          <p class="mt-6 leading-relaxed text-ivory/80">
            Sou astróloga, taróloga, consteladora familiar e terapeuta integrativa. Meu propósito é criar espaços onde você possa se escutar, se reconhecer e se reconectar com a própria essência.
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
          <h2 class="mt-3 text-4xl leading-tight">O seu Sol, a sua Lua e o seu Ascendente, de presente.</h2>
        </div>
        <NuxtLink to="/mapa-astral" class="btn-primary shrink-0">Quero o meu mapa grátis</NuxtLink>
      </div>
    </section>

    <!-- DEPOIMENTOS -->
    <section v-if="testimonials.length" class="bg-white" aria-labelledby="depoimentos-titulo">
      <div class="container-page py-20">
        <div class="text-center">
          <p class="eyebrow">Depoimentos</p>
          <h2 id="depoimentos-titulo" class="section-title mt-3">Quem já passou por aqui</h2>
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

    <CtaBand
      title="Vamos olhar para a sua história?"
      text="Escolha o atendimento e marque o seu horário, ou tire suas dúvidas comigo no WhatsApp."
    />
  </div>
</template>
