import 'vite/modulepreload-polyfill';
import 'tailwindcss/tailwind.css';
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { createI18n } from 'vue-i18n';
import './scss/main.scss';
import { domReady } from './functions/DomReady';
import i18n from '@/translations';
import App from './vue/App.vue';

domReady(() => {
  console.log('It\'s a me!');
});
