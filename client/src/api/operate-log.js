import request from '@/utils/request'

export function getAllServerNode(data) {
  return request({
    url: '/operate_log/search',
    method: 'post',
    data
  })
}
