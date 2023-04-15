<script lang="ts" setup>
import { parseISO } from 'date-fns'

const formStore = useFormStore()
const twisaveDateURL = computed(() => {
  return createTwisaveDateURL({
    user: formStore.user,
    date: parseISO(formStore.date)
  })
})
</script>

<template>
  <v-btn
    class="app-button"
    :href="twisaveDateURL"
    target="_blank"
  >
    ツイセーブ（日付）
  </v-btn>
</template>

<style lang="scss" scoped>
.app-button {
  text-transform: none;
}
</style>
