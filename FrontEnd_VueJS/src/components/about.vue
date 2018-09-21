<template>
<div>
   <section class="page-header">

            <div class="container">

                <div class="row">

                    <div class="col-sm-12 text-center">

                        <h3>
                            About Us
                        </h3>

                        <p class="page-breadcrumb">
                            <a href="/">Home</a> / About Us
                        </p>


                    </div>

                </div> <!-- end .row  -->

            </div> <!-- end .container  -->

        </section> <!-- end .page-header  -->
        
        <!--  FEATURED ABOUT US SECTION-->

        <section class="section-content-block">
 
            <div class="container">
                
                <div class="row">

                    <div class="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                        
                        <div class="about-us-container theme-custom-box-shadow">

                            <div class="row section-heading-wrapper margin-bottom-11">

                                <div class="col-lg-12 col-md-12 col-sm-12 text-left no-img-separator">
                                    <h2><strong>Who We Are?</strong></h2>
                                    <span class="heading-separator heading-separator-horizontal"></span>
                                </div> <!-- end .col-sm-10  --> 

                            </div>
                            <div class="about-details"> 

                                <p>We promise to fulfill all our promises if you support us. We can build a progressive nation together.</p>


                                <ul class="custom-bullet-list">
                                    <li>Biggest job growth over 55% in manufacturing.</li>
                                    <li>Ended racial discrimination in every sector.</li>
                                    <li>Increased clean energy production level.</li>
                                    <li>Decreased unemployment and poverty to half.</li>
                                    <li>Deficit cut by three-quarters all the year round.</li>
                                    <li>Greatly improved benifiys for veterans and others.</li>
                                </ul>

                            </div> <!--  end .about-details -->  

                        </div>

                    </div> <!--  end .col-lg-6 col-md-6 col-sm-12 col-xs-12 -->  


                    <div class="col-lg-6 col-md-12 col-sm-12 col-xs-12">

                        <figure class="about-img theme-custom-box-shadow">
                            <a class="venobox wow bounceIn" data-vbtype="video" data-autoplay="true" href="https://www.youtube.com/watch?v=nrJtHemSPW4"><i class="fa fa-play"></i></a>                                
                            <img src="static/images/about_feat_bg.jpg" alt="about" />
                        </figure> <!-- end .cause-img  -->

                    </div> <!--  end .col-lg-6 col-md-6 col-sm-12 col-xs-12  -->                    

                </div> <!--  end .row  -->
            </div>

        </section>
        </div> <!--  end .section-about-us -->
  </template>

<script>
export default {
  name: 'about',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
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
</style>
