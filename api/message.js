import api from '@/utils/request'

export function getList(data) {
  return api({
    url: '/message/list',
    method: 'POST',
    data
  })
}

export function getDetail(id) {
  return api.get('/message/'+id) 
}

// get thread from reply post id
export function getThread(id) {
  return api.get('/message/read/'+id) 
}

export function toggleStar(id) {
  return api.get('/message/star/'+id) 
}


export function sendMsg(data) {
  return api({
    url: '/message/store',
    method: 'POST',
    data
  })
}

export function del(ids) {
  return api({
    url: '/message',
    method: 'DELETE',
    data:{ids}
  })
}

// Group
export function getGroup() {
  return api.get('/messagegroup')  
}

export function setGroup(data) {
  return api({
    url: '/messagegroup/user',
    method: 'POST',
    data
  })
}