<template>
  <el-footer
    id="footer"
    height="auto"
  >
    <el-row>
      <el-col>
        <small>© Munieru</small>
      </el-col>
      <el-col>
        <!-- TODO: バージョンは package.json のものを使うようにする -->
        <small>#あの日のツイートを表示するやつ v0.1.0</small>
      </el-col>
    </el-row>
  </el-footer>
</template>

<style lang="scss" scoped>
#footer {
  display: flex;
  justify-content: center;
  text-align: center;
}
</style>
