<script setup lang="ts">
import AppHeader from '@/components/AppHeader.vue';
import HeroSection from '@/components/HeroSection.vue';
import AboutSection from '@/components/AboutSection.vue';
</script>

<template>
  <div class="desktop-layout">
    <AppHeader />
    <main>
      <header
        class="relative overflow-hidden bg-[var(--bg-dark)]"
        aria-label="Hero"
      >
        <div
          class="absolute inset-0 top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none opacity-20"
          aria-hidden="true"
        >
          <div
            class="absolute top-[-10%] left-[-10%] w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-emerald-500 rounded-full blur-[80px] md:blur-[120px]"
          />
          <div
            class="absolute bottom-[-10%] right-[-10%] w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-blue-600 rounded-full blur-[80px] md:blur-[120px]"
          />
        </div>
        <div class="relative z-10 pt-24 pb-16 md:pt-32 md:pb-20 px-6">
          <HeroSection />
        </div>
      </header>
      <AboutSection />
      <section id="cases">
        <!-- Cases placeholder -->
      </section>
    </main>
    <footer id="contact">
      <!-- Contact placeholder -->
    </footer>
  </div>
</template>
