module.exports = [
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/app/[locale]/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PortfolioPage,
    "generateMetadata",
    ()=>generateMetadata,
    "generateStaticParams",
    ()=>generateStaticParams
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '@/components/portfolio/portfolio'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$portfolio$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/portfolio.ts [app-rsc] (ecmascript)");
;
;
;
;
const locales = [
    'pt',
    'en'
];
function generateStaticParams() {
    return locales.map((locale)=>({
            locale
        }));
}
async function generateMetadata({ params }) {
    const { locale } = await params;
    const isEnglish = locale === 'en';
    const title = isEnglish ? 'Creative developer' : 'Desenvolvedor criativo';
    const description = isEnglish ? 'Selected work and digital experiences by Guilherme Oliveira.' : 'Projetos e experiências digitais de Guilherme Oliveira.';
    return {
        title,
        description,
        alternates: {
            languages: {
                'pt-BR': '/pt',
                en: '/en'
            }
        },
        openGraph: {
            title: `Guilherme Oliveira — ${title}`,
            description,
            type: 'website',
            locale: isEnglish ? 'en_US' : 'pt_BR'
        }
    };
}
async function PortfolioPage({ params }) {
    const { locale } = await params;
    if (!locales.includes(locale)) (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notFound"])();
    const typedLocale = locale;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(Portfolio, {
        locale: typedLocale,
        content: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$portfolio$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getPortfolioContent"])(typedLocale)
    }, void 0, false, {
        fileName: "[project]/app/[locale]/page.tsx",
        lineNumber: 34,
        columnNumber: 10
    }, this);
}
}),
"[project]/app/[locale]/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", (function(__turbopack_context__){

__turbopack_context__.n(__turbopack_context__.i("[project]/app/[locale]/page.tsx [app-rsc] (ecmascript)"));
}),
"[project]/src/data/portfolio.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getPortfolioContent",
    ()=>getPortfolioContent
]);
const portfolio = {
    pt: {
        name: 'Guilherme Oliveira',
        navigation: {
            about: 'Perfil',
            work: 'Projetos',
            services: 'Stack & competências',
            experience: 'Experiência',
            contact: 'Contato'
        },
        hero: {
            eyebrow: 'Full Stack Developer',
            heading: 'Aplicações web modernas, responsivas e escaláveis.',
            description: 'Desenvolvedor full stack especializado em React, Next.js e Node.js. São Paulo, Brasil · GMT−3.',
            primaryAction: 'Ver experiência',
            secondaryAction: 'Vamos conversar'
        },
        about: {
            label: '01 — Perfil',
            title: 'Código sólido, produtos que evoluem.',
            body: 'Sou Guilherme Oliveira, desenvolvedor Full Stack JavaScript formado em Análise e Desenvolvimento de Sistemas. Tenho experiência prática na criação de aplicações modernas de ponta a ponta: interfaces em React e Next.js, APIs REST, bancos de dados e deploy em nuvem. Atuo com TypeScript, Node.js, NestJS, PostgreSQL, DynamoDB e arquiteturas serverless na AWS, além de Google Cloud. Também valorizo testes automatizados, performance, SEO e manutenção de código em produtos que evoluem continuamente. Trabalho de forma proativa, colaborativa e orientada a resultado, do levantamento de requisitos à entrega.',
            metrics: [
                {
                    value: 'São Paulo, BR',
                    label: 'base'
                },
                {
                    value: 'Flexível',
                    label: 'presencial · híbrido · remoto'
                },
                {
                    value: 'Português · English',
                    label: 'idiomas'
                }
            ]
        },
        work: {
            label: '03 — Projetos',
            title: 'Projetos que conectam ideia e execução.',
            intro: 'Projetos e estudos de caso serão publicados em breve.'
        },
        projects: [
            {
                number: '01',
                title: 'On building',
                category: 'Em construção',
                description: 'Novos projetos e estudos de caso serão adicionados aqui em breve.',
                year: '2026',
                technologies: [],
                actionLabel: 'Em breve',
                href: '#work'
            }
        ],
        services: {
            label: '04 — Stack & competências',
            title: 'Tecnologia para entregar valor.',
            items: [
                {
                    number: '01',
                    title: 'Frontend',
                    description: 'HTML, CSS, JavaScript, TypeScript, React, Next.js, Tailwind CSS, Vite e Mantine.'
                },
                {
                    number: '02',
                    title: 'Backend & dados',
                    description: 'Node.js, Express, NestJS, APIs REST, Prisma, MySQL, MongoDB, PostgreSQL e DynamoDB.'
                },
                {
                    number: '03',
                    title: 'Cloud & qualidade',
                    description: 'AWS Serverless, Cognito, RDS, Google Cloud, Git, GitHub, GitLab, Cypress, Vitest e Jest.'
                }
            ]
        },
        experience: {
            label: '02 — Experiência',
            title: 'Produto, colaboração e entrega.',
            items: [
                {
                    period: 'Abr 2026 — atual',
                    role: 'Full Stack Developer',
                    company: 'Westpoint — Cookiepal · remoto',
                    description: 'Suporte à plataforma, desenvolvimento de features end-to-end e automação de processos. Atuação em frontend, backend e integrações para evoluir fluxos internos e a experiência do produto.'
                },
                {
                    period: 'Nov 2025 — Abr 2026',
                    role: 'Full Stack Developer',
                    company: 'Westpoint · Inglaterra · remoto',
                    description: 'Desenvolvimento e manutenção de funcionalidades para uma plataforma usada na Europa. Frontend com React, Vite, TypeScript e Mantine; backend serverless com NestJS, Prisma, PostgreSQL RDS, DynamoDB e Cognito. Cobertura de qualidade com Cypress, Vitest e Jest, em colaboração com o time para entregas dentro do prazo.'
                }
            ]
        },
        contact: {
            label: '05 — Contato',
            title: 'Vamos conversar.',
            description: 'Para oportunidades full stack, produtos web ou uma conversa sobre tecnologia.',
            email: 'glrmcontato@gmail.com',
            phone: '+55 (11) 99762-0855',
            emailLabel: 'Enviar email',
            socialLabel: 'São Paulo, Brasil · GMT−3'
        },
        footer: 'Guilherme Oliveira · Full Stack Developer.'
    },
    en: {
        name: 'Guilherme Oliveira',
        navigation: {
            about: 'Profile',
            work: 'Projects',
            services: 'Stack & skills',
            experience: 'Experience',
            contact: 'Contact'
        },
        hero: {
            eyebrow: 'Full Stack Developer',
            heading: 'Modern, responsive and scalable web applications.',
            description: 'Full stack developer specialized in React, Next.js and Node.js. Based in São Paulo, Brazil · GMT−3.',
            primaryAction: 'View experience',
            secondaryAction: 'Start a conversation'
        },
        about: {
            label: '01 — Profile',
            title: 'Solid code, products that evolve.',
            body: 'I am Guilherme Oliveira, a Full Stack JavaScript Developer with a degree in Systems Analysis and Development. I build modern end-to-end applications: React and Next.js interfaces, REST APIs, databases and cloud deployment. I work with TypeScript, Node.js, NestJS, PostgreSQL, DynamoDB and serverless AWS architectures, as well as Google Cloud. I value automated testing, performance, SEO and maintainable code in products that evolve continuously. I work proactively and collaboratively from requirements gathering through delivery.',
            metrics: [
                {
                    value: 'São Paulo, BR',
                    label: 'base'
                },
                {
                    value: 'Flexible',
                    label: 'on-site · hybrid · remote'
                },
                {
                    value: 'Portuguese · English',
                    label: 'languages'
                }
            ]
        },
        work: {
            label: '03 — Projects',
            title: 'Projects that connect ideas and execution.',
            intro: 'Projects and case studies will be published here soon.'
        },
        projects: [
            {
                number: '01',
                title: 'On building',
                category: 'In progress',
                description: 'New projects and case studies will be added here soon.',
                year: '2026',
                technologies: [],
                actionLabel: 'Coming soon',
                href: '#work'
            }
        ],
        services: {
            label: '04 — Stack & skills',
            title: 'Technology that delivers value.',
            items: [
                {
                    number: '01',
                    title: 'Frontend',
                    description: 'HTML, CSS, JavaScript, TypeScript, React, Next.js, Tailwind CSS, Vite and Mantine.'
                },
                {
                    number: '02',
                    title: 'Backend & data',
                    description: 'Node.js, Express, NestJS, REST APIs, Prisma, MySQL, MongoDB, PostgreSQL and DynamoDB.'
                },
                {
                    number: '03',
                    title: 'Cloud & quality',
                    description: 'AWS Serverless, Cognito, RDS, Google Cloud, Git, GitHub, GitLab, Cypress, Vitest and Jest.'
                }
            ]
        },
        experience: {
            label: '02 — Experience',
            title: 'Product, collaboration and delivery.',
            items: [
                {
                    period: 'Apr 2026 — present',
                    role: 'Full Stack Developer',
                    company: 'Westpoint — Cookiepal · remote',
                    description: 'Platform support, end-to-end feature delivery and process automation. Working across frontend, backend and integrations to improve internal flows and product experience.'
                },
                {
                    period: 'Nov 2025 — Apr 2026',
                    role: 'Full Stack Developer',
                    company: 'Westpoint · England · remote',
                    description: 'Developed and maintained features for a platform used across Europe. Frontend with React, Vite, TypeScript and Mantine; serverless backend with NestJS, Prisma, PostgreSQL RDS, DynamoDB and Cognito. Quality coverage with Cypress, Vitest and Jest, collaborating with the team to meet deadlines.'
                }
            ]
        },
        contact: {
            label: '05 — Contact',
            title: 'Let’s talk.',
            description: 'For full stack opportunities, web products or a technology conversation.',
            email: 'glrmcontato@gmail.com',
            phone: '+55 (11) 99762-0855',
            emailLabel: 'Send an email',
            socialLabel: 'São Paulo, Brazil · GMT−3'
        },
        footer: 'Guilherme Oliveira · Full Stack Developer.'
    }
};
function getPortfolioContent(locale) {
    return portfolio[locale];
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__0bwrmp9._.js.map