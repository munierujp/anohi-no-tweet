<script lang="ts" setup>
import dayjs from 'dayjs'

const { query } = useRoute()
const user = ref(typeof query.user === 'string' ? query.user : '')
const date = ref(typeof query.date === 'string' && dayjs(query.date).isValid() ? query.date : '')
const includesRetweets = ref(query.includesRetweets !== 'false')
const twitterURL = computed(() => {
  const queries: [string, string][] = [
    ['from', user.value]
  ]

  if (date.value) {
    const day = dayjs(date.value)

    if (day.isValid()) {
      const dateString = day.format('YYYY-MM-DD')
      queries.push(
        ['since', `${dateString}_00:00:00_JST`],
        ['until', `${dateString}_23:59:59_JST`]
      )
    }
  }

  if (includesRetweets.value) {
    queries.push(['include', 'nativeretweets'])
  }

  const query = queries
    .map(([key, value]) => `${key}:${value}`)
    .join(' ')
  const params = new URLSearchParams({
    f: 'live',
    q: query
  })
  return `https://twitter.com/search?${params}`
})
const twilogURL = computed(() => {
  if (!date.value) {
    return `https://twilog.org/${user.value}/`
  }

  const day = dayjs(date.value)

  if (!day.isValid()) {
    return `https://twilog.org/${user.value}/`
  }

  const dateString = day.format('YYMMDD')
  return `https://twilog.org/${user.value}/date-${dateString}`
})
const twisaveURL = computed(() => {
  if (!date.value) {
    return `https://twisave.com/${user.value}/`
  }

  const day = dayjs(date.value)

  if (!day.isValid()) {
    return `https://twisave.com/${user.value}/`
  }

  const dateString = day.format('YYYY/M/D')
  return `https://twisave.com/${user.value}/${dateString}`
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
          <span>指定した日付のツイートの検索結果、Twilog、ツイセーブなどを開きます。</span>
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
            v-model="user"
            type="text"
            label="ユーザー名"
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
            v-model="date"
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
            :disabled="!user"
            :href="twitterURL"
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
            :disabled="!user"
            :href="twilogURL"
            target="_blank"
          >
            Twilog
          </v-btn>
        </v-col>
      </v-row>
      <v-row class="text-center">
        <v-col>
          <v-btn
            class="app-button"
            :disabled="!user"
            :href="twisaveURL"
            target="_blank"
          >
            ツイセーブ
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
