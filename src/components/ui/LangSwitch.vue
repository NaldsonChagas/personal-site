<script setup lang="ts">
import { useI18n } from '@/composables';
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
      class="cursor-pointer rounded px-1.5 py-0.5 transition-colors hover:text-white"
      :class="[isActive('en') ? 'lang-switch-active' : 'text-white/70']"
      aria-label="English"
      @click="setLocale('en')"
    >
      EN
    </button>
    <span class="text-white/20" aria-hidden="true">|</span>
    <button
      type="button"
      class="cursor-pointer rounded px-1.5 py-0.5 transition-colors hover:text-white"
      :class="[isActive('pt') ? 'lang-switch-active' : 'text-white/70']"
      aria-label="Português"
      @click="setLocale('pt')"
    >
      PT
    </button>
  </div>
</template>
