import Api from '@/services/Api'

export default {
  fetchPosts () {
    return Api().get('/posts')
  },
   fetchComments (params) {
    return Api().get('posts/comment/'+ params.id)
  },
   getuser (ncin) {
    return Api().get('user/getUser/'+ ncin)
  },
  getuserid (ncin) {
    return Api().get('user/getUserid/'+ ncin)
  },
  fetchReplies (id) {
    return Api().get('posts/reply/'+ id)
  },

  addPost (params) {
    return Api().post('posts/add', params)
  },

 deletePost (id) {
    return Api().delete('/posts/'+ id+'/delete')
  },
  deleteComment (id) {
    return Api().delete('/posts/'+ id+'/deleteComment')
  },
  deleteReply (id) {
    return Api().delete('/posts/'+ id+'/deleteReply')
  },

displayPost (params) {
    return Api().get('/posts/post/' +params.id)
  },

addCom (params)
{ return Api().post('posts/addcomment', params)},

addReply(params)
{ return Api().post('posts/addReply', params)},
addImage (params) {
    return Api().post('posts/uploadimage', params)
  },

   updatePost (params) {
    return Api().put('posts/edit/' + params.id, params)
  },

  

}
