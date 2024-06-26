import * as Localization from 'expo-localization';
import { I18n, Scope, TranslateOptions } from 'i18n-js';

const i18n = new I18n({
  en: {
    base: 'Base',
    launch: 'Launch',
    character: 'Character',
    characters: 'Characters',
    locations: 'Locations',
    login: 'Login',
    logout: 'Logout',
    profile: 'Profile',
    filterBy: 'Filter by:',
    episodes: 'Episodes',
    residents: 'Residents',
  },
});

i18n.enableFallback = true;
i18n.defaultLocale = 'en';
i18n.locale = Localization.locale;

export const t = (scope: Scope, options?: TranslateOptions) => i18n.t(scope, options);
