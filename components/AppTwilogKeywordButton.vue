<script lang="ts" setup>
const formStore = useFormStore()
const twilogKeywordSearchURL = computed(() => {
  return createTwilogKeywordSearchURL({
    user: formStore.user,
    keyword: formStore.keyword
  })
})
</script>

<template>
  <v-btn
    class="app-button"
    :href="twilogKeywordSearchURL"
    target="_blank"
  >
    Twilog（キーワード）
  </v-btn>
</template>

<style lang="scss" scoped>
.app-button {
  text-transform: none;
}
</style>
