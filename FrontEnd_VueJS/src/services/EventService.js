import Api from '@/services/Api'

export default {
  addEvent (params) {
    return Api().post('events/addEvent', params)
  },
  getEventforCampaign (params) {
    return Api().get('events/gete/' + params.id)
  },
  getOneEvent (params) {
    return Api().get('events/getOneEvent/' + params.id)
  }
}
