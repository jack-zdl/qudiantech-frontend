<template>
  <section class="section global">
    <div class="container">
      <h2 class="section-title global-title">全球布局</h2>
      <p class="section-subtitle global-subtitle">
        以上海总部为核心，覆盖国内多城市，拓展海外市场
      </p>

      <!-- ECharts 地图 -->
      <div ref="mapRef" class="map-container"></div>

      <!-- 市场列表 -->
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
import { ref, onMounted, onUnmounted } from 'vue'
import * as echarts from 'echarts'

const mapRef = ref<HTMLDivElement>()
let chart: echarts.ECharts | null = null

const markets = [
  { flag: '🇨🇳', region: '上海总部', desc: '上海市长宁区通协路 268 号' },
  { flag: '🇨🇳', region: '深圳分公司', desc: '深圳市南山区科技园' },
  { flag: '🇨🇳', region: '安徽分部', desc: '安徽省合肥市高新区' },
  { flag: '🇨🇳', region: '山西分部', desc: '山西省太原市' },
  { flag: '🇭🇰', region: '香港办事处', desc: '香港九龙尖沙咀' },
  { flag: '🇷🇺', region: '俄罗斯办事处', desc: '莫斯科' },
]

// 城市经纬度
const cityData = [
  { name: '上海总部', value: [121.47, 31.23] as [number, number], symbolSize: 18 },
  { name: '深圳', value: [114.06, 22.54] as [number, number], symbolSize: 12 },
  { name: '安徽', value: [117.23, 31.82] as [number, number], symbolSize: 12 },
  { name: '山西', value: [112.55, 37.87] as [number, number], symbolSize: 12 },
  { name: '香港', value: [114.17, 22.32] as [number, number], symbolSize: 12 },
  { name: '俄罗斯', value: [37.62, 55.76] as [number, number], symbolSize: 12 },
]

// 航路连线（上海出发）
const routes = [
  { coords: [[121.47, 31.23] as [number, number], [114.06, 22.54] as [number, number]] },
  { coords: [[121.47, 31.23] as [number, number], [117.23, 31.82] as [number, number]] },
  { coords: [[121.47, 31.23] as [number, number], [112.55, 37.87] as [number, number]] },
  { coords: [[121.47, 31.23] as [number, number], [114.17, 22.32] as [number, number]] },
  { coords: [[121.47, 31.23] as [number, number], [37.62, 55.76] as [number, number]] },
]

function getChartOption() {
  return {
    backgroundColor: 'transparent',
    geo: {
      map: 'china',
      roam: false,
      center: [105, 36],
      zoom: 1.0,
      aspectScale: 0.8,
      label: {
        show: true,
        fontSize: 9,
        color: 'rgba(255,255,255,0.3)',
      },
      itemStyle: {
        areaColor: 'rgba(255,255,255,0.04)',
        borderColor: 'rgba(200,90,30,0.2)',
        borderWidth: 1.2,
      },
      emphasis: {
        itemStyle: {
          areaColor: 'rgba(200,90,30,0.1)',
        },
        label: {
          color: 'rgba(255,255,255,0.5)',
        },
      },
    },
    series: [
      // 国内城市连线
      {
        type: 'lines',
        coordinateSystem: 'geo',
        data: routes.slice(0, 4).map((r) => ({
          coords: r.coords,
          lineStyle: {
            color: 'rgba(200,90,30,0.2)',
            width: 1,
            curveness: 0.2,
            type: 'dashed' as const,
          },
        })),
        polyline: false,
        lineStyle: {
          opacity: 0.4,
        },
        effect: {
          show: false,
        },
        z: 1,
      },
      // 上海→莫斯科 国际航线（发光效果）
      {
        type: 'lines',
        coordinateSystem: 'geo',
        data: [
          {
            coords: routes[4].coords,
            lineStyle: {
              color: {
                type: 'linear' as const,
                x: 0, y: 0, x2: 1, y2: 0,
                colorStops: [
                  { offset: 0, color: 'rgba(217,119,6,0.5)' },
                  { offset: 1, color: 'rgba(200,90,30,0.8)' },
                ],
              },
              width: 2,
              curveness: 0.3,
            },
          },
        ],
        polyline: false,
        lineStyle: {
          opacity: 0.7,
        },
        effect: {
          show: true,
          period: 4,
          trailLength: 0.3,
          symbol: 'arrow',
          symbolSize: 8,
          color: '#c85a1e',
        },
        z: 2,
      },
      // 城市光晕层
      {
        type: 'scatter',
        coordinateSystem: 'geo',
        data: cityData.map((c) => ({
          name: c.name,
          value: c.value,
          symbolSize: c.symbolSize + 12,
          itemStyle: {
            color: c.name === '上海总部'
              ? 'rgba(200,90,30,0.15)'
              : c.name === '俄罗斯'
                ? 'rgba(200,90,30,0.12)'
                : 'rgba(217,119,6,0.1)',
          },
        })),
        symbol: 'circle',
        symbolSize: (d: any) => d.symbolSize,
        z: 3,
      },
      // 城市高亮脉冲点
      {
        type: 'effectScatter',
        coordinateSystem: 'geo',
        data: [
          {
            name: '上海总部',
            value: [121.47, 31.23],
            symbolSize: 18,
            itemStyle: { color: '#c85a1e' },
            label: {
              show: true,
              formatter: '{b}',
              position: 'top',
              distance: 6,
              color: 'rgba(255,255,255,0.9)',
              fontSize: 13,
              fontWeight: 700 as const,
            },
          },
          {
            name: '深圳',
            value: [114.06, 22.54],
            symbolSize: 12,
            itemStyle: { color: '#d97706' },
            label: {
              show: true,
              formatter: '{b}',
              position: 'bottom',
              distance: 4,
              color: 'rgba(255,255,255,0.7)',
              fontSize: 11,
              fontWeight: 500 as const,
            },
          },
          {
            name: '安徽',
            value: [117.23, 31.82],
            symbolSize: 12,
            itemStyle: { color: '#d97706' },
            label: {
              show: true,
              formatter: '{b}',
              position: 'top',
              distance: 4,
              color: 'rgba(255,255,255,0.7)',
              fontSize: 11,
              fontWeight: 500 as const,
            },
          },
          {
            name: '山西',
            value: [112.55, 37.87],
            symbolSize: 12,
            itemStyle: { color: '#d97706' },
            label: {
              show: true,
              formatter: '{b}',
              position: 'bottom',
              distance: 4,
              color: 'rgba(255,255,255,0.7)',
              fontSize: 11,
              fontWeight: 500 as const,
            },
          },
          {
            name: '香港',
            value: [114.17, 22.32],
            symbolSize: 12,
            itemStyle: { color: '#d97706' },
            label: {
              show: true,
              formatter: '{b}',
              position: 'bottom',
              distance: 4,
              color: 'rgba(255,255,255,0.7)',
              fontSize: 11,
              fontWeight: 500 as const,
            },
          },
          {
            name: '俄罗斯',
            value: [37.62, 55.76],
            symbolSize: 12,
            itemStyle: { color: '#c85a1e' },
            label: {
              show: true,
              formatter: '{b}',
              position: 'top',
              distance: 8,
              color: 'rgba(255,255,255,0.8)',
              fontSize: 12,
              fontWeight: 600 as const,
            },
          },
        ],
        symbol: 'circle',
        rippleEffect: {
          scale: 4,
          brushType: 'stroke' as const,
        },
        hoverAnimation: true,
        z: 4,
      },
      // 上海总部单独加一层大光环
      {
        type: 'scatter',
        coordinateSystem: 'geo',
        data: [
          {
            name: '上海总部',
            value: [121.47, 31.23],
            symbolSize: 30,
            itemStyle: { color: 'rgba(200,90,30,0.08)' },
          },
        ],
        symbol: 'circle',
        z: 0,
      },
    ],
  }
}

async function initChart() {
  if (!mapRef.value) return
  try {
    const res = await fetch('/china.json')
    const chinaJson = await res.json()
    echarts.registerMap('china', chinaJson as any)

    chart = echarts.init(mapRef.value, undefined, { renderer: 'svg' })
    chart.setOption(getChartOption())
    window.addEventListener('resize', handleResize)
  } catch (e) {
    console.error('地图加载失败', e)
    // 降级显示
    if (mapRef.value) {
      mapRef.value.innerHTML = '<div class="map-fallback">地图加载中...</div>'
    }
  }
}

function handleResize() {
  chart?.resize()
}

onMounted(() => {
  initChart()
})

onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
  chart?.dispose()
})
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
  background: radial-gradient(ellipse at 50% 40%, rgba(200, 90, 30, 0.04) 0%, transparent 60%);
  pointer-events: none;
}

.global-title {
  color: var(--white);
}

.global-subtitle {
  color: #94a3b8;
}

.map-container {
  width: 100%;
  height: 520px;
  margin: 0 auto 40px;
  border: 1px solid rgba(255, 255, 255, 0.04);
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.015);
  position: relative;
  overflow: hidden;
}

.map-fallback {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  color: #64748b;
  font-size: 14px;
}

/* 市场卡片 */
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
  background: rgba(200, 90, 30, 0.08);
  border-color: rgba(200, 90, 30, 0.2);
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

@media (max-width: 768px) {
  .map-container {
    height: 360px;
  }
  .market-grid {
    grid-template-columns: 1fr 1fr;
  }
}
</style>
