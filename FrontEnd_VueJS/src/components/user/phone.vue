<template>
<div class="aymen">


           <section class="section-content-block section-custom-bg"   data-bg_size="cover" data-bg_position="top right"   >

            <div class="container">
                
                
                <div class="row">
                    <div class="col-sm-6">
                        <div class="row section-heading-wrapper-alt margin-bottom-5">

                            <div class="col-md-12 col-sm-12 text-left no-img-separator">
                                <h4>Enter a phone number</h4>
                                <span class="heading-separator heading-separator-horizontal"></span>
                                <h2 class="text-capitalize">TAHIA TOUNIS <br />
                                </h2>

                            </div> <!-- end .col-sm-10  --> 

                        </div>
                    </div>
                    <div class="col-sm-6">
                        <div class="horizontal-newsletter margin-top-60">
                           
                                <div class="news-subscription square-layout">
                                    <input type="text"     placeholder="" v-model="number">
                                    <button v-on:click="phone" >send</button>
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
  name: 'phone',
  data () {
    return {
      number:"+216"
      
    }
  },
   methods: {
         async phone() {

        const response = await Service.tel({
        number: this.number
      });
   console.log(response.data)
    this.$router.push({ name: 'verify', params: { request: response.data } });
 //  this.$router.push({ name: 'login'});
     
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
  background-image: url("../../../static/images/images.jpg");
  
}

</style>
