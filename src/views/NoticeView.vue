<template>
  <div class="notice-page">
    <div class="page-banner">
    <div class="page-banner-grid"></div>
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
        <div v-else-if="filteredList.length === 0" class="empty-text">暂无公告</div>
        <div v-else class="notice-list">
          <div v-for="item in filteredList" :key="item.id" class="notice-card">
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
import { ref, computed, onMounted } from 'vue'
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

const defaultNotices = [
  {
    id: 1,
    tag: '公司动态',
    title: '趣电正式启动跨境电商业务',
    summary: '公司以 Ozon 平台为核心，重点布局俄罗斯及"一带一路"相关国家市场，同时开拓美客多、亚马逊、乐天等国际电商平台。',
    date: '2023-11-15',
    department: '跨境电商业务中心',
  },
  {
    id: 2,
    tag: '公司动态',
    title: '深圳分公司正式成立',
    summary: '为进一步加强跨境业务团队建设，公司于 2024 年 10 月在深圳正式成立分公司，重点负责跨境选品、平台运营和海外市场开拓。',
    date: '2024-10-20',
    department: '人力行政中心',
  },
  {
    id: 3,
    tag: '业务动态',
    title: '2024 年度营收突破 4.7 亿元',
    summary: '公司 2024 年国内业务突破 4.5 亿元，跨境业务突破 1,000 万元，整体营收突破 4.7 亿元，团队规模接近 100 人。',
    date: '2025-01-10',
    department: '财务管理中心',
  },
  {
    id: 4,
    tag: '公司动态',
    title: '趣电进入组织升级与 AI 赋能新阶段',
    summary: '2025 年起，公司系统化引进自动化、RPA、AI 等技术能力，推动业务从人力驱动向系统化、数据化、智能化运营升级。',
    date: '2025-03-01',
    department: '技术与数字化中心',
  },
  {
    id: 5,
    tag: '招聘',
    title: '趣电 2025 年春季招聘启动',
    summary: '公司诚聘国内电商运营、跨境电商运营、供应链管理、技术开发等岗位人才，欢迎有志之士加入。',
    date: '2025-02-20',
    department: '人力行政中心',
  },
  {
    id: 6,
    tag: '业务动态',
    title: '趣电正式入驻京东平台',
    summary: '公司完成京东平台入驻，开始在京东平台开展大家电类目运营，进一步拓展国内电商多平台布局。',
    date: '2022-03-10',
    department: '国内电商业务中心',
  },
]

const activeTab = ref('')
const noticeList = ref<any[]>([])
const loading = ref(true)

const filteredList = computed(() => {
  if (!activeTab.value) return noticeList.value
  return noticeList.value.filter((item) => item.tag === activeTab.value)
})

async function switchTab(tag: string) {
  activeTab.value = tag
  if (noticeList.value.length === 0) return // 已有数据时无需重新加载
}

onMounted(async () => {
  try {
    const res: any = await getNotices()
    const data = res?.data
    if (data && Array.isArray(data) && data.length > 0) {
      noticeList.value = data
    } else {
      noticeList.value = defaultNotices
    }
  } catch (e) {
    console.error('加载公告失败，使用默认数据', e)
    noticeList.value = defaultNotices
  } finally {
    loading.value = false
  }
})
</script>

<style scoped>
.page-banner {
  padding: 100px 0 60px;
  background: linear-gradient(160deg, #220c04 0%, #351506 40%, #421c0a 100%);
  text-align: center;
  position: relative;
  overflow: hidden;
}

.page-banner-grid {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(234, 88, 12, 0.05) 2px, transparent 2px),
    linear-gradient(90deg, rgba(234, 88, 12, 0.05) 2px, transparent 2px);
  background-size: 60px 60px;
  z-index: 1;
}

.page-banner::before {
  content: '';
  position: absolute;
  bottom: -40%;
  right: -15%;
  width: 350px;
  height: 350px;
  background: radial-gradient(circle, rgba(249, 115, 22, 0.08) 0%, transparent 70%);
  border-radius: 50%;
  z-index: 1;
}

.page-banner::after {
  content: '';
  position: absolute;
  top: -30%;
  left: -10%;
  width: 300px;
  height: 300px;
  background: radial-gradient(circle, rgba(234, 88, 12, 0.1) 0%, transparent 70%);
  border-radius: 50%;
  z-index: 1;
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
  background: #fff7ed;
  color: #ea580c;
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
