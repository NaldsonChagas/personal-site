<script setup lang="ts">
import { useI18n } from '@/i18n/useI18n';
import type { Locale } from '@/i18n/messages';

const { locale, setLocale } = useI18n();

function isActive(l: Locale): boolean {
  return locale.value === l;
}
</script>

<template>
  <div class="flex items-center gap-2 text-xs font-bold md:text-sm">
    <button
      type="button"
      class="hover:text-white transition-colors"
      :class="{ 'lang-switch-active': isActive('en') }"
      aria-label="English"
      @click="setLocale('en')"
    >
      EN
    </button>
    <span class="text-white/20" aria-hidden="true">|</span>
    <button
      type="button"
      class="hover:text-white transition-colors"
      :class="{ 'lang-switch-active': isActive('pt') }"
      aria-label="Português"
      @click="setLocale('pt')"
    >
      PT
    </button>
  </div>
</template>
