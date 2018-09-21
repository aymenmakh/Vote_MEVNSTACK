<template>
<section class="section-content-block">
       
            <div class="container">
           
                    <div class="row">
    
                        <div class="col-sm-12">
                            
                            <div class="donation-form-wrapper">

                                <div name="donation_form" class="donation_form " id="donation_form"> 



<div class="donation-form-info-2">
                                        <h4>Campaign Information</h4>
                                        <div class="form-group">
                                            <label for="slogan" class="col-sm-2 control-label">Slogan: </label>
                                            <div class="col-md-6 col-sm-10">
                                                <input type="text" class="form-control" id="slogan" placeholder= "Enter your slogan" v-model="slogan"/>
                                            </div>
                                        </div>

                                        <div class="form-group">
                                            <label for="candidate" class="col-sm-2 control-label">Candidate: </label>
                                            <div class="col-md-6 col-sm-10">
                                                <input type="text" class="form-control" id="candidate" placeholder="Enter your candidate " v-model="candidate"/>
                                            </div>
                                        </div>
                                        
                                        
                                        <div class="form-group">
                                            <label for="headquarters" class="col-sm-2 control-label">Headquarters: </label>
                                            <div class="col-md-6 col-sm-10">
                                                <input type="text" class="form-control" id="headquarters" placeholder="Enter your headquarters " v-model="headquarters"/>
                                            </div>
                                        </div>
                                        
                                        <div class="form-group">
                                            <label for="startDate" class="col-sm-2 control-label">Start Date: </label>
                                            <div class="col-md-6 col-sm-10">
                                                <input type="date" class="form-control" id="startDate" placeholder="Enter your start date " v-model="startDate"/>
                                            </div>
                                        </div>

                                        <div class="form-group">
                                            <label for="endDate" class="col-sm-2 control-label">End Date: </label>
                                            <div class="col-md-6 col-sm-10">
                                                <input type="date" class="form-control" id="endDate" placeholder="Enter your end date " v-model="endDate"/>
                                            </div>
                                        </div>

                                        <div class="form-group">
                                            <label for="description" class="col-sm-2 control-label">Description: </label>
                                            <div class="col-md-6 col-sm-10">
                                                <input type="textarea" class="form-control" id="description" placeholder="Enter your description " v-model="description"/>
                                            </div>
                                        </div>

                                        <div>
          <button class="btn btn-danger btn-lg btn-submit-donation" @click="updateCampaign">Upadate</button>
        </div>

                                       

                                    </div> <!-- end .donation-form-info-2  -->
                                </div>
                            </div>
                            </div>
                            </div>
                            </div>
</section>

</template>
<script>
import moment from 'moment'
import CampaignService from '@/services/CampaignService'
import Vue from 'vue'
export default {
  name: 'EditCampaign',
  data () {
    return {
      slogan: '',
      description: '',
      headquarters: '',
      photo: '',
      candidate: '',
      startDate: '',
      endDate: ''
    }
  },
  mounted () {
    this.getOneCampaign()
    Vue.filter('formatDate', function (value) {
      if (value) {
        return moment(String(value)).format('MM/DD/YYYY')
      }
    })
  },
  methods: {
      uplaodFile () {
      var form = document.forms.namedItem('fileUploadForm')
      var formData = new FormData(form)
      CampaignService.addFile(formData)
    },
    onFileSelected (event) {
      console.log(event)
      this.photo = event.target.files[0]
    },
    async getOneCampaign () {
      const response = await CampaignService.getOneCampaign({
        id: this.$route.params.id
      })
      this.slogan = response.data.slogan
      this.description = response.data.description
      this.headquarters = response.data.headquarters
      this.candidate = response.data.candidate
      this.photo = response.data.photo
      this.startDate = response.data.startDate
      this.endDate = response.data.endDate 
    },
    async updateCampaign () {
      await CampaignService.updateCampaign({
        id: this.$route.params.id,
        slogan: this.slogan,
        description: this.description,
        headquarters: this.headquarters,
        status: this.status,
        candidate: this.candidate,
        photo: this.photo,
        startDate: this.startDate,
        endDate: this.endDate
      })
      this.$router.push({ name: 'campaignHome' })
    }
  }
}
</script>
