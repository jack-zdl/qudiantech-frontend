<template>
  <section class="section business">
    <div class="container">
      <h2 class="section-title">核心业务</h2>
      <p class="section-subtitle">覆盖电商全链路，助力企业数字化转型</p>

      <!-- 数据统计 -->
      <div class="stats-row">
        <div v-for="s in stats" :key="s.label" class="stat-item">
          <span class="stat-number">{{ s.number }}</span>
          <span class="stat-plus">+</span>
          <span class="stat-label">{{ s.label }}</span>
        </div>
      </div>

      <!-- 两大业务卡片 -->
      <div class="business-cards">
        <div v-for="card in cards" :key="card.title" class="biz-card">
          <div class="biz-card-top">
            <div class="biz-icon-wrap">
              <span class="biz-icon">{{ card.icon }}</span>
            </div>
            <div>
              <span class="biz-tag">{{ card.tag }}</span>
              <h3 class="biz-card-title">{{ card.title }}</h3>
            </div>
          </div>
          <p class="biz-card-desc">{{ card.desc }}</p>
          <div class="biz-card-features">
            <span v-for="f in card.features" :key="f" class="biz-feature">{{ f }}</span>
          </div>
        </div>
      </div>

      <!-- 合作平台 -->
      <div class="platforms-section">
        <p class="platforms-label">合作平台</p>
        <div class="platform-logos">
          <span v-for="p in platforms" :key="p" class="platform-item">{{ p }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const stats = [
  { number: '300', label: '团队规模' },
  { number: '5亿', label: '年营收' },
  { number: '6', label: '分支机构' },
  { number: '5', label: '覆盖国家' },
  { number: '1000', label: '合作品牌' },
]

const cards = [
  {
    icon: '🏪',
    tag: '国内电商',
    title: '国内电商运营',
    desc: '拼多多、京东、天猫、抖音电商等主流平台全品类运营服务，助力品牌快速占领国内市场。',
    features: ['拼多多运营', '京东运营', '天猫运营', '抖音电商'],
  },
  {
    icon: '🌐',
    tag: '跨境电商',
    title: '跨境电商服务',
    desc: '俄罗斯、东南亚等海外市场拓展，本地化运营与海外仓一站式服务，助力品牌出海。',
    features: ['俄罗斯市场', '东南亚市场', '海外仓服务', '本地化运营'],
  },
]

const platforms = [
  '拼多多', '京东', '天猫', '抖音电商', '阿里巴巴', '亚马逊'
]
</script>

<style scoped>
.business {
  background: var(--white);
}

/* 统计数字 */
.stats-row {
  display: flex;
  justify-content: center;
  gap: 48px;
  margin-bottom: 48px;
  flex-wrap: wrap;
}

.stat-item {
  text-align: center;
  position: relative;
}

.stat-number {
  font-size: 36px;
  font-weight: 800;
  background: var(--primary-gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.stat-plus {
  font-size: 28px;
  font-weight: 700;
  color: var(--primary);
  margin-left: 2px;
}

.stat-label {
  display: block;
  font-size: 14px;
  color: var(--text-secondary);
  margin-top: 4px;
}

/* 业务卡片 */
.business-cards {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
  margin-bottom: 48px;
}

.biz-card {
  padding: 32px;
  border-radius: 12px;
  background: var(--bg-light);
  border: 1px solid var(--border);
  transition: all 0.3s;
}

.biz-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
  border-color: var(--primary);
}

.biz-card-top {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 16px;
}

.biz-icon-wrap {
  width: 56px;
  height: 56px;
  background: var(--primary-light);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.biz-icon {
  font-size: 28px;
}

.biz-tag {
  display: inline-block;
  padding: 2px 10px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 600;
  color: var(--white);
  background: var(--primary-gradient);
  margin-bottom: 6px;
}

.biz-card-title {
  font-size: 20px;
  font-weight: 700;
  color: var(--text);
}

.biz-card-desc {
  font-size: 14px;
  color: var(--text-secondary);
  line-height: 1.7;
  margin-bottom: 16px;
}

.biz-card-features {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.biz-feature {
  padding: 4px 12px;
  border: 1px solid var(--border);
  border-radius: 6px;
  font-size: 13px;
  color: var(--text-secondary);
  background: var(--white);
}

/* 合作平台 */
.platforms-section {
  text-align: center;
  padding-top: 24px;
  border-top: 1px solid var(--border);
}

.platforms-label {
  font-size: 14px;
  color: var(--text-secondary);
  margin-bottom: 16px;
}

.platform-logos {
  display: flex;
  justify-content: center;
  gap: 32px;
  flex-wrap: wrap;
}

.platform-item {
  font-size: 15px;
  font-weight: 500;
  color: var(--text-secondary);
  padding: 8px 16px;
  border-radius: 8px;
  border: 1px solid var(--border);
  background: var(--bg-light);
  transition: all 0.2s;
}

.platform-item:hover {
  color: var(--primary);
  border-color: var(--primary);
}

@media (max-width: 768px) {
  .stats-row {
    gap: 24px;
  }
  .stat-number {
    font-size: 28px;
  }
  .business-cards {
    grid-template-columns: 1fr;
  }
}
</style>
