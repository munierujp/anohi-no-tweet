<template>
  <el-main id="main">
    <el-row>
      <el-col>
        <h1 id="heading">
          <AppLogo id="logo" />
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
  width: 600px;
  max-width: 100%;
}
</style>
