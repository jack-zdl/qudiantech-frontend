import request from './request'

export function getTimeline() {
  return request.get('/api/about/timeline')
}

export function getOrg() {
  return request.get('/api/about/org')
}

export function getCulture() {
  return request.get('/api/about/culture')
}
