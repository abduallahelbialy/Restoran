<template>
   <div class="test" v-if="currentPath === '/meun'">
        <div class="hello d-flex justify-content-center align-items-center">
    <div class="overlay"></div>
    <div class="container">
      <div class="row">
        <div class="col repeated-text">
          <div class="otext d-flex align-items-center flex-column">
            <h1>
{{ $t("message.food") }}
            </h1>
            <p class="mt-2"><span>{{ $t("message.HOMe") }} / {{ $t("message.PAGES") }} </span>/ {{ $t("message.MENU") }}</p>
          
          </div>
        </div>
      
      </div>
    </div>
  </div>
    </div>
  <div class="Menu">
    <div class="container">
      <div class="row">
        <div class="text-menu text-center mb-4">
          <h1>{{ $t("message.food") }}</h1>
          <h2>{{ $t("message.Most") }}</h2>
        </div>
        <div class="d-flex justify-content-center gap-4 flex-wrap mb-3">
          <div
            class="box d-flex gap-2 align-items-center"
            v-for="tab in tabs"
            :key="tab.id"
            @click="activeTap = tab.id"
            :class="{ active: activeTap === tab.id }"
          >
            <div class="icon">
              <img :src="tab.img" alt="" />
            </div>
            <div class="text d-flex flex-column align-items-start">
              <span>{{ $t(tab.nb) }}</span>
              <p class=" fw-medium">{{ $t(tab.da) }}</p>
            </div>
          </div>
        </div>
        <div
          class="d-flex justify-content-around align-items-center flex-wrap mt-4"
          v-if="activeFoods.length"
        >
          <div class="onemeun" v-for="one in ones" :key="one.id">
            <div class="d-flex gap-3 mt-3" v-for="food in activeFoods" :key="food.us">
              <div class="img-men">
                <img :src="food.imgs" alt="" />
              </div>
              <div class="text-taps flex-grow-1">
                <div
                  class="info d-flex gap-5 justify-content-between align-items-center flex-grow-1"
                >
                  <h1>{{ $t(food.text) }}</h1>
                  <span>${{ food.price }}</span>
                </div>
                <div class="desrc">
                  <p>{{ $t(food.description) }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import img1 from "../assets/coffee.svg";
import img2 from "../assets/archive.svg";
import img3 from "../assets/chrome.svg";
import img4 from "../assets/menu-1.jpg";
import img5 from "../assets/menu-2.jpg";
import img6 from "../assets/menu-3.jpg";
import img7 from "../assets/menu-4.jpg";
import img8 from "../assets/menu-5.jpg";
import img9 from "../assets/menu-6.jpg";
import img10 from "../assets/menu-7.jpg";
import img11 from "../assets/menu-8.jpg";

export default {
  name: "Menu",
  data() {
    return {
              currentPath: this.$route.path,
      tabs: [
        { id: 1, nb:"braek.Popular", da:"braek.Breakfast", img: img1 },
        { id: 2, nb:"braek.Special", da:"braek.launch", img: img2 },
        { id: 3, nb:"braek.Lovely", da:"braek.Dinner", img: img3 },
      ],
      activeTap: 1,
      ones: [
        {
          id: 1,
        },
        {
          id: 2,
        },
      ],
      foods: [
        {
          us: 1,
          imgs: img4,
          text: "meun.Chicken",
          description: "meun.das",
          price: 115,
          tab: 1,
        },
        {
          us: 2,
          imgs: img5,
          text: "meun.Chicken",
          description: "meun.das",
          price: 165,
          tab: 1,
        },
        {
          us: 3,
          imgs: img6,
          text: "meun.Chicken",
          description: "meun.das",
          price: 215,
          tab: 1,
        },
        {
          us: 4,
          imgs: img7,
          text: "meun.Chicken",
          description: "meun.das",
          price: 180,
          tab: 1,
        },
        {
          us: 5,
          imgs: img8,
          text: "meun.Chicken",
          description: "meun.das",
          price: 380,
          tab: 2,
        },
        {
          us: 6,
          imgs: img9,
          text: "meun.Chicken",
          description: "meun.das",
          price: 380,
          tab: 2,
        },
        {
          us: 7,
          imgs: img10,
          text: "meun.Chicken",
          description: "meun.das",
          price: 180,
          tab: 2,
        },
        {
          us: 8,
          imgs: img11,
          text: "meun.Chicken",
          description: "meun.das",
          price: 80,
          tab: 2,
        },
        {
          us: 9,
          imgs: img4,
          text: "meun.Chicken",
          description: "meun.das",
          price: 115,
          tab: 3,
        },
        {
          us: 10,
          imgs: img5,
          text: "meun.Chicken",
          description: "meun.das",
          price: 165,
          tab: 3,
        },
        {
          us: 11,
          imgs: img6,
          text: "meun.Chicken",
          description: "meun.das",
          price: 215,
          tab: 3,
        },
        {
          us: 12,
          imgs: img7,
          text: "meun.Chicken",
          description: "meun.das",
          price: 180,
          tab: 3,
        },
        {
          us: 13,
          imgs: img8,
          text: "meun.Chicken",
          description: "meun.das",
          price: 380,
          tab: 3,
        },
        {
          us: 14,
          imgs: img9,
          text: "meun.Chicken",
          description: "meun.das",
          price: 380,
          tab: 3,
        },
        {
          us: 15,
          imgs: img10,
          text: "meun.Chicken",
          description: "meun.das",
          price: 180,
          tab: 3,
        },
        {
          us: 16,
          imgs: img11,
          text: "meun.Chicken",
          description: "meun.das",
          price: 80,
          tab: 3,
        },
      ],
    };
  },
  computed: {
    activeFoods() {
      return this.foods.filter(food => food.tab === this.activeTap);
    }
  },
   watch: {
    $route(to, from) {
      this.currentPath = to.path;
    }
  },
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
.Menu {
  padding: 20px 0;
}
.box{
  cursor: pointer;
}
.text-menu h1 {
  color: orange;
  font-weight: normal;
  position: relative;
  font-size: 15px;
  display: inline-block;
  font-family: "Pacifico", cursive;
}
.icon img {
  width: 40px;
}
.info {
  border-bottom: 1px solid #ddd;
}
.info h1 {
  font-size: 18px;
}
.info span {
  color: #fea116;
  font-weight: 500;
}
.text-menu h1::after {
  position: absolute;
  content: "";
  width: 45px;
  height: 2px;
  top: 50%;
  right: -55px;
  margin-top: -1px;
  background: #fea116;
}
.text-menu h1::before {
  position: absolute;
  content: "";
  width: 45px;
  height: 2px;
  top: 50%;
  left: -55px;
  margin-top: -1px;
  background: #fea116;
}
.active {
  border-bottom: 2px solid #fea116;
  width: fit-content;
}

</style>
