<template>
  
       <div class="container-fluid">
           <div class="entreprises">
    <h1>Entreprises</h1>
    <div v-if="entreprises.length > 0"  class="table-wrap">
      <div>
        <router-link v-bind:to="{ name: 'NewEntreprise' }" class="">Add Entreprise</router-link>
      </div>
      <table>
        <tr>
          <td>Title</td>
          <td width="">Description</td>
          <td width="">Secteur</td>
          <td width="">Email</td>
          <td width="">Code</td>
          <td width="">logo</td>
          <td width="">Couleur</td>
          
          <td width="100" align="center">Action</td>
        </tr>
        <tr v-for="entreprise in entreprises" :key="
        entreprise.nom">
          <td>{{ entreprise.nom }}</td>
          <td>{{ entreprise.description }}</td>
           <td>{{ entreprise.secteur }}</td>
            <td>{{ entreprise.email }}</td>
             <td>{{ entreprise.code }}</td>
            <td>{{ entreprise.logo }}</td>
            <td>{{ entreprise.couleurFav }}</td>

          <td align="center">
            <router-link v-bind:to="{ name: 'EditEntreprise', params: { id: entreprise._id } }">Edit</router-link> |
            <a href="#" @click="deleteEntreprise(entreprise._id)">Delete</a>
          </td>
        </tr>
      </table>
    </div>
    <div v-else>
      There are no entreprises.. Lets add one now <br /><br />
      <router-link v-bind:to="{ name: 'NewEntreprise' }" class="add_entreprise_link">Add Entreprise</router-link>
    </div>
  </div>
       </div>

</template>

<script>
import EntreprisesService from '@/services/EntreprisesService'

export default {
  name: 'entreprises',
  data () {
    return {
      entreprises: []
    
    }
  },
  mounted () {
    this.getEntreprises()
  },
  methods: {
    async getEntreprises () {
      const response = await EntreprisesService.fetchEntreprises()
      this.entreprises = response.data.entreprises
    },
   
    async deleteEntreprise (id) {
      await EntreprisesService.deleteEntreprise(id)
      this.$router.push({ name: 'entreprises' })
    }
  }
}
</script>
<style type="text/css">
.table-wrap {
  width: 60%;
  margin: 0 auto;
  text-align: center;
}
table th, table tr {
  text-align: left;
}
table thead {
  background: #f2f2f2;
}
table tr td {
  padding: 10px;
}
table tr:nth-child(odd) {
  background: #f2f2f2;
}
table tr:nth-child(1) {
  background: #4d7ef7;
  color: #fff;
}
a {
  color: #4d7ef7;
  text-decoration: none;
}
a.add_entreprise_link {
  background: #4d7ef7;
  color: #fff;
  padding: 10px 80px;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: bold;
}
</style>
