/*eslint-disable*/
import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import User from '../components/user/home'
import Login from '../components/user/login'
import Profil from '../components/user/profil'
import Update from '../components/user/update'
import Phone from '../components/user/phone'
import verify from '../components/user/verify'
import vote from '../components/user/vote'
import token from '../components/user/token'
import result from '../components/user/result'
import Campaign from '../components/campaign/home'
import AddCampaign from '../components/campaign/AddCampaign'
import EditCampaign from '../components/campaign/EditCampaign'
import DetailCampaign from '../components/campaign/DetailCampaign'
import AddEvent from '../components/event/AddEvent'
import DetailEvent from '../components/event/DetailEvent'
import Entreprise from '../components/entreprise/home'
import Home from '../components/home'
import MembersProfile from '../components/entreprise/MembreProfil'
import Entreprise1 from '../components/entreprise/Entreprise'
import Membres from '../components/entreprise/membres/Membre'
import AddVote from '../components/entreprise/vote/NewVote'
import Votes from '../components/entreprise/vote/VoteSession'
import AddEntrepriseDesign from '../components/entreprise/EntrepriseDesign'
import AddEntreprise from '../components/entreprise/NewEntreprise'
import EditEntreprise from '../components/entreprise/EditEntreprise'
import EditPost from '../components/blog/EditPost'
import Blog from '../components/blog/Posts'
import NewPost from '../components/blog/addPost'
import OwnPost from '../components/blog/OwnPost'

import login from '../components/entreprise/login'
import VeeValidate from 'vee-validate'

import About from '../components/about'
import VuePassword from 'vue-password'

import moment from 'moment'
import VueSweetalert2 from 'vue-sweetalert2';
Vue.use(VueSweetalert2)
Vue.use(SocialSharing);
// import BlogRouter from '@/components/blog/BlogRouter';
Vue.use(Router)
Vue.use(require('vue-moment'))
Vue.use(VeeValidate)
Vue.component(VuePassword)
export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/user',
      name: 'user',
      component: User
    },
    {
      path: '/posts/blog',
      name: 'blog',
      component: Blog
    },
    {
      path: '/post/:id',
      name: 'OwnPost',
      component: OwnPost
    },
    {
      path: '/posts/new',
      name: 'NewPost',
      component: NewPost
    }, {
      path: '/posts/:id',
      name: 'EditPost',
      component: EditPost
    },

    {
      path: '/user/profil/:cin',
      name: 'profil',
      component: Profil
    },
    {
      path: '/posts/new',
      name: 'NewPost',
      component: NewPost
    },
    {
      path: '/user/verify/:request',
      name: 'verify',
      component: verify
    },
    {
      path: '/user/vote',
      name: 'vote',
      component: vote
    },
    {
      path: '/user/token',
      name: 'token',
      component: token
    },
    {
      path: '/user/result',
      name: 'result',
      component: result
    },
    {
      path: '/user/update/:cin',
      name: 'update',
      component: Update
    },
    {
      path: '/entreprises',
      name: 'entreprises'
    },
    {
      path: '/campaign/home',
      name: 'campaignHome',
      component: Campaign
    },
    {
      path: '/user/login',
      name: 'login',
      component: Login
    },
    {
      path: '/user/phone',
      name: 'phone',
      component: Phone
    },

    {
      path: '/campaign/AddCampaign',
      name: 'AddCampaign',
      component: AddCampaign
    },
    {
      path: '/campaign/EditCampaign/:id',
      name: 'EditCampaign',
      component: EditCampaign
    },
    {
      path: '/campaign/OneCampaign/:id',
      name: 'DetailCampaign',
      component: DetailCampaign
    },
    {
      path: '/event/AddEvent/:id',
      name: 'AddEvent',
      component: AddEvent
    },
    {
      path: '/event/DetailEvent/:id',
      name: 'DetailEvent',
      component: DetailEvent
    },
    {
      path: '/entreprise',
      name: 'entreprise',
      component: Entreprise
    },
    {
      path: '/entreprises/new/:id/privatevote',
      name: 'privatevote',
      component: AddVote
    },
    {
      path: '/entreprises/new/:id/privatevotes',
      name: 'privatevotes',
      component: Votes
    },
    {
      path: '/entreprises/new/:id/interface',
      name: 'DetailEntreprise',
      component: Entreprise1
    },
    {
      path: '/entreprises/new/:id',
      name: 'DesignEntreprise',
      component: AddEntrepriseDesign
    },
    {
      path: '/entreprises/login',
      name: 'login',
      component: login
    },
    {
      path: '/entreprises/profil/:id',
      name: 'MembersProfile',
      component: MembersProfile
    },
    {
      path: '/entreprises/new',
      name: 'NewEntreprise',
      component: AddEntreprise
    },
    {
      path: '/entreprises/:id',
      name: 'EditEntreprise',
      component: EditEntreprise
    },
    {
      path: '/entreprises/:id/membres',
      name: 'membres',
      component: Membres
    },
    {
      path: '/campaign',
      name: 'campaign',
      component: Campaign
    },
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '*',
      redirect: '/campaing/home'
    }

  ]
})
