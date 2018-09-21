<template>
    <section class="section-content-block">

            <div class="container">

                <div class="row">



                    <div class="article-event clearfix">

                        <div class="col-sm-12">

                            <article class="post single-post-inner">

                                <div class="post-inner-featured-content">
                                    <img :src="'http://localhost:3000/'+photo" alt="image campaign" />
                                </div>


                                <div class="single-post-inner-title">
                                    <h2>{{slogan}}</h2>
                                    <p class="single-post-meta"><i class="fa fa-user"></i>&nbsp; campaign manager &nbsp; &nbsp; <i class="fa fa-map-marker"></i>&nbsp; {{headquarters}}</p>
                                </div>

                                <div class="single-post-inner-content">
                                    <p>{{description}}</p>
                                    
                                </div>


                            </article> <!--  end single-post-container --> 


                        </div> <!--  end .single-post-container -->

                        <div class="col-sm-6">

                            <h4 class="event-content-title">Details</h4>

                            <p class="event-content-info">
                                <span class="event-sub-content-title">candidate:</span>{{candidate}}
                                <span class="event-sub-content-title">slogan:</span>{{slogan}}
                                <span class="event-sub-content-title">Start Date:  <em class="date">{{ startDate | formatDate }}</em></span>
                                <span class="event-sub-content-title">End Date:  <em class="date">{{ endDate | formatDate }}</em></span>

                            </p>
                        </div> <!-- end .col-sm-4  -->
                        <div class="col-sm-6">

                            <h4 class="event-content-title">Events <router-link v-bind:to="{ name: 'AddEvent', params: { id:this.$route.params.id } }"> <i class="fa fa-plus"></i></router-link></h4>
                                <div v-for="e in events" :key="e._id" class="single-recent-post">
                                <router-link v-bind:to="{ name: 'DetailEvent', params: { id:e._id } }"> {{e.name}}</router-link>
                                <span><i class="fa fa-calendar icon-color"></i>&nbsp; {{e.startDate|formatDate}}&nbsp;<i class="fa fa-map-marker icon-color"> {{e.location}}</i></span>
                            </div>
                        </div> <!-- end .col-sm-4  -->
                    <router-link v-bind:to="{ name: 'EditCampaign', params: { id:this.$route.params.id } }">EDIT</router-link>
                    </div>

                </div> <!--  end .row  -->
            </div> <!--  end container -->

        </section> <!-- end .section-content-block  -->   

</template>

<script>
import EventService from '@/services/EventService'
import CampaignService from '@/services/CampaignService'
import moment from 'moment'
import Vue from 'vue'
export default {
 name: 'DetailCampaign',
  data () {
    return {
      slogan: '',
      description: '',
      headquarters: '',
      status: '',
      candidate: '',
      photo: '',
      startDate: '',
      endDate: '',
      events:[]

    }
  },
  mounted () {
    this.getOneCampaign(),
    this.getEventforCampaign(),
    Vue.filter('formatDate', function (value) {
      if (value) {
        return moment(String(value)).format('DD/MM/YYYY')
      }
    })
  },
  methods: {
    async getOneCampaign () {
      const response = await CampaignService.getOneCampaign({
        id: this.$route.params.id
      })
      this.slogan = response.data.slogan
      this.description = response.data.description
      this.headquarters = response.data.headquarters
      this.status = response.data.status
      this.candidate = response.data.candidate
      this.photo = response.data.photo
      this.startDate = response.data.startDate 
      this.endDate = response.data.endDate 
    }, 
    async getEventforCampaign () {
      const response = await EventService.getEventforCampaign({
          id:this.$route.params.id
      })
      this.events = response.data.events
      this.events = response.data
    }
  }
}
</script>