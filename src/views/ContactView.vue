<template>
  <div class="contact-page">
    <div class="page-banner">
    <div class="page-banner-grid"></div>
      <div class="container">
        <h1 class="page-title">联系我们</h1>
        <p class="page-desc">期待与您的合作</p>
      </div>
    </div>

    <section class="section">
      <div class="container">
        <!-- 双栏布局 -->
        <div class="contact-two-col">
          <!-- 左侧联系信息 -->
          <div class="contact-info-col">
            <h2 class="col-title">联系方式</h2>
            <div class="contact-list">
              <div v-for="item in contacts" :key="item.label" class="contact-row">
                <span class="contact-row-icon">{{ item.icon }}</span>
                <div>
                  <span class="contact-row-label">{{ item.label }}</span>
                  <span class="contact-row-value">{{ item.value }}</span>
                </div>
              </div>
            </div>
            <div class="contact-office-section">
              <h3 class="office-section-title">办公地址</h3>
              <div v-for="o in offices" :key="o.name" class="office-row">
                <span class="office-dot"></span>
                <div>
                  <span class="office-name">{{ o.name }}</span>
                  <span class="office-addr">{{ o.address }}</span>
                </div>
              </div>
            </div>
          </div>

          <!-- 右侧地图 -->
          <div class="contact-map-col">
            <div ref="mapContainer" class="map-container"></div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const contacts = [
  { icon: '📧', label: '邮箱', value: 'contact@qudian.com' },
  { icon: '📞', label: '电话', value: '400-000-0000' },
  { icon: '💬', label: '商务合作', value: 'business@qudian.com' },
  { icon: '👔', label: '人才招聘', value: 'hr@qudian.com' },
]

const offices = [
  { name: '上海总部', address: '上海市长宁区通协路 268 号尚品都汇 B807 室' },
  { name: '深圳分公司', address: '深圳市南山区科技园' },
  { name: '安徽分部', address: '安徽省合肥市高新区' },
  { name: '山西分部', address: '山西省太原市' },
  { name: '香港办事处', address: '香港九龙尖沙咀' },
  { name: '俄罗斯办事处', address: '莫斯科' },
]

const mapContainer = ref<HTMLDivElement>()
let mapInstance: any = null

// 上海总部坐标（上海市长宁区通协路 268 号）
const SHANGHAI_HQ: [number, number] = [31.2185, 121.3595]

onMounted(async () => {
  if (!mapContainer.value) return

  try {
    const L = await import('leaflet')
    await import('leaflet/dist/leaflet.css')

    // 修复 Leaflet 默认图标路径问题（webpack/vite 打包后图标路径失效）
    // 使用内联 SVG 图标代替默认的 PNG 图标，避免路径问题
    const iconHtml = L.divIcon({
      className: 'custom-marker',
      html: '<div style="background:#ea580c;color:#fff;width:32px;height:32px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:18px;box-shadow:0 2px 8px rgba(234,88,12,0.4);border:3px solid #fff;">📍</div>',
      iconSize: [32, 32],
      iconAnchor: [16, 32],
      popupAnchor: [0, -32],
    })

    mapInstance = L.map(mapContainer.value, {
      center: SHANGHAI_HQ,
      zoom: 15,
      zoomControl: true,
      scrollWheelZoom: true,
    })

    // OSM 瓦片图层（OpenStreetMap，免费无需 API Key）
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors',
      maxZoom: 19,
    }).addTo(mapInstance)

    // 添加标记
    const marker = L.marker(SHANGHAI_HQ, { icon: iconHtml }).addTo(mapInstance)
    marker.bindPopup(
      '<b>趣电电子商务 · 上海总部</b><br/>上海市长宁区通协路 268 号尚品都汇 B807 室'
    )

    // 延迟打开弹窗
    setTimeout(() => marker.openPopup(), 500)
  } catch (e) {
    console.error('地图加载失败', e)
  }
})

onUnmounted(() => {
  if (mapInstance) {
    mapInstance.remove()
    mapInstance = null
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
  bottom: -50%;
  right: -20%;
  width: 400px;
  height: 400px;
  background: radial-gradient(circle, rgba(234, 88, 12, 0.12) 0%, transparent 70%);
  border-radius: 50%;
  z-index: 1;
}

.page-banner::after {
  content: '';
  position: absolute;
  top: -40%;
  left: -15%;
  width: 350px;
  height: 350px;
  background: radial-gradient(circle, rgba(249, 115, 22, 0.08) 0%, transparent 70%);
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

/* 双栏布局 */
.contact-two-col {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  max-width: 960px;
  margin: 0 auto;
}

.contact-info-col {
  padding: 32px;
  background: var(--bg-light);
  border: 1px solid var(--border);
  border-radius: 12px;
}

.col-title {
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 24px;
  color: var(--text);
}

.contact-list {
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 32px;
}

.contact-row {
  display: flex;
  align-items: center;
  gap: 14px;
}

.contact-row-icon {
  font-size: 24px;
  flex-shrink: 0;
}

.contact-row div {
  display: flex;
  flex-direction: column;
}

.contact-row-label {
  font-size: 13px;
  color: var(--text-secondary);
}

.contact-row-value {
  font-size: 15px;
  font-weight: 600;
  color: var(--text);
}

.contact-office-section {
  border-top: 1px solid var(--border);
  padding-top: 24px;
}

.office-section-title {
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 16px;
  color: var(--text);
}

.office-row {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  margin-bottom: 12px;
}

.office-dot {
  width: 8px;
  height: 8px;
  background: var(--primary);
  border-radius: 50%;
  flex-shrink: 0;
  margin-top: 6px;
}

.office-row div {
  display: flex;
  flex-direction: column;
}

.office-name {
  font-size: 14px;
  font-weight: 600;
  color: var(--text);
}

.office-addr {
  font-size: 13px;
  color: var(--text-secondary);
}

/* 地图容器 */
.contact-map-col {
  padding: 0;
  background: var(--bg-light);
  border: 1px solid var(--border);
  border-radius: 12px;
  overflow: hidden;
}

.map-container {
  width: 100%;
  height: 100%;
  min-height: 440px;
}

/* 自定义标记样式(全局) */
:deep(.custom-marker) {
  background: none !important;
  border: none !important;
}

:deep(.leaflet-popup-content-wrapper) {
  border-radius: 8px;
  font-size: 13px;
  line-height: 1.5;
}

:deep(.leaflet-popup-content) {
  margin: 10px 14px;
}

@media (max-width: 768px) {
  .contact-two-col {
    grid-template-columns: 1fr;
  }
  .map-container {
    min-height: 300px;
  }
}
</style>
