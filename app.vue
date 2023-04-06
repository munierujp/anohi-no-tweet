<script lang="ts" setup>
import dayjs from 'dayjs'

const user = ref('')
const date = ref('')

const search = () => {
  const queries: [string, string][] = [
    ['from', user.value]
  ]

  if (date.value) {
    const dateString = dayjs(date.value).format('YYYY-MM-DD')
    queries.push(
      ['since', `${dateString}_00:00:00_JST`],
      ['until', `${dateString}_23:59:59_JST`]
    )
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
    const dateString = dayjs(date.value).format('YYMMDD')
    const url = `https://twilog.org/${user.value}/date-${dateString}`
    window.open(url, '_blank')
  } else {
    const url = `https://twilog.org/${user.value}/`
    window.open(url, '_blank')
  }
}

const openTwisave = () => {
  if (date.value) {
    const dateString = dayjs(date.value).format('YYYY/M/D')
    const url = `https://twisave.com/${user.value}/${dateString}`
    window.open(url, '_blank')
  } else {
    const url = `https://twisave.com/${user.value}/`
    window.open(url, '_blank')
  }
}
</script>

<template>
  <v-app id="app">
    <AppHeader />
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
        <v-row class="text-center">
          <v-col>
            <v-btn
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
              :disabled="!user"
              @click="openTwisave"
            >
              ツイセーブ
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>
