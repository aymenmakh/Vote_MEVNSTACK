<template>
    <div class="slider-wrap">
            <div id="slider_1" class="owl-carousel" data-nav="false" data-dots="true" data-autoplay="true" data-autoplaytimeout="17000">

                <div class="slider_item_container" data-bg_img="../../static/images/Tunisie.jpg" data-bg_color="#264676" data-bg_opacity="0.1">
                    <div class="item">
                        <div class="slider-content">
                            <div class="container text-left">
                                <div class="row">
                                    <div class="slider-bg">                                    
                                        <div class="col-sm-12 wow zoomInUp" data-wow-duration="1s">  
                                            
                                                <h3 class="text-dark">Choose Peter for a better future!</h3>
                                                <h2 class="text-dark">
                                                    DREAM TOGETHER
                                                    <br>
                                                    AND MAKE IT HAPPEN! 
                                                    
                                                </h2>
                                                <a style="color:white;" href="#" class="btn btn-theme btn-theme margin-top-24">Vote</a>
                                            </div>                                      
                                    </div> <!-- end .col-sm-12  -->
                                </div> <!-- end .row  -->
                            </div><!-- end .container -->
                        </div> <!--  end .slider-content -->
                    </div> <!-- end .item  -->
                </div> <!-- end .slider_item_container  -->

                <div class="slider_item_container" data-bg_img="../../static/images/home_1_slider_2.jpg" data-bg_color="#111111" data-bg_opacity="0.5" >
                    <div class="item">
                        <div class="slider-content">
                            <div class="container text-center">
                                <div class="row">
                                    <div class="slider-bg" data-animation-in="zoomInUp" data-animation-out="zoomInDown">                                    
                                        <div class="col-sm-12 wow fadeInDown" data-wow-duration="1s">
                                            
                                            <h3>Nation need all of us !</h3>
                                                <h2>
                                                    DIVIDED WE FALL
                                                    <br>
                                                    UNITED WE STAND TOGETHER.
                                                </h2>
                                                <a href="#" class="btn btn-theme btn-theme margin-top-24">JOIN WITH US</a>
                                                <a href="#" class="btn btn-theme btn-theme-invert margin-top-24">MAKE DONATION</a>
                                        </div>                                            
                                    </div> <!-- end .col-sm-12  -->
                                </div> <!-- end .row  -->
                            </div><!-- end .container -->
                        </div> <!--  end .slider-content -->
                    </div> <!-- end .item  -->
                </div> <!-- end .slider_item_container  -->

            </div> <!-- end .slider_1  -->
        </div>
  </template>

<script>
export default {
  name: 'home',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  created: function(){
       
  },

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
</style>
