import request from './request'

export function getNotices(tag?: string) {
  return request.get('/api/notices', { params: { tag } })
}
