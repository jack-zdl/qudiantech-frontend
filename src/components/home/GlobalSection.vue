<template>
  <section class="section global">
    <div class="container">
      <h2 class="section-title global-title">全球布局</h2>
      <p class="section-subtitle global-subtitle">
        以上海总部为核心，覆盖国内多城市，拓展海外市场
      </p>

      <!-- 区域布局地图 SVG -->
      <div class="map-wrapper">
        <svg class="region-map" viewBox="0 0 860 620" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <!-- 网格渐变 -->
            <pattern id="mapGrid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(225,29,72,0.04)" stroke-width="0.5"/>
            </pattern>
            <!-- 连接线渐变 -->
            <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stop-color="rgba(249, 115, 22, 0.15)" />
              <stop offset="50%" stop-color="rgba(225, 29, 72, 0.3)" />
              <stop offset="100%" stop-color="rgba(225, 29, 72, 0.4)" />
            </linearGradient>
            <!-- 光晕渐变 -->
            <radialGradient id="glowRed" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stop-color="rgba(225, 29, 72, 0.4)" />
              <stop offset="100%" stop-color="transparent" />
            </radialGradient>
          </defs>

          <!-- 背景 -->
          <rect width="860" height="620" fill="transparent" />
          <rect width="860" height="620" fill="url(#mapGrid)" />

          <!-- ===== 中国地图轮廓（简化） ===== -->
          <path class="cn-outline"
                d="M 190 240 Q 220 190 290 170 L 330 155 L 370 150 L 410 148 L 450 150
                   Q 490 155 520 165 L 550 180 Q 570 195 575 215
                   Q 580 235 575 250 L 568 265 Q 560 280 555 295
                   Q 550 310 540 325 L 530 340 Q 520 355 505 365
                   Q 490 375 475 380 L 455 385 Q 435 388 415 385
                   Q 395 380 380 370 L 365 355 Q 350 340 340 320
                   L 330 300 Q 320 280 310 265
                   Q 300 250 290 240 Z"
                fill="rgba(225, 29, 72, 0.06)" stroke="rgba(225, 29, 72, 0.15)" stroke-width="1.2" />

          <!-- 中国地图内部分割线 (省级示意) -->
          <path class="cn-province" d="M 420 150 Q 430 200 440 240 Q 450 280 455 385" fill="none" stroke="rgba(225, 29, 72, 0.06)" stroke-width="0.8" stroke-dasharray="3 3" />
          <path class="cn-province" d="M 340 170 Q 360 220 370 260 Q 380 310 380 370" fill="none" stroke="rgba(225, 29, 72, 0.06)" stroke-width="0.8" stroke-dasharray="3 3" />
          <path class="cn-province" d="M 520 165 Q 510 220 505 280 Q 500 330 475 380" fill="none" stroke="rgba(225, 29, 72, 0.06)" stroke-width="0.8" stroke-dasharray="3 3" />

          <!-- ===== 周边国家/地区轮廓 ===== -->
          <!-- 蒙古 -->
          <path d="M 290 170 Q 320 130 370 125 Q 420 120 450 130" fill="none" stroke="rgba(255,255,255,0.05)" stroke-width="1" />
          <!-- 俄罗斯（简化示意） -->
          <path d="M 150 60 Q 200 40 300 50 Q 400 60 500 70 Q 550 80 575 100 Q 580 120 575 140 Q 560 155 520 145 Q 450 135 370 130 Q 300 128 250 120 Q 200 110 170 95 Z"
                fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.06)" stroke-width="1" />
          <!-- 韩国/朝鲜 -->
          <path d="M 555 215 Q 565 200 575 210 Q 585 220 580 235 Q 575 250 565 250 Q 555 245 555 230 Z"
                fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.06)" stroke-width="0.8" />
          <!-- 日本 -->
          <path d="M 600 200 Q 610 190 615 210 Q 620 230 610 250 Q 600 260 595 245 Q 590 230 595 215 Z"
                fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.06)" stroke-width="0.8" />
          <path d="M 598 270 Q 605 260 610 275 Q 612 290 605 295 Q 598 290 597 280 Z"
                fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.06)" stroke-width="0.8" />
          <!-- 东南亚 -->
          <path d="M 450 385 Q 470 400 490 415 Q 500 430 480 440 Q 460 445 445 435 Q 435 420 440 400 Z"
                fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.06)" stroke-width="0.8" />

          <!-- ===== 城市标注 ===== -->
          <!-- 上海 (总部核心) -->
          <circle cx="520" cy="310" r="20" fill="url(#glowRed)" opacity="0.5" />
          <circle cx="520" cy="310" r="7" fill="none" stroke="#e11d48" stroke-width="2" class="map-ring" />
          <circle cx="520" cy="310" r="5" fill="#e11d48" class="map-pulse" />
          <circle cx="520" cy="310" r="3" fill="#fff" />
          <text x="520" y="290" text-anchor="middle" fill="rgba(255,255,255,0.9)" font-size="13" font-weight="700">上海总部</text>

          <!-- 深圳 -->
          <circle cx="465" cy="375" r="14" fill="url(#glowRed)" opacity="0.3" />
          <circle cx="465" cy="375" r="4.5" fill="none" stroke="#f97316" stroke-width="1.5" class="map-ring" style="animation-delay:0.4s" />
          <circle cx="465" cy="375" r="3.5" fill="#f97316" class="map-pulse" style="animation-delay:0.4s" />
          <circle cx="465" cy="375" r="2" fill="#fff" />
          <text x="465" y="395" text-anchor="middle" fill="rgba(255,255,255,0.75)" font-size="11" font-weight="500">深圳</text>

          <!-- 安徽 (合肥) -->
          <circle cx="490" cy="285" r="12" fill="url(#glowRed)" opacity="0.25" />
          <circle cx="490" cy="285" r="4" fill="none" stroke="#f97316" stroke-width="1.5" class="map-ring" style="animation-delay:0.8s" />
          <circle cx="490" cy="285" r="3" fill="#f97316" class="map-pulse" style="animation-delay:0.8s" />
          <circle cx="490" cy="285" r="2" fill="#fff" />
          <text x="490" y="270" text-anchor="middle" fill="rgba(255,255,255,0.7)" font-size="11" font-weight="500">安徽</text>

          <!-- 山西 (太原) -->
          <circle cx="445" cy="240" r="12" fill="url(#glowRed)" opacity="0.25" />
          <circle cx="445" cy="240" r="4" fill="none" stroke="#f97316" stroke-width="1.5" class="map-ring" style="animation-delay:1.2s" />
          <circle cx="445" cy="240" r="3" fill="#f97316" class="map-pulse" style="animation-delay:1.2s" />
          <circle cx="445" cy="240" r="2" fill="#fff" />
          <text x="445" y="225" text-anchor="middle" fill="rgba(255,255,255,0.7)" font-size="11" font-weight="500">山西</text>

          <!-- 香港 -->
          <circle cx="470" cy="392" r="12" fill="url(#glowRed)" opacity="0.25" />
          <circle cx="470" cy="392" r="4" fill="none" stroke="#f97316" stroke-width="1.5" class="map-ring" style="animation-delay:1.6s" />
          <circle cx="470" cy="392" r="3" fill="#f97316" class="map-pulse" style="animation-delay:1.6s" />
          <circle cx="470" cy="392" r="2" fill="#fff" />
          <text x="470" y="412" text-anchor="middle" fill="rgba(255,255,255,0.7)" font-size="11" font-weight="500">香港</text>

          <!-- 俄罗斯 (莫斯科) -->
          <circle cx="165" cy="75" r="16" fill="url(#glowRed)" opacity="0.25" />
          <circle cx="165" cy="75" r="5" fill="none" stroke="#e11d48" stroke-width="1.5" class="map-ring" style="animation-delay:2s" />
          <circle cx="165" cy="75" r="3.5" fill="#e11d48" class="map-pulse" style="animation-delay:2s" />
          <circle cx="165" cy="75" r="2" fill="#fff" />
          <text x="165" y="58" text-anchor="middle" fill="rgba(255,255,255,0.75)" font-size="11" font-weight="500">俄罗斯</text>

          <!-- ===== 连接线路 ===== -->
          <!-- 上海 → 深圳 -->
          <path d="M 520 310 Q 500 340 465 375" fill="none" stroke="rgba(225,29,72,0.15)" stroke-width="1.5" stroke-dasharray="5 3" />
          <!-- 上海 → 安徽 -->
          <path d="M 520 310 Q 505 298 490 285" fill="none" stroke="rgba(225,29,72,0.12)" stroke-width="1" stroke-dasharray="3 3" />
          <!-- 上海 → 山西 -->
          <path d="M 520 310 Q 490 280 445 240" fill="none" stroke="rgba(225,29,72,0.12)" stroke-width="1" stroke-dasharray="3 3" />
          <!-- 上海 → 香港 -->
          <path d="M 520 310 Q 500 350 470 392" fill="none" stroke="rgba(225,29,72,0.12)" stroke-width="1" stroke-dasharray="3 3" />

          <!-- 上海 → 俄罗斯 (弧线) -->
          <path d="M 520 310 Q 400 200 250 120 Q 200 95 165 75"
                fill="none" stroke="url(#lineGrad)" stroke-width="2" stroke-dasharray="6 4" opacity="0.6">
            <animate attributeName="stroke-dashoffset" from="0" to="100" dur="3s" repeatCount="indefinite" />
          </path>

          <!-- 弧线端点箭头标记 -->
          <circle cx="165" cy="75" r="2" fill="rgba(225,29,72,0.4)" />

          <!-- ===== 图例 ===== -->
          <g class="map-legend">
            <circle cx="710" cy="520" r="4" fill="#e11d48" />
            <text x="720" y="524" fill="rgba(255,255,255,0.5)" font-size="11">总部</text>
            <circle cx="770" cy="520" r="3" fill="#f97316" />
            <text x="780" y="524" fill="rgba(255,255,255,0.5)" font-size="11">分部/办事处</text>
          </g>
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
  position: relative;
  overflow: hidden;
}

.global::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(ellipse at 50% 40%, rgba(225, 29, 72, 0.04) 0%, transparent 60%);
  pointer-events: none;
}

.global-title {
  color: var(--white);
}

.global-subtitle {
  color: #94a3b8;
}

.map-wrapper {
  max-width: 780px;
  margin: 0 auto 48px;
  padding: 10px;
  border: 1px solid rgba(255, 255, 255, 0.04);
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.015);
  position: relative;
}

.region-map {
  width: 100%;
  height: auto;
  display: block;
}

/* 中国轮廓悬停效果 */
.cn-outline {
  transition: all 0.5s ease;
}

.cn-outline:hover {
  fill: rgba(225, 29, 72, 0.1);
  stroke-opacity: 0.3;
}

/* 城市环脉冲 */
.map-ring {
  animation: ringPulse 2.5s ease-in-out infinite;
}

@keyframes ringPulse {
  0%, 100% { opacity: 0.6; transform: scale(1); }
  50% { opacity: 0.2; transform: scale(1.3); }
}

/* 城市点脉冲 */
.map-pulse {
  animation: dotPulse 2s ease-in-out infinite;
}

@keyframes dotPulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}

/* 市场卡片网格 */
.market-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
  max-width: 700px;
  margin: 0 auto;
  position: relative;
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
  transform: translateY(-2px);
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

/* 地图图例 */
.map-legend text {
  font-family: inherit;
}

@media (max-width: 768px) {
  .market-grid {
    grid-template-columns: 1fr 1fr;
  }
  .map-wrapper {
    padding: 4px;
    border-radius: 10px;
  }
}
</style>
