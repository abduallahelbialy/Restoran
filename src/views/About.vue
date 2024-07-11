<template>
      <div class="test" v-if="currentPath === '/about'">
        <div class="hello d-flex justify-content-center align-items-center">
    <div class="overlay"></div>
    <div class="container">
      <div class="row">
        <div class="col repeated-text">
          <div  class="otext d-flex align-items-center flex-column">
            <h1>
            {{ $t("message.AboutUs") }}
            </h1>
            <p class="mt-2"><span>{{ $t("message.HOMe") }} / {{ $t("message.PAGES") }} </span>/  {{ $t("message.AboutUs") }}</p>
          
          </div>
        </div>
      
      </div>
    </div>
  </div>
    </div>
  <div class="abouts">
    <div class="container">
      <div class="row">
   
        <section class="about-us">
          <div class="images">
            <img src="../assets/about-1.jpg" alt="Image 1" />
            <img src="../assets/about-2.jpg" class="spi" alt="Image 2" />
            <img src="../assets/about-3.jpg" class="spi" alt="Image 3" />
            <img src="../assets/about-4.jpg"  alt="Image 4" />
          </div>
          <div class="content m">
            <h2>{{ $t("navs.2") }}</h2>
            <h1 class="mb-4">{{ $t("message.welabout") }} <i class="pi pi- pi-crown"></i> {{ $t("message.Restoran") }}</h1>
            <p class=" mt-3 text-black ">
            {{ $t("message.now") }}
            </p>
            <p class=" text-black">
              {{ $t("message.now") }}
            </p>
            <div
              class="stats d-flex justify-content-evenly  gap-2 align-items-center"
            >
              <div class="years d-flex align-items-center gap-2">
                <div class="nuber">

                <h3>15</h3>
                </div>
                <div class="d-flex flex-column">

                <span>{{ $t("message.Years") }} </span>
                <p class=" text-black fw-medium">{{ $t("message.EXPERIENCs") }}</p>
                </div>
                
              </div>
              <div class="years d-flex align-items-center gap-2">
                <div class="nuber">

                <h3>50</h3>
                </div>
                <div class="d-flex flex-column">

                <span>{{ $t("message.Popular") }}</span>
                <p class=" text-black fw-medium" v-html="$t('message.chef')"></p>
                </div>
                
              </div>
             
            </div>
            <div class=" mt-3 d-flex justify-content-center">

            <button>{{ $t("message.more") }}</button>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
  <Team/>
</template>

<script>
import img1 from "../assets/about-1.jpg";
import messageData from '../components/local/en.json';  
import messageDatar from '../components/local/ar.json'; 
import Team from "../views/Team.vue";
export default {
  name: "About",
  data() {
    return {
      img1: img1,

       message: messageData.chef ,
      message: messageDatar.chef ,
        currentPath: this.$route.path
    };
  },
   watch: {
    $route(to, from) {
      this.currentPath = to.path;
    }
  },
  components:{Team}
};
</script>

<style scoped>
.hello {
  height: 100vh;
  overflow: hidden;
  position: relative;
  background: linear-gradient(rgba(15, 23, 43, 0.9), rgba(15, 23, 43, 0.9)),
    url(../assets/bg-hero.jpg);
  /* background-image:; */
  background-size: cover;
  background-position: center;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #222431;
  opacity: 0.1; /* يمكنك تعديل هذه القيمة لتغيير الشفافية */
}

.repeated-text {
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1; /* لضمان أن يكون النص فوق الطبقة الشفافة */
  color: red;
}
.otext{
  cursor: pointer;
}
.otext h1{
  color: #fff;
  font-size: 50px;
}
.otext span{
  color: #fea116;
}
.otext p{
  color: #fff;
}
.abouts {
  padding: 20px 0;
    background-color: #ecebf0;
}
.about-us {
  display: flex;
  padding: 20px;
}
@media (max-width:477px) {
    .about-us{
        flex-direction: column;
        align-items: center;
    }
    .images{
        width: 100% !important;
    }
    .content {
    width: 100% !important;
    padding: 20px;
}
.content h1{
    font-size: 25px !important;
    margin: 10px 0;
}

}
.images {
  display: flex;
  flex-wrap: wrap;
  width: 50%;
}
.images .spi{
    width: 35%;
}
.images img {
  width: 50%;
  height: auto;
  padding: 5px;
}
.nuber h3{
    font-size: 40px;
    font-weight: bold;
    color: #fea116;
    border-left: 4px solid #fea116;
    padding: 0 10px;
}
.content {
  width: 50%;
  padding: 20px;
}
.content i {
  color: #fea116;
  font-size: 30px;
}
.content h2 {
  color: orange;
  font-weight: normal;
  position: relative;
  display: inline-block;
  font-family: "Pacifico", cursive;
}
.content h2::after {
  position: absolute;
  content: "";
  width: 45px;
  height: 2px;
  top: 50%;
right: -55px;
  margin-top: -1px;
  background: #fea116;
}

.content h1 {
  font-size: 36px;
  margin: 10px 0;
}

.content p {
  color: #666;
  line-height: 1.6;
  margin-bottom: 20px;
}

button {
  background-color: orange;
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
}

button:hover {
  background-color: darkorange;
}
</style>
