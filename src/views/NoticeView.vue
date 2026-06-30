<template>
  <div class="notice-page">
    <div class="page-banner">
      <div class="container">
        <h1 class="page-title">公告</h1>
        <p class="page-desc">了解趣电最新动态</p>
      </div>
    </div>

    <section class="section">
      <div class="container">
        <!-- Tab 筛选 -->
        <div class="notice-tabs">
          <button v-for="tab in tabs" :key="tab.key"
                  :class="['tab-btn', { active: activeTab === tab.key }]"
                  @click="switchTab(tab.key)">
            {{ tab.label }}
          </button>
        </div>

        <!-- 公告列表 -->
        <div v-if="loading" class="loading-text">加载中...</div>
        <div v-else-if="noticeList.length === 0" class="empty-text">暂无公告</div>
        <div v-else class="notice-list">
          <div v-for="item in noticeList" :key="item.id" class="notice-card">
            <div class="notice-left">
              <span class="notice-tag" :class="'tag-' + tagMap[item.tag]">{{ item.tag }}</span>
            </div>
            <div class="notice-info">
              <h3 class="notice-title">{{ item.title }}</h3>
              <p class="notice-summary">{{ item.summary }}</p>
              <div class="notice-meta">
                <span class="notice-date">📅 {{ item.date }}</span>
                <span class="notice-dept">{{ item.department }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { getNotices } from '@/api/notice'

const tabs = [
  { key: '', label: '全部' },
  { key: '公司动态', label: '公司动态' },
  { key: '业务动态', label: '业务动态' },
  { key: '公告', label: '公告' },
  { key: '招聘', label: '招聘' },
]

const tagMap: Record<string, string> = {
  '公司动态': 'company',
  '业务动态': 'business',
  '公告': 'announce',
  '招聘': 'recruit',
}

const activeTab = ref('')
const noticeList = ref<any[]>([])
const loading = ref(true)

async function switchTab(tag: string) {
  activeTab.value = tag
  loading.value = true
  try {
    const res: any = await getNotices(tag || undefined)
    noticeList.value = res.data
  } catch (e) {
    console.error('加载公告失败', e)
  } finally {
    loading.value = false
  }
}

onMounted(() => {
  switchTab('')
})
</script>

<style scoped>
.page-banner {
  padding: 100px 0 60px;
  background: linear-gradient(135deg, var(--dark) 0%, #1e1b4b 100%);
  text-align: center;
  position: relative;
  overflow: hidden;
}

.page-banner::after {
  content: '';
  position: absolute;
  top: -30%;
  left: -10%;
  width: 300px;
  height: 300px;
  background: radial-gradient(circle, rgba(225, 29, 72, 0.08) 0%, transparent 70%);
  border-radius: 50%;
}

.page-title {
  font-size: 40px;
  font-weight: 700;
  color: var(--white);
  margin-bottom: 12px;
}

.page-desc {
  font-size: 16px;
  color: #94a3b8;
}

.notice-tabs {
  display: flex;
  gap: 12px;
  margin-bottom: 32px;
  justify-content: center;
}

.tab-btn {
  padding: 8px 20px;
  border: 1px solid var(--border);
  border-radius: 8px;
  background: var(--white);
  font-size: 14px;
  cursor: pointer;
  transition: all 0.2s;
  color: var(--text);
}

.tab-btn:hover {
  border-color: var(--primary);
  color: var(--primary);
}

.tab-btn.active {
  background: var(--primary);
  color: var(--white);
  border-color: var(--primary);
}

.notice-list {
  max-width: 780px;
  margin: 0 auto;
}

.notice-card {
  display: flex;
  gap: 20px;
  padding: 24px;
  background: var(--white);
  border: 1px solid var(--border);
  border-radius: 12px;
  margin-bottom: 16px;
  transition: all 0.2s;
}

.notice-card:hover {
  border-color: var(--primary);
  box-shadow: var(--shadow);
}

.notice-left {
  flex-shrink: 0;
}

.notice-tag {
  display: inline-block;
  padding: 4px 12px;
  border-radius: 6px;
  font-size: 12px;
  font-weight: 600;
}

.tag-company {
  background: var(--primary-light);
  color: var(--primary);
}

.tag-business {
  background: #dbeafe;
  color: #1d4ed8;
}

.tag-announce {
  background: #fef3c7;
  color: #d97706;
}

.tag-recruit {
  background: #fce7f3;
  color: #db2777;
}

.notice-info {
  flex: 1;
}

.notice-title {
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 8px;
  color: var(--text);
}

.notice-summary {
  font-size: 14px;
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: 12px;
}

.notice-meta {
  display: flex;
  gap: 16px;
  font-size: 13px;
  color: #94a3b8;
}

.loading-text,
.empty-text {
  text-align: center;
  padding: 40px;
  color: var(--text-secondary);
}
</style>
