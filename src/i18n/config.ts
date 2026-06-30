export const locales = ['fr', 'en', 'nl'] as const
export type Locale = (typeof locales)[number]
export const defaultLocale: Locale = 'fr'
