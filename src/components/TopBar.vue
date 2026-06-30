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

        <!-- 开放平台下拉菜单 -->
        <div class="nav-dropdown" @mouseenter="openDropdown = true" @mouseleave="openDropdown = false">
          <span :class="['nav-link dropdown-trigger', { active: isOpenPlatformActive }]">
            开放平台
            <span class="dropdown-arrow">▾</span>
          </span>
          <div class="dropdown-menu" :class="{ show: openDropdown }">
            <router-link to="/open-platform" class="dropdown-item" @click="openDropdown = false">
              <span class="dropdown-icon">📊</span>
              <div class="dropdown-text">
                <span class="dropdown-title">业财一账通</span>
                <span class="dropdown-desc">业务财务一体化管理平台</span>
              </div>
            </router-link>
            <a :href="externalLinks.zentao" target="_blank" rel="noopener noreferrer" class="dropdown-item" @click="openDropdown = false">
              <span class="dropdown-icon">🐧</span>
              <div class="dropdown-text">
                <span class="dropdown-title">禅道</span>
                <span class="dropdown-desc">项目管理与协作平台</span>
              </div>
              <span class="external-icon">↗</span>
            </a>
            <a :href="externalLinks.docs" target="_blank" rel="noopener noreferrer" class="dropdown-item" @click="openDropdown = false">
              <span class="dropdown-icon">📖</span>
              <div class="dropdown-text">
                <span class="dropdown-title">开放文档</span>
                <span class="dropdown-desc">API 文档与开发者指南</span>
              </div>
              <span class="external-icon">↗</span>
            </a>
            <a :href="externalLinks.ai" target="_blank" rel="noopener noreferrer" class="dropdown-item" @click="openDropdown = false">
              <span class="dropdown-icon">🤖</span>
              <div class="dropdown-text">
                <span class="dropdown-title">AI 数字员工</span>
                <span class="dropdown-desc">智能助手与自动化服务</span>
              </div>
              <span class="external-icon">↗</span>
            </a>
          </div>
        </div>

        <router-link to="/contact" class="nav-link" active-class="active">联系我们</router-link>
        <router-link to="/notice" class="nav-link" active-class="active">公告</router-link>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const openDropdown = ref(false)

const externalLinks = {
  zentao: 'http://8.160.167.158:8005',
  docs: 'https://www.yuque.com/jiaotashidi-b59wx/vk9hg2',
  ai: 'http://8.160.167.158:18789',
}

const isOpenPlatformActive = computed(() => {
  return route.path.startsWith('/open-platform')
})
</script>

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
  gap: 28px;
  align-items: center;
}

.nav-link {
  font-size: 15px;
  font-weight: 500;
  color: var(--text);
  padding: 4px 0;
  position: relative;
  transition: color 0.2s;
  cursor: pointer;
  text-decoration: none;
  white-space: nowrap;
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

/* ===== 下拉菜单 ===== */
.nav-dropdown {
  position: relative;
}

.dropdown-trigger {
  display: flex;
  align-items: center;
  gap: 4px;
}

.dropdown-arrow {
  font-size: 10px;
  transition: transform 0.2s;
  line-height: 1;
}

.nav-dropdown:hover .dropdown-arrow {
  transform: rotate(180deg);
}

.dropdown-menu {
  position: absolute;
  top: calc(100% + 8px);
  left: 50%;
  transform: translateX(-50%) translateY(4px);
  min-width: 220px;
  background: var(--white);
  border: 1px solid var(--border);
  border-radius: 10px;
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.1);
  padding: 6px;
  opacity: 0;
  visibility: hidden;
  transition: all 0.2s ease;
  z-index: 100;
}

.dropdown-menu.show,
.nav-dropdown:hover .dropdown-menu {
  opacity: 1;
  visibility: visible;
  transform: translateX(-50%) translateY(0);
}

.dropdown-menu::before {
  content: '';
  position: absolute;
  top: -6px;
  left: 50%;
  transform: translateX(-50%);
  width: 10px;
  height: 10px;
  background: var(--white);
  border-left: 1px solid var(--border);
  border-top: 1px solid var(--border);
  transform: translateX(-50%) rotate(45deg);
}

.dropdown-item {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 12px;
  border-radius: 8px;
  text-decoration: none;
  color: var(--text);
  transition: all 0.15s;
  cursor: pointer;
}

.dropdown-item:hover {
  background: var(--bg-light);
  color: var(--primary);
}

.dropdown-item:not(:last-child) {
  margin-bottom: 2px;
}

.dropdown-icon {
  font-size: 20px;
  flex-shrink: 0;
  width: 28px;
  text-align: center;
}

.dropdown-text {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.dropdown-title {
  font-size: 14px;
  font-weight: 600;
  line-height: 1.3;
}

.dropdown-desc {
  font-size: 11px;
  color: var(--text-secondary);
  line-height: 1.3;
  margin-top: 1px;
}

.external-icon {
  font-size: 12px;
  color: var(--text-secondary);
  flex-shrink: 0;
}

.dropdown-item:hover .external-icon {
  color: var(--primary);
}

@media (max-width: 768px) {
  .nav {
    gap: 16px;
  }
  .nav-link {
    font-size: 13px;
  }
  .dropdown-menu {
    position: fixed;
    top: 60px;
    left: 0;
    right: 0;
    transform: none;
    border-radius: 0;
    border-left: none;
    border-right: none;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.08);
  }
  .dropdown-menu.show,
  .nav-dropdown:hover .dropdown-menu {
    transform: none;
  }
  .dropdown-menu::before {
    display: none;
  }
}
</style>
