<template>
  <section class="section partner">
    <div class="container">
      <h2 class="section-title">合作伙伴</h2>
      <p class="section-subtitle">与行业领先企业建立深度合作关系，携手共赢</p>

      <!-- 合作模式 Tab -->
      <div class="mode-tabs">
        <button v-for="mode in modes" :key="mode.key"
                :class="['mode-btn', { active: activeMode === mode.key }]"
                @click="activeMode = mode.key">
          {{ mode.label }}
        </button>
      </div>

      <!-- 合作优势卡片 -->
      <div class="advantage-grid">
        <div v-for="a in advantages" :key="a.title" class="advantage-card">
          <div class="adv-icon-wrap">
            <span class="adv-icon">{{ a.icon }}</span>
          </div>
          <h3 class="adv-title">{{ a.title }}</h3>
          <p class="adv-desc">{{ a.desc }}</p>
        </div>
      </div>

      <!-- 合作品牌 -->
      <div class="partner-brands">
        <p class="brands-hint">已合作品牌</p>
        <div class="brands-logos">
          <span v-for="b in brands" :key="b" class="brand-tag">{{ b }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const activeMode = ref('supply')

const modes = [
  { key: 'supply', label: '供货合作' },
  { key: 'dist', label: '分销合作' },
  { key: 'cross', label: '跨境合作' },
  { key: 'oem', label: 'OEM代工' },
]

const advantages = [
  {
    icon: '🛡️',
    title: '品牌保障',
    desc: '严格品控体系，保障商品质量与供应链稳定，降低合作风险',
  },
  {
    icon: '📈',
    title: '增长赋能',
    desc: '提供数据分析、运营策略、营销支持等全面增长服务',
  },
  {
    icon: '🤝',
    title: '深度协同',
    desc: '从产品规划到售后服务的全链路协同，实现效率最大化',
  },
]

const brands = [
  '美的', '海尔', '格力', '小米', '华为', '联想', '苏泊尔', '九阳',
]
</script>

<style scoped>
.partner {
  background: var(--bg-light);
}

.mode-tabs {
  display: flex;
  justify-content: center;
  gap: 12px;
  margin-bottom: 40px;
}

.mode-btn {
  padding: 10px 24px;
  border: 1px solid var(--border);
  border-radius: 8px;
  background: var(--white);
  font-size: 15px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
  color: var(--text-secondary);
}

.mode-btn:hover {
  border-color: var(--primary);
  color: var(--primary);
}

.mode-btn.active {
  background: var(--primary);
  color: var(--white);
  border-color: var(--primary);
}

.advantage-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  margin-bottom: 48px;
}

.advantage-card {
  padding: 36px 28px;
  background: var(--white);
  border: 1px solid var(--border);
  border-radius: 12px;
  text-align: center;
  transition: all 0.3s;
}

.advantage-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
  border-color: var(--primary);
}

.adv-icon-wrap {
  width: 64px;
  height: 64px;
  background: var(--primary-light);
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 20px;
}

.adv-icon {
  font-size: 28px;
}

.adv-title {
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 12px;
  color: var(--text);
}

.adv-desc {
  font-size: 14px;
  color: var(--text-secondary);
  line-height: 1.7;
}

.partner-brands {
  text-align: center;
  border-top: 1px solid var(--border);
  padding-top: 32px;
}

.brands-hint {
  font-size: 14px;
  color: var(--text-secondary);
  margin-bottom: 16px;
}

.brands-logos {
  display: flex;
  justify-content: center;
  gap: 16px;
  flex-wrap: wrap;
}

.brand-tag {
  padding: 6px 16px;
  border: 1px solid var(--border);
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
  color: var(--text-secondary);
  background: var(--white);
  transition: all 0.2s;
}

.brand-tag:hover {
  color: var(--primary);
  border-color: var(--primary);
}

@media (max-width: 768px) {
  .advantage-grid {
    grid-template-columns: 1fr;
  }
  .mode-tabs {
    flex-wrap: wrap;
  }
}
</style>
