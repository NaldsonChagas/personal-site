export type Locale = 'en' | 'pt';

export const messages: Record<Locale, Record<string, string>> = {
  en: {
    about: 'About',
    aboutMe: 'About me',
    impactfulCases: 'Impactful Cases',
    hireMe: 'Hire Me',
    contact: 'Contact',
    seniorBackendDeveloper: 'Senior Backend Developer',
    yearsExperience: 'Years Experience',
  },
  pt: {
    about: 'Sobre',
    aboutMe: 'Sobre mim',
    impactfulCases: 'Cases de Impacto',
    hireMe: 'Contrate-me',
    contact: 'Contato',
    seniorBackendDeveloper: 'Desenvolvedor Backend Sênior',
    yearsExperience: 'Anos de Experiência',
  },
};
