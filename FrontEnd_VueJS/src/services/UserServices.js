import Api from '@/services/Api';

export default {
  verify (params) {
    return Api().post('user/verify', params)
  },
  addUser (params) {
    return Api().post('user/authenticate', params)
  },
  tel (params) {
    return Api().post('user/tel', params)
  },
  photo () {
    return Api().post('user/photo')
  },

  put(params) {
    return Api().put('user/update/' + params.cin, params)
  },

  getall() {
    return Api().get('user/all')
  },

  delete(cin) {
    return Api().delete('user/delete/' + cin)
  },

  addFile(params) {
    return Api().post('user/photo',params)
  },

  getPopele(cin) {
    return Api().get('user/getPeople/' + cin)
  },

  addElection(params) {
    return Api().post('user/election',params)
  },

  getElection() {
    return Api().get('user/election')
  }


}
