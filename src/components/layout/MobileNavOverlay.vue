<script setup lang="ts">
import { useI18n } from '@/composables';

defineProps<{
  open: boolean;
}>();

const emit = defineEmits<{
  close: [];
}>();

const { t } = useI18n();

const navLinks = [
  { href: '#about', key: 'about' as const },
  { href: '#cases', key: 'impactfulCases' as const },
  { href: '#contact', key: 'contact' as const },
];

function onLinkClick(): void {
  emit('close');
}
</script>

<template>
  <Transition
    enter-active-class="transition-opacity duration-200 ease-out"
    enter-from-class="opacity-0"
    enter-to-class="opacity-100"
    leave-active-class="transition-opacity duration-150 ease-in"
    leave-from-class="opacity-100"
    leave-to-class="opacity-0"
  >
    <div
      v-if="open"
      role="dialog"
      aria-modal="true"
      aria-label="Main navigation"
      class="fixed inset-0 z-[60] bg-black/95 flex flex-col items-center justify-center gap-8"
      @keydown.esc="emit('close')"
    >
      <button
        type="button"
        class="absolute top-6 right-6 p-2 text-white hover:opacity-80 transition-opacity"
        aria-label="Close menu"
        @click="emit('close')"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="w-8 h-8"
          aria-hidden="true"
        >
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </button>
      <a
        v-for="link in navLinks"
        :key="link.key"
        :href="link.href"
        class="text-2xl font-bold hover:text-[var(--primary)] transition-colors py-2"
        @click="onLinkClick"
      >
        {{ t(link.key) }}
      </a>
    </div>
  </Transition>
</template>
