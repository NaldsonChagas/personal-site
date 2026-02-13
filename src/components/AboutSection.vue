<script setup lang="ts">
import SectionHeading from '@/components/SectionHeading.vue';
import AboutContent from '@/components/AboutContent.vue';
import SkillCardGrid from '@/components/SkillCardGrid.vue';
</script>

<template>
  <section
    id="about"
    class="py-20 md:py-24 px-6 bg-[#0a0a0a]"
    aria-labelledby="about-heading"
  >
    <div class="max-w-6xl mx-auto">
      <div class="grid lg:grid-cols-2 gap-16 items-start">
        <div>
          <SectionHeading
            title-key="aboutMe"
            heading-id="about-heading"
            heading-class="mb-6 lg:mb-4"
          />
          <AboutContent />
        </div>
        <div>
          <SkillCardGrid />
        </div>
      </div>
    </div>
  </section>
</template>
