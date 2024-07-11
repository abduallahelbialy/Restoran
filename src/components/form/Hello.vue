<template>
  <div class="hello d-flex justify-content-center align-items-center">
    <div class="overlay"></div>
    <div class="container">
      <div class="row">
        <div class="col repeated-text">
          <div class="otext">
            <!-- استخدم v-html هنا لعرض النص مع HTML -->
            <h1 v-html="$t('message.engj')"></h1>
            <p>
              {{ $t("message.des") }}
            </p>
            <div class="btn two">
              <button class="py-3">{{ $t("message.bn") }}</button>
            </div>
          </div>
        </div>
        <div class="col repeated-text gap-3">
          <div class="img-home">
            <img :src="imga" alt="Hero Image" class="img-fluid rotating-img" />
          </div>
        </div>
      </div>
    </div>
  </div>
  <Card />
  <About />
  <Menu />
  <Contact />
  <Team />
  <Testimonial />
</template>

<script>
import img from "../../assets/hero.png";
import messageData from "../local/en.json";
import messageDatar from "../local/ar.json";
import Card from "../../views/Card.vue";
import About from "../../views/About.vue";
import Menu from "../../views/Menu.vue";
import Contact from "../../views/Contact.vue";
import Team from "../../views/Team.vue";
import Testimonial from "../../views/Testimonial.vue";

export default {
  name: "Hello",
  data() {
    return {
      imga: img,
      message: messageData.engj,
      message: messageDatar.engj,
    };
  },
  components: { Card, About, Menu, Contact, Team, Testimonial },
};
</script>

<style scoped>
.hello {
  height: 100vh;
  overflow: hidden;
  position: relative;
  background: linear-gradient(rgba(15, 23, 43, 0.9), rgba(15, 23, 43, 0.9)),
    url(../../assets/bg-hero.jpg);
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
  justify-content: space-between;
  z-index: 1; /* لضمان أن يكون النص فوق الطبقة الشفافة */
  color: red;
}
.otext {
  color: #fff;
  text-align: start;
}
.otext h1 {
  font-size: 54px;
}
.otext p {
  font-size: 12px;
}
.img-home {
  width: 500px;
  margin-left: 20px;
}

.rotating-img {
  animation: rotate 10s linear infinite;
}

@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
@media (max-width: 477px) {
  .otext {
    color: #fff;
    text-align: center;
  }
  .otext h1 {
    font-size: 33px;
  }
  .otext p {
    font-size: 12px;
  }
  .btn button {
    padding: 8px 10px !important;
    width: 180px;
    margin-bottom: 10px;
  }
}
</style>
