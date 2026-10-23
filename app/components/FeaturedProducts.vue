<script setup lang="ts">
// Destaques da loja: os primeiros produtos a venda (kit), no visual do site.
// Sem produto a venda, o bloco nao aparece.
const props = withDefaults(defineProps<{ title?: string, eyebrow?: string, limit?: number }>(), {
  title: 'Da loja para o seu ritual',
  eyebrow: 'Loja',
  limit: 4,
})

const { data } = await useRhProducts(1, () => props.limit)
const products = computed(() => (data.value?.items ?? []).slice(0, props.limit))
const store = useRhStore()
const links = useRhLinks()
const format = useRhFormat()

function priceOf(p: { priceFrom: number, priceTo: number, currency: string }) {
  const from = format.price(p.priceFrom, p.currency)
  return p.priceTo > p.priceFrom ? `A partir de ${from}` : from
}
</script>

<template>
  <section v-if="products.length" class="bg-ivory" data-az="featured-products">
    <div class="container-page py-20">
      <div class="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
        <div>
          <p class="eyebrow">{{ eyebrow }}</p>
          <h2 class="section-title mt-3">{{ title }}</h2>
        </div>
        <NuxtLink to="/loja" class="btn-secondary">Ver tudo</NuxtLink>
      </div>

      <div class="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <NuxtLink
          v-for="p in products"
          :key="p.id"
          :to="links.product(p.slug)"
          class="group flex flex-col overflow-hidden rounded-3xl bg-white shadow-sm transition-shadow hover:shadow-lg"
        >
          <div class="overflow-hidden bg-ivory-deep">
            <RhImage v-if="p.image" :image="p.image" :format="store?.imageFormat ?? 'SQUARE'" :alt="p.name" sizes="(min-width: 1024px) 25vw, (min-width: 640px) 45vw, 90vw" class="transition-transform duration-500 group-hover:scale-105" />
            <div v-else class="flex aspect-square items-center justify-center text-gold">
              <BrandMark compact />
            </div>
          </div>
          <div class="flex flex-1 flex-col p-5">
            <h3 class="font-display text-2xl leading-tight">{{ p.name }}</h3>
            <p class="mt-auto pt-3 text-sm text-ink-soft">
              {{ priceOf(p) }}<template v-if="p.serviceMinutes"> · {{ p.serviceMinutes }} min</template>
            </p>
          </div>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>
