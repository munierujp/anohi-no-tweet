<template>
  <el-main id="main">
    <el-row>
      <el-col>
        <h1 id="logo">
          <AppLogoImage
            class="app-logo-image"
            alt="#あの日のツイートを表示するやつ"
          />
        </h1>
      </el-col>
    </el-row>
    <el-row justify="center">
      <el-col
        :xs="24"
        :sm="12"
        :md="8"
        :lg="8"
        :xl="4"
      >
        <AppForm />
      </el-col>
    </el-row>
  </el-main>
</template>

<style lang="scss" scoped>
#logo {
  text-align: center;
}

.app-logo-image {
  fill: var(--app-text-color);
  width: 499px;
  max-width: 100%;
}
</style>
