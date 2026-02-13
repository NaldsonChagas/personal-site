<script setup lang="ts">
withDefaults(
  defineProps<{
    src?: string;
    alt?: string;
  }>(),
  {
    src: '/IMG_2003.jpg',
    alt: 'Naldson Bento Chagas',
  }
);
</script>

<template>
  <div class="group">
    <div class="relative w-48 h-48 md:w-80 md:h-80">
      <div
        class="absolute -inset-1 bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] rounded-full md:rounded-2xl blur opacity-30 md:opacity-25 group-hover:opacity-50 transition duration-1000"
        aria-hidden="true"
      />
      <img
        :src="src"
        :alt="alt"
        class="absolute inset-0 w-full h-full rounded-full md:rounded-2xl object-cover border-4 md:border-2 border-white/10"
      />
      <slot />
    </div>
  </div>
</template>
