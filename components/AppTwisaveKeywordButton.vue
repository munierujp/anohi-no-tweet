<script lang="ts" setup>
const formStore = useFormStore()
const twisaveKeywordSearchURL = computed(() => {
  return createTwisaveKeywordSearchURL({
    user: formStore.user,
    keyword: formStore.keyword
  })
})
</script>

<template>
  <v-btn
    class="app-button"
    :href="twisaveKeywordSearchURL"
    target="_blank"
  >
    ツイセーブ（キーワード）
  </v-btn>
</template>

<style lang="scss" scoped>
.app-button {
  text-transform: none;
}
</style>
