import Api from '@/services/Api'

export default {
  fetchVote (params) {
    return Api().get('entreprises/' + params.id + '/privatevotes/')
  },

  addVote (params) {
    return Api().post('entreprises/privatevote', params)
  },
  getVote (params) {
    return Api().post('entreprises/getprivatevote', params)
  }

}
