import * as Localization from 'expo-localization';
import { I18n, Scope, TranslateOptions } from 'i18n-js';

const i18n = new I18n({
  en: {
    base: 'Base',
    launch: 'Launch',
    character: 'Personagem',
    characters: 'Personagens',
  },
});

i18n.enableFallback = true;
i18n.defaultLocale = 'en';
i18n.locale = Localization.locale;

export default (scope: Scope, options?: TranslateOptions) => i18n.t(scope, options);
