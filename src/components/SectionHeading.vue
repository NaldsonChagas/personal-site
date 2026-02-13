<script setup lang="ts">
import { useI18n } from '@/i18n/useI18n';

defineProps<{
  titleKey: string;
  headingId?: string;
  headingClass?: string;
}>();

const { t } = useI18n();
</script>

<template>
  <h2
    :id="headingId"
    class="text-sm font-bold text-[var(--primary)] uppercase tracking-widest flex items-center gap-3"
    :class="headingClass"
  >
    <span class="w-8 h-[1px] bg-[var(--primary)]" aria-hidden="true" />
    <span>{{ t(titleKey) }}</span>
  </h2>
</template>
