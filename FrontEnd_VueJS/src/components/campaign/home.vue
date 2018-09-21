<template>


<section class="section-content-block section-pure-white-bg" >

            <div class="container">
                
                <div class="row section-heading-wrapper">

                    <div class="col-md-12 col-sm-12 text-center no-img-separator">
                        <h2 class="extra-large">ALL CAMPAIGNS </h2>
                        <span class="heading-separator heading-separator-horizontal"></span>
                        <h4>Check all candidates campaigns</h4>

                    </div> <!-- end .col-sm-10  --> 

                </div>
                
                <div class="row">

                    <div class="highlight-carousel text-center owl-carousel"  data-nav="false" data-dots="true" data-autoplaytimeout="1000000">

                        <div v-for="c in campaigns" :key="c._id"  class="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                            <div  class="highlight-layout-1 theme-custom-box-shadow theme-custom-box-animation ">
                                <figure><img :src="'http://localhost:3000/'+c.photo" alt="image campaign" /></figure>
                                <h5><a href="#">{{c.candidate}}</a></h5>
                                <div>{{c.description}}</div>
                                <router-link class="btn btn-theme btn-small theme-custom-box-shadow" v-bind:to="{ name: 'DetailCampaign', params: { id: c._id } }">Read More                <i class="fa fa-long-arrow-right"></i></router-link>
                            </div> <!--  end .main_highlights  -->
                        </div> <!--  end .col-md-3  -->

                    </div>

                </div>

            </div> <!--  end .container  -->

        </section>


</template>

<script>
import moment from 'moment'
import CampignService from '@/services/CampaignService'
import Vue from 'vue'
export default {

  name: 'campaignHome',
  data () {
    return {
      campaigns: []
    }
  },
  mounted () {
    Vue.filter('formatDate', function (value) {
      if (value) {
        return moment(String(value)).format('MM/DD/YYYY')
      }
    }),
    this.getCampaign()
  },
  methods: {
    async getCampaign () {
      const response = await CampignService.getCampaign()
      this.campaigns = response.data.campaigns
    }
  }
}
</script>

<style>

</style>

