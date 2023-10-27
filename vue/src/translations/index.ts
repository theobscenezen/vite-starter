import en from './en/';
import de from './de/';
// @ts-ignore
import { createI18n } from 'vue-i18n';
import { DEFAULT_LANGUAGE } from '@/constants';

const translations = {
  en,
  de,
};

export default createI18n({
  legacy: false,
  locale: DEFAULT_LANGUAGE,
  messages: translations
});
