<script setup lang="ts">
// @ts-expect-error - vite-imagetools query params not fully supported by TypeScript
import profileImgSmall from '@/assets/IMG_2003.jpg?w=192&format=webp';
// @ts-expect-error - vite-imagetools query params not fully supported by TypeScript
import profileImgMedium from '@/assets/IMG_2003.jpg?w=320&format=webp';
// @ts-expect-error - vite-imagetools query params not fully supported by TypeScript
import profileImgLarge from '@/assets/IMG_2003.jpg?w=640&format=webp';
import profileImgFallback from '@/assets/IMG_2003.jpg';

const props = withDefaults(
  defineProps<{
    src?: string;
    alt?: string;
    eager?: boolean;
  }>(),
  {
    alt: 'Naldson Bento Chagas',
    eager: false,
  }
);

const srcset = `${profileImgSmall} 192w, ${profileImgMedium} 320w, ${profileImgLarge} 640w`;
const imageSrc = props.src || profileImgFallback;
</script>

<template>
  <div class="group">
    <div class="relative w-48 h-48 md:w-80 md:h-80">
      <div
        class="absolute -inset-1 bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] rounded-full md:rounded-2xl blur opacity-30 md:opacity-25 group-hover:opacity-50 transition duration-1000"
        aria-hidden="true"
      />
      <img
        :src="imageSrc"
        :srcset="props.src ? undefined : srcset"
        :sizes="props.src ? undefined : '(max-width: 768px) 192px, 320px'"
        :alt="props.alt"
        :loading="props.eager ? 'eager' : 'lazy'"
        width="320"
        height="320"
        class="absolute inset-0 w-full h-full rounded-full md:rounded-2xl object-cover object-[center_top] border-4 md:border-2 border-white/10"
      />
      <slot />
    </div>
  </div>
</template>
