# Guilherme Oliveira Portfolio

## Português Brasil

Um portfólio bilíngue de Guilherme Oliveira, Desenvolvedor Full Stack. Apresenta experiência profissional, competências técnicas, informações de contato e uma seção de projetos em evolução, em português e inglês.

**Site:** [exploreguilherme.space](https://www.exploreguilherme.space)

### Destaques

- Versões em português (`/pt`) e inglês (`/en`), com `/` redirecionando para português.
- Portfólio responsivo e acessível em página única, com suporte a temas claro, escuro e do sistema.
- Animações que respeitam a preferência `prefers-reduced-motion` do usuário.
- Fundo interativo sutil, ajustado para telas menores.
- Título, descrição, URL canônica, tags hreflang e cards Open Graph e X/Twitter específicos por idioma.
- Imagens Open Graph geradas dinamicamente, `sitemap.xml`, `robots.txt`, favicon e JSON-LD de Person/ProfilePage.
- Integração com Google Tag Manager.
- Testes automatizados para conteúdo, configurações de animação, rotas e metadados de SEO, ícones, temas e configuração visual responsiva.

### Stack e ferramentas

| Área | Ferramentas utilizadas |
| --- | --- |
| Framework | [Next.js 16](https://nextjs.org/) com App Router e React Server Components |
| Interface | [React 19](https://react.dev/), TypeScript, CSS e classes utilitárias do [Tailwind CSS 4](https://tailwindcss.com/) |
| Animação | [Motion](https://motion.dev/) para animações de entrada, rolagem e interação |
| Ícones | [Tabler Icons for React](https://tabler.io/icons) |
| Internacionalização | Conteúdo por idioma em `src/data/portfolio.ts`; as rotas são `/pt` e `/en` |
| Temas | Provider React próprio com `localStorage` e `prefers-color-scheme` |
| Fontes | `next/font` com Manrope e DM Mono do Google Fonts |
| SEO | API de Metadata do Next.js, `next/og`, JSON-LD, sitemap, robots e alternates por idioma |
| Analytics | Google Tag Manager |
| Testes | [Vitest](https://vitest.dev/) e [JSDOM](https://github.com/jsdom/jsdom) |
| Linting | [ESLint 9](https://eslint.org/) com as regras Core Web Vitals do `eslint-config-next` |
| Gerenciador de pacotes | npm e `package-lock.json` |

### Como executar localmente

**Requisitos:** Node.js 20.9 ou mais recente e npm.

```bash
git clone https://github.com/glrm079/exploreguilherme.git
cd exploreguilherme
npm ci
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000). A página inicial redireciona para `/pt`; acesse `/en` para a versão em inglês.

### Scripts disponíveis

| Comando | Descrição |
| --- | --- |
| `npm run dev` | Inicia o servidor local de desenvolvimento do Next.js. |
| `npm run build` | Cria uma build otimizada para produção. |
| `npm run start` | Inicia o servidor de produção após a build. |
| `npm run lint` | Executa o ESLint em todo o projeto. |
| `npm test` | Executa a suíte de testes do Vitest uma vez. |
| `npm run test:watch` | Executa o Vitest em modo watch. |

Antes de abrir um pull request ou publicar, execute:

```bash
npm run lint
npm test
npm run build
```

### Estrutura do projeto

```text
app/
  [locale]/                 # Página por idioma e rota da imagem Open Graph
  icon.svg                  # Favicon do site
  layout.tsx                # Fontes globais, provider de tema e snippet do GTM
  page.tsx                  # Redireciona / para /pt
  robots.ts                 # Gera /robots.txt
  sitemap.ts                # Gera /sitemap.xml
components/portfolio/       # Seções do portfólio e componentes interativos reutilizáveis
public/                     # Arquivos estáticos, incluindo a foto de perfil
src/
  data/portfolio.ts         # Textos do portfólio em português e inglês
  lib/                      # Configurações de animação, idioma, metadados e visual
tests/                      # Cobertura do Vitest para comportamento e rotas
proxy.ts                    # Define o idioma do documento por rota
```

### Conteúdo, design e internacionalização

Todo o conteúdo do portfólio está em [`src/data/portfolio.ts`](src/data/portfolio.ts). Mantenha as entradas `pt` e `en` alinhadas ao alterar textos da navegação e seções, projetos, experiências, competências, contato ou labels de chamadas para ação.

A foto principal está em `public/guilherme-oliveira-portrait.jpg`. Se ela for substituída, mantenha o mesmo caminho ou atualize o componente principal e `src/lib/portfolio-metadata.ts`, onde a imagem é usada nos dados estruturados.

Os tokens visuais globais, regras responsivas e estilos de tema ficam em `app/globals.css`. As seções são compostas em `components/portfolio/portfolio.tsx`.

| Rota | Idioma | Idioma do documento |
| --- | --- | --- |
| `/pt` | Português | `pt-BR` |
| `/en` | Inglês | `en` |

`proxy.ts` define o idioma do documento a partir do caminho da requisição e o repassa ao layout raiz. A rota por idioma aceita apenas esses dois valores e retorna 404 para os demais.

### SEO, analytics e qualidade

A URL do site é configurada uma única vez em `src/lib/portfolio-metadata.ts`. Altere `siteUrl` nesse arquivo ao migrar para outro domínio. Para cada idioma, o site fornece links canônicos e alternates de idioma, metadados localizados para busca e redes sociais, uma imagem Open Graph gerada de 1200 × 630 em `/{locale}/opengraph-image`, metadados X/Twitter no formato summary-large-image, JSON-LD de Person/ProfilePage, `/sitemap.xml` e `/robots.txt`.

O Google Tag Manager é carregado em `app/layout.tsx`. Substitua o ID atual do container tanto no script quanto no iframe sem JavaScript antes de usar outro container de analytics.

O projeto usa uma estrutura semântica de seções, texto alternativo descritivo nas imagens, controles navegáveis por teclado, estilos de foco visíveis e preferências de tema salvas no navegador. As animações são desativadas ou reduzidas para pessoas que solicitam redução de movimento, inclusive durante a hidratação inicial para evitar inconsistências visuais. A suíte de testes cobre conteúdo localizado, roteamento de idioma do documento, metadados e rotas de busca, animação e redução de movimento, estado de tema, configuração visual, split text e renderização de ícones.

## English

A bilingual portfolio for Guilherme Oliveira, a Full Stack Developer. It presents professional experience, technical skills, contact details, and a growing projects section in Portuguese and English.

**Live site:** [exploreguilherme.space](https://www.exploreguilherme.space)

### Highlights

- Portuguese (`/pt`) and English (`/en`) versions, with `/` redirecting to Portuguese.
- Responsive and accessible single-page portfolio with light, dark, and system theme support.
- Motion that respects the user's `prefers-reduced-motion` setting.
- Subtle interactive background, tuned down on smaller screens.
- Locale-specific title, description, canonical URL, hreflang tags, Open Graph, and X/Twitter cards.
- Generated Open Graph images, `sitemap.xml`, `robots.txt`, favicon, and Person/ProfilePage JSON-LD.
- Google Tag Manager integration.
- Automated checks for content, animation settings, SEO routes and metadata, icons, themes, and responsive visual configuration.

### Tech stack and tools

| Area | Tools used |
| --- | --- |
| Framework | [Next.js 16](https://nextjs.org/) with the App Router and React Server Components |
| UI | [React 19](https://react.dev/), TypeScript, CSS, and [Tailwind CSS 4](https://tailwindcss.com/) utility classes |
| Animation | [Motion](https://motion.dev/) for entrance, scroll, and interaction animations |
| Icons | [Tabler Icons for React](https://tabler.io/icons) |
| Internationalization | Locale-based content supplied from `src/data/portfolio.ts`; routes are `/pt` and `/en` |
| Themes | Local React theme provider using `localStorage` and `prefers-color-scheme` |
| Fonts | `next/font` with Manrope and DM Mono from Google Fonts |
| SEO | Next.js Metadata API, `next/og`, JSON-LD, sitemap, robots, and locale alternates |
| Analytics | Google Tag Manager |
| Testing | [Vitest](https://vitest.dev/) and [JSDOM](https://github.com/jsdom/jsdom) |
| Linting | [ESLint 9](https://eslint.org/) with `eslint-config-next` Core Web Vitals rules |
| Package manager | npm and `package-lock.json` |

### Getting started

**Requirements:** Node.js 20.9 or newer, and npm.

```bash
git clone https://github.com/glrm079/exploreguilherme.git
cd exploreguilherme
npm ci
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). The default page redirects to `/pt`; use `/en` for English.

### Available scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Starts the local Next.js development server. |
| `npm run build` | Creates an optimized production build. |
| `npm run start` | Starts the production server after building. |
| `npm run lint` | Runs ESLint across the project. |
| `npm test` | Runs the Vitest test suite once. |
| `npm run test:watch` | Runs Vitest in watch mode. |

Before opening a pull request or deploying, run:

```bash
npm run lint
npm test
npm run build
```

### Project structure

```text
app/
  [locale]/                 # Locale page and Open Graph image route
  icon.svg                  # Site favicon
  layout.tsx                # Global fonts, theme provider, and GTM snippet
  page.tsx                  # Redirects / to /pt
  robots.ts                 # Generates /robots.txt
  sitemap.ts                # Generates /sitemap.xml
components/portfolio/       # Portfolio sections and reusable interactive UI
public/                     # Static files, including the portrait image
src/
  data/portfolio.ts         # Portuguese and English portfolio copy
  lib/                      # Motion, language, metadata, and visual settings
tests/                      # Vitest coverage for behavior and routes
proxy.ts                    # Sets the document language per locale route
```

### Content, design, and localization

All portfolio copy lives in [`src/data/portfolio.ts`](src/data/portfolio.ts). Keep the `pt` and `en` entries aligned when changing navigation and section copy, projects, experience, skills, contact details, or call-to-action labels.

The hero portrait is stored at `public/guilherme-oliveira-portrait.jpg`. If it is replaced, retain the same path or update both the hero component and `src/lib/portfolio-metadata.ts`, where it is used in structured data.

Global visual tokens, responsive rules, and theme styles are in `app/globals.css`. Portfolio sections are composed in `components/portfolio/portfolio.tsx`.

| Route | Language | Document language |
| --- | --- | --- |
| `/pt` | Portuguese | `pt-BR` |
| `/en` | English | `en` |

`proxy.ts` derives the document language from the request path and passes it to the root layout. The locale route only accepts these two values and returns a 404 for others.

### SEO, analytics, and quality

The site URL is configured once in `src/lib/portfolio-metadata.ts`. Change `siteUrl` there when moving to another domain. Each locale supplies canonical and alternate-language links, localized search and social metadata, a generated 1200 × 630 Open Graph image at `/{locale}/opengraph-image`, X/Twitter summary-large-image metadata, Person/ProfilePage JSON-LD, `/sitemap.xml`, and `/robots.txt`.

Google Tag Manager is loaded in `app/layout.tsx`. Replace the current container ID in both the script and no-script iframe before using another analytics container.

The project uses semantic section structure, descriptive image alternative text, keyboard-operable controls, visible focus styles, and theme choices saved in the browser. Motion is disabled or reduced for users who request reduced motion, including during initial hydration to avoid visual mismatch. The test suite covers localized content, document-language routing, metadata and search routes, animation and reduced-motion behavior, theme state, visual configuration, split text, and icon rendering.
