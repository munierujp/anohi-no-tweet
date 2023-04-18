<script lang="ts" setup>
const props = defineProps<{
  modelValue: boolean,
  title?: string
}>()
// eslint-disable-next-line func-call-spacing
const emit = defineEmits<{
  (e: 'update:modelValue', value: boolean): void
}>()
const showDialog = computed<boolean>({
  get () {
    return props.modelValue
  },
  set (value) {
    emit('update:modelValue', value)
  }
})
</script>

<template>
  <client-only>
    <el-dialog
      v-model="showDialog"
      :title="title"
      class="app-dialog"
      align-center
    >
      <slot />
      <template #footer>
        <slot name="footer" />
      </template>
    </el-dialog>
  </client-only>
</template>

<style lang="scss">
.app-dialog {
  width: calc(100vw - 8px * 2);
  max-width: 600px;
}
</style>
