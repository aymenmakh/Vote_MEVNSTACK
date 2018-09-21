<template>
<section>
<div class="bod">
  <div class="container1">
  <div class="header1">

  </div>
  <div class="main1">
    <div class="row1">
      <div class="left1 col-lg-4">
        <div class="photo-left1">

          <img @click="upHere = !upHere"  class="photo1" :src="'http://localhost:3000/'+this.user1.photoMembre"/>
  <div v-show="upHere" class="pop" @click="upHere = false">
      <form enctype="multipart/form-data" name="fileUploadForm" v-on:change.prevent="uplaodFile">
  <input type="file" class="upload_btn2" name="myFile" @change="onFileSelected($event)"/>

    <div class="overlay-layer">Upload photo</div>
</form> 

  </div>
          <div class="active1">
  
          </div>
        </div>
        <h4 class="name1">{{this.user1.firstName}} {{this.user1.lastName}}</h4>
        <p class="info1">{{this.user1.work}}</p>
        <p class="info1">{{this.user1.email}}</p>
        <div class="stats1 row1">
          <div class="stat1 col-xs-4" style="padding-right: 50px;">
            <p class="number-stat1">3,619</p>
            <p class="desc-stat1">Followers</p>
    
          </div>
   
        </div>
        <p class="desc1"></p>
        <div class="social1">
   
        </div>
      </div>
      <div class="right1 col-lg-8">
        <ul class="nav1">
          <li >Vote Sessions</li>        
        </ul>
     
        <div class="row1 gallery1">
          <div class="col-md-4"  v-for="vote in this.votes">
             <router-link v-bind:to="{ name: 'privatevotes',params: { id: vote.entreprise } }" class="">
             <img src="/static/images/votee.jpg"/>
          </router-link>
          </div>
        </div>
      </div>
       </div>
  </div>
</div>
   
</div>
</section>
</template>
<script>
// When the user clicks on div, open the popup

</script>
<script>
import MembresService from "@/services/MembresService";
import axios from "axios";
import EntreprisesService from "@/services/EntreprisesService";
import VotesService from "@/services/VotesServices";

export default {
  name: "privatevote",
  data() {
    return {
      user1:[],
      votes:[],
      image:"",
      upHere : false,
      selectedFile:null
    };
  },
   
  mounted() {
    this.getUser();

  },
  methods: {
    mouseOver: function(){
            this.active = !this.active;   
        },
         uplaodFile() {
    var form = document.forms.namedItem('fileUploadForm');
    var formData = new FormData(form);
    //this.logo=formData;  
    MembresService.updateUserPhoto({
        id: this.$route.params.id,
        photoMembre: this.selectedFile.name   
      })
     EntreprisesService.addImage(formData);
  },
   onFileSelected(event) {
               // this.files.append("file", fileList[0], fileList[0].name);
            console.log(event);
            this.selectedFile=event.target.files[0];
           
            },
   async getUser() {
      const response= await MembresService.getUser({
        id: this.$route.params.id
        });
        //console.log(response.data.user);
        this.user1=response.data.user;
        //this.image='/static/images/'+response.date.user1.photoMembre;
       //this.$router.push({ name: "privatevotes" ,params: { id: this.$route.params.id } });
 const response1= await VotesService.getVote({
        id: this.user1.entreprise
        });
        this.votes=response1.data.vote
console.log(response1.data.vote);
  },
  

  }
};
</script>

<style>


.container1 {
  max-width: 1250px;
  margin: 30px auto 30px;
  padding: 0 !important;
  width: 90%;
  background-color: #fff;
  box-shadow: 0 3px 6px rgba(0,0,0,0.10), 0 3px 6px rgba(0,0,0,0.10);
}
.bod{
    background: #efefef;
}
.header1 {

  height: 100px;
}
.overlay-layer{
    width:200px;
    height:40px;
    position:absolute;
    margin-top:-40px;
    opacity:0.5;
    background-color:#000000;
    z-index:0;
    font-size:25px;
    color:#FFFFFF;
    text-align:center;
    line-height:40px;
}
.upload_btn2{
    position:absolute;
    width:200px;
    height:40px;
    margin-top:-40px;
    z-index:10;
    opacity:0;
}
.header1 i {
  position: relative;
  cursor: pointer;
  right: -96%;
  top: 25px;
  font-size: 18px !important;
  color: #fff;
}


@media (max-width:800px) {
  header {
    height: 150px;
  } 
  
  header i {
    right: -90%;
  }
}

.main1 {
      padding: 20px 20px 0px 20px;
}

.left1 {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.photo1 {
  width: 200px;
  height: 200px;
  margin-top: -120px;
  border-radius: 100px;
  border: 4px solid #fff;
}

.active1 {
  width: 20px;
  height: 20px;
  border-radius: 20px;
  position: absolute;
  right: calc(50% - 70px);
  top: 75px;
  background-color: green;
  border: 3px solid #fff;
}

@media (max-width:990px) {
  .active1 {
    right: calc(50% - 60px);
    top: 50px;
  } 
}

.name1 {
  margin-top: 20px;
  font-family: "Open Sans";
  font-weight: 600;
  font-size: 18pt;
  color: #777;
}

.info1 {
  margin-top: -5px;
  margin-bottom: 5px;
  font-family: 'Montserrat', sans-serif;
  font-size: 11pt;
  color: #aaa;
}

.stats1 {
  margin-top: 25px;
  text-align: center;
  padding-bottom: 20px;
  border-bottom: 1px solid #ededed;
  font-family: 'Montserrat', sans-serif;
}


.number-stat1 {
  padding: 0px;
  font-size: 14pt;
  font-weight: bold;
  font-family: 'Montserrat', sans-serif;
  color: #aaa;
}

.desc-stat1 {
  margin-top: -15px;
  font-size: 10pt;
  color: #bbb;
}

.desc1 {
  text-align: center;
  margin-top: 25px;
  margin: 25px 40px;
  color: #999;
  font-size: 11pt;
  font-family: "Open Sans";
  padding-bottom: 25px;
  border-bottom: 1px solid #ededed;
}

.social1 {
  margin: 5px 0 12px 0;
  text-align: center;
  display: inline-block;
  font-size: 20pt;
}

.social1 i {
  cursor: pointer;
  margin: 0 15px;
}

.social1 i:nth-child(1)  { color: #4267b2; }
.social1 i:nth-child(2)  { color: #1da1f2; }
.social1 i:nth-child(3)  { color: #bd081c; }
.social1 i:nth-child(4)  { color: #36465d; }

.right1 {
  padding: 0 25px 0 25px !important;
}

.nav1 {
  display: inline-flex;
}

.nav1 li {
  margin: 40px 30px 0 10px;
  cursor: pointer;
  font-size: 13pt;
  text-transform: uppercase;
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
  color: #888;
}

.nav1 li:hover, .nav1 li:nth-child(1)  { 
  color: #999;
  border-bottom: 2px solid #999;
}

.follow1 {
  position: absolute;
  right: 8%;
  top: 35px;
  font-size: 11pt;
  background-color: #42b1fa;
  color: #fff;
  padding: 8px 15px;
  cursor: pointer;
  transition: all .4s;
  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
}

.follow1:hover {
  box-shadow: 0 0 15px rgba(0,0,0,0.2), 0 0 15px rgba(0,0,0,0.2);
}

@media (max-width:990px) {
  .nav1 {
    display: none;
  }
  
  .follow1 {
    width: 50%;
    margin-left: 25%;
    display: block;
    position: unset;
    text-align: center;
  }
}
.gallery1  {
  margin-top: 35px;
}

.gallery1 div {
  margin-bottom: 30px;
}

.gallery1 img {
  box-shadow: 0 3px 6px rgba(0,0,0,0.10), 0 3px 6px rgba(0,0,0,0.10);
  width: auto; 
  height: auto;
  cursor: pointer;
  max-width: 100%;
}

</style>
