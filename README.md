# Andreza Astrologia

Site da astróloga Andreza (atividade 00028), em `www.andrezaastrologia.com.br`.
Nuxt 4 com layout próprio, e as páginas de loja do [`@ocahub/kit`](https://www.npmjs.com/package/@ocahub/kit):
prateleira em `/loja`, produto, carrinho, conta, checkout, pedidos e mapa astral.

## Páginas

| Caminho | |
|---|---|
| `/` | Home: apresentação, atendimentos (mapa astral digital, astrologia, tarot), como funciona, sobre, loja, depoimentos, dúvidas |
| `/sobre-mim` | História, jeito de atender e trajetória |
| `/contato` | WhatsApp (com assuntos que já abrem a conversa), e-mail, Instagram e horário |
| `/loja`, `/produto/…`, `/carrinho`, `/minha-conta`, `/compras/…` | Do kit |
| `/mapa-astral` | Amostra grátis do mapa astral (kit), no menu só quando a loja oferece |

Os textos estão em *Lorem ipsum* para a cliente trocar. Contatos, redes e
horário ficam em `app/app.config.ts`.

## Identidade

Tirada das fotos da Andreza (`public/img`):

| Cor | | De onde vem |
|---|---|---|
| `coral` `#C2471F` | ações | os vestidos |
| `wine` `#6E2433` | títulos, faixas | o batom |
| `lavender` `#B49AD8` | destaques suaves | a saia |
| `gold` `#C89B4C` | detalhes | o tabuleiro e os brincos |
| `ivory` `#FBF6EE` | fundo | as cortinas iluminadas |
| `night` `#221B29` | rodapé, chamada final | o vestido com as fases da lua |

Títulos em *Cormorant Garamond*, texto em *Jost*. Os motivos são a lua
crescente (o fundo das fotos), as fases da lua (o vestido) e a rosa dos ventos
(o tabuleiro de astrologia). As fotos ficam em molduras em arco.

As cores do texto passam no contraste AA. O dourado fica só nos detalhes.

## Rodando

```bash
npm install
RHFACTOR_STORE_ID=<id da loja> npm run dev     # http://localhost:3006, com a stack do dev
npm run kit:sync                               # testar o kit local (../rhfactor-kit) antes do npm
```

Na plataforma, o site é publicado pelo cloud-management a partir deste
repositório (Loja › Site › repositório git), com o `Dockerfile`; em produção,
pelo Netlify (`netlify.toml`).
