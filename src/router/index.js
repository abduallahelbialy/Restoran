import { createRouter, createWebHistory } from 'vue-router'
import form from"../components/form/Form.vue"
import create from"../components/form/Create.vue"
import hello from"../components/form/Hello.vue"
import Error from "../views/Error.vue";
import Card from "../views/Card.vue";
import About from "../views/About.vue";
import Menu from "../views/Menu.vue";
import Contact from "../views/Contact.vue";
import Team from "../views/Team.vue";
import Testimonial from "../views/Testimonial.vue";
import Conus from "../views/Conus.vue";
import Forget from "../views/Forget.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "form",
      component: form,
    },
    {
      path: "/create",
      name: "create a new",
      component: create,
    },
    {
      path: "/home",
      name: "hello",
      component: hello,
    },
    {
      path: "/servie",
      name: "Card",
      component: Card,
    },
    {
      path: "/about",
      name: "About",
      component: About,
    },
    {
      path: "/meun",
      name: "Menu",
      component: Menu,
    },
    {
      path: "/contactus",
      name: "Contact",
      component: Contact,
    },
    {
      path: "/conus",
      name: "Conus",
      component: Conus,
    },
    {
      path: "/team",
      name: "Team",
      component: Team,
    },
    {
      path: "/testimonial",
      name: "Testimonial",
      component: Testimonial,
    },
    {
      path: "/forget",
      name: "Forget",
      component: Forget,
    },
    {
      path: "/:cathAll(.*)",
      name: "ErrorPage",
      component: Error,
    },
  ],
});

export default router
