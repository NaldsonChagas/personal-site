<script setup lang="ts">
import { useI18n } from '@/i18n/useI18n';

const { t } = useI18n();
</script>

<template>
  <div
    class="pt-8 md:pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-6 text-[10px] md:text-sm text-gray-500"
  >
    <div>{{ t('footerCopyright') }}</div>
    <div class="flex justify-center md:justify-end gap-4 md:gap-8 uppercase font-bold tracking-widest md:normal-case md:font-normal md:tracking-normal">
      <span class="hidden md:inline">{{ t('footerTagSeniorBackend') }}</span>
      <span>{{ t('footerTagArchitecture') }}</span>
      <span>{{ t('footerTagDistributedSystems') }}</span>
    </div>
  </div>
</template>
