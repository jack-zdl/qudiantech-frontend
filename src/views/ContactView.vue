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

          <!-- 右侧地图占位 -->
          <div class="contact-map-col">
            <div class="map-placeholder">
              <div class="map-inner">
                <span class="map-icon">📍</span>
                <p class="map-title">上海总部</p>
                <p class="map-addr">上海市长宁区通协路 268 号尚品都汇 B807 室</p>
                <p class="map-hint">地图组件即将接入</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
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

/* 地图占位 */
.contact-map-col {
  padding: 32px;
  background: var(--bg-light);
  border: 1px solid var(--border);
  border-radius: 12px;
}

.map-placeholder {
  width: 100%;
  height: 100%;
  min-height: 350px;
  background: var(--white);
  border: 1px solid var(--border);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.map-inner {
  text-align: center;
}

.map-icon {
  font-size: 48px;
  display: block;
  margin-bottom: 12px;
}

.map-title {
  font-size: 18px;
  font-weight: 600;
  color: var(--text);
  margin-bottom: 4px;
}

.map-addr {
  font-size: 14px;
  color: var(--text-secondary);
  margin-bottom: 8px;
}

.map-hint {
  font-size: 12px;
  color: #94a3b8;
}

@media (max-width: 768px) {
  .contact-two-col {
    grid-template-columns: 1fr;
  }
}
</style>
