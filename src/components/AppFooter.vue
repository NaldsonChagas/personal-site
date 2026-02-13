<script setup lang="ts">
import { useI18n } from '@/i18n/useI18n';
import ContactHeadline from '@/components/ContactHeadline.vue';
import ContactDescription from '@/components/ContactDescription.vue';
import ContactLinkButton from '@/components/ContactLinkButton.vue';
import FooterCredits from '@/components/FooterCredits.vue';

const { t } = useI18n();
</script>

<template>
  <footer
    id="contact"
    class="py-20 md:py-24 px-6 relative border-t border-white/5 overflow-hidden"
    aria-labelledby="contact-heading"
  >
    <div class="max-w-xl md:max-w-4xl mx-auto text-center relative z-10">
      <ContactHeadline />
      <ContactDescription />
      <div class="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-6 mb-16">
        <ContactLinkButton
          href="mailto:naldson.bc@gmail.com"
          icon="mail"
          :label="t('contactEmailLabel')"
          variant="primary"
        />
        <ContactLinkButton
          href="https://www.linkedin.com/in/naldsonbc"
          icon="link"
          :label="t('contactLinkedInLabel')"
          variant="secondary"
          :external="true"
        />
      </div>
      <FooterCredits />
    </div>
  </footer>
</template>
