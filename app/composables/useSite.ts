/** Contatos do site (app.config.ts) e o link do WhatsApp com a mensagem pronta. */
export function useSite() {
  const site = useAppConfig().site
  const whatsappUrl = (message = site.whatsappMessage) =>
    `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`
  return { ...site, whatsappUrl }
}

/** O menu principal. A amostra gratis do mapa astral so entra quando a loja oferece (painel > Mapa astral). */
export function useSiteMenu() {
  const sampleOn = useState('site:sample-on', () => false)
  onMounted(async () => { sampleOn.value = await useRhBirthCharts().sampleEnabled() })
  return computed(() => [
    { label: 'Início', to: '/' },
    { label: 'Atendimentos', to: '/loja' },
    ...(sampleOn.value ? [{ label: 'Mapa astral grátis', to: '/mapa-astral' }] : []),
    { label: 'Sobre mim', to: '/sobre-mim' },
    { label: 'Contato', to: '/contato' },
  ])
}
