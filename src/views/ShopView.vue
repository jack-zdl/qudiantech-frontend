<template>
  <div class="shop-page">
    <div class="page-banner">
      <div class="container">
        <h1 class="page-title">平台商城</h1>
        <p class="page-desc">即将上线，敬请期待</p>
      </div>
    </div>
    <section class="section coming-section">
      <div class="container">
        <div class="coming-card">
          <span class="coming-badge">Coming Soon</span>
          <div class="coming-icon-wrap">
            <span class="coming-icon">🚀</span>
          </div>
          <h2 class="coming-title">正在加紧建设中</h2>
          <p class="coming-text">
            我们的平台商城正在全力开发中，将为您带来全新的电商服务体验。
          </p>
          <p class="coming-sub-text">预计上线后将开通以下平台服务</p>
          <div class="coming-platforms">
            <span v-for="p in platforms" :key="p" class="coming-platform-tag">{{ p }}</span>
          </div>
          <div class="coming-actions">
            <router-link to="/" class="btn btn-primary">返回首页</router-link>
            <router-link to="/contact" class="btn btn-outline">提前咨询</router-link>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const platforms = ['拼多多', '京东', '天猫', '抖音电商', '跨境电商']
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
  left: -20%;
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

.coming-section {
  display: flex;
  align-items: center;
  min-height: 50vh;
}

.coming-card {
  max-width: 500px;
  margin: 0 auto;
  padding: 48px 40px;
  background: var(--white);
  border: 1px solid var(--border);
  border-radius: 16px;
  text-align: center;
  box-shadow: var(--shadow-lg);
}

.coming-badge {
  display: inline-block;
  padding: 4px 14px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 600;
  color: var(--white);
  background: var(--primary-gradient);
  margin-bottom: 20px;
}

.coming-icon-wrap {
  width: 80px;
  height: 80px;
  background: var(--primary-light);
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 20px;
}

.coming-icon {
  font-size: 40px;
}

.coming-title {
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 12px;
  color: var(--text);
}

.coming-text {
  font-size: 15px;
  color: var(--text-secondary);
  line-height: 1.7;
  margin-bottom: 8px;
}

.coming-sub-text {
  font-size: 14px;
  color: #94a3b8;
  margin-bottom: 20px;
}

.coming-platforms {
  display: flex;
  justify-content: center;
  gap: 10px;
  flex-wrap: wrap;
  margin-bottom: 32px;
}

.coming-platform-tag {
  padding: 4px 14px;
  border: 1px solid var(--border);
  border-radius: 6px;
  font-size: 13px;
  color: var(--text-secondary);
  background: var(--bg-light);
}

.coming-actions {
  display: flex;
  gap: 12px;
  justify-content: center;
}

.coming-actions .btn-outline {
  color: var(--primary);
  border-color: var(--primary);
}

.coming-actions .btn-outline:hover {
  background: var(--primary);
  color: var(--white);
}
</style>
