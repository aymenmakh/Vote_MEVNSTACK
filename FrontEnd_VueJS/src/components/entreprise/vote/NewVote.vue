<template>
     <section class="section-content-block">
 <div class="container">
           
                    <div class="row">
    
                        <div class="col-sm-12">
                            
                            <div class="donation-form-wrapper">
               <div class="donation-form-info-2">
                                        <h4>Vote Session Information</h4>
                                        <div class="form-group">
                                            <label for="first_name" class="col-sm-2 control-label">Name: </label>
                                            <div class="col-md-6 col-sm-10">
          <input type="text" name="nom" placeholder="Nom" class="form-control" v-model="nom">
                                            </div>
                                        </div>

                                        
                                       <div class="form-group">
                                            <label for="email" class="col-sm-2 control-label">Decription: </label>
                                            <div class="col-md-6 col-sm-10">
          <textarea rows="5" cols="5" placeholder="Description" class="form-control" v-model="description"></textarea>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label for="email" class="col-sm-2 control-label">Starting Date: </label>
                                            <div class="col-md-6 col-sm-10">
          <input type="date" class="form-control" name="date_debut" placeholder="date_fin" v-model="date_debut">
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label for="phone" class="col-sm-2 control-label">Ending Date: </label>
                                            <div class="col-md-6 col-sm-10">
          <input type="date" class="form-control" name="date_fin" placeholder="date_fin" v-model="date_fin">
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label for="description" class="col-sm-2 control-label">Election for: </label>
                                            <div class="col-md-6 col-sm-10">
                                               <div>
              <table class="my_table">
        <tr>
          <th>Membres :</th>

          <th width="100" align="center"></th>
        </tr>
        <tr v-for="(membre) in this.membres" :key="
        membre.nom">
          <td>{{ membre.nom }}</td>
      

          <td align="center">
<input type="checkbox" name="elu" :value="membre" v-model="elu">    

      </td>
        </tr>
      </table>     
        </div>
                                            </div>
                                        </div>
                                        
                                        <div class="checkbox">
                                           
                                        </div>
                                    </div> <!-- end .donation-form-info-2  -->
                                    <div class="donation-form-info-2">                                   
 <button class="app_entreprise_btn" @click="addVote">Add</button>
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
import VoteService from "@/services/VotesServices";

    import axios from "axios";




export default {
  name: "privatevote",
  data() {
    return {
      nom: "",
      description: "",
      membres: [],
      date_fin:"",
      date_debut:"",
      elu:[]    
    };
  },
   
  mounted() {
    this.getMembres();

  },
  methods: {
   
    async addVote() {
      await VoteService.addVote({
        nom: this.nom,
        description: this.description,
        date_debut:this.date_debut,
        date_fin:this.date_fin,
        elu:this.elu,
        entreprise:this.$route.params.id
      });
           console.log(this.elu);
      this.$router.push({ name: "privatevotes" ,params: { id: this.$route.params.id } });
    },
    async getMembres () {
      const response = await MembresService.fetchMembre({
        id: this.$route.params.id
      })
      this.membres = response.data.membres
  
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
table {
  border-collapse: collapse;
  width: 50%;
}
 th {
  background: #ccc;
}

th, td {
  border: 1px solid #ccc;
  padding: 8px;
}



tr:hover {
  background: #d1d1d1;
}
</style>
