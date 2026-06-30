<template>
  <div id="app-root">
    <TopBar v-if="showLayout" />
    <main class="main-content">
      <router-view />
    </main>
    <Footer v-if="showLayout" />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import TopBar from '@/components/TopBar.vue'
import Footer from '@/components/Footer.vue'

const route = useRoute()
const showLayout = computed(() => {
  return !route.path.startsWith('/admin')
})
</script>

<style scoped>
#app-root {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
.main-content {
  flex: 1;
}
</style>
