<template>
  <section class="section global">
    <div class="container">
      <h2 class="section-title global-title">全球布局</h2>
      <p class="section-subtitle global-subtitle">
        业务覆盖亚洲多个核心城市，构建全球化服务网络
      </p>

      <!-- 世界地图 SVG -->
      <div class="map-wrapper">
        <svg class="world-map" viewBox="0 0 800 450" xmlns="http://www.w3.org/2000/svg">
          <!-- 地图轮廓简图 -->
          <path d="M100 200 Q200 120 400 100 Q600 80 700 150 L720 200 Q750 250 720 300 Q700 350 600 380 Q400 400 200 380 Q100 360 80 300 Z"
                fill="none" stroke="rgba(225,29,72,0.08)" stroke-width="1.5" />
          <path d="M80 300 Q120 280 200 250 Q300 220 400 230 Q500 240 600 220 Q680 200 720 250"
                fill="none" stroke="rgba(225,29,72,0.06)" stroke-width="1" />
          <path d="M150 200 Q200 180 300 170 Q400 160 500 180 Q600 200 650 180"
                fill="none" stroke="rgba(225,29,72,0.06)" stroke-width="1" />
          <path d="M200 380 Q250 350 350 320 Q450 290 550 300 Q600 310 650 350"
                fill="none" stroke="rgba(225,29,72,0.06)" stroke-width="1" />

          <!-- 城市标注点 - 上海 -->
          <circle cx="390" cy="265" r="5" fill="#e11d48" class="map-pulse" />
          <circle cx="390" cy="265" r="3" fill="#fff" />
          <text x="390" y="250" text-anchor="middle" fill="rgba(255,255,255,0.8)" font-size="12" font-weight="600">上海</text>

          <!-- 深圳 -->
          <circle cx="370" cy="295" r="4" fill="#f97316" class="map-pulse" style="animation-delay:0.5s" />
          <circle cx="370" cy="295" r="2.5" fill="#fff" />
          <text x="370" y="315" text-anchor="middle" fill="rgba(255,255,255,0.8)" font-size="11" font-weight="500">深圳</text>

          <!-- 香港 -->
          <circle cx="360" cy="305" r="4" fill="#f97316" class="map-pulse" style="animation-delay:1s" />
          <circle cx="360" cy="305" r="2.5" fill="#fff" />
          <text x="345" y="325" text-anchor="middle" fill="rgba(255,255,255,0.8)" font-size="11" font-weight="500">香港</text>

          <!-- 俄罗斯 -->
          <circle cx="460" cy="140" r="4" fill="#e11d48" class="map-pulse" style="animation-delay:1.5s" />
          <circle cx="460" cy="140" r="2.5" fill="#fff" />
          <text x="460" y="128" text-anchor="middle" fill="rgba(255,255,255,0.8)" font-size="11" font-weight="500">俄罗斯</text>

          <!-- 东南亚 -->
          <circle cx="390" cy="340" r="4" fill="#f97316" class="map-pulse" style="animation-delay:2s" />
          <circle cx="390" cy="340" r="2.5" fill="#fff" />
          <text x="390" y="358" text-anchor="middle" fill="rgba(255,255,255,0.8)" font-size="11" font-weight="500">东南亚</text>

          <!-- 连接线 -->
          <line x1="390" y1="265" x2="460" y2="140" stroke="rgba(225,29,72,0.2)" stroke-width="1" stroke-dasharray="4 3" />
          <line x1="390" y1="265" x2="370" y2="295" stroke="rgba(225,29,72,0.2)" stroke-width="1" stroke-dasharray="4 3" />
          <line x1="390" y1="265" x2="390" y2="340" stroke="rgba(225,29,72,0.2)" stroke-width="1" stroke-dasharray="4 3" />
        </svg>
      </div>

      <!-- 活跃市场列表 -->
      <div class="market-grid">
        <div v-for="m in markets" :key="m.region" class="market-card">
          <span class="market-flag">{{ m.flag }}</span>
          <div class="market-info">
            <span class="market-name">{{ m.region }}</span>
            <span class="market-desc">{{ m.desc }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const markets = [
  { flag: '🇨🇳', region: '上海总部', desc: '上海市长宁区通协路 268 号' },
  { flag: '🇨🇳', region: '深圳分公司', desc: '深圳市南山区科技园' },
  { flag: '🇨🇳', region: '安徽分部', desc: '安徽省合肥市高新区' },
  { flag: '🇨🇳', region: '山西分部', desc: '山西省太原市' },
  { flag: '🇭🇰', region: '香港办事处', desc: '香港九龙尖沙咀' },
  { flag: '🇷🇺', region: '俄罗斯办事处', desc: '莫斯科' },
]
</script>

<style scoped>
.global {
  background: var(--dark);
  color: var(--white);
}

.global-title {
  color: var(--white);
}

.global-subtitle {
  color: #94a3b8;
}

.map-wrapper {
  max-width: 700px;
  margin: 0 auto 48px;
  padding: 20px;
}

.world-map {
  width: 100%;
  height: auto;
}

.map-pulse {
  animation: mapPulse 2s ease-in-out infinite;
}

@keyframes mapPulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}

.market-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
  max-width: 700px;
  margin: 0 auto;
}

.market-card {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 14px 16px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 8px;
  transition: all 0.2s;
}

.market-card:hover {
  background: rgba(225, 29, 72, 0.08);
  border-color: rgba(225, 29, 72, 0.2);
}

.market-flag {
  font-size: 22px;
  flex-shrink: 0;
}

.market-info {
  display: flex;
  flex-direction: column;
}

.market-name {
  font-size: 14px;
  font-weight: 600;
  color: var(--white);
}

.market-desc {
  font-size: 12px;
  color: #94a3b8;
}

@media (max-width: 768px) {
  .market-grid {
    grid-template-columns: 1fr 1fr;
  }
}
</style>
