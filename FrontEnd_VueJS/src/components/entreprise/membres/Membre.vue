<template>
      <section class="section-content-block section-secondary-bg">

            <div class="container wow fadeInUp">

                <div class="row section-heading-wrapper">

                    <div class="col-md-12 col-sm-12 text-center">
                        <h2 class="section-heading">Enterprise Members</h2>
                        <p class="section-subheading">Here all those who are working in your enterprise </p>
                    </div> <!-- end .col-sm-10  -->                      

                </div> <!-- end .row  -->

                <div class="row">

            

                    <div  v-for="membre in membres" :key="
        membre.nom"
         class="col-lg-4 col-md-offset-0 col-md-4 col-md-offset-0 col-sm-8 col-sm-offset-2 col-xs-10 col-xs-offset-1">

                        <div class="team-layout-1">       

                            <figure class="team-member">
                                <a href="#" title="JOHN ABRAHAM">
                                    <img src="/static/images/team_7.jpg" alt="JOHN ABRAHAM" />
                                </a>                               

                            </figure> <!-- end. team-member  -->

                            <article class="team-info">
                                <h3>{{membre.prenom}}-{{membre.nom}}</h3>  

                                <h4 v-if="membre.poste!=null">{{membre.poste}}</h4>
                           <h4 v-else>Undefined</h4>
                            </article>
                            <div class="team-content">

                                <div class="team-social-share text-center clearfix">
                                  
                                    <a class="fa fa-briefcase rectangle" href="#" title="Employee"></a>
                                    <a class="fa fa-street-view rectangle" href="#" title="Director"></a>
                                    <a class="fa fa-bullhorn rectangle" href="#" title="Manager"></a>
                                </div> <!-- end .author-social-box  -->

                            </div>                             

                        </div> <!--  end team-layout-1 -->

                    </div> <!--  end .col-md-4 col-sm-12  -->  


                </div> <!-- end .row  --> 

            </div> <!-- end .container  -->

        </section>
      
</template>

<script>

import MembresService from '@/services/MembresService'


export default {
  name: 'membres',

  data () {
    return {
      membres: []
   
    }
  },
  mounted () {
    this.getMembres()
  
  },
  methods: {
    async getMembres () {
      const response = await MembresService.fetchMembre({
        id: this.$route.params.id
      })
      this.membres = response.data.membres
 
    }

  }
}
</script>

