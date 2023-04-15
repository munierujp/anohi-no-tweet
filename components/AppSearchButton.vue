<script lang="ts" setup>
import { parseISO } from 'date-fns'

const formStore = useFormStore()
const twitterSearchURL = computed(() => {
  return createTwitterSearchURL({
    user: formStore.user,
    date: parseISO(formStore.date),
    keyword: formStore.keyword,
    includesRetweets: formStore.includesRetweets
  })
})
</script>

<template>
  <v-btn
    class="app-button"
    :href="twitterSearchURL"
    target="_blank"
  >
    検索
  </v-btn>
</template>

<style lang="scss" scoped>
.app-button {
  text-transform: none;
}
</style>
