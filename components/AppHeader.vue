<template>
  <v-app-bar
    id="header"
    color="transparent"
    absolute
    flat
  >
    <v-spacer />
    <AppHelpButton />
    <AppTwitterButton />
    <AppGitHubButton />
  </v-app-bar>
</template>

<style lang="scss" scoped>
#header {
  padding-right: 8px;
}
</style>
