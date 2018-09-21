import Api from '@/services/Api'

export default {
  fetchMembre (params) {
    return Api().get('entreprises/' + params.id + '/membres/')
  },
  thisuser (params) {
    return Api().post('entreprises/thisuser', params)
  },
  login (params) {
    return Api().post('entreprises/login', params)
  },
  getUser (params) {
    return Api().get('entreprises/getUser/' + params.id)
  },
  updateUserPhoto (params) {
    return Api().put('entreprises/user/' + params.id, params)
  }
}
