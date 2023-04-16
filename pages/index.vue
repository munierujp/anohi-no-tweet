<template>
  <el-main id="main">
    <el-row>
      <el-col>
        <h1 id="heading">
          <img
            id="logo"
            src="/logo.png"
            alt="#あの日のツイートを表示するやつ"
            width="499"
            height="32"
            decoding="async"
          >
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
#heading {
  text-align: center;
}

#logo {
  max-width: 100%;
  height: auto;
}
</style>
