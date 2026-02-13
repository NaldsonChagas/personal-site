<script setup lang="ts">
import { ref, watch } from 'vue';
import AppLogo from '@/components/ui/AppLogo.vue';
import HeaderNav from '@/components/layout/HeaderNav.vue';
import LangSwitch from '@/components/ui/LangSwitch.vue';
import MobileMenuButton from '@/components/ui/MobileMenuButton.vue';
import MobileNavOverlay from '@/components/layout/MobileNavOverlay.vue';

const mobileMenuOpen = ref(false);

watch(mobileMenuOpen, (open) => {
  document.body.classList.toggle('mobile-menu-open', open);
});

function toggleMobileMenu(): void {
  mobileMenuOpen.value = !mobileMenuOpen.value;
}

function closeMobileMenu(): void {
  mobileMenuOpen.value = false;
}
</script>

<template>
  <div>
    <nav
      class="fixed top-0 left-0 right-0 w-full z-50 glass-card border-b border-white/5 px-4 py-3 md:px-6 md:py-4"
      aria-label="Main"
    >
      <div class="max-w-6xl mx-auto flex justify-between items-center">
        <AppLogo />
        <HeaderNav />
        <div class="flex md:hidden items-center gap-4">
          <div
            class="flex items-center gap-2 text-xs font-bold bg-white/5 px-3 py-1.5 rounded-full border border-white/10"
          >
            <LangSwitch />
          </div>
          <MobileMenuButton @click="toggleMobileMenu" />
        </div>
      </div>
    </nav>
    <MobileNavOverlay
      :open="mobileMenuOpen"
      @close="closeMobileMenu"
    />
  </div>
</template>
