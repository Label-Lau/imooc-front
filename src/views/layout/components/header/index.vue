<template>
  <div
    class="w-full bg-white border-b border-b-zinc-200 px-2 py-1 dark:bg-zinc-800 dark:border-b-zinc-700 duration-500"
  >
    <div class="flex items-center">
      <img
        v-lazy
        class="guide-home h-4 cursor-pointer mr-2"
        src="https://m.imooc.com/static/wap/static/common/img/logo-small@2x.png"
        alt=""
        @click="onToHome"
      />
      <header-search-vue class="mr-1"></header-search-vue>
      <header-theme-vue class="mr-1"></header-theme-vue>
      <header-my-vue></header-my-vue>
    </div>
  </div>
</template>

<script setup>
import HeaderSearchVue from './components/header-search/index.vue'
import HeaderThemeVue from './components/header-theme.vue'
import HeaderMyVue from './components/header-my.vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const onToHome = () => {
  router.push('/')
}
</script>
