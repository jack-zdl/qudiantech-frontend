<template>
  <div class="mgr-page">
    <div class="mgr-header">
      <h2>企业文化管理</h2>
      <button class="btn btn-primary" @click="openAdd">新增</button>
    </div>

    <table class="mgr-table" v-if="!loading">
      <thead>
        <tr>
          <th>图标</th>
          <th>标题</th>
          <th>描述</th>
          <th>排序</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in list" :key="item.id">
          <td>{{ item.icon }}</td>
          <td>{{ item.title }}</td>
          <td class="desc-cell">{{ item.description }}</td>
          <td>{{ item.sortOrder }}</td>
          <td class="action-cell">
            <button class="btn-sm btn-edit" @click="openEdit(item)">编辑</button>
            <button class="btn-sm btn-delete" @click="handleDelete(item.id)">删除</button>
          </td>
        </tr>
      </tbody>
    </table>
    <p v-else class="loading-text">加载中...</p>

    <div v-if="showDialog" class="dialog-overlay" @click.self="closeDialog">
      <div class="dialog">
        <h3>{{ editing ? '编辑' : '新增' }}企业文化</h3>
        <form @submit.prevent="handleSubmit">
          <div class="form-group">
            <label>图标</label>
            <input v-model="form.icon" class="form-input" placeholder="如 🎯" />
          </div>
          <div class="form-group">
            <label>标题</label>
            <input v-model="form.title" class="form-input" required />
          </div>
          <div class="form-group">
            <label>描述</label>
            <textarea v-model="form.description" class="form-input" rows="3"></textarea>
          </div>
          <div class="form-group">
            <label>排序</label>
            <input v-model.number="form.sortOrder" type="number" class="form-input" />
          </div>
          <div class="dialog-actions">
            <button type="button" class="btn btn-outline" @click="closeDialog">取消</button>
            <button type="submit" class="btn btn-primary">{{ editing ? '保存' : '新增' }}</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { getCulture } from '@/api/about'
import { addCulture, updateCulture, deleteCulture } from '@/api/admin'

const list = ref<any[]>([])
const loading = ref(true)
const showDialog = ref(false)
const editing = ref(false)
const form = ref<any>({ icon: '', title: '', description: '', sortOrder: 0 })

async function loadData() {
  loading.value = true
  try {
    const res: any = await getCulture()
    list.value = res.data || []
  } catch (e) {
    console.error(e)
  } finally {
    loading.value = false
  }
}

function openAdd() {
  editing.value = false
  form.value = { icon: '', title: '', description: '', sortOrder: 0 }
  showDialog.value = true
}

function openEdit(item: any) {
  editing.value = true
  form.value = { ...item }
  showDialog.value = true
}

function closeDialog() { showDialog.value = false }

async function handleSubmit() {
  try {
    if (editing.value) await updateCulture(form.value.id, form.value)
    else await addCulture(form.value)
    closeDialog()
    await loadData()
  } catch (e) { console.error('操作失败', e) }
}

async function handleDelete(id: number) {
  if (!confirm('确定删除？')) return
  try { await deleteCulture(id); await loadData() }
  catch (e) { console.error('删除失败', e) }
}

onMounted(loadData)
</script>

<style scoped>
.mgr-page { max-width: 1000px; }
.mgr-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px; }
.mgr-header h2 { font-size: 20px; font-weight: 700; }
.mgr-table { width: 100%; border-collapse: collapse; background: var(--white); border-radius: 10px; overflow: hidden; border: 1px solid var(--border); }
.mgr-table th { background: var(--bg-light); padding: 12px 16px; text-align: left; font-size: 13px; font-weight: 600; color: var(--text-secondary); border-bottom: 1px solid var(--border); }
.mgr-table td { padding: 12px 16px; font-size: 14px; border-bottom: 1px solid var(--border); }
.desc-cell { max-width: 300px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.action-cell { display: flex; gap: 8px; }
.btn-sm { padding: 4px 12px; border-radius: 4px; font-size: 13px; cursor: pointer; border: none; }
.btn-edit { background: #dbeafe; color: #1d4ed8; }
.btn-delete { background: #fee2e2; color: #dc2626; }
.loading-text { text-align: center; padding: 40px; color: var(--text-secondary); }
.dialog-overlay { position: fixed; inset: 0; background: rgba(0,0,0,0.4); display: flex; align-items: center; justify-content: center; z-index: 2000; }
.dialog { background: var(--white); border-radius: 12px; padding: 32px; width: 500px; max-height: 80vh; overflow-y: auto; }
.dialog h3 { font-size: 18px; font-weight: 700; margin-bottom: 20px; }
.form-group { margin-bottom: 16px; }
.form-group label { display: block; font-size: 14px; font-weight: 500; margin-bottom: 6px; }
.form-input { width: 100%; padding: 10px 12px; border: 1px solid var(--border); border-radius: 6px; font-size: 14px; outline: none; }
.form-input:focus { border-color: var(--primary); }
textarea.form-input { resize: vertical; }
.dialog-actions { display: flex; justify-content: flex-end; gap: 12px; margin-top: 20px; }
</style>
