<template>
  <div class="admin-layout">
    <aside class="admin-sidebar">
      <div class="sidebar-header">
        <div class="sidebar-logo-box">趣</div>
        <span class="sidebar-logo-text">趣电管理</span>
      </div>
      <nav class="sidebar-nav">
        <router-link to="/admin" class="nav-item" exact-active-class="active">
          📊 总览
        </router-link>
        <router-link to="/admin/timeline" class="nav-item" active-class="active">
          📅 发展历程
        </router-link>
        <router-link to="/admin/org" class="nav-item" active-class="active">
          🏢 组织架构
        </router-link>
        <router-link to="/admin/culture" class="nav-item" active-class="active">
          🎯 企业文化
        </router-link>
        <router-link to="/admin/notices" class="nav-item" active-class="active">
          📋 公告管理
        </router-link>
      </nav>
      <div class="sidebar-footer">
        <a href="#/" class="nav-item">← 返回前台</a>
        <button class="nav-item logout-btn" @click="handleLogout">退出登录</button>
      </div>
    </aside>
    <main class="admin-main">
      <router-view />
    </main>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

function handleLogout() {
  localStorage.removeItem('adminToken')
  router.push('/admin/login')
}
</script>

<style scoped>
.admin-layout {
  display: flex;
  min-height: 100vh;
  background: var(--bg-light);
}

.admin-sidebar {
  width: 220px;
  background: linear-gradient(180deg, #431b06, #2d1104);
  color: var(--white);
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
}

.sidebar-header {
  padding: 20px;
  display: flex;
  align-items: center;
  gap: 10px;
  border-bottom: 1px solid #1e293b;
}

.sidebar-logo-box {
  width: 28px;
  height: 28px;
  background: var(--primary);
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: 800;
  color: var(--white);
}

.sidebar-logo-text {
  font-size: 16px;
  font-weight: 700;
  color: var(--white);
}

.sidebar-nav {
  flex: 1;
  padding: 12px;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.nav-item {
  display: block;
  padding: 10px 16px;
  border-radius: 8px;
  font-size: 14px;
  color: #cbd5e1;
  text-decoration: none;
  transition: all 0.2s;
  cursor: pointer;
  border: none;
  background: none;
  width: 100%;
  text-align: left;
}

.nav-item:hover {
  background: rgba(255, 255, 255, 0.1);
  color: var(--white);
}

.nav-item.active {
  background: var(--primary);
  color: var(--white);
}

.sidebar-footer {
  padding: 12px;
  border-top: 1px solid #1e293b;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.logout-btn {
  color: #f87171;
}

.logout-btn:hover {
  background: rgba(248, 113, 113, 0.1);
}

.admin-main {
  flex: 1;
  padding: 24px;
  overflow-y: auto;
}
</style>
