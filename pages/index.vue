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
          <AppTwilogDateButton />
        </v-col>
      </v-row>
      <v-row class="text-center">
        <v-col>
          <AppTwilogKeywordButton />
        </v-col>
      </v-row>
      <v-row class="text-center">
        <v-col>
          <AppTwisaveDateButton />
        </v-col>
      </v-row>
      <v-row class="text-center">
        <v-col>
          <AppTwisaveKeywordButton />
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>
