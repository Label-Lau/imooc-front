<template>
  <div>
    <m-waterfall
      :data="pexelsList"
      :column="5"
      :picturePreReading="false"
      class="w-full px-1"
    >
      <template v-slot="{ item }">
        <itemVue :data="item" />
      </template>
    </m-waterfall>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { getPexelsList } from '@/api/pexels'
import itemVue from './item.vue'

/**
 * 构建数据请求
 */
let query = {
  page: 1,
  size: 20
}
const pexelsList = ref([])
const getPexelsData = async () => {
  const res = await getPexelsList(query)
  pexelsList.value = res.list
}
getPexelsData()
</script>

<style lang="scss" scoped></style>
