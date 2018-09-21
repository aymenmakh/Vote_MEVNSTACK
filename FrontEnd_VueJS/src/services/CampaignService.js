import Api from '@/services/Api'

export default {
  getCampaign () {
    return Api().get('campaigns')
  },
  addCampaign (params) {
    return Api().post('campaigns/addCampaign', params)
  },
  updateCampaign (params) {
    return Api().put('campaigns/' + params.id, params)
  },
  addFile (params) {
    return Api().post('campaigns/upload', params)
  },
  getOneCampaign (params) {
    return Api().get('campaigns/getcampaign/' + params.id)
  },
  deleteCampaign (params) {
    return Api().delete('campaigns/delete/' + params.id)
  }
}
