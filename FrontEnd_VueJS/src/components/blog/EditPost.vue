<template>
  <div>
    <div class="page-header" data-stellar-background-ratio="1.2">
      <div class="container">

        <div class="row">

          <div class="col-sm-12 text-center">


            <h3>
              Blog Posts
            </h3>

            <p class="page-breadcrumb">
              <a href="#">Home</a> / Blog
            </p>


          </div>

        </div>

      </div>
    </div>
    <div class="section-content-block">
      <div class="container">
        <div class="row">
          <div class="col-sm-12">
            <div class="posts donation-form-wrapper">
              <h4>Edit Post</h4>

              <div class="donation_form" id="donation_form">
                <div class="form-group">
                  <label for="title" class="col-sm-2 control-label">Title : </label>
                  <div class="col-md-6 col-sm-10">
                    <input class="form-control" name="title" placeholder="TITLE" v-model="title">
                  </div>
                </div>
                <div class="form-group">
                  <label for="title" class="col-sm-2 control-label">Description : </label>
                  <div class="col-md-6 col-sm-10">
                   
                    <Vueditor v-html="description" ref="editor" class="form-control" placeholder="DESCRIPTION" ></Vueditor>
                  </div>
                </div>

 

                <div class="donation-form-info-2">
                  <input type="submit" name="addPost" value="Edit Post" class="btn btn-danger btn-lg btn-submit-donation"
                         @click="EditPost"/>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
  /*eslint-disable*/
  import PostsService from '@/services/PostsService'
  import Vue from 'vue'
  import Vuex from 'vuex'
  import Vueditor from 'vueditor'

  import 'vueditor/dist/style/vueditor.min.css'

  let config = {
    toolbar: [
      'removeFormat', 'undo', '|', 'elements', 'fontName', 'fontSize', 'foreColor', 'backColor'
    ],
    fontName: [
      {val: 'arial black'},
      {val: 'times new roman'},
      {val: 'Courier New'}
    ],
    fontSize: ['12px', '14px', '16px', '18px', '0.8rem', '1.0rem', '1.2rem', '1.5rem', '2.0rem'],
    uploadUrl: ''
  };

  Vue.use(Vuex);
  Vue.use(Vueditor, config);
  // create a root instance
  new Vue({
    el: '#editorContainer'
  });
  export default {
    name: 'NewPost',
    data() {
      return {
        title: '',
        description: '',
       
      }
    },
    mounted () {
    this.getPost()
  },
    methods: {
     
   
 

       async getPost () {
      const response = await PostsService.displayPost({
          id: this.$route.params.id
        })
        this.title = response.data.title
        this.description = response.data.description
    },
    async EditPost () {
      await PostsService.updatePost({
        id: this.$route.params.id,
        title: this.title,
        description: this.description,
        
      })
      this.$router.push({ name: 'blog' })
    }
    }
  }
</script>
