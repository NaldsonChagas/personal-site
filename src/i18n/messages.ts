export type Locale = 'en' | 'pt';

export const messages: Record<Locale, Record<string, string>> = {
  en: {
    about: 'About',
    aboutMe: 'About me',
    aboutIntro1:
      "I am a software engineer with over 8 years of experience, specializing in complex backend challenges. Throughout my career, I've worked on critical migrations and architectural optimizations for high-scale environments.",
    aboutIntro2:
      "My approach focuses on delivering measurable performance gains, ensuring system stability, and implementing robust integrations that drive business value. I enjoy working on complex systems where architecture, performance and business impact intersect. I'm especially motivated by legacy recovery projects and building scalable platforms from scratch.",
    getInTouch: 'Get in Touch',
    impactfulCases: 'Impactful Cases',
    hireMe: 'Work With Me',
    contact: 'Contact',
    seniorBackendDeveloper: 'Senior Backend Developer',
    yearsExperience: 'Years Experience',
    yearsExperienceShort: 'Years Exp',
    heroName: 'Naldson Bento Chagas',
    heroDescriptionPrefix: '8+ years of experience specializing in ',
    heroDescriptionHighlight: 'scalable systems',
    heroDescriptionSuffix: ', system modernization, and microservices architectures.',
    linkedIn: 'LinkedIn',
    heroPhotoAlt: 'Naldson Bento Chagas, backend developer',
    skillArchitecture: 'Architecture',
    skillArchitectureDesc: 'Clean, Modular, and Hexagonal patterns for scalable systems.',
    skillArchitectureDescShort: 'Clean, Modular & Hexagonal.',
    skillRecovery: 'Recovery',
    skillRecoveryDesc: 'Expertise in modernizing legacy PHP and Node.js systems.',
    skillRecoveryDescShort: 'Modernizing legacy systems.',
    skillMicroservices: 'Microservices',
    skillMicroservicesDesc:
      'Decoupled distributed systems and event-driven architecture.',
    skillMicroservicesDescShort: 'Event-driven distribution.',
    skillAws: 'AWS',
    skillAwsDesc: 'Cloud-native development and serverless infrastructure.',
    skillAwsDescShort: 'Cloud-native development.',
    casesSectionTitle: 'Impactful Case Studies',
    casesSectionSubtitle:
      'Proven engineering results delivered across Fintech, Retail, and Public Sector ecosystems.',
    caseLabelProblem: 'Problem',
    caseLabelAction: 'Action',
    caseLabelResult: 'Result',
    case1Category: 'Public Sector',
    case1Title: 'CADIC (Urban Census)',
    case1Problem:
      'Urban census system used by energy utilities suffered from poor usability, cache bugs, and lack of maintenance, slowing operators who evaluated thousands of utility poles daily.',
    case1Action:
      'Redesigned the main census interface using Angular and improved backend flows in PHP. Delivered a modern, responsive UI aligned with real operator workflows, eliminating functional bugs and usability issues.',
    case1Result:
      'Faster data collection, reduced operational errors, and increased productivity for field operators.',
    case2Category: 'Omnichannel',
    case2Title: 'neWave / Fluctus',
    case2Problem:
      'Telecom clients relied on multiple ERPs with fragmented communication and no unified integration layer.',
    case2Action:
      'Developed Node.js APIs and React components for an omnichannel platform. Built and maintained B2B integrations with multiple ERPs and messaging providers (WhatsApp via Zenvia, Telegram, Facebook), and provided direct technical support for API-related issues.',
    case2Result:
      'Centralized communication platform enabling automated ERP synchronization and improved operational efficiency for telecom clients.',
    case3Category: 'Fintech',
    case3Title: 'Banco Midway',
    case3Problem:
      'Need to deliver mobile phone recharge and automatic debit features in a banking environment requiring high reliability and asynchronous communication.',
    case3Action:
      'Built microservices in Node.js, integrating Kafka for event-driven communication, Redis for state control, and MongoDB/PostgreSQL for persistence. Collaborated closely with core banking teams to ensure consistent financial flows.',
    case3Result:
      'Production-ready financial features with stable asynchronous processing and reliable system integration.',
    case4Category: 'Retail / CI&T',
    case4Title: 'Drogasil',
    case4Problem:
      'Subscription platform was inactive, running on unmaintained legacy services with broken critical flows.',
    case4Action:
      'Participated in system recovery using PHP and Java microservices. Developed new routines with Laravel, Spring Boot and Spring Batch, and integrated services through RabbitMQ and OracleDB.',
    case4Result:
      'Successful reactivation of the subscription platform and restoration of critical business workflows.',
    case5Category: 'Fintech',
    case5Title: 'Finnet Tecnologia',
    case5Problem:
      'Severe performance bottlenecks in financial data processing pipelines impacting daily operations.',
    case5Action:
      'Refactored core Python applications, reducing processing time by over 85%. Built new internal backend services from scratch using Node.js and NestJS, defining architectural standards with the engineering team.',
    case5Result:
      'Significant performance improvements and establishment of scalable backend foundations for new company-wide systems.',
    case6Category: 'Bet',
    case6Title: 'EstrelaBet',
    case6Problem:
      'Legacy PHP application with growing traffic demands and tight coupling between frontend and backend services.',
    case6Action:
      'Designed and implemented a new BFF from scratch using Node.js and Fastify, defining folder structure, middlewares, and service integrations. Modernized legacy Slim 3 / PHP 7.2 services to Slim 4 / PHP 8.4, applying dependency inversion and refactoring critical flows. Also contributed to the affiliates platform using Laravel.',
    case6Result:
      'Cleaner architecture, improved system maintainability, and faster feature delivery across multiple teams.',
    contactHeadlineBefore: "Let's build something ",
    contactHeadlineHighlight: 'exceptional',
    contactHeadlineAfter: '.',
    contactDescriptionLong:
      "Seeking a Senior Backend Engineer to architect systems or modernize legacy platforms? Let's connect.",
    contactDescriptionShort: "Seeking a Senior Backend Engineer? Let's connect.",
    contactEmailLabel: 'contact@naldson.dev',
    contactLinkedInLabel: 'LinkedIn Profile',
    footerCopyright: '© 2026 Naldson Bento Chagas.',
    footerTagSeniorBackend: 'Senior Backend',
    footerTagArchitecture: 'Architecture',
    footerTagDistributedSystems: 'Distributed Systems',
  },
  pt: {
    about: 'Sobre',
    aboutMe: 'Sobre mim',
    aboutIntro1:
      'Sou engenheiro de software com mais de 8 anos de experiência construindo e modernizando sistemas críticos em setores como energia, telecomunicações, varejo farmacêutico, banco digital e iGaming. Ao longo da minha carreira, trabalhei em migrações críticas e otimizações arquiteturais para ambientes de alta escala.',
    aboutIntro2:
      'Minha abordagem foca em entregar ganhos de performance mensuráveis, garantindo estabilidade do sistema e implementando integrações robustas que geram valor real para o negócio. Gosto de trabalhar em sistemas complexos onde arquitetura, performance e impacto de negócio se cruzam. Sou especialmente motivado por projetos de recuperação de legados e construção de plataformas escaláveis do zero.',
    getInTouch: 'Fale Comigo',
    impactfulCases: 'Cases de Impacto',
    hireMe: 'Trabalhe comigo',
    contact: 'Contato',
    seniorBackendDeveloper: 'Desenvolvedor Backend Sênior',
    yearsExperience: 'Anos de Experiência',
    yearsExperienceShort: 'Anos Exp',
    heroName: 'Naldson Bento Chagas',
    heroDescriptionPrefix: 'Mais de 8 anos de experiência em ',
    heroDescriptionHighlight: 'sistemas escaláveis',
    heroDescriptionSuffix: ', modernização de sistemas e arquiteturas de microserviços.',
    linkedIn: 'LinkedIn',
    heroPhotoAlt: 'Naldson Bento Chagas, desenvolvedor backend',
    skillArchitecture: 'Arquitetura',
    skillArchitectureDesc: 'Padrões Clean, Modular e Hexagonal para sistemas escaláveis.',
    skillArchitectureDescShort: 'Limpa, Modular e Hexagonal.',
    skillRecovery: 'Recuperação',
    skillRecoveryDesc: 'Expertise em modernização de sistemas legados PHP e Node.js.',
    skillRecoveryDescShort: 'Modernização de legados.',
    skillMicroservices: 'Microsserviços',
    skillMicroservicesDesc:
      'Sistemas distribuídos desacoplados e arquitetura orientada a eventos.',
    skillMicroservicesDescShort: 'Orientado a eventos.',
    skillAws: 'AWS',
    skillAwsDesc: 'Desenvolvimento cloud-native e infraestrutura serverless.',
    skillAwsDescShort: 'Desenvolvimento cloud.',
    casesSectionTitle: 'Cases de Impacto Profissional',
    casesSectionSubtitle:
      'Resultados de engenharia comprovados entregues em ecossistemas de Fintech, Varejo e Setor Público.',
    caseLabelProblem: 'Problema',
    caseLabelAction: 'Ação',
    caseLabelResult: 'Resultado',
    case1Category: 'Setor Público',
    case1Title: 'CADIC (Censo Urbano)',
    case1Problem:
      'Sistema de censo urbano usado por concessionárias de energia sofria com baixa usabilidade, bugs de cache e falta de manutenção, atrasando operadores que avaliavam milhares de postes diariamente.',
    case1Action:
      'Redesenhei a interface principal do censo com Angular e melhorei os fluxos de backend em PHP. Entreguei uma UI moderna e responsiva alinhada aos fluxos reais dos operadores, eliminando bugs funcionais e problemas de usabilidade.',
    case1Result:
      'Coleta de dados mais rápida, redução de erros operacionais e aumento de produtividade para operadores de campo.',
    case2Category: 'Omnicanal',
    case2Title: 'neWave / Fluctus',
    case2Problem:
      'Clientes de telecom dependiam de múltiplos ERPs com comunicação fragmentada e nenhuma camada de integração unificada.',
    case2Action:
      'Desenvolvi APIs em Node.js e componentes React para uma plataforma omnichannel. Construí e mantive integrações B2B com múltiplos ERPs e provedores de mensageria (WhatsApp via Zenvia, Telegram, Facebook) e prestei suporte técnico direto em questões relacionadas à API.',
    case2Result:
      'Plataforma de comunicação centralizada que permite sincronização automatizada com ERPs e melhoria na eficiência operacional para clientes de telecom.',
    case3Category: 'Fintech',
    case3Title: 'Banco Midway',
    case3Problem:
      'Necessidade de entregar recarga de celular e débito automático em conta em ambiente bancário que exigia alta confiabilidade e comunicação assíncrona.',
    case3Action:
      'Construí microserviços em Node.js, integrando Kafka para comunicação orientada a eventos, Redis para controle de estado e MongoDB/PostgreSQL para persistência. Colaborei de perto com as equipes de core banking para garantir fluxos financeiros consistentes.',
    case3Result:
      'Features financeiras prontas para produção, com processamento assíncrono estável e integração confiável entre sistemas.',
    case4Category: 'Varejo / CI&T',
    case4Title: 'Drogasil',
    case4Problem:
      'Plataforma de assinaturas estava inativa, rodando em serviços legados sem manutenção e com fluxos críticos quebrados.',
    case4Action:
      'Participei da recuperação do sistema usando microserviços em PHP e Java. Desenvolvi novas rotinas com Laravel, Spring Boot e Spring Batch, integrando serviços via RabbitMQ e OracleDB.',
    case4Result:
      'Reativação bem-sucedida da plataforma de assinaturas e restauração dos fluxos críticos de negócio.',
    case5Category: 'Fintech',
    case5Title: 'Finnet Tecnologia',
    case5Problem:
      'Gargalos severos de performance nos pipelines de processamento de dados financeiros impactando as operações diárias.',
    case5Action:
      'Refatorei aplicações Python centrais, reduzindo o tempo de processamento em mais de 85%. Construí novos serviços backend internos do zero com Node.js e NestJS, definindo padrões arquiteturais com a equipe de engenharia.',
    case5Result:
      'Melhorias significativas de performance e estabelecimento de bases backend escaláveis para novos sistemas da empresa.',
    case6Category: 'Bet',
    case6Title: 'EstrelaBet',
    case6Problem:
      'Aplicação PHP legada com demanda crescente de tráfego e acoplamento forte entre frontend e backend.',
    case6Action:
      'Projetei e implementei um novo BFF do zero usando Node.js e Fastify, definindo estrutura de pastas, middlewares e integrações com serviços. Modernizei serviços legados Slim 3 / PHP 7.2 para Slim 4 / PHP 8.4, aplicando inversão de dependência e refatorando fluxos críticos. Também contribuí na plataforma de afiliados usando Laravel.',
    case6Result:
      'Arquitetura mais limpa, maior manutenibilidade do sistema e entrega de features mais rápida entre múltiplas equipes.',
    contactHeadlineBefore: 'Vamos construir algo ',
    contactHeadlineHighlight: 'excepcional',
    contactHeadlineAfter: '.',
    contactDescriptionLong:
      'Procurando um Engenheiro Backend Sênior para arquitetar sistemas ou modernizar plataformas legadas? Vamos conversar.',
    contactDescriptionShort: 'Procurando um Engenheiro Backend Sênior? Vamos conversar.',
    contactEmailLabel: 'contact@naldson.dev',
    contactLinkedInLabel: 'Perfil LinkedIn',
    footerCopyright: '© 2026 Naldson Bento Chagas.',
    footerTagSeniorBackend: 'Backend Sênior',
    footerTagArchitecture: 'Arquitetura',
    footerTagDistributedSystems: 'Sistemas Distribuídos',
  },
};
