<template>
<div class="aymen">


           <section class="section-content-block section-custom-bg"   data-bg_size="cover" data-bg_position="top right"   >

            <div class="container">
                
                
                <div class="row">
                    <div class="col-sm-6">
                        <div class="row section-heading-wrapper-alt margin-bottom-5">

                            <div class="col-md-12 col-sm-12 text-left no-img-separator">
                                <h4>Enter a PIN</h4>
                                <span class="heading-separator heading-separator-horizontal"></span>
                                <h2 class="text-capitalize">TAHIA TOUNIS <br />
                                </h2>

                            </div> <!-- end .col-sm-10  --> 

                        </div>
                    </div>
                    <div class="col-sm-6">
                        <div class="horizontal-newsletter margin-top-60">
                          
                                <div  class="news-subscription square-layout">
                                    <input type="text" placeholder="enter your PIN" v-model="pin">
                                    
                                    <button v-on:click="verify">Verify</button>
                                </div>
                                
                       
                        </div> <!--  end .footer-widget  -->
                    </div>
                </div>

            </div>

        </section> <!-- end .section-newsletter"  -->
        </div>
  </template>

<script>
import Service from "../../services/UserServices";
export default {
    
  name: 'verify',
  data () {
    return {
     pin : "",
    }
  },
    methods: {
    async verify() {
      
      console.log(this.$route.params.request);
      
      const response = await Service.verify({
        requestId: this.$route.params.request,
        pin: this.pin
      });
      console.log("ssss");
      this.$router.push({ name: "token" });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.aymen {
  background-image: url("../../../static/images/tunisie-by.jpg");
  background-repeat: repeat;
}
</style>
