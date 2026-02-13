import { ref, watch } from 'vue';
import { messages, type Locale } from './messages';

function getInitialLocale(): Locale {
  if (typeof navigator === 'undefined') return 'en';
  const lang =
    navigator.language ||
    (navigator.languages && navigator.languages[0]) ||
    'en';
  const primary = lang.toLowerCase().split('-')[0];
  return primary === 'pt' ? 'pt' : 'en';
}

const locale = ref<Locale>(getInitialLocale());

function setDocumentLang(lang: Locale): void {
  if (typeof document !== 'undefined' && document.documentElement) {
    document.documentElement.lang = lang;
  }
}

export function useI18n() {
  const currentLocale = locale;

  watch(
    currentLocale,
    (value) => {
      setDocumentLang(value);
    },
    { immediate: true }
  );

  function t(key: string): string {
    const localeMessages = messages[currentLocale.value];
    return localeMessages[key] ?? key;
  }

  function setLocale(value: Locale): void {
    locale.value = value;
  }

  return {
    locale: currentLocale,
    t,
    setLocale,
  };
}
