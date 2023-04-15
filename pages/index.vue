<script lang="ts" setup>
import { parseISO } from 'date-fns'

const formStore = useFormStore()
const twilogDateURL = computed(() => {
  return createTwilogDateURL({
    user: formStore.user,
    date: parseISO(formStore.date)
  })
})
const twilogKeywordSearchURL = computed(() => {
  return createTwilogKeywordSearchURL({
    user: formStore.user,
    keyword: formStore.keyword
  })
})
const twisaveDateURL = computed(() => {
  return createTwisaveDateURL({
    user: formStore.user,
    date: parseISO(formStore.date)
  })
})
const twisaveKeywordSearchURL = computed(() => {
  return createTwisaveKeywordSearchURL({
    user: formStore.user,
    keyword: formStore.keyword
  })
})
</script>

<template>
  <v-main id="main">
    <v-container>
      <v-row class="text-center">
        <v-col>
          <h1>#あの日のツイートを表示するやつ</h1>
        </v-col>
      </v-row>
      <v-row class="text-center">
        <v-col>
          <span>指定した条件にマッチするツイートの検索結果、Twilog、ツイセーブなどを開きます。</span>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col
          cols="12"
          sm="6"
          md="4"
          lg="4"
          xl="2"
        >
          <AppUserForm />
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col
          cols="12"
          sm="6"
          md="4"
          lg="4"
          xl="2"
        >
          <AppDateForm />
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col
          cols="12"
          sm="6"
          md="4"
          lg="4"
          xl="2"
        >
          <AppKeywordForm />
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col
          cols="12"
          sm="6"
          md="4"
          lg="4"
          xl="2"
        >
          <AppIncludesRetweetsCheckbox />
        </v-col>
      </v-row>
      <v-row class="text-center">
        <v-col>
          <AppSearchButton />
        </v-col>
      </v-row>
      <v-row class="text-center">
        <v-col>
          <v-btn
            class="app-button"
            :disabled="!formStore.user || !formStore.date"
            :href="twilogDateURL"
            target="_blank"
          >
            Twilog（日付）
          </v-btn>
        </v-col>
      </v-row>
      <v-row class="text-center">
        <v-col>
          <v-btn
            class="app-button"
            :disabled="!formStore.user || !formStore.keyword"
            :href="twilogKeywordSearchURL"
            target="_blank"
          >
            Twilog（キーワード）
          </v-btn>
        </v-col>
      </v-row>
      <v-row class="text-center">
        <v-col>
          <v-btn
            class="app-button"
            :disabled="!formStore.user || !formStore.date"
            :href="twisaveDateURL"
            target="_blank"
          >
            ツイセーブ（日付）
          </v-btn>
        </v-col>
      </v-row>
      <v-row class="text-center">
        <v-col>
          <v-btn
            class="app-button"
            :disabled="!formStore.user || !formStore.keyword"
            :href="twisaveKeywordSearchURL"
            target="_blank"
          >
            ツイセーブ（キーワード）
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<style lang="scss" scoped>
.app-button {
  text-transform: none;
}
</style>
