
<template>
<div>
    
<header class="main-header clearfix" data-sticky_header="true">

            <div class="top-bar hidden-xs hidden-sm visible-lg visible-md clearfix">

                <div class="container">

                    <div class="row">

                        <div class="col-md-6 col-sm-12">

                            <p>
                                <span><i class="fa fa-phone"></i> <strong>Call Us:</strong> +880-1891-82709</span>
                                 <span>&nbsp;<i class="fa fa-envelope-o"></i> <strong>Email: </strong> support@site.com</span>
                            </p>

                        </div>

                        <div class="col-md-4 col-sm-12">
                            <div class="top-bar-social">
                                <a href="#"><i class="fa fa-facebook rounded-box"></i></a>
                                <a href="#"><i class="fa fa-twitter rounded-box"></i></a>
                                <a href="#"><i class="fa fa-google-plus rounded-box"></i></a>
                                <a href="#"><i class="fa fa-instagram rounded-box"></i></a>
                                <a href="#"><i class="fa fa-youtube rounded-box"></i></a>
                            </div>   
                        </div> 
    
                        <div class="col-lg-2 col-md-2" v-if='userConnected != null'>
                            <a href="" class=" free-estimate " v-on:click="logout">Logout</a>
                        </div>

                          <div class="col-lg-2 col-md-2" v-else>
                            <a href="/user/login" class="free-estimate" v-on:click="login">Login</a>
                        </div>
                        

                    </div>

                </div> <!--  end .container -->

            </div> <!--  end .top-bar  -->

            <section class="header-wrapper navgiation-wrapper">

                <div class="navbar navbar-default">			
                    <div class="container">

                        <div class="navbar-header">
                            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                                <span class="icon-bar"></span>
                                <span class="icon-bar"></span>
                                <span class="icon-bar"></span>
                            </button>
                            <a class="logo" href="index.html"><img alt="" src="../static/images/logo1.png"></a>
                        </div>

                        <div class="navbar-collapse collapse">
                            <ul class="nav navbar-nav navbar-right">
                                
                                <li>
                                    <a  href="/">Home</a>
                                </li>

                                
                              <li>
                                    <a href="/user/login">User</a>
                                   
                                </li>

                                <li>
                                    <a href="#">Campaign</a>
                                    <ul class="drop-down">
                                        <li><a href="/campaign/AddCampaign">Add Your Campaign</a></li>
                                        <li><a href="/campaign/home">All Campaigns</a></li>
                                    </ul>
                                </li>

                                   <li>
                                    <a href="/entreprises/new">Entreprise</a>
 
                                 
                                </li>


                                

                                <li>
                                    <a href="#">Blog</a>
                                    <ul class="drop-down">
                                        <li><a href="/posts/new">Add Posts</a></li> 
                                        <li><a href="/posts/blog">Single Page</a></li>
                                    </ul>
                                </li>

                              <!--  <li><a href="/about">About us</a></li> -->
                            </ul>
                        </div>
                    </div>
                </div>

            </section>

        </header> <!-- end main-header  -->
    <router-view/>
  </div>

</template>

<script>


export default {
  name: "App",
  data: () => {
    return {
      
      userConnected: ""
    };
  },

  methods: {
    home: function() {
      this.$router.push({ name: "home" });
    },
    logout : function(){
       localStorage.removeItem('connectedUser');
        this.$router.push({ name: "home" });
    },
     login : function(){
       
        this.$router.push({ name: "login" });
    }
  },
  created: function() {
      // localStorage.removeItem('connectedUser');
    
   this.userConnected = localStorage.getItem('connectedUser');
    console.log("local storige :" + this.userConnected);
  }
};
</script>
<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
