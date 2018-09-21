<template>
<div >
    <section class="page-header-ahmed" v-bind:style="this.flag" >

            <div class="container">

                <div class="row">

                    <div class="col-sm-12 text-center">

                        <h3 class="co">
                           {{this.nom}}
                        </h3>

                        <p class="page-breadcrumb1">
                           <ul>
                          <li><router-link v-bind:to="{ name: 'privatevote' }" class="app_entreprise_btn">Add Vote Session</router-link></li>

                        </ul> 
                        </p>
                        
                    </div>

                </div> <!-- end .row  -->

            </div> <!-- end .container  -->

        </section>
      <section class="section-content-block section-secondary-bg">
<div v-bind:style="this.couleurFav">
            <div class="container"  >

                <div class="row">

                    <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12" > 
                        
                        <div class="row section-heading-wrapper1">

                            <div class="col-md-12 col-sm-12 text-left no-img-separator colo" >
                                
                                <h4>Who we are?</h4>
                                <span class="heading-separator heading-separator-horizontal"></span>
                                <h2>{{this.nom}}
                                </h2>
                       
                            </div> <!-- end .col-sm-10  --> 

                        </div>

                        <div class=" desc"> 

                            <ul class="custom-bullet-list">   
                                <li><u>Description</u> : <b>{{this.description}}</b></li>
                                <li><u>Phone Number</u> : <b>{{this.phone}}</b></li>
                                <li><u>E-Mail</u> :<b> {{this.email}}</b></li>

                   
                            </ul>

                        </div> <!--  end .about-details -->  
               
                    </div> <!--  end col-lg-6  -->


                    <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 hidden-xs"> 
                        
                        <figure class="theme-custom-box-shadow">
                            <img :src="this.logo" :alt="this.logo" class="db" />
                            
                        </figure>
                        
                    </div> <!--  end .col-lg-6 -->

                </div> <!--  end .row  -->
                
                <div class="row wow fadeIn margin-top-24">

                    <div class="col-lg-3 col-md-6 col-sm-6 col-xs-12">

                        <div class="counter-block-1 text-center">

                            <i class="fa fa-user icon"></i>
                            <span class="counter1">Fondateur</span>                            
                            <h4 class="text-capitalize">Fondateur</h4>

                        </div>

                    </div> <!--  end .col-lg-3  -->

                    <div class="col-lg-3 col-md-6 col-sm-6 col-xs-12">

                        <div class="counter-block-1 text-center">

                            <i class="fa fa-gavel icon"></i>
                            <span class="counter1">{{this.secteur}}</span>                            
                            <h4 class="text-capitalize">Activity</h4>

                        </div>

                    </div> <!--  end .col-lg-3  -->

                    <div class="col-lg-3 col-md-6 col-sm-6 col-xs-12">

                        <div class="counter-block-1 text-center">
<router-link v-bind:to="{ name: 'membres' }">
                            <i class="fa fa-users icon"></i>
                            <span class="counter">{{this.i.length}}</span>                             
                            <h4 class="text-capitalize">Number of members</h4>
</router-link>
                        </div>

                    </div> <!--  end .col-lg-3  -->

                    <div class="col-lg-3 col-md-6 col-sm-6 col-xs-12">

                        <div class="counter-block-1 text-center">

                            <i class="fa fa-flag icon"></i>
                            <span class="counter1">{{this.country}}</span>                            
                            <h4 class="text-capitalize">Country</h4>

                        </div>

                    </div> <!--  end .col-lg-3  -->


                </div> <!-- end row  -->

            </div> <!--  end .container -->

   <section class="section-content-block section-secondary-bg">

            <div class="container">

                <div class="row section-heading-wrapper">

                    <div class="col-md-12 col-sm-12 text-center no-img-separator">
                        <h2>Our Sponsors</h2>
                        <span class="heading-separator heading-separator-horizontal"></span>
                        <h4>The sponsors who give their valuable amount to fulfill our mission.</h4>
                    </div> <!-- end .col-sm-10  -->                      

                </div> <!-- end .row  -->

                <div class="row">

                    <div class="logo-layout-1 logo-items owl-carousel" data-nav="true"  data-dots="false">

                            <div class="col-lg-3 col-md-3 col-sm-12 col-xs-12">

                                <div class="client-logo">

                                    <img src="/static/images/logo_1.png" alt="dsq" />

                                </div>

                            </div>

                            <div class="col-lg-3 col-md-3 col-sm-12 col-xs-12">

                                <div class="client-logo">

                                    <img src="/static/images/logo_2.png" alt="" />

                                </div>

                            </div>

                            <div class="col-lg-3 col-md-3 col-sm-12 col-xs-12">

                                <div class="client-logo">

                                    <img src="/static/images/logo_3.png" alt="" />

                                </div>

                            </div>

                            <div class="col-lg-3 col-md-3 col-sm-12 col-xs-12">

                                <div class="client-logo">

                                    <img src="/static/images/logo_4.png" alt="" />

                                </div>

                            </div>

                            <div class="col-lg-3 col-md-3 col-sm-12 col-xs-12">

                                <div class="client-logo">

                                    <img src="/static/images/logo_5.png" alt="" />

                                </div>

                            </div>

                            <div class="col-lg-3 col-md-3 col-sm-12 col-xs-12">

                                <div class="client-logo">

                                    <img src="/static/images/logo_6.png" alt="" />

                                </div>

                            </div>

                            <div class="col-lg-3 col-md-3 col-sm-12 col-xs-12">

                                <div class="client-logo">

                                    <img src="/static/images/logo_7.png" alt="" />

                                </div>

                            </div>

                            <div class="col-lg-3 col-md-3 col-sm-12 col-xs-12">

                                <div class="client-logo">
                                    <img src="/static/images/logo_8.png" alt="" />
                                </div>
                            </div>

                    </div> <!-- end .logo-items  -->

                </div> <!-- end row  -->

            </div> <!-- end .container  -->

        </section>
</div>

        </section>
        
</div>
</template>

<script>

import EntreprisesService from '@/services/EntreprisesService'
import MembresService from '@/services/MembresService'

export default {
  name: 'DetailEntreprise',
  data () {
    return {
     nom:"",
     description:"",
     email:"",
     logo:"",
     code:"",
     country:"",
     fondateur:"",
     secteur:"",
     phone:"",
     flag: [],
     couleurFav: [],
     count:"",
     i:[]
    }
  },
  mounted () {
    this.getEntreprises(),
    this.getMembres()
  },
  methods: {
    async getMembres () {
      const response = await MembresService.fetchMembre({
        id: this.$route.params.id
      })
     this.i = response.data.membres

    },
    async getEntreprises () {
      const response = await EntreprisesService.getEntreprise1({id: this.$route.params.id});
      this.nom = response.data.nom,
      this.secteur = response.data.secteur,
      this.email = response.data.email,
      this.description = response.data.description,
      this.country = response.data.country;

if(response.data.couleurFav=="rb"){
      this.couleurFav = {color:"#A91101","background-color":"rgba(0, 0,0 ,0.8)",margin:"-100px 0 -100px 0",padding:"100px 0 20px 0"}
}
if(response.data.couleurFav=="by"){
      this.couleurFav = {color:"rgba(255, 255,0 ,1)","background-color":"rgba(0, 102,255 ,0.8)",margin:"-100px 0 -100px 0",padding:"100px 0 20px 0"}
}
if(response.data.couleurFav=="bw"){
      this.couleurFav = {color:"black","background-color":"white",margin:"-100px 0 -100px 0",padding:"100px 0 20px 0"}
}
if(response.data.couleurFav=="ow"){
      this.couleurFav = {color:"#A91101","background-color":"black",margin:"-100px 0 -100px 0",padding:"100px 0 20px 0"}
}



      this.phone = response.data.phone
      this.code = response.data.code
      this.logo ='http://localhost:3000/'+response.data.logo
      this.fondateur = response.data.fondateur
this.count="/static/images/tn.jpg";
if(this.country=="tunisia"){
         this.flag = {

  "background-attachment": "scroll",
  "background-image": "url('/static/images/tn.jpg')",
  "background-repeat": "no-repeat"}
}
if(this.country=="egypt"){
         this.flag = {
  "background-attachment": "scroll",
  "background-image": "url('/static/images/egy.jpg')",
  "background-repeat": "no-repeat",
  }
}
if(this.country=="france"){
        this.flag = {
 
  "background-attachment": "scroll",
  "background-image": "url('/static/images/fr.jpg')",
  "background-repeat": "no-repeat"}
}
if(this.country=="india"){
        this.flag = {
  
  "background-attachment": "scroll",
  "background-image": "url('/static/images/ind.jpg')",
  "background-repeat": "no-repeat"
 }
}
if(this.country=="italy"){
        this.flag = {

  "background-attachment": "scroll",
  "background-image": "url('/static/images/por.ita')",
  "background-repeat": "no-repeat",
}
}
if(this.country=="japan"){
        this.flag = {

  "background-attachment": "scroll",
  "background-image": "url('/static/images/jp.jpg')",
  "background-repeat": "no-repeat","border": "3px solid black"
 }
}
if(this.country=="mexico"){
        this.flag = {

  "background-attachment": "scroll",
  "background-image": "url('/static/images/mex.jpg')",
  "background-repeat": "no-repeat",
}
}
if(this.country=="portugal"){
     this.flag = {

  "background-attachment": "scroll",
  "background-image": "url('/static/images/por.jpg')",
  "background-repeat": "no-repeat",
}
}
if(this.country=="united kingdom"){
     this.flag = {

  "background-attachment": "scroll",
  "background-image": "url('/static/images/uk.jpg')",
  "background-repeat": "no-repeat",
  "border": "0px solid #FFF"}
}
    }
   
  }
}
</script>
<style type="text/css">
.theme-custom-box-shadow img{
    width: 350px;
     height: 200px;
}
.colo{
    font-size: 1.2em; 
}
.counter1 {
  display: block;
  margin-top: 12px;
  font-size: 32px;
  color: #C5010B;
  font-weight: 600;
}

.page-breadcrumb1 {
  font-size: 16px;
  color: #FFFFFF;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 0.01em;
}
.co{
     color: #FFFFFF;
  text-align: center;
  font-size: 36px;
  line-height: 24px;
  font-weight: 700;
  font-family: 'Montserrat', sans-serif;
  margin: 24px 0;
  text-transform: uppercase;
  letter-spacing: 0.02em;
}
.section-heading-wrapper1 {
  margin-bottom: 32px;
  /*-----  Left Alignment ----*/
  /*-----  Right Alignment ----*/
}
.section-heading-wrapper1 h2 {
  text-align: center;
  position: relative;
  font-size: 42px;
  line-height: 42px;
  margin-bottom: 20px;
  font-family: 'Montserrat', sans-serif;
  letter-spacing: 0em;
  font-weight: 700;
  color: #fff;
}
.section-heading-wrapper1 h2:after {
  background-image: url('/static/images/separator.png');
  background-position: center center;
  background-repeat: no-repeat;
  content: "";
  height: 24px;
  left: 50%;
  margin-left: -75px;
  position: absolute;
  top: 55px;
  width: 150px;
}
.section-heading-wrapper1 p,
.section-heading-wrapper1 h4 {
  text-align: center;
  font-size: 22px;
  line-height: 32px;
  font-weight: 400;
  font-family: 'Montserrat', sans-serif;
  color: #fff;
  margin-bottom: 24px;
  padding: 30px 0 0 0px;
  word-spacing: 0em;
}
.section-heading-wrapper1 span.heading-separator {
  display: inline-block;
  width: 2px;
  height: 32px;
  background: #C5010B;
  margin-top: 12px;
}
.section-heading-wrapper1 span.heading-separator-horizontal {
  width: 72px;
  height: 2px;
  margin-top: 0px;
  position: relative;
  top: -3px;
}
.section-heading-wrapper1 .no-img-separator {
  clear: both;
}
.section-heading-wrapper1 .no-img-separator h2 {
  margin-bottom: 0px;
}
.section-heading-wrapper1 .no-img-separator h2:after {
  display: none;
}
.section-heading-wrapper1 .no-img-separator h4 {
  padding: 0px;
  margin: 0;
}
.section-heading-wrapper1 .text-left h2 {
  text-align: left;
  clear: both;
}
.section-heading-wrapper1 .text-left h2:after {
  left: 0;
  margin-left: 0px;
}
.section-heading-wrapper1 .text-left p,
.section-heading-wrapper1 .text-left h4 {
  text-align: left;
}
.section-heading-wrapper .text-right h2 {
  text-align: right;
  clear: both;
}
.section-heading-wrapper1 .text-right h2:after {
  left: initial;
  right: 0;
  margin-left: 0;
  margin-right: 0;
}
.section-heading-wrapper1 .text-right p,
.section-heading-wrapper1 .text-right h4 {
  text-align: right;
}
.section-heading-wrapper1 h2 + h4 {
  margin-top: 16px !important;
}
.section-heading-wrapper1 h4 + h2 {
  margin-top: 16px !important;
}
.desc ul li b{
    max-width: 50px;
font-weight: bold;
word-break: break-all;
}
.app_entreprise_btn {
  position: absolute;
  top:130%;
  right:0%;
  background:black;
  color: #fff;
  padding: 5px 5px;
  text-transform: uppercase;
  font-size: 10px;
  font-weight: bold;
  width: 120px;
  border: none;
  cursor: pointer;
}
</style>
