export const useTheme = (): ComputedRef<string> => {
  const settings = useSettingsStore()
  return computed(() => settings.theme)
}
