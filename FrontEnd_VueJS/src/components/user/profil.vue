<template>
<div>
            <div class="container margin-top-48 margin-bottom-48 wow fadeInLeft">
                
                <div class="row">
     <div class="col-md-4 col-sm-12">

                            <div class="team-layout-1 theme-custom-box-shadow theme-custom-box-animation">

                                <figure class="team-member">
                                    <a href="" v-on:click="update" title="MELISSA MUNOZ">
                                    
                                        <img v-bind:src="photo" alt="MELISSA MUNOZ" />
                                       
                                    </a>

                                </figure> <!-- end. team-member  -->

                                <article class="team-info">
                                    <h2> CIN :{{cin}}</h2>  
                                    <h3>{{firstName}} {{lastName}}</h3>    
                                     <h4>{{birth}}</h4>                              
                                    <h5>{{proffession}}</h5>
                                   
                                </article>

                                                          

                            </div> <!--  end team layout-1 -->

                        </div> 
                         <div class="col-sm-6 wow fadeInRight">

                        <h2 class="contact-title">Your Location</h2>


                        <div class="section-google-map-block wow fadeInUp">
                             <div class="google-map" :id="mapName"></div>

                        </div> <!-- end .section-content-block  -->                            

                    </div> <!--  end col-sm-6  -->   
</div>
            </div>

<div v-if="voted==false">
<div v-if="DateNaissance>18">
  <div id="conteur"  v-if="election==true">
              <section class="section-content-block section-custom-bg" data-bg_img='images/vote_countdown.jpg' data-bg_size='cover' data-bg_position='center center' data-bg_opacity="0" data-b>

            <div class="container">
                
                <div class="row section-heading-wrapper-alt">

                    <div class="col-md-12 col-sm-12 text-center no-img-separator">
                        <h3>GET READY FOR ELECTION</h3>
                       

                    </div> <!-- end .col-sm-10  --> 

                </div>

                <div class="row">

                    <div class="col-sm-12 text-center wow zoomIn">
                        <div id="countdown_block"></div>
                    </div> <!-- end .col-sm-12  -->

                </div> <!-- end .row  -->

            </div> <!-- end .container-fluid  -->

        </section>
        </div>

      

</div>
</div>
<div v-else>
   <div v-if="election==true">
 <section class="cta-section-2">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <h2>Your vote is in the blockchain</h2>
                        
                    </div> <!--  end .col-md-8  -->
                </div> <!--  end .row  -->
            </div>
        </section> 
   </div>
 
</div>

   <div v-if="election==false">
        <section class="cta-section-2">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <h2>The vote is over</h2>
<a class="btn btn-theme btn-theme-invert margin-top-24 wow bounceIn" style="color:white;" href="/user/result">See the result</a>
                    </div> <!--  end .col-md-8  -->
                </div> <!--  end .row  -->
            </div>
        </section>
        </div>
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


                    <div v-if="DateNaissance>18" class="col-lg-6 col-md-12 col-sm-12 col-xs-12">

                         <figure class="about-img theme-custom-box-shadow">
                            <a class="venobox wow bounceIn" data-vbtype="video" data-autoplay="true" href="https://www.youtube.com/watch?v=dCjyXk6LiP4"><i class="fa fa-play"></i></a>                                
                            <img src="../../../static/images/femmes-tunisienes.jpg"  alt="about" />
                        </figure> <!-- end .cause-img  -->

                    </div>
                      <div v-else class="col-lg-6 col-md-12 col-sm-12 col-xs-12">

                        <figure class="about-img theme-custom-box-shadow">
                            <a class="venobox wow bounceIn" data-vbtype="video" data-autoplay="true" href="https://www.youtube.com/watch?v=i27JR5v5_pU"><i class="fa fa-play"></i></a>                                
                            <img src="../../../static/images/enfant.jpg"  alt="about" />
                        </figure> <!-- end .cause-img  -->

                    </div> <!--  end .col-lg-6 col-md-6 col-sm-12 col-xs-12  -->                    

                </div> <!--  end .row  -->
            </div>

        </section> 
</div>
        
      
    
  </template>

<script>
import Service from "../../services/UserServices";
const bounds = new google.maps.LatLngBounds();
import $ from "jquery";
  
export default {
  name: "profil",
   props: ['name'],
  data() {
    return {
      startDate: "",
      endDate: "",
      date : false, 
      cin: "",
      elec : "",
      firstName: "",
      lastName: "",
      birth: "",
      addressActuel: "",
      proffession: "",
      photo : "",
      voted : "",
      lat : "",
      long:"",
      election : true,
      DateNaissance : "",
      mapName: this.name + "-map",
      markerCoordinates: [{
      latitude: "",
      longitude: ""
    }],
        map: null,
      bounds: null,
      markers: []
    };
  },
  created: function() {
    console.log(this.$route.params.cin);
    this.$http
      .get("http://localhost:3000/api/user/getPeople/" + this.$route.params.cin)
      .then(function(response) {
        console.log(response.data);
        this.cin = response.data.cin;
        this.firstName = response.data.firstName;
        this.lastName = response.data.lastName;
        this.birth = response.data.DateNaissance;
        this.addressActuel = response.data.addressActuel;
        this.proffession = response.data.Profession;
        this.DateNaissance = response.data.DateNaissance;
        this.voted = response.data.voted;
        this.photo = "http://localhost:3000/images/"+response.data.photo;
        console.log(this.photo);
        localStorage.setItem(
          "connectedUser",
          JSON.stringify(response.data.cin)
        );
        console.log(response.data._id);

        //  localStorage.removeItem('connectedUser');
        //   this.userConnected = localStorage.getItem('connectedUser');
      });

      
       this.$http
      .get("http://localhost:3000/api/user/election")
      .then(function(response) {
        this.startDate = response.data[0].startDate;
         this.endDate = response.data[0].endDate;
        var countDownDate = new Date(this.startDate).getTime();
        var countDownEnd = new Date(this.endDate).getTime();
        var elec = true ;
         if((new Date(this.endDate).getTime()-new Date().getTime())<0){
             elec = false;
             this.election = false
         }

// Update the count down every 1 second
var x = setInterval(function() {

    // Get todays date and time
    var now = new Date().getTime();
    //console.log(now);
    // Find the distance between now an the count down date
    var distance = countDownDate - now;
    var endElection = countDownEnd - now;
    
    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
      
    // Output the result in an element with id="demo"
    if(distance>0){
    document.getElementById("countdown_block").innerHTML =
                   '<div class="countdown_container"><h2 class="count_number">'+days+'</h2><span >Days</span></div>'
                   + '<div class="countdown_container"><h2 class="count_number">'+hours+'</h2><span >Hours</span></div>'
                    + '<div class="countdown_container"><h2 class="count_number">'+minutes+'</h2><span >Minutes</span></div>'
                     + '<div class="countdown_container"><h2 class="count_number">'+seconds+'</h2><span >Seconds</span></div>'
    }  
    
    // If the count down is over, write some text 
    if ((distance < 0) && (elec==true)) {
      clearInterval(x);
      document.getElementById("conteur").innerHTML = 
       '<section class="cta-section-2">'+
          ' <div class="container">'
              + '<div class="row">'
              
                +  ' <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">'
                     + ' <h2>Choose your better</h2>'
                  
                            
                     + '  <a class="btn btn-theme btn-theme-invert margin-top-24 wow bounceIn" style="color:white;" href="/user/phone">Cast a vote</a>'
                  + ' </div> <!--  end .col-md-8  -->'
               ' </div> <!--  end .row  -->'
         +'</div>'
     +  '</section> '
       
    }
    
    if (endElection== 0)
    {
          Service.DeleteElection();      
    }
    /*
    if  ((distance < 0) && (elec==false)){
         clearInterval(x);
         document.getElementById("conteur").innerHTML = 
               '<section class="cta-section-2">'+
          ' <div class="container">'
              + '<div class="row">'
              
                +  ' <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">'
                     + ' <h2>The vote is Over</h2>'
                   
                            
                     + '  <a class="btn btn-theme btn-theme-invert margin-top-24 wow bounceIn" style="color:white;" href="/user/phone">See the result</a>'
                  + ' </div> <!--  end .col-md-8  -->'
               ' </div> <!--  end .row  -->'
         +'</div>'
     +  '</section> '
    }*/
}, 1000);
      });
  
      
//var myDate = new Date("2012-02-10T13:19:11+0000");
//var result = myDate.getTime();
// Set the date we're counting down to


  },
  mounted: function () {
     console.log(this.$route.params.cin);
    this.$http
      .get("http://localhost:3000/api/user/getPeople/" + this.$route.params.cin)
      .then(function(response) {
    const element = document.getElementById(this.mapName)
    const options = {
      zoom: 14,
      center: new google.maps.LatLng(response.data.lat,response.data.long)
    }
    const map = new google.maps.Map(element, options);
   
   this.markerCoordinates.forEach((coord) => {
  const position = new google.maps.LatLng(response.data.lat,response.data.long)
  const marker = new google.maps.Marker({ 
    position,
    map
  });
});
});
  },
  methods : {
     update : function(){
         this.$router.push({ name: "update", params: { cin: this.cin } });
     }
  }
  
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
aymen{
  position: relative;
  left: 400000px;
}
vote{
  
  font-weight: 700;
  color: #555555;
  line-height: 36px;
  margin: 0 0 16px 0;
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
.google-map {
  width: 700px;
  height: 350px;
  margin: 0 auto;
  background: gray;
}
</style>
