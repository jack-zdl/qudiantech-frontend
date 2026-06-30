<template>
  <div class="login-page">
    <div class="login-card">
      <div class="login-logo-box">趣</div>
      <h2>管理后台</h2>
      <p class="login-desc">请输入管理员 Token</p>
      <form @submit.prevent="handleLogin">
        <input v-model="token" type="password" placeholder="请输入 Token" class="login-input" />
        <p v-if="error" class="login-error">{{ error }}</p>
        <button type="submit" class="btn btn-primary login-btn" :disabled="submitting">
          {{ submitting ? '验证中...' : '登录' }}
        </button>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { login } from '@/api/admin'

const router = useRouter()
const token = ref('')
const error = ref('')
const submitting = ref(false)

async function handleLogin() {
  if (!token.value) {
    error.value = '请输入 Token'
    return
  }
  submitting.value = true
  error.value = ''
  try {
    const res: any = await login(token.value)
    if (res.code === 200) {
      localStorage.setItem('adminToken', token.value)
      router.push('/admin')
    } else {
      error.value = res.message || '登录失败'
    }
  } catch (e: any) {
    error.value = e.response?.data?.message || '登录失败，请检查 Token'
  } finally {
    submitting.value = false
  }
}
</script>

<style scoped>
.login-page {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--bg-light);
}

.login-card {
  width: 360px;
  padding: 40px;
  background: var(--white);
  border-radius: 12px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.06);
  text-align: center;
}

.login-logo-box {
  width: 48px;
  height: 48px;
  background: var(--primary);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  font-weight: 800;
  color: var(--white);
  margin: 0 auto 20px;
}

.login-card h2 {
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 8px;
}

.login-desc {
  font-size: 14px;
  color: var(--text-secondary);
  margin-bottom: 24px;
}

.login-input {
  width: 100%;
  padding: 12px 16px;
  border: 1px solid var(--border);
  border-radius: 8px;
  font-size: 15px;
  outline: none;
  transition: border-color 0.2s;
  margin-bottom: 16px;
}

.login-input:focus {
  border-color: var(--primary);
}

.login-error {
  color: var(--danger);
  font-size: 13px;
  margin-bottom: 12px;
}

.login-btn {
  width: 100%;
}
</style>
