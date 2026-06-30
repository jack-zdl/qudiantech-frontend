<template>
  <div class="open-platform-page">
    <div class="page-banner">
      <div class="container">
        <h1 class="page-title">开放平台</h1>
        <p class="page-desc">业财一账通 · 正在建设中</p>
      </div>
    </div>

    <section class="section build-section">
      <div class="container">
        <div class="build-card">
          <!-- 顶部图标 -->
          <div class="build-icon-wrap">
            <span class="build-icon">🏗️</span>
          </div>

          <div class="build-badge">建设中</div>

          <h2 class="build-title">业财一账通</h2>
          <p class="build-subtitle">Business & Finance One Account</p>

          <p class="build-desc">
            业财一账通是趣电开放平台的核心系统之一，致力于打通业务流与资金流，
            实现业务数据与财务数据的无缝对接，为企业提供高效、透明、智能的业财一体化管理解决方案。
          </p>

          <!-- 功能模块预览 -->
          <div class="feature-preview">
            <div class="feature-item">
              <span class="feature-icon">📋</span>
              <span>业务订单管理</span>
            </div>
            <div class="feature-item">
              <span class="feature-icon">💰</span>
              <span>财务核算中心</span>
            </div>
            <div class="feature-item">
              <span class="feature-icon">📊</span>
              <span>经营数据看板</span>
            </div>
            <div class="feature-item">
              <span class="feature-icon">🔄</span>
              <span>业财自动对账</span>
            </div>
            <div class="feature-item">
              <span class="feature-icon">🧾</span>
              <span>发票税务管理</span>
            </div>
            <div class="feature-item">
              <span class="feature-icon">📈</span>
              <span>多维度报表</span>
            </div>
          </div>

          <!-- 进度条 -->
          <div class="build-progress">
            <div class="progress-label">
              <span>开发进度</span>
              <span class="progress-pct">35%</span>
            </div>
            <div class="progress-bar">
              <div class="progress-fill"></div>
            </div>
          </div>

          <p class="build-expected">预计上线时间：2026 年 Q4</p>

          <div class="build-actions">
            <router-link to="/" class="btn btn-primary">返回首页</router-link>
            <router-link to="/contact" class="btn btn-outline">提前咨询</router-link>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.page-banner {
  padding: 100px 0 60px;
  background: linear-gradient(135deg, #2d1104 0%, #3d1706 100%);
  text-align: center;
  position: relative;
  overflow: hidden;
}

.page-banner::before {
  content: '';
  position: absolute;
  top: -30%;
  left: -10%;
  width: 300px;
  height: 300px;
  background: radial-gradient(circle, rgba(234, 88, 12, 0.08) 0%, transparent 70%);
  border-radius: 50%;
}

.page-banner::after {
  content: '';
  position: absolute;
  bottom: -40%;
  right: -15%;
  width: 350px;
  height: 350px;
  background: radial-gradient(circle, rgba(249, 115, 22, 0.06) 0%, transparent 70%);
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

/* 建设中卡片 */
.build-section {
  display: flex;
  align-items: center;
  min-height: 60vh;
}

.build-card {
  max-width: 580px;
  margin: 0 auto;
  padding: 48px 44px;
  background: var(--white);
  border: 1px solid var(--border);
  border-radius: 16px;
  text-align: center;
  box-shadow: var(--shadow-lg);
}

.build-icon-wrap {
  width: 72px;
  height: 72px;
  background: #fef3c7;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 16px;
}

.build-icon {
  font-size: 36px;
}

.build-badge {
  display: inline-block;
  padding: 4px 14px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 600;
  color: var(--white);
  background: var(--primary-gradient);
  margin-bottom: 16px;
  letter-spacing: 1px;
}

.build-title {
  font-size: 28px;
  font-weight: 700;
  color: var(--text);
  margin-bottom: 4px;
}

.build-subtitle {
  font-size: 14px;
  color: var(--text-secondary);
  margin-bottom: 20px;
  font-weight: 400;
}

.build-desc {
  font-size: 14px;
  color: var(--text-secondary);
  line-height: 1.8;
  margin-bottom: 28px;
}

/* 功能预览 */
.feature-preview {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  margin-bottom: 28px;
  padding: 20px;
  background: var(--bg-light);
  border: 1px solid var(--border);
  border-radius: 10px;
}

.feature-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  padding: 12px 8px;
  font-size: 12px;
  color: var(--text-secondary);
  font-weight: 500;
}

.feature-icon {
  font-size: 24px;
}

/* 进度条 */
.build-progress {
  max-width: 300px;
  margin: 0 auto 24px;
}

.progress-label {
  display: flex;
  justify-content: space-between;
  font-size: 13px;
  color: var(--text-secondary);
  margin-bottom: 8px;
}

.progress-pct {
  font-weight: 700;
  color: var(--primary);
}

.progress-bar {
  width: 100%;
  height: 6px;
  background: var(--border);
  border-radius: 3px;
  overflow: hidden;
}

.progress-fill {
  width: 35%;
  height: 100%;
  background: var(--primary-gradient);
  border-radius: 3px;
  animation: progressPulse 2s ease-in-out infinite;
}

@keyframes progressPulse {
  0%, 100% { opacity: 0.8; }
  50% { opacity: 1; }
}

.build-expected {
  font-size: 13px;
  color: #94a3b8;
  margin-bottom: 32px;
}

.build-actions {
  display: flex;
  gap: 12px;
  justify-content: center;
}

.build-actions .btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 12px 32px;
  border-radius: 8px;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
  text-decoration: none;
}

.build-actions .btn-primary {
  background: var(--primary-gradient);
  color: var(--white);
  border: none;
}

.build-actions .btn-primary:hover {
  box-shadow: 0 6px 20px rgba(234, 88, 12, 0.3);
}

.build-actions .btn-outline {
  background: transparent;
  color: var(--primary);
  border: 2px solid var(--primary);
}

.build-actions .btn-outline:hover {
  background: var(--primary);
  color: var(--white);
}

@media (max-width: 768px) {
  .build-card {
    padding: 32px 24px;
  }
  .feature-preview {
    grid-template-columns: repeat(2, 1fr);
  }
  .build-title {
    font-size: 24px;
  }
}
</style>
