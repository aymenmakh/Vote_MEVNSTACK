<template>
 <div>
   <h1>{{content}}</h1>
 </div>
</template>

<script>
  import PostsService from '@/services/PostsService'
  import moment from 'moment'
  import Vue from 'vue'
  import SocialSharing from 'vue-social-sharing'

  export default {
    name: 'reply',
    props:['content'],
    data() {
      return {
        posts: []
      }
    }
  }
</script>
