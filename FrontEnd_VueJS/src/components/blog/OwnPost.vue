<template>
  <div>
    <section class="page-header" data-stellar-background-ratio="1.2">

      <div class="container">

        <div class="row">

          <div class="col-sm-12 text-center">


            <h3>
              Blog Single Post
            </h3>

            <p class="page-breadcrumb">
              <a href="#">Home</a> / <a href="#">Blog</a> / Single Post
            </p>


          </div>

        </div> <!-- end .row  -->

      </div> <!-- end .container  -->

    </section> <!-- end .page-header  -->
    <section class="section-content-block">

      <div class="container">

        <div class="row">

          <div class="col-md-12 col-sm-12">

            <article class="post single-post-inner">

              <div class="post-inner-featured-content">
                <img alt="" :src="'http://localhost:3000/'+image">
              </div>

              <div class="single-post-inner-title">
                <h2>{{title}}</h2>
                <p class="single-post-meta"><i class="fa fa-user"></i>&nbsp; Deborah Beck &nbsp; &nbsp; <i class="fa fa-calendar icon-color" style="color: #FF0000 ;"></i>&nbsp;{{create_date|formatDate}}</p>
              </div>

              <div  class="single-post-inner-content">
                <p v-html="description"></p>
                <social-sharing :url="'http://vote.io'+this.$route.path"
                                :title="title"
                                :description="description"
                                :quote="title"
                                hashtags="vuejs,javascript,framework"
                                twitter-user="vuejs"
                                inline-template>
                  <div>

                    <network style="background-color: #3B5998;border-radius: 15px !important;padding: 5px !important;color: white !important;" network="facebook">
                      <i class="fa fa-facebook"></i> Facebook
                    </network>

                  </div>
                </social-sharing>
              </div>
            </article> <!--  end single-post-container -->
            <div class="comments-area" id="comments">
              <a href="#respond" class="article-add-comments"><i class="fa fa-plus"></i></a>
              <div class="topic-bold-header clearfix">
                <h4>{{comment.length}} comments to this article</h4>
              </div> <!-- end .topic-bold-header  -->




              <ol  class="commentslist" v-for="(c,index) in comment " :key="c._id"> <!--comment-->
                <li>
                  <article class="clearfix">
                    <header>
                      <h5><a href="#">Mahbub Alam Khan</a></h5>
                      <div class="col-md-1 pull-right">
                        <a href="#" data-toggle="dropdown"
                           style="font-size:40px; color:#ccc; left:-10px"
                           aria-haspopup="true">...</a>
                        <div class="dropdown-menu">
                            <li v-if="c.user == aychoucha.data._id">
                              <a data-toggle="modal" @click="deleteComment(c._id, index)">Delete</a>
                            </li>
                        </div>
                      </div>

          <p><span> <i class="fa fa-calendar icon-color">&nbsp {{c.postedAt|formatDate}} </i></span>
                        <button class="btn btn-custom" @click="getReplies(c._id)">
                          Reply
                        </button>
                      </p>
                    </header>

                    <figure class="comment-avatar">
                      <a href="#">
                        <img src="images/user_1.jpg" alt="Avatar">
                      </a>
                    </figure>

                    <p class="waiting-moderation">
                      Your comment is awaiting for moderation.
                    </p>

                    <div class="comment_text">
                      {{c.texte}}
                    </div>

                  </article>
                </li>
                <li> <!--rep comments-->
                  <ol class="commentslist" v-if="clickedId==c._id" v-for="r in replies">
                    <li >
                      <article class="clearfix">
                        <header>
                          <h5>Mahbub Alam Khan</h5>
                          <p><span class="fa fa-calendar icon-color" >on {{r.postedAt|formatDate}}</span></p>
                        <div class="col-md-1 pull-right">

                          <a href="#" data-toggle="dropdown"
                             style="font-size:40px; color:#ccc; left:-10px"
                             aria-haspopup="true">...</a>
                          <div class="dropdown-menu">


                    <li v-if="r.user == aychoucha.data._id">
                        <a data-toggle="modal"
                           @click="deleteReply(r._id,index)">Delete</a></li>


                          </div>
                        </div>

                        </header>

                        <figure class="comment-avatar">
                          <a href="#">
                            <img src="images/user_3.jpg" alt="Avatar">
                          </a>
                        </figure>

                        <div class="comment_text">
                          {{r.texte}}
                        </div>


                      </article>
                    </li>

                  </ol>
                  <div  v-if="clickedId==c._id">

                    <div class="form-group">

                            <textarea class="form-control" rows="5" name="texte" v-model="texteRep"
                                      placeholder="Write Your Comment"></textarea>
                    </div>

                    <div class="form-group">
                      <button type="submit" class="btn btn-custom" @click="addReply(c._id)">Submit Reply</button>
                    </div>

                  </div>
                </li>
              </ol>
              <br>
              <div id="respond">

                <div class="topic-bold-header clearfix">
                  <h4>Leave a comment</h4>
                </div> <!-- end .topic-bold-header  -->

                <form role="form" action="#" method="post" id="comment-form">

                  <div class="form-group">

                    <textarea class="form-control" rows="5" name="texte" v-model="texte" id="texte"
                              placeholder="Write Your Comment">

                    </textarea>
                  </div>

                  <div class="form-group">
                    <button type="button" @click="addComment" class="btn btn-custom">Submit Comment</button>
                  </div>

                </form>


              </div> <!-- end respond-->

            </div> <!-- end comments-area-->

          </div> <!--  end .single-post-container -->


        </div> <!--  end row  -->

      </div> <!--  end container -->

    </section> <!-- end .section-content-block  -->

  </div>


</template>
<style scoped>
  #share-facebook{
    background-color: #000bffdb !important;
    border-radius: 15px !important;
    padding: 5px !important;
    color: white !important;
  }

</style>
<script>
  import PostsService from '@/services/PostsService'
  import moment from 'moment'
  import Vue from 'vue'
  import Reply from "./Reply";


  export default {
    name: 'posts',
    components: {Reply},
    data() {
      return {
        comment: [],
        replies: [],
        clickedId:'',
        image: '',
        title: '',
        description: '',
        create_date: '',


        texte: "",
        idpost: "",
        texteRep: "",
        aychoucha:null



      }
    },
   async mounted() {

 this.aychoucha=await PostsService.getuser(localStorage.getItem('connectedUser'));
      this.PostD()
      Vue.filter('formatDate', function (value) {
        if (value) {
          return moment(String(value)).format('MM/DD/YYYY')
        }
      }), this.getComments()

    },
    methods: {
      async getComments() {

        const response = await PostsService.fetchComments({id: this.$route.params.id})
        
        console.log(response.data);
        this.comment = response.data
      }

      , async PostD() {
        const response = await PostsService.displayPost({
          id: this.$route.params.id
        })
        this.title = response.data.title
        this.description = response.data.description
        this.image = response.data.image


        this.create_date = response.data.create_date

      }
      , async addComment() {


        await PostsService.addCom({
          idpost: this.$route.params.id,
          texte: this.texte


        })
        this.texte="";
        this.getComments()

      },
      async addReply(id) {


        await PostsService.addReply({
          idcomment: id,
          texte: this.texteRep


        })
        this.texteRep="";
        this.getReplies(id);
      },
      async deleteComment(id, index) {
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
            PostsService.deleteComment(id);
            this.$swal(
              'Supprimer!',
              'Ok, Cette publication est supprimée.',
              'success'
            );
            this.posts.splice(index, 1);
            this.getComments();
          }
          this.getComments();

        })
      }, async deleteReply(id, index) {
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

            PostsService.deleteReply(id);

            this.$swal(
              'Supprimer!',
              'Ok, Cette publication est supprimée.',
              'success',

            );
            this.posts.splice(index, 1);
            this.getComments()
          }


        })
      },
      async getReplies(id) {
        const response = await PostsService.fetchReplies(id);
        this.replies = response.data;
        this.clickedId=id;
        console.log(this.replies);

      }
    }
  }

</script>
