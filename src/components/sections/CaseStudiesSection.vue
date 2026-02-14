<script setup lang="ts">
import { useI18n } from '@/composables';
import CaseStudyGrid from '@/components/sections/CaseStudyGrid.vue';
import { cases } from '@/data/cases';

const { t } = useI18n();
</script>

<template>
  <section
    id="cases"
    class="py-20 md:py-24 px-6 bg-[var(--bg-dark)]"
    aria-labelledby="cases-heading"
  >
    <div class="max-w-6xl mx-auto">
      <div
        class="text-left mb-12 md:text-center md:mb-16"
      >
        <h2
          id="cases-heading"
          class="text-3xl md:text-4xl font-extrabold mb-4 uppercase tracking-tighter"
        >
          {{ t('casesSectionTitle') }}
        </h2>
        <p class="text-gray-400 text-sm md:text-base max-w-2xl md:mx-auto">
          {{ t('casesSectionSubtitle') }}
        </p>
      </div>
      <CaseStudyGrid :cases="cases" />
    </div>
  </section>
</template>
