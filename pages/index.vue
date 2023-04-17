<template>
  <el-main id="main">
    <el-row>
      <el-col>
        <AppLogo id="logo" />
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
</style>
