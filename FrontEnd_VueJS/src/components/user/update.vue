<template>

                               <section class="section-content-block">
       
            <div class="container">
           
                    <div class="row">
    
                        <div class="col-sm-12">
                            
                            <div class="donation-form-wrapper">

                           

                              

                                    <div class="donation-form-info-2">
                                        <h4>Donor Information</h4>
                                        <div class="form-group">
                                            <label for="first_name" class="col-sm-2 control-label"> CIN </label>
                                            <div class="col-md-6 col-sm-10">
                                                <input type="text" disabled  class="form-control"  v-model="cin"/>
                                            </div>
                                        </div>

                                        <div class="form-group">
                                            <label for="last_name" class="col-sm-2 control-label">First Name: </label>
                                            <div class="col-md-6 col-sm-10">
                                                <input type="text" class="form-control" id="last_name" name="last_name"  v-model="firstName"/>
                                            </div>
                                        </div>
                                        
                                        
                                        <div class="form-group">
                                            <label for="email" class="col-sm-2 control-label">last Name : </label>
                                            <div class="col-md-6 col-sm-10">
                                                <input type="text" class="form-control"   v-model="lastName"/>
                                            </div>
                                        </div>
                                        
                                        <div class="form-group">
                                            <label for="address" class="col-sm-2 control-label">Address: </label>
                                            <div class="col-md-6 col-sm-10">
                                                <input type="text" class="form-control" id="address" name="address"  v-model="addressActuel"/>
                                            </div>
                                        </div>

                                        <div class="form-group">
                                            <label for="phone" class="col-sm-2 control-label">Profession: </label>
                                            <div class="col-md-6 col-sm-10">
                                                <input type="text" class="form-control" id="phone" name="phone"  v-model="proffession"/>
                                            </div>
                                        </div>
                                        
                               

                                       

                                        <div class="form-group">
                                            <label for="postal_code" class="col-sm-2 control-label">photo </label>
                                               <form enctype="multipart/form-data" name="fileUploadForm" v-on:change.prevent="uplaodFile">
                                                <div class="col-md-6 col-sm-10">
                                              <input type="file" name="myFile" @change="onFileSelected($event)"/>
                                              </div>
                                              </form>
                                        </div>


                                        <div class="checkbox">
                                            
                                        </div>

                                     
                                    </div> <!-- end .donation-form-info-2  -->

                                    <div class="donation-form-info-2">
                                        <input type="submit" v-on:click="edit" name="donate_now" value="Update Now" class="btn btn-danger btn-lg btn-submit-donation"/>
                                    </div> <!-- end .donation-form-info-4   -->    


                            

                            </div> <!--  end .donation-form-wrapper -->
                                
                   
                        </div> <!--  end col-sm-12  -->
                   
                    </div> <!-- end row  -->
               
            </div> <!--  end container -->
       
      </section> <!-- end .main-content  -->

      
  </template>

<script>
import Service from "../../services/UserServices";
export default {
  name: 'update',
  data () {
    return {
       cin: "",
      firstName: "",
      lastName: "",
      birth: "",
      addressActuel: "",
      proffession: "",
      photo : "",    }
  },
  methods : {
         async edit () {
      await Service.put({
      cin : this.$route.params.cin,
      firstName : this.firstName,
      lastName: this.lastName,
      birth: this.birth,
      addressActuel: this.addressActuel,
      photo : this.photo.name
      })
        this.$router.push({ name: "profil", params: { cin: this.cin } });
    },
     uplaodFile() {
    var form = document.forms.namedItem('fileUploadForm');
    var formData = new FormData(form);
    //this.logo=formData;
     Service.addFile(formData);
  },
   onFileSelected(event) {
               // this.files.append("file", fileList[0], fileList[0].name);
            console.log(event);
            this.photo=event.target.files[0]
            },
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
        this.photo = "http://localhost:3000/images/"+response.data.photo;
        console.log(this.photo);
        //  localStorage.removeItem('connectedUser');
        //   this.userConnected = localStorage.getItem('connectedUser');
      });
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
