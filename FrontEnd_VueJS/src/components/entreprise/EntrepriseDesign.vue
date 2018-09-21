<template>
       <section class="section-content-block">

 <div class="container">
           
                    <div class="row">
    
                        <div class="col-sm-12">
                            
                            <div class="donation-form-wrapper">

                               


                                    <div class="donation-form-info-2">
                                        <h4>Enterprise's design </h4>
        
                                        <div class="form-group">
                                            <label for="country" class="col-sm-2 control-label">Interface Colors: </label>
                                            <div class="col-sm-10">
                                                <select  v-model="couleurFav">
                                              <option disabled value="">Choose</option>
                                              <option value="rb">Red&Black</option>
                                              <option value="by">Blue&Yellow</option>
                                              <option  value="bw">White&Black</option>
                                              <option value="ow">Orange&White</option>
                                              
                                       </select>
                                            </div>
                                        </div>                            

                                        <div class="form-group">
                                            <label for="postal_code" class="col-sm-2 control-label">Logo:  </label>
                                            <div class="col-md-6 col-sm-10">
<form enctype="multipart/form-data" name="fileUploadForm" v-on:change.prevent="uplaodFile">
  <input type="file" name="myFile" @change="onFileSelected($event)"/>

</form>                                            </div>
<div class="imgs">
  <img :src="this.img" alt="image">
</div>
                                        </div>


                                        <div class="checkbox">
                                           
                                        </div>

                                      

                                    </div> <!-- end .donation-form-info-2  -->

                                    <div class="donation-form-info-2">
                                      
                                                <button class="app_entreprise_btn" @click="editEntreprise">Add</button>

                                    </div> <!-- end .donation-form-info-4   -->    


                              

                            </div> <!--  end .donation-form-wrapper -->
                                
                   
                        </div> <!--  end col-sm-12  -->
                   
                    </div> <!-- end row  -->
               
            </div> 
            </section> 
</template>

<script>
import EntreprisesService from "@/services/EntreprisesService";
import MembresService from "@/services/MembresService";
    import axios from "axios";




export default {
  name: "NewEntreprise",
  data() {
    return {
   
      couleurFav:"",
      selectedFile:null,
      img:'',
      code:''

    };
  },
   
  mounted() {

  },
  methods: {
  
    
     uplaodFile() {
    var form = document.forms.namedItem('fileUploadForm');
    var formData = new FormData(form);
     EntreprisesService.addImage(formData);
  },
   onFileSelected(event) {
               // this.files.append("file", fileList[0], fileList[0].name);
           // console.log(event);

            this.selectedFile=event.target.files[0]   ;  
                   this.img='http://localhost:3000/'+this.selectedFile.name;

            },
            
    async editEntreprise() {
 
      await EntreprisesService.updateEntreprise({
        id: this.$route.params.id,
        logo:this.selectedFile.name,
        couleurFav:this.couleurFav
       
      });
           
      this.$router.push({ name: "DetailEntreprise" ,params: { id: this.$route.params.id } });
    }
  }
};
</script>

<style type="text/css">


.app_entreprise_btn {
  background: #4d7ef7;
  color: #fff;
  padding: 10px 80px;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: bold;
  width: 520px;
  border: none;
  cursor: pointer;
}
.uploader{
  width: 400px;
  height:550px;
  display: flex;
  border-radius: 6px;
  box-shadow: 1px 2px 19px rgba(195,195,195,0.43);
  flex-direction: column-reverse;
  background: #fff;
}
.uploader *{
  box-sizing: border-box;
}
.uploader-action{
  padding: 20px;
  background: #f1f5ff;
  cursor: pointer;
}
.uploader-action .dz-message{
  color: #94a7c2;
  text-align: center;
  padding: 20px 40px;
}
.imgs{
width: 10%;
height: 10%;
}
</style>
