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
                                            <label for="descritpion" class="col-sm-2 control-label">Description: </label>
                                            <div class="col-md-6 col-sm-10">
                                                <textarea class="form-control" id="description" placeholder="Enter your description " v-model="description"/>
                                            </div>
                                        </div>

                                        <div class="form-group">
                                            <label for="headquarters" class="col-sm-2 control-label">Headquarters: </label>
                                            <div class="col-md-6 col-sm-10">
                                                <input ref="autocomplete" 
        placeholder="enter your headquarters" 
        class="form-control"
        onfocus="value = ''" 
        type="text" v-model="headquarters"/>
                                            </div>
                                        </div>


                                <div class="form-group">
                                        <form enctype="multipart/form-data" name="fileUploadForm" v-on:change.prevent="uplaodFile">
                                        <input type="file" name="myFile" @change="onFileSelected($event)"/>

                                    </form>
                                        </div>
                                        <div>
          <button class="btn btn-danger btn-lg btn-submit-donation" @click="addCampaign">Add</button>
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
import CampaignService from '@/services/CampaignService'
export default {

  name: 'AddCampaign',
  data () {
    return {

              
      headquarters: '',
      slogan: '',
      description: '',
      status: '',
      candidate: '',
      photo: '',
      startDate: '',
      endDate: ''
    }
  },
      mounted() {
         this.autocomplete = new google.maps.places.Autocomplete(
      (this.$refs.autocomplete),
      {types: ['geocode']}
    ); 
       this.autocomplete.addListener('place_changed', () => {
  let place = this.autocomplete.getPlace();
  let ac = place.address_components;
  let lat = place.geometry.location.lat();
  let lon = place.geometry.location.lng();
  let city = ac[0]["short_name"];

  console.log(`The user picked ${city} with the coordinates ${lat}, ${lon}`);
});

        },
  methods: {
      
      uplaodFile () {
      var form = document.forms.namedItem('fileUploadForm')
      var formData = new FormData(form)
      CampaignService.addFile(formData)
    },

    
    // addValueToAutoComplete: function ($event) {
   
    //     this.headquarters =   this.$refs.autocomplete
  
    // },
    onFileSelected (event) {
      console.log(event)
      this.photo = event.target.files[0]
    },
    async addCampaign () {

      const resp = await CampaignService.addCampaign({
        slogan: this.slogan,
        description: this.description,
        headquarters: this.headquarters,
        status: this.status,
        photo: this.photo.name,
        candidate: this.candidate,
        startDate: this.startDate,
        endDate: this.endDate
      })
      console.log(resp.data)
      this.$router.push({ name:"campaignHome" })
    }
    
  }
}
</script>