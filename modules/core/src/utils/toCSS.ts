export const toCss = (value: any): string => {
  if (value === undefined || value === null || value === '') return 'unset'
  return String(value).trim()
}
