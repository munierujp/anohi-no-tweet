<template>
  <v-main id="main">
    <v-container>
      <v-row class="text-center">
        <v-col>
          <h1>
            <img
              id="logo"
              src="/logo.png"
              alt="#あの日のツイートを表示するやつ"
              width="499"
              height="32"
              decoding="async"
            >
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
#logo {
  max-width: 100%;
  height: auto;
}
</style>
