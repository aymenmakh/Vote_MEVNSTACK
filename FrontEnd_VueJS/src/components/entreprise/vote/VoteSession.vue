<template>
       <section class="section-content-block">
            <div class="container">

                <div class="row">

                    <div class="article-event clearfix">

                        <div class="col-sm-12">

                            <article class="post single-post-inner">

                                <div class="post-inner-featured-content">
                                    <img alt="" src="/static/images/votee.jpg">
                                </div>


                                <div class="single-post-inner-title">
                                    <h2>{{this.nom}}</h2>
                                    <p class="single-post-meta"><i class="fa fa-user"></i>&nbsp; {{this.date_debut | moment("dddd, MMMM Do YYYY")}} &nbsp; &nbsp; <i class="fa fa-share"></i>&nbsp; {{this.date_debut | moment("dddd, MMMM Do YYYY")}}</p>
                                </div>

                                <div class="single-post-inner-content">
									<div class="postee">  
                                    <p>{{this.description}}</p>
									</div>
                                </div>


                            </article> <!--  end single-post-container --> 


                        </div> <!--  end .single-post-container -->  

                    </div>

                </div> <!--  end .row  -->

            </div> <!--  end container -->
<section class="section-content-block section-secondary-bg">

            <div class="container wow fadeInUp">

                <div class="row section-heading-wrapper">

                    <div class="col-md-12 col-sm-12 text-center">
                        <h2 class="section-heading">Election</h2>
                        <p class="section-subheading">You have to vote for one of these</p>
                    </div> <!-- end .col-sm-10  -->                      

                </div> <!-- end .row  -->

                <div class="row">

                    <div class="col-lg-4 col-md-offset-0 col-md-4 col-md-offset-0 col-sm-8 col-sm-offset-2 col-xs-10 col-xs-offset-1"  v-for="elu in this.elu2">

                        <div class="team-layout-1">       

                            <figure class="team-member">

                                    <img :src="'/static/images/'+elu.photoMembre" alt="ALEXANDER GARY"/>
                                

                            </figure> <!-- end. team-member  -->

                            <article class="team-info">
                                <h3>{{elu.firstName}} {{elu.lastName}}</h3> 
								                               
                                <h4>{{elu.work}}</h4>
					
                            </article>

                            <div class="team-content">

                                <div class="team-social-share text-center clearfix">
                                    <a class="fa fa-facebook rectangle" href="#" title="Facebook"></a>
                                    <a class="fa fa-twitter rectangle" href="#" title="Twitter"></a>
                                    <a class="fa fa-google-plus rectangle" href="#" title="Google Plus"></a>
                                    <a class="fa fa-linkedin rectangle" href="#" title="Linkedin"></a>
                                </div> <!-- end .author-social-box  -->

                            </div>                             

                        </div> <!--  end team-layout-1 -->

                    </div> <!--  end .col-md-4 col-sm-12  -->

                </div> <!-- end .row  --> 

            </div> <!-- end .container  -->

        </section>
        </section> 

   
</template>

<script>

import EntreprisesService from '@/services/EntreprisesService'
import VoteService from "@/services/VotesServices";
import MembresService from '@/services/MembresService'

export default {
  name: 'privatevotes',
  data () {
    return {
     nom:"",
     description:"",
    photoMembre:"",
     date_debut:"",
     date_fin:"",
     elu:[],
     elu2: [],
     bgc: []
    }
  },
  mounted () {
    this.getVotes(),
    this.getMembre()
  },
  methods: {
    async getVotes () {
      const response = await VoteService.fetchVote({id: this.$route.params.id});
      this.nom = response.data.nom,

      this.description = response.data.description,
      this.date_debut = response.data.date_debut,
      this.date_fin = response.data.date_fin,
      this.elu=response.data.elu
      var i=0;
      for(i=0;i<this.elu.length;i++){
        const response2 = await MembresService.thisuser({cin: this.elu[i].cin});
      this.elu2.push(response2.data.user);
      console.log(this.elu2);  
      }
       
    },
     async getMembre () {
    
    }
   
  
  }
}
</script>
<style type="text/css">
.postee p{
    max-width: 90%;
font-weight: bold;
word-break: break-all;
}

</style>
