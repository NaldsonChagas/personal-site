<script setup lang="ts">
import { useI18n } from '@/composables';

const { t } = useI18n();
</script>

<template>
  <p class="text-gray-400 mb-10 md:mb-12 text-sm md:text-lg max-w-xl mx-auto leading-relaxed">
    <span class="md:hidden">{{ t('contactDescriptionShort') }}</span>
    <span class="hidden md:inline">{{ t('contactDescriptionLong') }}</span>
  </p>
</template>
