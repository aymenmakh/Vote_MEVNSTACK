import Api from '@/services/Api'

export default {
  fetchEntreprises () {
    return Api().get('entreprises')
  },

  addEntreprise (params) {
    return Api().post('entreprises', params)
  },
  addFile (params) {
    return Api().post('entreprises/upload', params)
  },
  addImage (params) {
    return Api().post('entreprises/uploadimage', params)
  },
  updateEntreprise (params) {
    return Api().put('entreprises/' + params.id, params)
  },
  getEntreprise (params) {
    return Api().get('entreprises/' + params.id)
  },
  getEntreprise1 (params) {
    return Api().get('entreprises/new/' + params.id)
  },
  deleteEntreprise (id) {
    return Api().delete('entreprises/' + id)
  }
}
