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
    <div class="posts">
      <section class="main-content">

        <div class="container">

          <div class="row">

            <div class="col-md-8 col-sm-12">

              <div v-for="post in posts" :key="post._id" class="post single-post">
               
                <div class="single-post-content">

                                <a title="" href="#">
                                   <img alt="" :src="'http://localhost:3000/'+post.image"/>
                                </a>

                            </div>
                <div class="single-post-content">
 <div class="col-md-1 pull-right">   

                    <!-- delete button goes here -->
                    <a href="#" data-toggle="dropdown"
                    style="font-size:40px; color:#ccc; left:-10px"
                     aria-haspopup="true">...</a>
                    <div class="dropdown-menu"   >

                      
                      <li  v-if="post.user == aychoucha.data._id"><a data-toggle="modal" 
                       @click="deletePosts(post._id,index)">Delete</a></li>
                       <li   v-if="post.user == aychoucha.data._id"> 
            
                       <router-link v-bind:to="{ name: 'EditPost', params: { id: post._id } }">Edit</router-link></li>
                     
                    </div>
                    </div>

                </div> <!-- end .bd-view  -->
                <div class="single-post-title">

                  <h2>
                    <!-- <a href="#" class="supp" @click="deletePub(pub._id,index)">Delete</a></center> -->

                    <br> <router-link  v-bind:to="{ name: 'OwnPost', params: { id:post._id } }">{{ post.title }}
                </router-link>
                    
                  </a>
                  </h2> <!--  end blog-post-title  -->

                  <p class="single-post-meta">

                    <i class="fa fa-user"></i>
                    &nbsp;
                    {{post.username}}
                    

                    &nbsp;<i class="fa fa-calendar-o "></i>
                    &nbsp; {{post.create_date|formatDate}}

                  </p>

                  <div v-html="post.description">


                  </div>


                </div>
                
                

               

            
              </div>

            </div>
          </div>
        </div>
      </section>


    </div>
  </div>
  </div>
</template>

<script>
  import PostsService from '@/services/PostsService'
  import moment from 'moment'
  import Vue from 'vue'
  import SocialSharing from 'vue-social-sharing'

  export default {
    name: 'posts',
    data() {
      return {
        posts: [],
        aychoucha:null
              }
    },
   async mounted() {
  this.aychoucha=await PostsService.getuser(localStorage.getItem('connectedUser'));
      this.getPosts()
      Vue.filter('formatDate', function (value) {
        if (value) {
          return moment(String(value)).format('MM/DD/YYYY')
        }
      })
    },
    methods: {
      async getPosts() {

        const response = await PostsService.fetchPosts()
        var ppp = response.data.posts
        ppp.forEach(async element  =>  {
          const response = await PostsService.getuserid(element.user)
          console.log("cccccccccccccccccc"+response.data.firstName)
          element.username=response.data.firstName
          this.posts.push(element);
        });
      },
      async deletePosts(id, index) {
        this.$swal({
          title: 'Êtes-vous sûr ?',
          text: "Attention, cette operation est irréversible ",
          type: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Supprimer!'
        }).then((result) => {
          if (result.value) {
            PostsService.deletePost(id);
            this.$swal(
              'Supprimer!',
              'Ok, Cette publication est supprimée.',
              'success'
            );
            this.posts.splice(index, 1);
            this.$router.push({name: 'blog'})
          }


        })
      }
    }
  }
</script>
