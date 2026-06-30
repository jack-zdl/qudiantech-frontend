<template>
  <div class="dashboard">
    <h1 class="dashboard-title">总览</h1>
    <div class="stats-grid">
      <div class="stat-card">
        <span class="stat-value">{{ stats.timeline }}</span>
        <span class="stat-label">发展历程</span>
      </div>
      <div class="stat-card">
        <span class="stat-value">{{ stats.org }}</span>
        <span class="stat-label">组织架构</span>
      </div>
      <div class="stat-card">
        <span class="stat-value">{{ stats.culture }}</span>
        <span class="stat-label">企业文化</span>
      </div>
      <div class="stat-card">
        <span class="stat-value">{{ stats.notices }}</span>
        <span class="stat-label">公告</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { getTimeline, getOrg, getCulture } from '@/api/about'
import { getNotices } from '@/api/notice'

const stats = ref({
  timeline: 0,
  org: 0,
  culture: 0,
  notices: 0,
})

onMounted(async () => {
  try {
    const [tl, org, cul, nt] = await Promise.all([
      getTimeline(), getOrg(), getCulture(), getNotices()
    ])
    stats.value.timeline = (tl as any).data?.length || 0
    stats.value.org = (org as any).data?.length || 0
    stats.value.culture = (cul as any).data?.length || 0
    stats.value.notices = (nt as any).data?.length || 0
  } catch (e) {
    console.error('加载统计失败', e)
  }
})
</script>

<style scoped>
.dashboard-title {
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 24px;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
}

.stat-card {
  padding: 24px;
  background: var(--white);
  border: 1px solid var(--border);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
}

.stat-value {
  font-size: 32px;
  font-weight: 700;
  color: var(--primary);
}

.stat-label {
  font-size: 14px;
  color: var(--text-secondary);
}
</style>
