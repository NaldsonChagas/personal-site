<script setup lang="ts">
import { useI18n } from '@/i18n/useI18n';

const { t } = useI18n();

</script>

<template>
  <div
    class="glass-card border border-white/10 absolute -bottom-2 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full border-white/20 shadow-lg whitespace-nowrap md:hidden"
  >
    <div class="text-[var(--primary)] font-bold flex items-center gap-1.5">
      <span>8+</span>
      <span class="text-[10px] text-gray-300 font-bold tracking-tight uppercase">
        {{ t('yearsExperienceShort') }}
      </span>
    </div>
  </div>
  <div
    class="glass-card border border-white/10 absolute -right-6 -bottom-6 hidden p-4 rounded-xl border-white/20 shadow-lg md:block"
  >
    <div class="text-[var(--primary)] font-bold flex flex-col items-start">
      <span class="text-3xl">8+</span>
      <span class="text-xs text-gray-400 uppercase tracking-tighter">
        {{ t('yearsExperience') }}
      </span>
    </div>
  </div>
</template>
