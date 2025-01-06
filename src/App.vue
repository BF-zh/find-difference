<script setup lang="ts">
const textarea1 = ref('')
const textarea2 = ref('')

const textarea3 = computed(() => {
  // 单号A中不包含单号B的单号 或者 单号B中不包含单号A的单号
  const a = textarea1.value.split('\n') || []
  const b = textarea2.value.split('\n') || []
  return a.filter(item => !b.includes(item)).concat(b.filter(item => !a.includes(item))).join('\n')
})
</script>

<template>
  <el-container h-100vh w-100vw>
    <el-header class="flex justify-center items-center h-10 p-2 bg-gray-100">
      <h1>单号查找</h1>
    </el-header>
    <el-main>
      <div class="grid grid-cols-2 gap-sm w-70vw m-auto">
        <el-input
          v-model="textarea1"
          :autosize="{ minRows: 5, maxRows: 10 }"
          type="textarea"
          placeholder="请输入单号A"
          resize="none"
        />
        <el-input
          v-model="textarea2"
          :autosize="{ minRows: 5, maxRows: 10 }"
          type="textarea"
          placeholder="请输入单号B"
        />
        <el-input
          :value="textarea3"
          :autosize="{ minRows: 5, maxRows: 10 }"
          type="textarea"
          readonly
          resize="none"
        />
      </div>
    </el-main>
    <el-footer>Footer</el-footer>
  </el-container>
</template>

<style scoped>
</style>
