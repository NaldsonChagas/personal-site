<script setup lang="ts">
import SkillCard from '@/components/ui/SkillCard.vue';

const skills = [
  {
    icon: 'architecture',
    iconVariant: 'emerald' as const,
    titleKey: 'skillArchitecture',
    descriptionKey: 'skillArchitectureDesc',
    descriptionShortKey: 'skillArchitectureDescShort',
  },
  {
    icon: 'cloud_sync',
    iconVariant: 'blue' as const,
    titleKey: 'skillRecovery',
    descriptionKey: 'skillRecoveryDesc',
    descriptionShortKey: 'skillRecoveryDescShort',
  },
  {
    icon: 'hub',
    iconVariant: 'emerald' as const,
    titleKey: 'skillMicroservices',
    descriptionKey: 'skillMicroservicesDesc',
    descriptionShortKey: 'skillMicroservicesDescShort',
  },
  {
    icon: 'cloud',
    iconVariant: 'blue' as const,
    titleKey: 'skillAws',
    descriptionKey: 'skillAwsDesc',
    descriptionShortKey: 'skillAwsDescShort',
  },
];
</script>

<template>
  <div class="grid grid-cols-2 gap-3 md:gap-4">
    <SkillCard
      v-for="skill in skills"
      :key="skill.titleKey"
      :icon="skill.icon"
      :icon-variant="skill.iconVariant"
      :title-key="skill.titleKey"
      :description-key="skill.descriptionKey"
      :description-short-key="skill.descriptionShortKey"
    />
  </div>
</template>
