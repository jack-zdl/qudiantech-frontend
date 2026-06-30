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
      <p class="hero-subtitle">
        一站式电商运营与数字化服务解决方案<br />
        助力企业快速开拓市场
      </p>
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
  margin-bottom: 16px;
}

.hero-gradient-text {
  background: linear-gradient(135deg, #e11d48 0%, #f97316 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-subtitle {
  font-size: 17px;
  color: rgba(255, 255, 255, 0.45);
  max-width: 480px;
  margin: 0 auto 32px;
  line-height: 1.8;
}

.hero-actions {
  display: flex;
  gap: 16px;
  justify-content: center;
}

.hero-actions .btn-primary {
  background: var(--primary-gradient);
  box-shadow: 0 4px 20px rgba(225, 29, 72, 0.3);
}

.hero-actions .btn-primary:hover {
  box-shadow: 0 6px 28px rgba(225, 29, 72, 0.45);
}

.hero-actions .btn-outline {
  border-color: rgba(255, 255, 255, 0.2);
}

.hero-actions .btn-outline:hover {
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
}
</style>
