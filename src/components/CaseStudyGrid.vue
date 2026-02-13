<script setup lang="ts">
import CaseStudyCard from '@/components/CaseStudyCard.vue';
import type { CaseItem } from '@/data/cases';

defineProps<{
  cases: CaseItem[];
}>();
</script>

<template>
  <div class="case-grid">
    <CaseStudyCard
      v-for="(caseItem, index) in cases"
      :key="index"
      :case-item="caseItem"
    />
  </div>
</template>
