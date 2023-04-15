<script lang="ts" setup>
import { parseISO } from 'date-fns'

const { query } = useRoute()
const store = useStore()
const keyword = ref(typeof query.keyword === 'string' ? query.keyword : '')
const includesRetweets = ref(query.includesRetweets !== 'false')
const twitterSearchURL = computed(() => {
  return createTwitterSearchURL({
    user: store.user,
    date: parseISO(store.date),
    keyword: keyword.value,
    includesRetweets: includesRetweets.value
  })
})
const twilogDateURL = computed(() => {
  return createTwilogDateURL({
    user: store.user,
    date: parseISO(store.date)
  })
})
const twilogKeywordSearchURL = computed(() => {
  return createTwilogKeywordSearchURL({
    user: store.user,
    keyword: keyword.value
  })
})
const twisaveDateURL = computed(() => {
  return createTwisaveDateURL({
    user: store.user,
    date: parseISO(store.date)
  })
})
const twisaveKeywordSearchURL = computed(() => {
  return createTwisaveKeywordSearchURL({
    user: store.user,
    keyword: keyword.value
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
          <v-text-field
            v-model="store.user"
            type="text"
            label="ユーザー名"
            prefix="@"
            placeholder="munieru_jp"
            hide-details
            clearable
            autofocus
          />
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
          <v-text-field
            v-model="store.date"
            type="date"
            label="日付"
            hide-details
            clearable
          />
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
          <v-text-field
            v-model="keyword"
            type="text"
            label="キーワード"
            hide-details
            clearable
          />
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
          <v-checkbox
            v-model="includesRetweets"
            label="リツイートを含む"
            hide-details
          />
        </v-col>
      </v-row>
      <v-row class="text-center">
        <v-col>
          <v-btn
            class="app-button"
            :disabled="!store.user && !keyword"
            :href="twitterSearchURL"
            target="_blank"
          >
            検索
          </v-btn>
        </v-col>
      </v-row>
      <v-row class="text-center">
        <v-col>
          <v-btn
            class="app-button"
            :disabled="!store.user || !store.date"
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
            :disabled="!store.user || !keyword"
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
            :disabled="!store.user || !store.date"
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
            :disabled="!store.user || !keyword"
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
