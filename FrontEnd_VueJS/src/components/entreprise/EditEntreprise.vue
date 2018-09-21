<template>
  <div class="entreprises">
    <h1>Edit entreprise</h1>
      <div class="form">
        <div>
          <input type="text" name="nom" placeholder="NOM" v-model="nom">
        </div>
        <div>
          <textarea rows="15" cols="15" placeholder="DESCRIPTION" v-model="description"></textarea>
        </div>
        <div>
          <button class="app_entreprise_btn" @click="updateEntreprise">Update</button>
        </div>
      </div>
  </div>
</template>

<script>
import EntreprisesService from '@/services/EntreprisesService'
export default {
  name: 'EditEntreprise',
  data () {
    return {
      nom: '',
      description: ''
    }
  },
  mounted () {
    this.getEntreprise()
  },
  methods: {
    async getEntreprise () {
      const response = await EntreprisesService.getEntreprise({
        id: this.$route.params.id
      })
      this.nom = response.data.nom
      this.description = response.data.description
    },
    async updateEntreprise () {
      await EntreprisesService.updateEntreprise({
        id: this.$route.params.id,
        nom: this.nom,
        description: this.description
      })
      this.$router.push({ name: 'entreprises' })
    }
  }
}
</script>
<style type="text/css">
.form input, .form textarea {
  width: 500px;
  padding: 10px;
  border: 1px solid #e0dede;
  outline: none;
  font-size: 12px;
}
.form div {
  margin: 20px;
}
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
</style>