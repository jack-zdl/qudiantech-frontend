import { createRouter, createWebHashHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  { path: '/', name: 'Home', component: () => import('@/views/HomeView.vue') },
  { path: '/about', name: 'About', component: () => import('@/views/AboutView.vue') },
  { path: '/shop', name: 'Shop', component: () => import('@/views/ShopView.vue') },
  { path: '/contact', name: 'Contact', component: () => import('@/views/ContactView.vue') },
  { path: '/open-platform', name: 'OpenPlatform', component: () => import('@/views/OpenPlatformView.vue') },
  { path: '/notice', name: 'Notice', component: () => import('@/views/NoticeView.vue') },
  { path: '/admin/login', name: 'AdminLogin', component: () => import('@/views/admin/LoginView.vue') },
  {
    path: '/admin',
    component: () => import('@/views/admin/AdminLayout.vue'),
    meta: { requiresAuth: true },
    children: [
      { path: '', name: 'AdminDashboard', component: () => import('@/views/admin/DashboardView.vue') },
      { path: 'timeline', name: 'TimelineMgr', component: () => import('@/views/admin/TimelineMgr.vue') },
      { path: 'org', name: 'OrgMgr', component: () => import('@/views/admin/OrgMgr.vue') },
      { path: 'culture', name: 'CultureMgr', component: () => import('@/views/admin/CultureMgr.vue') },
      { path: 'notices', name: 'NoticeMgr', component: () => import('@/views/admin/NoticeMgr.vue') },
    ],
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

router.beforeEach((to, _from, next) => {
  if (to.meta.requiresAuth) {
    const token = localStorage.getItem('adminToken')
    if (!token) {
      next('/admin/login')
      return
    }
  }
  next()
})

export default router
