<template>
  <div class="btn-nav">
    <div class="container-fluid">
      <div class="row">
     <nav
  v-if="currentPath !== '/forget'"
  class="navbar navbar-expand-lg sticky-top"
  :style="{
    background:
      currentPath === '/' || currentPath === '/create' ? '#fff' : '',
  }"
>
          <router-link class="navbar-brand" to="/home">
            <div class="logo">
              <h1
                :style="{
                  display:
                    currentPath === '/' || currentPath === '/create' || currentPath ===  '/forget'
                      ? 'none '
                      : '',
                }"
              >
                {{ $t("message.Restoran") }}
              </h1>
            </div>
          </router-link>
          <div class="d-flex gap-2 btn-two px-2">
            <router-link v-if="showCreateButton" to="/create">
              <button>{{ $t("message.create") }}</button>
            </router-link>
            <!-- <div class="pha" v-if="currentPath === '/' || currentPath === '/create'">

              <button @click="changeLanguage">
                  {{ $t("message.changeLang") }}
                </button>
            </div> -->
            
            <router-link v-if="showLogButton" to="/">
              <button>{{ $t("message.log") }}</button>
            </router-link>
            
          </div>
            
          <div
            class="btn-two d-flex justify-content-between align-items-center p-2 flex-wrap"
          >
            <div class="dropdown" v-if="showUserButton">
              <button class="dropbtn" @click="toggleDropdown">
                {{ $t("message.welcome") }} {{ user.username }}
              </button>
              <div v-if="dropdownOpen" class="dropdown-content">
                <p
                  @click="logout"
                  class="d-flex justify-content-between p-1 align-items-center"
                >
                  {{ $t("message.logout")
                  }}<i class="pi pi-sign-out text-danger"></i>
                </p>
              </div>
            </div>
          </div>
          <button
            :style="{
              visibility:
                currentPath === '/' || currentPath === '/create'  || currentPath === '/forget' 
                  ? 'hidden '
                  : '',
            }"
            
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            @click="toggleMenu"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="collapse navbar-collapse"
            id="navbarSupportedContent"
            ref="navbarContent"
          >
            <ul
              class="navbar-nav m-auto mb-2 mb-lg-0"
              :style="{
                visibility:
                  currentPath === '/' || currentPath === '/create' || currentPath === '/forget' 
                    ? 'hidden '
                    : '',
              }"
            >
              <li class="nav-item" v-for="link in Links" :key="link.id">
                <template v-if="link.id === 6">
                  <div class="nav-link dropdown">
                    <a
                      class="dropdown-toggle"
                      href="#"
                      id="navbarDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      {{ $t(link.link) }}
                    </a>
                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                      <li>
                        <router-link
                          class="dropdown-item text-black d-flex align-items-center justify-content-between border-bottom"
                          to="/testimonial"
                        >
                          {{ $t("message.Testimonial") }}
                        </router-link>
                      </li>
                    </ul>
                  </div>
                </template>
                <template v-else>
                  <router-link
                    :class="{
                      'nav-link': true,
                      'active fw-medium': $route.path === link.path,
                    }"
                    :to="link.path"
                    @click="closeMenu"
                  >
                    {{ $t(link.link) }}
                  </router-link>
                </template>
              </li>
            </ul>
            <div class="icons d-flex gap-2 flex-wrap-reverse">
              <div class="d-flex align-items-center btn-two px-2">
                <button @click="changeLanguage">
                  {{ $t("message.changeLang") }}
                </button>
              </div>
            
            </div>
          </div>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
import { useUserStore } from "../stores/userStore";

export default {
  name: "Btnnav",
  data() {
    return {
      direction: "ltr",
      dropdownOpen: false,
      currentPath: window.location.pathname,
      Links: [
        { id: 1, link: "navs.1", path: "/home" },
        { id: 2, link: "navs.2", path: "/about" },
        { id: 3, link: "navs.3", path: "/servie" },
        { id: 4, link: "navs.4", path: "/meun" },
        { id: 6, link: "navs.5", path: "/pages" },
        { id: 5, link: "navs.6", path: "/conus" },
      ],
    };
  },
  computed: {
    showCreateButton() {
      return (
        this.$route.path !== "/create" &&
        this.$route.path !== "/home" &&
        this.$route.path !== "/about" &&
        this.$route.path !== "/servie" &&
        this.$route.path !== "/meun" &&
        this.$route.path !== "/testimonial" &&
        this.$route.path !== "/conus" &&
        this.$route.path !== '/forget' 
      );
    },
    showLogButton() {
      return (
        this.$route.path !== "/" &&
        this.$route.path !== "/home" &&
        this.$route.path !== "/about" &&
        this.$route.path !== "/servie" &&
        this.$route.path !== "/meun" &&
        this.$route.path !== "/testimonial" &&
        this.$route.path !== "/conus" && this.$route.path !== '/forget' 
      );
    },
    showUserButton() {
      return (
        this.$route.path === "/home" &&
        this.isLoggedIn
      );
    },
    isLoggedIn() {
      const userStore = useUserStore();
      return userStore.isLoggedIn;
    },
    user() {
      const userStore = useUserStore();
      return userStore.user;
    },
  },
  methods: {
    changeLanguage() {
      if (this.$i18n.locale === "en") {
        this.$i18n.locale = "ar";
        this.direction = "rtl";
        document.body.style.direction = "rtl";
      } else {
        this.$i18n.locale = "en";
        this.direction = "ltr";
        document.body.style.direction = "ltr";
      }
    },
    toggleMenu() {
      const navbarContent = this.$refs.navbarContent;
      if (navbarContent.classList.contains("show")) {
        navbarContent.classList.remove("show");
      } else {
        navbarContent.classList.add("show");
      }
    },
    closeMenu() {
      const navbarContent = this.$refs.navbarContent;
      if (navbarContent.classList.contains("show")) {
        navbarContent.classList.remove("show");
      }
    },
    handleClickOutside(event) {
      const navbarContent = this.$refs.navbarContent;
      if (!navbarContent.contains(event.target)) {
        this.closeMenu();
      }
    },
    toggleDropdown() {
      this.dropdownOpen = !this.dropdownOpen;
    },
    logout() {
      const userStore = useUserStore();
      userStore.logout();
      this.$router.push("/");
    },
  },
  mounted() {
    this.currentPath = this.$route.path;
    window.addEventListener("click", this.handleClickOutside);
  },
  beforeUnmount() {
    window.removeEventListener("click", this.handleClickOutside);
  },
  created() {
    this.$watch(
      () => this.$route.path,
      (newPath, oldPath) => {
        this.currentPath = newPath;
      }
    );
  },
};
</script>

<style scoped>
.btn-nav {
  padding: 20px 0;
}
.navbar-nav li {
  padding: 5px 20px !important;
}
.active {
  border-bottom: 2px solid #d61d1d;
  width: fit-content;
}
.logo h1 {
  color: #d2881a;
}
.btn-two button {
  border: none;
  padding: 8px;
  border-radius: 8px;
  background-color: var(--main-color);
  color: #fff;
}
.navbar-nav li a {
  color: #fff;
  font-weight: 400;
}
.dropbtn {
  background-color: #fea116;
  color: white;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
}
.dropdown {
  position: relative;
  display: inline-block;
}
.dropdown-content {
  display: none;
  position: absolute;
  background-color: #fff;
  min-width: 126px;
  border-radius: 12px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
}
.dropdown-content p {
  color: black;
  padding: 5px 16px;
  text-decoration: none;
  display: block;
}
.dropdown-content p:hover {
  background-color: #f1f1f1;
}
.dropdown:hover .dropdown-content {
  display: block;
}
.dropdown:hover .dropbtn {
  background-color: darkorange;
}

.navbar-nav .nav-link.active,
.navbar-nav .nav-link.show {
  color: #d2881a;
}
.navbar {
  background: #212529;
  backdrop-filter: blur(15px);
  margin-bottom: -20px;
}
@media (max-width: 477px) {
  .navbar {
    margin-top: -20px;
  }
}
@media (max-width: 799px) {
  .navbar {
    margin-top: -20px;
  }
}
@media (max-width: 992px) {
  .navbar {
    margin-top: -20px;
  }
}
@media (max-width: 1024px) {
  .navbar {
    margin-top: -20px;
  }
}
.navbar-toggler {
  background-color: #fea116;
  margin: 0 6px;
}
</style>
