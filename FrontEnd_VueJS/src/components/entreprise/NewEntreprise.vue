<template>
       <section class="section-content-block">

 <div class="container">
           
                    <div class="row">
    
                        <div class="col-sm-12">
                            
                            <div class="donation-form-wrapper">

                               


                                    <div class="donation-form-info-2">
                                        <h4>Enterprise Information</h4>
                                        <div class="form-group">
                                            <label for="first_name" class="col-sm-2 control-label">Name: </label>
                                            <div class="col-md-6 col-sm-10">
                                                <input type="text" class="form-control" v-model="nom" name="first_name" id="first_name"/>
                                            </div>
                                        </div>

                                        <div class="form-group">
                                            <label for="secteur" class="col-sm-2 control-label">Activity: </label>
                                            <div class="col-md-6 col-sm-10">
<select v-model="secteur">
  <option disabled value="">Choose</option>
  <option>Agriculture</option>
  <option>Finances</option>
  <option>Informatique</option>
  <option>Medecine</option>
  <option>Construction</option>
  <option>Education</option>
</select>                                            </div>
                                        </div>
                                        
                                       <div class="form-group">
                                            <label for="email" class="col-sm-2 control-label">Enterprise Code: </label>
                                            <div class="col-md-6 col-sm-10">
                                                <input type="text" class="form-control" v-validate="'required|numeric'" v-model="code" name="code"/>
                                            <i v-show="errors.has('phone')" class="fa fa-warning"></i>
                                           <span v-show="errors.has('code')" class="help is-danger">{{ errors.first('code') }}</span>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label for="email" class="col-sm-2 control-label">Email: </label>
                                            <div class="col-md-6 col-sm-10">
                                                <input type="text" v-validate="'required|email'" class="form-control" v-model="email" name="email"/>
                                              <span v-show="errors.has('email')" class="help is-danger">{{ errors.first('email') }}</span>

                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label for="phone" class="col-sm-2 control-label">Phone: </label>
                                            <div class="col-md-6 col-sm-10">
                                                <input type="text" class="form-control" id="phone" name="phone" v-model="phone"/>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label for="description" class="col-sm-2 control-label">Description: </label>
                                            <div class="col-md-6 col-sm-10">
                                              <textarea rows="3" cols="60"  v-model="description"></textarea>
                                            </div>
                                        </div>
                                        
                                        <div class="form-group">
                                            <label for="country" class="col-sm-2 control-label">Country: </label>
                                            <div class="col-sm-10">
                                                <select id="country" name="country" v-model="country">
                                                    <option selected="selected" disabled value="">Your country</option>
                                                    <option value="colombia">Colombia</option>
                                                <option value="egypt">Egypt</option>
                                                <option value="france">France</option>
                                                <option value="india">India</option>
                                                <option value="iraq">Iraq</option>
                                                <option value="italy">Italy</option>
                                                <option value="japan">Japan</option>
                                                <option value="mexico">Mexico</option>
                                                <option value="portugal">Portugal</option>
                                                <option value="tunisia">Tunisia</option>
                                                <option value="united kingdom">United Kingdom</option>
                                                </select>
                                            </div>
                                        </div>

                                     

                                        <div class="form-group">
                                            <label for="postal_code" class="col-sm-2 control-label">Members List:  </label>
                                            <div class="col-md-6 col-sm-10">
<form enctype="multipart/form-data" name="fileUploadForm" v-on:change.prevent="uplaodFile">
  <input type="file" name="myFile" @change="onFileSelected($event)"/>

</form>                                            </div>
                                        </div>


                                        <div class="checkbox">
                                           
                                        </div>

                                      

                                    </div> <!-- end .donation-form-info-2  -->

                                    <div class="donation-form-info-2">
                                      
                                                <button class="app_entreprise_btn" @click="addEntreprise">Add</button>

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
      nom: "",
      description: "",
      secteur:"",
      email:"",
      logo:"",
      phone:"",
      country:"",
      couleurFav:"",
      code:"",
      selectedFile:null    
    };
  },
   
  mounted() {

  },
  methods: {
    
     uplaodFile() {
    var form = document.forms.namedItem('fileUploadForm');
    var formData = new FormData(form);
    //this.logo=formData;
     EntreprisesService.addFile(formData);
  },
   onFileSelected(event) {
               // this.files.append("file", fileList[0], fileList[0].name);
            console.log(event);
            this.selectedFile=event.target.files[0]
            },
            
    async addEntreprise() {
 
      await EntreprisesService.addEntreprise({
        nom: this.nom,
        description: this.description,
        secteur:this.secteur,
        email:this.email,
        membres:this.selectedFile.name,
        code:this.code,
        phone:this.phone,
        country:this.country
       
      });
           
      this.$router.push({ name: "DesignEntreprise" ,params: { id: this.code } });
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

</style>
