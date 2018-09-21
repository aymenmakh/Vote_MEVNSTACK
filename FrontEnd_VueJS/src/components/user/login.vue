<template>
<div class="aymen">


           <section class="section-content-block section-custom-bg"   data-bg_size="cover" data-bg_position="top right"   >

            <div class="container">
                
                
                <div class="row">
                    <div class="col-sm-6">
                        <div class="row section-heading-wrapper-alt margin-bottom-5">

                            <div class="col-md-12 col-sm-12 text-left no-img-separator">
                                <h4>Login</h4>
                                <span class="heading-separator heading-separator-horizontal"></span>
                                <h2 class="text-capitalize">TAHIA TOUNIS <br />
                                </h2>

                            </div> <!-- end .col-sm-10  --> 

                        </div>
                    </div>
                    <div class="col-sm-6">
                        <div class="horizontal-newsletter margin-top-60">
                            <form id="mc-form" class="mc-form fix" action="">
                                <div class="news-subscription square-layout">
                                    <input  name="CIN" placeholder="CIN..." v-model="cin" >
                                    <button id="mc-submit" type="submit" v-on:click="connect"> LOGIN</button>
                                </div>
                            </form>
                        </div> <!--  end .footer-widget  -->
                    </div>
                </div>

            </div>

        </section> <!-- end .section-newsletter"  -->
        </div>
  </template>

<script>
export default {
  name: "login",
  data() {
    return {
      cin: ""
    };
  },
  methods: {
    connect: function() {
      this.$router.push({ name: "profil", params: { cin: this.cin } });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.aymen {
  background-image: url("../../../static/images/Tunisie.jpg");
  background-repeat: repeat;
}
</style>
