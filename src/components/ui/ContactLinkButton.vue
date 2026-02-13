<script setup lang="ts">
defineProps<{
  href: string;
  icon: 'mail' | 'link';
  label: string;
  variant: 'primary' | 'secondary';
  external?: boolean;
}>();
</script>

<template>
  <a
    :href="href"
    class="w-full md:w-auto px-8 py-4 font-bold rounded-xl md:rounded-lg flex items-center justify-center gap-2 transition-colors"
    :class="
      variant === 'primary'
        ? 'bg-white text-black hover:bg-gray-200'
        : 'glass-card border border-white/10 hover:bg-white/5'
    "
    :target="external ? '_blank' : undefined"
    :rel="external ? 'noopener noreferrer' : undefined"
  >
    <span
      class="material-symbols-outlined text-xl md:text-base"
      :class="variant === 'primary' ? 'text-black' : ''"
      aria-hidden="true"
    >
      {{ icon }}
    </span>
    {{ label }}
  </a>
</template>
