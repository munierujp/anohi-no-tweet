<script lang="ts" setup>
import dayjs from 'dayjs'

const route = useRoute()
console.debug(`typeof route.query.user=${typeof route.query.user}`)
console.debug(`route.query.user=${route.query.user}`)
const user = ref(typeof route.query.user === 'string' ? route.query.user : '')
console.debug(`user.value=${user.value}`)
const date = ref(typeof route.query.date === 'string' && dayjs(route.query.date).isValid() ? route.query.date : '')
const includesRetweets = ref(route.query.includesRetweets !== 'false')

const search = () => {
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
  const url = `https://twitter.com/search?${params.toString()}`
  window.open(url, '_blank')
}

const openTwilog = () => {
  if (date.value) {
    const day = dayjs(date.value)

    if (day.isValid()) {
      const dateString = day.format('YYMMDD')
      const url = `https://twilog.org/${user.value}/date-${dateString}`
      window.open(url, '_blank')
      return
    }
  }

  const url = `https://twilog.org/${user.value}/`
  window.open(url, '_blank')
}

const openTwisave = () => {
  if (date.value) {
    const day = dayjs(date.value)

    if (day.isValid()) {
      const dateString = day.format('YYYY/M/D')
      const url = `https://twisave.com/${user.value}/${dateString}`
      window.open(url, '_blank')
      return
    }
  }
  const url = `https://twisave.com/${user.value}/`
  window.open(url, '_blank')
}
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
          <span>user: {{ user }}</span>
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
            @click="search"
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
            @click="openTwilog"
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
            @click="openTwisave"
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
