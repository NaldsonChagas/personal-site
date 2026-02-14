<script setup lang="ts">
import { useI18n } from '@/composables';

defineProps<{
  icon: string;
  iconVariant: 'emerald' | 'blue';
  titleKey: string;
  descriptionKey: string;
  descriptionShortKey: string;
}>();

const { t } = useI18n();
</script>

<template>
  <div class="metric-card">
    <span
      class="material-symbols-outlined text-2xl md:text-3xl mb-4 md:mb-6 block"
      :class="iconVariant === 'emerald' ? 'text-emerald-400' : 'text-blue-500'"
      aria-hidden="true"
    >
      {{ icon }}
    </span>
    <h3 class="text-sm md:text-xl font-bold mb-2 md:mb-3">
      {{ t(titleKey) }}
    </h3>
    <p
      class="text-gray-500 text-[11px] leading-tight md:hidden"
    >
      {{ t(descriptionShortKey) }}
    </p>
    <p
      class="hidden md:block text-gray-400 text-sm leading-relaxed"
    >
      {{ t(descriptionKey) }}
    </p>
  </div>
</template>
