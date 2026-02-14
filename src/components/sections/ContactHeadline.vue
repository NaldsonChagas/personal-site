<script setup lang="ts">
import { useI18n } from '@/composables';

const { t } = useI18n();
</script>

<template>
  <h2
    id="contact-heading"
    class="text-3xl font-normal mb-4 md:text-5xl md:mb-6"
  >
    {{ t('contactHeadlineBefore') }}<span class="gradient-text">{{ t('contactHeadlineHighlight') }}</span>{{ t('contactHeadlineAfter') }}
  </h2>
</template>
