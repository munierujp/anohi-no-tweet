<template>
  <v-main id="main">
    <v-container>
      <v-row class="text-center">
        <v-col>
          <h1 id="app-name">
            #あの日のツイートを表示するやつ
          </h1>
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
          <AppForm />
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<style lang="scss" scoped>
@media (width < 600px) {
  #app-name {
    font-size: 22px;
  }
}
</style>
