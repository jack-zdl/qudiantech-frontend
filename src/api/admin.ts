import request from './request'

export function login(token: string) {
  return request.post('/api/admin/login', { token })
}

// Timeline
export function addTimeline(data: any) {
  return request.post('/api/admin/timeline', data)
}
export function updateTimeline(id: number, data: any) {
  return request.put(`/api/admin/timeline/${id}`, data)
}
export function deleteTimeline(id: number) {
  return request.delete(`/api/admin/timeline/${id}`)
}

// Org
export function addOrg(data: any) {
  return request.post('/api/admin/org', data)
}
export function updateOrg(id: number, data: any) {
  return request.put(`/api/admin/org/${id}`, data)
}
export function deleteOrg(id: number) {
  return request.delete(`/api/admin/org/${id}`)
}

// Culture
export function addCulture(data: any) {
  return request.post('/api/admin/culture', data)
}
export function updateCulture(id: number, data: any) {
  return request.put(`/api/admin/culture/${id}`, data)
}
export function deleteCulture(id: number) {
  return request.delete(`/api/admin/culture/${id}`)
}

// Notice
export function addNotice(data: any) {
  return request.post('/api/admin/notices', data)
}
export function updateNotice(id: number, data: any) {
  return request.put(`/api/admin/notices/${id}`, data)
}
export function deleteNotice(id: number) {
  return request.delete(`/api/admin/notices/${id}`)
}
