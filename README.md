# Guilherme Oliveira Portfolio

## Português Brasil

Esse é o meu portfólio pessoal, bilíngue (português e inglês), construído com Next.js. Ele reúne minha experiência profissional, stack técnica, formas de contato e uma seção de projetos que vou atualizando aos poucos.

**Site:** [exploreguilherme.space](https://www.exploreguilherme.space)

### O que tem aqui

- Duas versões, `/pt` e `/en`. A raiz (`/`) redireciona automaticamente para português.
- Página única, responsiva, com tema claro, escuro e a opção de seguir o tema do sistema.
- Animações que respeitam `prefers-reduced-motion`, então quem prefere menos movimento na tela não é incomodado.
- SEO cuidado por idioma: título, descrição, URL canônica, hreflang, Open Graph e cards de X/Twitter próprios para cada versão.
- Imagens de Open Graph geradas dinamicamente, além de `sitemap.xml`, `robots.txt`, favicon e JSON-LD de Person/ProfilePage.
- Google Tag Manager configurado.
- Testes cobrindo conteúdo, animações, rotas, metadados de SEO, ícones, temas e o comportamento responsivo.

### Stack

| Área | O que uso |
| --- | --- |
| Framework | [Next.js 16](https://nextjs.org/), com App Router e React Server Components |
| Interface | [React 19](https://react.dev/), TypeScript, CSS e utilitários do [Tailwind CSS 4](https://tailwindcss.com/) |
| Animação | [Motion](https://motion.dev/) para entrada, scroll e interações |
| Ícones | [Tabler Icons for React](https://tabler.io/icons) |
| Internacionalização | Conteúdo separado por idioma em `src/data/portfolio.ts`, com rotas `/pt` e `/en` |
| Temas | Provider próprio em React, usando `localStorage` e `prefers-color-scheme` |
| Fontes | `next/font`, com Manrope e DM Mono do Google Fonts |
| SEO | Metadata API do Next.js, `next/og`, JSON-LD, sitemap, robots e alternates por idioma |
| Analytics | Google Tag Manager |
| Testes | [Vitest](https://vitest.dev/) e [JSDOM](https://github.com/jsdom/jsdom) |
| Linting | [ESLint 9](https://eslint.org/) com as regras de Core Web Vitals do `eslint-config-next` |
| Gerenciador de pacotes | npm, com `package-lock.json` |

### Rodando localmente

Requer Node.js 20.9 ou mais recente e npm.

```bash
git clone https://github.com/glrm079/exploreguilherme.git
cd exploreguilherme
npm ci
npm run dev
```

O projeto sobe em [http://localhost:3000](http://localhost:3000). A home redireciona para `/pt`; a versão em inglês fica em `/en`.

### Estrutura do projeto

```text
app/
  [locale]/                 # Página por idioma e a rota da imagem Open Graph
  icon.svg                  # Favicon
  layout.tsx                # Fontes globais, provider de tema e o snippet do GTM
  page.tsx                  # Redireciona / para /pt
  robots.ts                 # Gera /robots.txt
  sitemap.ts                # Gera /sitemap.xml
components/portfolio/       # Seções do portfólio e componentes interativos
public/                     # Arquivos estáticos, incluindo a foto de perfil
src/
  data/portfolio.ts         # Todo o texto do portfólio, em pt e en
  lib/                      # Configurações de animação, idioma, metadados e visual
tests/                      # Testes do Vitest
proxy.ts                    # Define o idioma do documento por rota
```

### Conteúdo, design e idiomas

Todo o texto do portfólio mora em [`src/data/portfolio.ts`](src/data/portfolio.ts), com as versões `pt` e `en` mantidas lado a lado. A foto de perfil fica em `public/guilherme-oliveira-portrait.jpg`, referenciada também nos dados estruturados em `src/lib/portfolio-metadata.ts`. Os tokens visuais e estilos de tema ficam centralizados em `app/globals.css`, e as seções do portfólio são montadas em `components/portfolio/portfolio.tsx`.

| Rota | Idioma | `lang` do documento |
| --- | --- | --- |
| `/pt` | Português | `pt-BR` |
| `/en` | Inglês | `en` |

O `proxy.ts` decide o idioma do documento com base no caminho da requisição e repassa isso pro layout raiz.

### SEO, analytics e acessibilidade

A URL do site está definida em um único lugar, `src/lib/portfolio-metadata.ts`. Cada idioma tem seus próprios links canônicos e alternates, metadados de busca e redes sociais, uma imagem Open Graph de 1200 × 630 gerada em `/{locale}/opengraph-image`, cards X/Twitter no formato summary-large-image, JSON-LD de Person/ProfilePage, além de `sitemap.xml` e `robots.txt` próprios. O Google Tag Manager é carregado em `app/layout.tsx`.

Tentei manter o projeto acessível: estrutura semântica nas seções, texto alternativo descritivo nas imagens, navegação por teclado, foco visível e preferência de tema salva no navegador. As animações são desativadas ou reduzidas para quem pede menos movimento, inclusive já na primeira renderização, pra evitar aquele "pulo" visual. Os testes cobrem conteúdo localizado, roteamento de idioma, metadados e rotas de busca, comportamento de animação e redução de movimento, estado de tema, configuração visual, split text e renderização dos ícones.

## English

This is my personal, bilingual portfolio (Portuguese and English), built with Next.js. It covers my professional experience, tech stack, contact info, and a projects section I keep adding to over time.

**Live site:** [exploreguilherme.space](https://www.exploreguilherme.space)

### What's in it

- Two versions, `/pt` and `/en`. The root (`/`) redirects to Portuguese by default.
- A single, responsive page with light, dark, and system theme support.
- Motion that respects `prefers-reduced-motion`, so it doesn't get in the way for people who'd rather not see it.
- SEO handled per locale: title, description, canonical URL, hreflang, Open Graph, and X/Twitter cards, each tailored to the language.
- Open Graph images generated on the fly, plus `sitemap.xml`, `robots.txt`, a favicon, and Person/ProfilePage JSON-LD.
- Google Tag Manager wired up.
- Tests covering content, animation settings, SEO routes and metadata, icons, themes, and responsive behavior.

### Tech stack

| Area | What I use |
| --- | --- |
| Framework | [Next.js 16](https://nextjs.org/), App Router and React Server Components |
| UI | [React 19](https://react.dev/), TypeScript, CSS, and [Tailwind CSS 4](https://tailwindcss.com/) utilities |
| Animation | [Motion](https://motion.dev/) for entrance, scroll, and interaction animations |
| Icons | [Tabler Icons for React](https://tabler.io/icons) |
| i18n | Locale content lives in `src/data/portfolio.ts`; routes are `/pt` and `/en` |
| Themes | A small React theme provider using `localStorage` and `prefers-color-scheme` |
| Fonts | `next/font`, with Manrope and DM Mono from Google Fonts |
| SEO | Next.js Metadata API, `next/og`, JSON-LD, sitemap, robots, and locale alternates |
| Analytics | Google Tag Manager |
| Testing | [Vitest](https://vitest.dev/) and [JSDOM](https://github.com/jsdom/jsdom) |
| Linting | [ESLint 9](https://eslint.org/) with `eslint-config-next`'s Core Web Vitals rules |
| Package manager | npm, with `package-lock.json` |

### Getting started

Requires Node.js 20.9 or newer, and npm.

```bash
git clone https://github.com/glrm079/exploreguilherme.git
cd exploreguilherme
npm ci
npm run dev
```

Runs at [http://localhost:3000](http://localhost:3000). The homepage redirects to `/pt`; the English version is at `/en`.

### Project structure

```text
app/
  [locale]/                 # Locale page and the Open Graph image route
  icon.svg                  # Favicon
  layout.tsx                # Global fonts, theme provider, and the GTM snippet
  page.tsx                  # Redirects / to /pt
  robots.ts                 # Generates /robots.txt
  sitemap.ts                # Generates /sitemap.xml
components/portfolio/       # Portfolio sections and interactive UI
public/                     # Static files, including the portrait
src/
  data/portfolio.ts         # All portfolio copy, in both pt and en
  lib/                      # Motion, language, metadata, and visual settings
tests/                      # Vitest coverage
proxy.ts                    # Sets the document language per route
```

### Content, design, and localization

All the copy lives in [`src/data/portfolio.ts`](src/data/portfolio.ts), with the `pt` and `en` entries kept side by side. The portrait sits at `public/guilherme-oliveira-portrait.jpg`, also referenced in the structured data in `src/lib/portfolio-metadata.ts`. Visual tokens and theme styles are centralized in `app/globals.css`, and the portfolio sections come together in `components/portfolio/portfolio.tsx`.

| Route | Language | Document `lang` |
| --- | --- | --- |
| `/pt` | Portuguese | `pt-BR` |
| `/en` | English | `en` |

`proxy.ts` figures out the document language from the request path and passes it down to the root layout.

### SEO, analytics, and accessibility

The site URL lives in one place, `src/lib/portfolio-metadata.ts`. Each locale gets its own canonical and alternate links, localized search and social metadata, a generated 1200 × 630 Open Graph image at `/{locale}/opengraph-image`, X/Twitter summary-large-image cards, Person/ProfilePage JSON-LD, and its own `sitemap.xml` and `robots.txt`. Google Tag Manager loads in `app/layout.tsx`.

I tried to keep this accessible: semantic section structure, descriptive alt text on images, keyboard-operable controls, visible focus states, and theme choices saved in the browser. Motion is disabled or reduced for anyone who asks for less of it, including on first render, to avoid that visual "jump." The test suite covers localized content, document-language routing, metadata and search routes, animation and reduced-motion behavior, theme state, visual configuration, split text, and icon rendering.
