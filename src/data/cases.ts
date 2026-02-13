export type CaseColor = 'emerald' | 'blue' | 'orange' | 'purple' | 'yellow' | 'red';

export interface CaseItem {
  categoryKey: string;
  techStack: string;
  titleKey: string;
  problemKey: string;
  actionKey: string;
  resultKey: string;
  color: CaseColor;
}

export const cases: CaseItem[] = [
  {
    categoryKey: 'case6Category',
    techStack: 'Node/Fastify/PHP/Laravel',
    titleKey: 'case6Title',
    problemKey: 'case6Problem',
    actionKey: 'case6Action',
    resultKey: 'case6Result',
    color: 'red',
  },
  {
    categoryKey: 'case3Category',
    techStack: 'Kafka/Redis/Node',
    titleKey: 'case3Title',
    problemKey: 'case3Problem',
    actionKey: 'case3Action',
    resultKey: 'case3Result',
    color: 'orange',
  },
  {
    categoryKey: 'case4Category',
    techStack: 'Java/PHP/Laravel/Spring',
    titleKey: 'case4Title',
    problemKey: 'case4Problem',
    actionKey: 'case4Action',
    resultKey: 'case4Result',
    color: 'purple',
  },
  {
    categoryKey: 'case5Category',
    techStack: 'Python/NestJS',
    titleKey: 'case5Title',
    problemKey: 'case5Problem',
    actionKey: 'case5Action',
    resultKey: 'case5Result',
    color: 'yellow',
  },
  {
    categoryKey: 'case2Category',
    techStack: 'Node/React',
    titleKey: 'case2Title',
    problemKey: 'case2Problem',
    actionKey: 'case2Action',
    resultKey: 'case2Result',
    color: 'blue',
  },
  {
    categoryKey: 'case1Category',
    techStack: 'Angular/PHP',
    titleKey: 'case1Title',
    problemKey: 'case1Problem',
    actionKey: 'case1Action',
    resultKey: 'case1Result',
    color: 'emerald',
  },
];
