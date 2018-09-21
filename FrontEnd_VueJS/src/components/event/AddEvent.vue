<template>

<section class="section-content-block">
       
            <div class="container">
           
                    <div class="row">
    
                        <div class="col-sm-12">
                            
                            <div class="donation-form-wrapper">

                                <div name="donation_form" class="donation_form " id="donation_form"> 



<div class="donation-form-info-2">
                                        <h4>Event Information</h4>
                                        <div class="form-group">
                                            <label for="name" class="col-sm-2 control-label">Name: </label>
                                            <div class="col-md-6 col-sm-10">
                                                <input type="text" class="form-control" id="slogan" placeholder= "Enter event name" v-model="name"/>
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
                                                <input type="datetime-local" class="form-control" id="startDate" placeholder="Enter your start date " v-model="startDate"/>
                                            </div>
                                        </div>

                                        <div class="form-group">
                                            <label for="endDate" class="col-sm-2 control-label">End Date: </label>
                                            <div class="col-md-6 col-sm-10">
                                                <input type="datetime-local" class="form-control" id="endDate" placeholder="Enter your end date " v-model="endDate"/>
                                            </div>
                                        </div>


                                        
                                        <div class="form-group">
                                            <label for="type" class="col-sm-2 control-label">Type: </label>
                                            <div class="col-md-6 col-sm-10">
                                        <label> <input type="radio" value="indoor" id="indoor" name="indoor" v-model="type"> Indoor </label> 
                                        <label> <input type="radio" value="outdoor" id="outdoor" name="outdoor" v-model="type"> Outdoor  </label> 
                                         </div>
                                        </div>

                                        <div class="form-group">
                                            <label for="descritpion" class="col-sm-2 control-label">Description: </label>
                                            <div class="col-md-6 col-sm-10">
                                                <textarea class="form-control" id="description" placeholder="Enter your description " v-model="description"/>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label for="location" class="col-sm-2 control-label">location: </label>
                                            <div class="col-md-6 col-sm-10">
                                                
                                            <input type="text" class="form-control" id="location" placeholder="Enter your location " v-model="location"/>
                                               </div>
                                        </div>
                                        <div>
          <button class="btn btn-danger btn-lg btn-submit-donation" @click="addEvent">Add</button>
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
import EventService from '@/services/EventService'
export default {

  name: 'AddEvent',
  data () {
    return {

              
      location: '',
      name: '',
      description: '',
      type: '',
      candidate: '',
      timeStart: '',
      timeEnd:'',
      startDate: '',
      endDate: '',
      campaign:''
    }
  },

  methods: {
 
    async addEvent () {
      const resp = await EventService.addEvent({
        name: this.name,
        description: this.description,
        location: this.location,
        type: this.type,
        timeStart: this.timeStart,
        timeEnd: this.timeEnd,
        candidate: this.candidate,
        startDate: this.startDate,
        endDate: this.endDate,
        campaign:this.$route.params.id
      })
      console.log(resp.data)
      this.$router.push({ name:"campaignHome" })
    }
    
  }
}
</script>