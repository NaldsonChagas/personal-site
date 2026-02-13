<script setup lang="ts">
import { useI18n } from '@/i18n/useI18n';
import LangSwitch from '@/components/LangSwitch.vue';

const { t } = useI18n();

const navLinks = [
  { href: '#about', key: 'about' as const },
  { href: '#cases', key: 'impactfulCases' as const },
];
</script>

<template>
  <div class="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
    <ul class="flex items-center gap-8 list-none m-0 p-0">
      <li v-for="link in navLinks" :key="link.key">
        <a
          :href="link.href"
          class="hover:text-white transition-colors"
        >
          {{ t(link.key) }}
        </a>
      </li>
    </ul>
    <div class="flex items-center gap-2 border-l border-white/10 pl-8 ml-2">
      <LangSwitch />
    </div>
    <a
      href="#contact"
      class="px-4 py-2 bg-[var(--primary)] text-black rounded-md hover:bg-emerald-400 transition-colors font-bold shrink-0"
    >
      {{ t('hireMe') }}
    </a>
  </div>
</template>
