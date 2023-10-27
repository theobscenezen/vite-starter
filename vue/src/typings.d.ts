import {
  LANGUAGE_DE, LANGUAGE_EN,
} from '@/constants';

declare global {
  interface Response {
    parsedContent: string;
  }
}

type LanguageField = LANGUAGE_DE | LANGUAGE_EN;
