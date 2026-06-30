<template>
  <section class="hero">
    <div class="hero-bg-grid"></div>
    <div class="hero-glow hero-glow-1"></div>
    <div class="hero-glow hero-glow-2"></div>
    <div class="hero-float-circle hero-float-1"></div>
    <div class="hero-float-circle hero-float-2"></div>
    <div class="hero-float-circle hero-float-3"></div>
    <div class="container hero-content">
      <div class="hero-badge">趣电电子商务 · QD E-Commerce</div>
      <h1 class="hero-title">
        <span class="hero-gradient-text">让美好生活</span><br />
        <span>触手可及</span>
      </h1>
      <div class="mission-items">
        <div class="mission-row">
          <span class="mission-label label-consumer">消费者</span>
          <span class="mission-text">给消费者提供优质的产品及服务，让美好生活触手可及</span>
        </div>
        <div class="mission-row">
          <span class="mission-label label-client">客户</span>
          <span class="mission-text">助力商业成功，发现更多可能</span>
        </div>
        <div class="mission-row">
          <span class="mission-label label-employee">员工</span>
          <span class="mission-text">让员工能够快乐、体面地生活</span>
        </div>
      </div>
      <div class="hero-actions">
        <router-link to="/about" class="btn btn-primary">了解我们</router-link>
        <router-link to="/contact" class="btn btn-outline">合作咨询</router-link>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  min-height: 66vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(160deg, #0b1020 0%, #131b30 40%, #1a1f3a 100%);
  position: relative;
  overflow: hidden;
}

.hero-bg-grid {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(255, 255, 255, 0.04) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.04) 1px, transparent 1px);
  background-size: 60px 60px;
  z-index: 1;
}

.hero-glow {
  position: absolute;
  border-radius: 50%;
  filter: blur(100px);
  pointer-events: none;
  z-index: 1;
}

.hero-glow-1 {
  width: 500px;
  height: 500px;
  top: -15%;
  left: -8%;
  background: radial-gradient(circle, rgba(225, 29, 72, 0.18) 0%, transparent 70%);
}

.hero-glow-2 {
  width: 400px;
  height: 400px;
  bottom: -20%;
  right: -8%;
  background: radial-gradient(circle, rgba(249, 115, 22, 0.12) 0%, transparent 70%);
}

.hero-float-circle {
  position: absolute;
  border-radius: 50%;
  border: 1px solid rgba(225, 29, 72, 0.12);
  pointer-events: none;
  z-index: 1;
  animation: float 8s ease-in-out infinite;
}

.hero-float-1 {
  width: 180px;
  height: 180px;
  top: 18%;
  right: 12%;
  animation-delay: 0s;
}

.hero-float-2 {
  width: 100px;
  height: 100px;
  top: 55%;
  right: 22%;
  animation-delay: 2s;
  border-color: rgba(249, 115, 22, 0.1);
}

.hero-float-3 {
  width: 60px;
  height: 60px;
  top: 30%;
  left: 8%;
  animation-delay: 4s;
}

@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-16px); }
}

.hero-content {
  position: relative;
  z-index: 2;
  text-align: center;
  padding: 80px 0 60px;
}

.hero-badge {
  display: inline-block;
  padding: 6px 16px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  font-size: 13px;
  color: rgba(255, 255, 255, 0.5);
  margin-bottom: 20px;
  letter-spacing: 0.5px;
}

.hero-title {
  font-size: 56px;
  font-weight: 800;
  line-height: 1.15;
  color: var(--white);
  margin-bottom: 28px;
}

.hero-gradient-text {
  background: linear-gradient(135deg, #e11d48 0%, #f97316 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* ===== 使命区 ===== */
.mission-items {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  margin-bottom: 32px;
}

.mission-row {
  display: flex;
  align-items: baseline;
  gap: 0;
  line-height: 1.6;
}

.mission-label {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 2px 10px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 700;
  margin-right: 12px;
  flex-shrink: 0;
}

.label-consumer {
  background: rgba(225, 29, 72, 0.15);
  color: #e11d48;
}

.label-client {
  background: rgba(249, 115, 22, 0.15);
  color: #f97316;
}

.label-employee {
  background: rgba(59, 130, 246, 0.15);
  color: #60a5fa;
}

.mission-text {
  font-size: 15px;
  color: rgba(255, 255, 255, 0.6);
  font-weight: 400;
  letter-spacing: 0.3px;
}

.hero-actions {
  display: flex;
  gap: 16px;
  justify-content: center;
}

.btn-primary {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: var(--primary-gradient);
  box-shadow: 0 4px 20px rgba(225, 29, 72, 0.3);
  padding: 12px 32px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  border: none;
  transition: all 0.2s;
  color: #fff;
  text-decoration: none;
}

.btn-primary:hover {
  box-shadow: 0 6px 28px rgba(225, 29, 72, 0.45);
}

.btn-outline {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  color: #fff;
  border: 2px solid rgba(255, 255, 255, 0.2);
  padding: 12px 32px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
  text-decoration: none;
}

.btn-outline:hover {
  border-color: var(--primary);
  color: var(--primary);
  background: rgba(225, 29, 72, 0.08);
}

@media (max-width: 768px) {
  .hero {
    min-height: 70vh;
  }
  .hero-title {
    font-size: 36px;
  }
  .hero-float-1 {
    width: 120px;
    height: 120px;
  }
  .hero-float-2 {
    width: 80px;
    height: 80px;
  }
  .hero-content {
    padding: 60px 0 40px;
  }
  .mission-row {
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 4px;
  }
  .mission-label {
    margin-right: 0;
  }
  .mission-text {
    font-size: 14px;
  }
}
</style>
