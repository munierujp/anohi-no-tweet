<script lang="ts" setup>
import { parseISO } from 'date-fns'

const formStore = useFormStore()
const twilogDateURL = computed(() => {
  return createTwilogDateURL({
    user: formStore.user,
    date: parseISO(formStore.date)
  })
})
</script>

<template>
  <v-btn
    class="app-button"
    :disabled="!formStore.user || !formStore.date"
    :href="twilogDateURL"
    target="_blank"
  >
    Twilog（日付）
  </v-btn>
</template>

<style lang="scss" scoped>
.app-button {
  text-transform: none;
}
</style>
