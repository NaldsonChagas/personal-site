<script setup lang="ts">
import { useI18n } from '@/i18n/useI18n';
import ProfilePhoto from '@/components/ProfilePhoto.vue';
import ExperienceBadge from '@/components/ExperienceBadge.vue';

const { t } = useI18n();
</script>

<template>
  <div class="relative">
    <div
      class="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-12"
    >
      <div
        class="order-2 md:order-1 md:w-1/2 space-y-4 md:space-y-6 text-center md:text-left"
      >
        <div
          class="inline-block px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-[10px] md:text-xs font-bold uppercase tracking-widest"
        >
          {{ t('seniorBackendDeveloper') }}
        </div>
        <h1 class="text-4xl md:text-5xl md:text-7xl font-extrabold tracking-tight leading-tight">
          {{ t('heroName') }}
        </h1>
        <p
          class="text-lg md:text-xl text-gray-400 max-w-xl leading-relaxed mx-auto md:mx-0 px-4 md:px-0 max-w-sm md:max-w-xl"
        >
          {{ t('heroDescriptionPrefix') }}{{ t('heroDescriptionHighlight') }}{{ t('heroDescriptionSuffix') }}
        </p>
        <div
          class="flex flex-col w-full max-w-[280px] mx-auto md:mx-0 md:max-w-none md:flex-row flex-wrap justify-center md:justify-start gap-3 md:gap-4 pt-4"
        >
          <a
            class="w-full md:w-auto px-8 py-4 bg-white text-black font-bold rounded-xl md:rounded-lg hover:scale-[1.02] md:hover:scale-105 transition-transform flex items-center justify-center gap-2 shadow-xl shadow-emerald-500/5"
            href="#contact"
          >
            {{ t('hireMe') }}
            <span class="material-symbols-outlined text-sm" aria-hidden="true">mail</span>
          </a>
          <a
            class="w-full md:w-auto px-8 py-4 glass-card font-bold rounded-xl md:rounded-lg hover:bg-white/10 transition-colors border border-white/10 flex items-center justify-center gap-2"
            href="https://www.linkedin.com/in/naldsonbc"
            target="_blank"
            rel="noopener noreferrer"
          >
            {{ t('linkedIn') }}
          </a>
        </div>
      </div>
      <div class="order-1 md:order-2 md:w-1/2 flex justify-center pt-2 md:pt-0">
        <ProfilePhoto :alt="t('heroPhotoAlt')">
          <ExperienceBadge />
        </ProfilePhoto>
      </div>
    </div>
  </div>
</template>
