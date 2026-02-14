<script setup lang="ts">
import { computed } from 'vue';
import { useI18n } from '@/composables';
import type { CaseColor, CaseItem } from '@/data/cases';

const props = defineProps<{
  caseItem: CaseItem;
}>();

const { t } = useI18n();

const accentClasses = computed(() => {
  const color = props.caseItem.color;
  const map: Record<
    CaseColor,
    { badge: string; label: string; borderHover: string; titleHover: string }
  > = {
    emerald: {
      badge: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
      label: 'text-[var(--primary)]',
      borderHover: 'hover:border-[var(--primary)]/50',
      titleHover: 'group-hover:text-[var(--primary)]',
    },
    blue: {
      badge: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
      label: 'text-[var(--accent)]',
      borderHover: 'hover:border-[var(--accent)]/50',
      titleHover: 'group-hover:text-[var(--accent)]',
    },
    orange: {
      badge: 'bg-orange-500/10 text-orange-400 border-orange-500/20',
      label: 'text-orange-400',
      borderHover: 'hover:border-orange-500/50',
      titleHover: 'group-hover:text-orange-400',
    },
    purple: {
      badge: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
      label: 'text-purple-400',
      borderHover: 'hover:border-purple-500/50',
      titleHover: 'group-hover:text-purple-400',
    },
    yellow: {
      badge: 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20',
      label: 'text-yellow-400',
      borderHover: 'hover:border-yellow-500/50',
      titleHover: 'group-hover:text-yellow-400',
    },
    red: {
      badge: 'bg-red-500/10 text-red-400 border-red-500/20',
      label: 'text-red-400',
      borderHover: 'hover:border-red-500/50',
      titleHover: 'group-hover:text-red-400',
    },
  };
  return map[color];
});
</script>

<template>
  <div
    class="glass-card rounded-2xl p-6 md:p-8 flex flex-col border border-white/10 transition-colors group"
    :class="accentClasses.borderHover"
  >
    <div class="flex justify-between items-start mb-4 md:mb-6">
      <div
        class="px-2 py-0.5 md:px-3 md:py-1 text-[9px] md:text-[10px] font-bold uppercase rounded border"
        :class="accentClasses.badge"
      >
        {{ t(caseItem.categoryKey) }}
      </div>
      <span class="text-gray-500 text-[10px] md:text-xs font-mono">{{
        caseItem.techStack
      }}</span>
    </div>
    <h3
      class="text-lg md:text-xl font-bold mb-4 transition-colors"
      :class="accentClasses.titleHover"
    >
      {{ t(caseItem.titleKey) }}
    </h3>
    <div class="space-y-4 flex-grow">
      <div>
        <div
          class="text-[9px] md:text-[10px] font-bold uppercase mb-1"
          :class="accentClasses.label"
        >
          {{ t('caseLabelProblem') }}
        </div>
        <p class="text-xs md:text-sm text-gray-400">
          {{ t(caseItem.problemKey) }}
        </p>
      </div>
      <div>
        <div
          class="text-[9px] md:text-[10px] font-bold uppercase mb-1"
          :class="accentClasses.label"
        >
          {{ t('caseLabelAction') }}
        </div>
        <p class="text-xs md:text-sm text-gray-400">
          {{ t(caseItem.actionKey) }}
        </p>
      </div>
      <div class="bg-white/5 p-3 rounded-lg border border-white/5">
        <div
          class="text-[9px] md:text-[10px] font-bold uppercase mb-1"
          :class="accentClasses.label"
        >
          {{ t('caseLabelResult') }}
        </div>
        <p class="text-xs md:text-sm font-bold text-white">
          {{ t(caseItem.resultKey) }}
        </p>
      </div>
    </div>
  </div>
</template>
