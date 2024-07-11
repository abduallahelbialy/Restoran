<template>
  <div class="footer"  v-if="!shouldHideFooter">
    <div class="container">
      <div class="row">
        <div class="d-flex justify-content-between flex-wrap-reverse">
          <div class="links">
            <h1>{{ $t("message.Company") }}</h1>
            <ul>
              <li v-for="(item, index) in companyLinks" :key="index" class="d-flex gap-2 align-items-center">
                <router-link :to="item.link"></router-link>
                <i :class="item.icon"></i>{{ $t(item.text) }}
              </li>
            </ul>
          </div>
          <div class="links">
            <h1>{{ $t("message.Contact") }}</h1>
            <ul>
              <li v-for="(item, index) in contactLinks" :key="index" class="d-flex gap-2 align-items-center">
                <router-link :to="item.link"></router-link>
                <i :class="item.icon"></i>{{ item.text }}
              </li>
            </ul>
            <div class="icon d-flex gap-2 justify-content-center">
              <i v-for="(icon, index) in socialIcons" :key="index" :class="icon" style="font-size: 22px"></i>
            </div>
          </div>
          <div class="links">
            <h1>{{ $t("message.Opening") }}</h1>
            <ul>
              <li v-for="(item, index) in openingHours" :key="index">
                <router-link :to="item.link"></router-link>{{ $t(item.text) }}
              </li>
            </ul>
          </div>
          <div class="links">
            <h1>{{ $t("message.Newsletter") }}</h1>
            <ul>
              <li>{{ $t("message.newsletterText") }}</li>
            </ul>
            <div class="inp-footer">
              <input type="email" :placeholder="$t('message.Email')" />
            </div>
            <!-- <div class="btn-sub">
              <button>{{ $t("message.SignUp") }}</button>
            </div> -->
          </div>
        </div>
        <div class="d-flex justify-content-center align-items-center copy">
          <span>{{ $t("message.desi") }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
              currentPath: this.$route.path,

      companyLinks: [
        { link: "/home", icon: "pi pi-chevron-circle-right", text: "message.AboutUs" },
        { link: "/home", icon: "pi pi-chevron-circle-right", text: "message.ContactUs" },
        { link: "/home", icon: "pi pi-chevron-circle-right", text: "message.Reservation" },
        { link: "/home", icon: "pi pi-chevron-circle-right", text: "message.PrivacyPolicy" },
        { link: "/home", icon: "pi pi-chevron-circle-right", text: "message.TermsCondition" },
      ],
      contactLinks: [
        { link: "/home", icon: "pi pi-map-marker", text: "123 Street, New York, USA" },
        { link: "/home", icon: "pi pi-phone", text: "01028924906" },
        { link: "/home", icon: "pi pi-envelope", text: "abduallah@gmail.com" },
      ],
      socialIcons: ["pi pi-facebook", "pi pi-twitter", "pi pi-linkedin", "pi pi-youtube"],
      openingHours: [
        { link: "/home", text: "message.MondaySaturday" },
        { link: "/home", text: "09AM - 09PM" },
        { link: "/home", text: "message.Sunday" },
        { link: "/home", text: "10AM - 08PM" },
      ],
    };
  },
  computed: {
    shouldHideFooter() {
      return this.currentPath === '/' || this.currentPath === '/create';
    }
  },
    watch: {
    $route(to, from) {
      this.currentPath = to.path;
    }
  }
};
</script>


<style scoped>
.footer {
  padding: 30px 0;
  background-color: #0f172b;
}

.links h1 {
  color: orange;
  font-weight: normal;
  position: relative;
  font-size: 18px;
  display: inline-block;
  font-family: "Pacifico", cursive;
}
.links h1::after {
  position: absolute;
  content: "";
  width: 45px;
  height: 2px;
  top: 50%;
  right: -55px;
  margin-top: -1px;
  background: #fea116;
}
.links li {
  list-style: none;
  color: #fff;
  padding: 10px;
  cursor: pointer;
}
.icon i {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #fea116;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.3s;
}
.icon i:hover {
  background-color: red;
}
.inp-footer input{
    padding: 14px 2px;
    border: none;
    outline: none;
    border-radius: 4px;
}
.inp-footer input:focus{
   border:3px solid #fea116;
}
.btn-sub{
    position: relative;
}
.btn-sub button{
    position: absolute;
        top: -40px;
    left: 106px;
    background-color: #fea116;
    color: #fff;
    border: none;
    border-radius: 4px;
    padding: 5px;
}
@media (max-width:477px) {
  .btn-sub{
    display: none;
  }  
  .inp-footer{
    display: none;
  }
}
.copy{
  color: #fea116;
 font-weight: 500;
}
</style>
