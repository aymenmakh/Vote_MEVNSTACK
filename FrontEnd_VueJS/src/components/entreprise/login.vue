<template>
    <section class="section-content-block">

            <div class="container">
                
                <div class="row section-heading-wrapper">

                    <div class="col-md-12 col-sm-12 text-center no-img-separator">
                        <h4>Private votes</h4>
                        <span class="heading-separator heading-separator-horizontal"></span>
                        <h2 class="extra-large">Login</h2>

                    </div> <!-- end .col-sm-10  --> 

                </div>

                <div class="row">  
                    
                    <div class="col-md-8 col-md-offset-2">
                        <div class="horizontal-newsletter1">
                                <div class="news-subscription1">
                                    <input id="mc-email" name="EMAIL" v-model="email" placeholder="Email Address ..." type="email">
                                    <input id="mc-email" name="CIN" v-model="cin" placeholder="Password (CIN) ..." type="password" >

                                           <span v-show="erreurs = true" class="help is-danger">Check your email to get the correct credentials</span>

                                    <button id="mc-submit" type="submit"  @click="login"> Submit</button>
                                </div>
                           
                        </div> <!--  end .footer-widget  -->
                    </div> <!--  end .col-md-3 col-sm-6 -->

                </div> <!--  end .row -->
                
            </div> <!--  end .container -->
        </section> 
</template>

<script>
import MembresService from "@/services/MembresService";


    import axios from "axios";




export default {
  name: "privatevote",
  data() {
    return {
      cin: "",
      email: "",
      user:[],
      erreurs:false
    };
  },
   
  mounted() {
   // this.getMembres();

  },
  methods: {
   
   async login() {
      const response1= await MembresService.login({
        cin: this.cin,
        email:this.email
        });
        console.log(response1.data.user);
        if(response1.data.user.cin!=null){
                this.$router.push({ name: "MembersProfile" ,params: { id: response1.data.user.cin } });
        }
        else{
this.erreur=true
        }

  }
  }
};
</script>
<style type="text/css">

.horizontal-newsletter1 {
  position: relative;
  overflow: hidden;
  margin-top: 0px;
  margin-bottom: 12px;
}
.horizontal-newsletter1 .news-subscription1 input {
  background: #FFFFFF;
  border: 2px solid #CCCCCC;
  -webkit-border-radius: 32px;
  -moz-border-radius: 32px;
  border-radius: 32px;
  -webkit-background-clip: padding-box;
  -moz-background-clip: padding;
  background-clip: padding-box;
  color: #333333;
  height: 55px;
  padding-left: 13px;
  width: 98%;
  margin: 5px;
}
.horizontal-newsletter1 .news-subscription1 button {
  background: #C5010B;
  border: 0 none;
  -webkit-border-radius: 32px;
  -moz-border-radius: 32px;
  border-radius: 32px;
  -webkit-background-clip: padding-box;
  -moz-background-clip: padding;
  background-clip: padding-box;
  color: #FFFFFF;
  font-size: 18px;
  font-weight: 500;
  text-transform: uppercase;
  height: 55px;
  width: 160px;
 margin: 0 40%;
}
.horizontal-newsletter1 .news-subscription1 button:hover {
  background: #600005;
}
.horizontal-newsletter1 .news-subscription1 button:hover:before {
  background: #600005;
}
.horizontal-newsletter1 .news-subscription1.square-layout input,
.horizontal-newsletter1 .news-subscription1.square-layout button {
  -webkit-border-radius: 0;
  -moz-border-radius: 0;
  border-radius: 0;
  -webkit-background-clip: padding-box;
  -moz-background-clip: padding;
  background-clip: padding-box;
}
</style>
