<template>
  <div class="w-full guide-search">
    <m-search v-model="inputValue" @search="onSearchHandler">
      <template #dropdown>
        <div>
          <!-- 搜索提示 -->
          <hint-vue
            :searchText="inputValue"
            v-show="inputValue"
            @itemClick="onSearchHandler"
          ></hint-vue>
          <!-- 最近搜索 -->
          <history-vue
            v-show="!inputValue"
            @itemClick="onSearchHandler"
          ></history-vue>
          <!-- 推荐主题 -->
          <theme-vue v-show="!inputValue"></theme-vue>
        </div>
      </template>
    </m-search>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useStore } from 'vuex'
import HintVue from './hint.vue'
import HistoryVue from './history.vue'
import ThemeVue from './theme.vue'

const store = useStore()
const inputValue = ref('')

// 搜索的回调事件
const onSearchHandler = (val) => {
  inputValue.value = val
  if (val) {
    // 添加历史记录
    store.commit('search/addHistory', val)
    // 触发 searchText 变化
    store.commit('app/changeSearchText', val)
  }
}
</script>

<style lang="scss" scoped></style>
