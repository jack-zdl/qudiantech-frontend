<template>
  <header class="topbar">
    <div class="container topbar-inner">
      <router-link to="/" class="logo">
        <div class="logo-box">
          <span class="logo-char">趣</span>
        </div>
        <div class="logo-texts">
          <span class="logo-brand">趣电电子商务</span>
          <span class="logo-tagline">QD E-Commerce</span>
        </div>
      </router-link>
      <nav class="nav">
        <router-link to="/" class="nav-link" exact-active-class="active">首页</router-link>
        <router-link to="/about" class="nav-link" active-class="active">关于我们</router-link>
        <router-link to="/shop" class="nav-link" active-class="active">平台商城</router-link>
        <router-link to="/contact" class="nav-link" active-class="active">联系我们</router-link>
        <router-link to="/notice" class="nav-link" active-class="active">公告</router-link>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.topbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: var(--white);
  border-bottom: 1px solid var(--border);
}

.topbar-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
}

.logo {
  display: flex;
  align-items: center;
  gap: 10px;
  color: var(--text);
  text-decoration: none;
}

.logo-box {
  width: 36px;
  height: 36px;
  background: var(--primary);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.logo-char {
  font-size: 20px;
  font-weight: 800;
  color: var(--white);
}

.logo-texts {
  display: flex;
  flex-direction: column;
}

.logo-brand {
  font-size: 16px;
  font-weight: 700;
  color: var(--text);
  line-height: 1.2;
}

.logo-tagline {
  font-size: 11px;
  color: var(--text-secondary);
  line-height: 1.2;
}

.nav {
  display: flex;
  gap: 32px;
}

.nav-link {
  font-size: 15px;
  font-weight: 500;
  color: var(--text);
  padding: 4px 0;
  position: relative;
  transition: color 0.2s;
}

.nav-link:hover,
.nav-link.active {
  color: var(--primary);
}

.nav-link.active::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  right: 0;
  height: 2px;
  background: var(--primary);
  border-radius: 1px;
}
</style>
