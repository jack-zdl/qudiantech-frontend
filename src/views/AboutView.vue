<template>
  <div class="about-page">
    <!-- 横幅 -->
    <div class="page-banner">
      <div class="container">
        <h1 class="page-title">关于我们</h1>
        <p class="page-desc">了解趣电的发展历程与企业文化</p>
      </div>
    </div>

    <!-- 公司简介 -->
    <section class="section intro-section">
      <div class="container">
        <div class="intro-content">
          <h2 class="section-title">公司简介</h2>
          <div class="intro-card">
            <p class="intro-text">
              趣电成立于 2020 年，是一家专注于电商运营与数字化服务的企业。公司总部位于上海，
              在深圳、安徽、山西、香港、俄罗斯等地设有分支机构。
            </p>
            <p class="intro-text">
              经过多年发展，趣电已从最初的拼多多大家电业务，发展成为覆盖平台电商运营、跨境电商、
              AI 数字化、供应链管理、品牌营销等多元业务的综合型企业服务平台。团队规模超 300 人，
              年营收突破 5 亿元。
            </p>
            <div class="intro-motto">
              <span class="motto-icon">💡</span>
              <span>让美好生活触手可及</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 发展历程 -->
    <section class="section timeline-section">
      <div class="container">
        <h2 class="section-title">发展历程</h2>
        <div v-if="loading" class="loading-text">加载中...</div>
        <div v-else class="timeline">
          <div v-for="(item, index) in timeline" :key="item.id" class="timeline-item">
            <div class="tl-dot">
              <div class="tl-dot-inner"></div>
            </div>
            <div class="tl-content">
              <span class="tl-year">{{ item.year }}</span>
              <h3 class="tl-title">{{ item.title }}</h3>
              <p class="tl-desc">{{ item.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 组织架构 -->
    <section class="section org-section">
      <div class="container">
        <h2 class="section-title">组织架构</h2>
        <div v-if="loading" class="loading-text">加载中...</div>
        <div v-else class="org-grid">
          <div v-for="item in orgList" :key="item.id" class="org-card">
            <div class="org-card-top">
              <span class="org-icon">🏢</span>
              <h3 class="org-name">{{ item.name }}</h3>
            </div>
            <p class="org-desc">{{ item.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 企业文化 -->
    <section class="section culture-section">
      <div class="container">
        <h2 class="section-title">企业文化</h2>
        <div v-if="loading" class="loading-text">加载中...</div>
        <div v-else class="culture-grid">
          <div v-for="item in cultureList" :key="item.id" class="culture-card">
            <div class="culture-icon-wrap">
              <span class="culture-icon">{{ item.icon }}</span>
            </div>
            <h3 class="culture-title">{{ item.title }}</h3>
            <p class="culture-desc">{{ item.description }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { getTimeline, getOrg, getCulture } from '@/api/about'

const loading = ref(true)
const timeline = ref<any[]>([])
const orgList = ref<any[]>([])
const cultureList = ref<any[]>([])

onMounted(async () => {
  try {
    const [timelineRes, orgRes, cultureRes] = await Promise.all([
      getTimeline(),
      getOrg(),
      getCulture(),
    ])
    timeline.value = (timelineRes as any).data
    orgList.value = (orgRes as any).data
    cultureList.value = (cultureRes as any).data
  } catch (e) {
    console.error('加载关于我们数据失败', e)
  } finally {
    loading.value = false
  }
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

.page-banner::before {
  content: '';
  position: absolute;
  top: -50%;
  right: -20%;
  width: 400px;
  height: 400px;
  background: radial-gradient(circle, rgba(225, 29, 72, 0.1) 0%, transparent 70%);
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

/* 公司简介 */
.intro-section {
  background: var(--white);
}

.intro-content {
  max-width: 700px;
  margin: 0 auto;
}

.intro-card {
  padding: 32px;
  background: var(--bg-light);
  border: 1px solid var(--border);
  border-radius: 12px;
  text-align: center;
}

.intro-text {
  font-size: 15px;
  line-height: 1.8;
  color: var(--text-secondary);
  margin-bottom: 12px;
}

.intro-motto {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin-top: 16px;
  padding: 8px 20px;
  background: var(--primary-light);
  border-radius: 20px;
  font-size: 14px;
  font-weight: 600;
  color: var(--primary);
}

/* 发展历程 */
.timeline-section {
  background: var(--bg-light);
}

.timeline {
  max-width: 600px;
  margin: 0 auto;
  position: relative;
  padding-left: 40px;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 19px;
  top: 0;
  bottom: 0;
  width: 2px;
  background: #e2e8f0;
}

.timeline-item {
  position: relative;
  padding-bottom: 36px;
  display: flex;
  align-items: flex-start;
}

.timeline-item:last-child {
  padding-bottom: 0;
}

.tl-dot {
  position: absolute;
  left: -40px;
  top: 4px;
  width: 40px;
  display: flex;
  justify-content: center;
}

.tl-dot-inner {
  width: 12px;
  height: 12px;
  background: var(--white);
  border: 3px solid var(--primary);
  border-radius: 50%;
  margin-top: 4px;
}

.tl-content {
  padding: 16px;
  background: var(--white);
  border: 1px solid var(--border);
  border-radius: 10px;
  width: 100%;
  transition: all 0.2s;
}

.tl-content:hover {
  border-color: var(--primary);
  box-shadow: var(--shadow);
}

.tl-year {
  display: inline-block;
  padding: 2px 10px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 600;
  color: var(--white);
  background: var(--primary-gradient);
  margin-bottom: 8px;
}

.tl-title {
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 6px;
  color: var(--text);
}

.tl-desc {
  font-size: 14px;
  color: var(--text-secondary);
  line-height: 1.6;
}

/* 组织架构 */
.org-section {
  background: var(--white);
}

.org-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  max-width: 900px;
  margin: 0 auto;
}

.org-card {
  padding: 24px;
  background: var(--bg-light);
  border: 1px solid var(--border);
  border-radius: 10px;
  transition: all 0.2s;
}

.org-card:hover {
  border-color: var(--primary);
  transform: translateY(-2px);
  box-shadow: var(--shadow);
}

.org-card-top {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 12px;
}

.org-icon {
  font-size: 20px;
}

.org-name {
  font-size: 16px;
  font-weight: 600;
  color: var(--text);
}

.org-desc {
  font-size: 14px;
  color: var(--text-secondary);
  line-height: 1.6;
}

/* 企业文化 */
.culture-section {
  background: var(--bg-light);
}

.culture-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  max-width: 900px;
  margin: 0 auto;
}

.culture-card {
  padding: 28px 20px;
  background: var(--white);
  border: 1px solid var(--border);
  border-radius: 12px;
  text-align: center;
  transition: all 0.2s;
}

.culture-card:hover {
  border-color: var(--primary);
  box-shadow: var(--shadow-lg);
  transform: translateY(-2px);
}

.culture-icon-wrap {
  width: 56px;
  height: 56px;
  background: var(--primary-light);
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 12px;
}

.culture-icon {
  font-size: 24px;
}

.culture-title {
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 8px;
  color: var(--text);
}

.culture-desc {
  font-size: 13px;
  color: var(--text-secondary);
  line-height: 1.6;
}

.loading-text {
  text-align: center;
  color: var(--text-secondary);
  padding: 40px 0;
}

@media (max-width: 768px) {
  .org-grid {
    grid-template-columns: 1fr 1fr;
  }
  .culture-grid {
    grid-template-columns: 1fr 1fr;
  }
}
</style>
