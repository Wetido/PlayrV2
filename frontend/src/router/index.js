import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/home/Home.vue";
import About from "../views/about/About.vue";
import Signup from "../views/signup/SignUp.vue";
import SignIn from "../views/signin/SignIn.vue";
import Map from "../components/Map.vue";
import EditPersonalData from "../views/editPersonalData/EditPersonalData"
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    component: About
  },
  {
    path: "/signup",
    name: "SignUp",
    component: Signup
  },
  {
    path: "/signin",
    name: "signIn",
    component: SignIn
  },
  {
    path: "/map",
    name: "Map",
    component: Map
  },
  {
    path: "/editpersonaldata",
    name: "EditPersonalData",
    component: EditPersonalData
  },
];

const router = new VueRouter({
  routes
});

export default router;
