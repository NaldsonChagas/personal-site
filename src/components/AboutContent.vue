<script setup lang="ts">
import { useI18n } from '@/i18n/useI18n';

const { t } = useI18n();
</script>

<template>
  <div class="space-y-8 sticky top-32">
    <div class="text-gray-300 leading-relaxed space-y-6 text-lg mb-12 lg:mb-0">
      <p>{{ t('aboutIntro1') }}</p>
      <p>{{ t('aboutIntro2') }}</p>
    </div>
    <div class="flex gap-4 hidden lg:flex">
      <a
        class="text-[var(--primary)] font-bold flex items-center gap-2 hover:gap-3 transition-all"
        href="#contact"
      >
        {{ t('getInTouch') }}
        <span class="material-symbols-outlined" aria-hidden="true">arrow_forward</span>
      </a>
    </div>
  </div>
</template>
