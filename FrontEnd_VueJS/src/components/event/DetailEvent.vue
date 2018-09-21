<template>
    <section class="section-content-block">

            <div class="container">

                <div class="row">



                    <div class="article-event clearfix">

                        <div class="col-sm-12">

                            <article class="post single-post-inner">

                                


                                <div class="single-post-inner-title">
                                    <h2 style="text-align: center;">{{name}}</h2>
                                    <p style="text-align: center;" class="single-post-meta"><i class="fa fa-user"></i>&nbsp; {{candidate}} &nbsp; &nbsp; <i class="fa fa-map-marker"></i>&nbsp; {{location}}</p>
                                </div>

                                


                            </article> <!--  end single-post-container --> 


                        </div> <!--  end .single-post-container -->

                        <div class="col-sm-6">

                            <h4 class="event-content-title">Details</h4>

                            <p class="event-content-info">
                                <span class="event-sub-content-title"><i class="fa fa-calendar icon-color"/>&nbsp;Start Date:  <em class="date">{{ startDate | formatDate  }}</em></span>
                                <span class="event-sub-content-title"><i class="fa fa-calendar icon-color"/>&nbsp;End Date:  <em class="date">{{ endDate | formatDate }}</em></span>
                                <span class="event-sub-content-title"><i class="fa fa-clock-o icon-color"/>&nbsp;Start Time:  <em class="date">{{ startDate | formatTime }}</em></span>
                                <span class="event-sub-content-title"><i class="fa fa-clock-o icon-color"/>&nbsp;End Time:  <em class="date">{{ endDate | formatTime }}</em></span>

                            </p>
                        </div> <!-- end .col-sm-4  -->

                        <div class="col-sm-6">

                            <h4 class="event-content-title">Description</h4>
                            <p class="event-content-info">
                                <span class="event-sub-content-title">{{ description  }}</span>
                                
                            </p>
                                
                        </div> <!-- end .col-sm-4  -->

                        

                    </div>

                </div> <!--  end .row  -->
            </div> <!--  end container -->

        </section> <!-- end .section-content-block  -->   

</template>

<script>
import EventService from '@/services/EventService'
import moment from 'moment'
import Vue from 'vue'
export default {
 name: 'DetailEvent',
  data () {
    return {
      name: '',
      description: '',
      location: '',
      type: '',
      candidate: '',
      startDate: '',
      endDate: ''

    }
  },
  mounted () {
    this.getOneEvent(),
    Vue.filter('formatDate', function (value) {
      if (value) {
        return moment(String(value)).format('DD/MM/YYYY')
      }
    })
    Vue.filter('formatTime', function (value) {
      if (value) {
        return moment(String(value)).format('hh:mm')
      }
    })
  },
  methods: {
    async getOneEvent () {
      const response = await EventService.getOneEvent({
        id: this.$route.params.id
      })
      this.name = response.data.name
      this.description = response.data.description
      this.location = response.data.location
      this.type = response.data.type
      this.candidate = response.data.candidate
      this.startDate = response.data.startDate 
      this.endDate = response.data.endDate
    }
  }
}
</script>