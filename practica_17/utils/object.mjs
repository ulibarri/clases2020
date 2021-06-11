export const compact = object => Object.fromEntries(Object.entries(object).filter(([, value]) => value != null))
