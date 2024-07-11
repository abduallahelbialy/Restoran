<template>
   <div class="test" v-if="currentPath === '/testimonial'">
        <div class="hello d-flex justify-content-center align-items-center">
    <div class="overlay"></div>
    <div class="container">
      <div class="row">
        <div class="col repeated-text">
          <div class="otext d-flex align-items-center flex-column">
            <h1>
{{ $t("message.Testimonial") }}
            </h1>
            <p class="mt-2"><span>{{ $t("message.HOMe") }} / {{ $t("message.PAGES") }} </span>/ {{ $t("message.Testimonial") }}</p>
          
          </div>
        </div>
      
      </div>
    </div>
  </div>
    </div>
  <div class="Testimonial ">
    <div class="container">
      <div class="row">
        <div class="text-Testimonial text-center">
          <h1>{{ $t("message.Testimonial") }}</h1>
          <h3>{{ $t("message.Clients") }}</h3>
        </div>
        <div
          class="box-Testimonial d-flex justify-content-between align-items-center flex-wrap m-auto"
        >
          <swiper
            :slidesPerView="slidesPerView"
            :spaceBetween="30"
            :freeMode="true"
            :pagination="{
              clickable: true,
            }"
            :modules="modules"
            :autoplay="autoplay"
            class="mySwiper"
          >
            <swiper-slide v-for="silder in silde" :key="silder.id">
              <div class="info">
                <div class="detils">
                  <div class="oned d-flex align-items-start flex-column">
                    <h1>{{ silder.cool }}</h1>
                    <div>
                      <p>
                        {{ $t(silder.des) }}
                      </p>
                    </div>
                    <div class="proflie d-flex gap-2">
                      <div class="img-test">
                        <img :src="silder.img" alt="" class="img-fluid" />
                      </div>
                      <div
                        class="text-pro d-flex flex-column align-items-center"
                      >
                        <h1>{{ $t(silder.nam) }}</h1>
                        <p>{{ $t(silder.pos) }}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </swiper-slide>
          </swiper>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css/autoplay";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination, Autoplay } from "swiper/modules";
import img1 from "../assets/testimonial-2.jpg";
export default {
  name: "Testimonial",
  data() {
    return {
                    currentPath: this.$route.path,
      slidesPerView: 3,
      modules: [FreeMode, Pagination, Autoplay],
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      silde: [
        {
          id: 1,
          cool: "،،",
          des: "slidertran.2",
          img: img1,
          nam: "slidertran.1",
          pos: "slidertran.7",
        },
        {
          id: 2,
          cool: "،،",
          des: "slidertran.2",
          img: img1,
          nam: "slidertran.3",
          pos: "slidertran.7",
        },
        {
          id: 3,
          cool: "،،",
          des: "slidertran.2",
          img: img1,
          nam: "slidertran.4",
          pos: "slidertran.7",
        },
        {
          id: 4,
          cool: "،،",
          des: "slidertran.2",
          img: img1,
          nam: "slidertran.5",
          pos: "slidertran.7",
        },
        {
          id: 4,
          cool: "،،",
          des: "slidertran.2",
          img: img1,
          nam: "slidertran.6",
          pos: "slidertran.7",
        },
      ],
    };
  },
  components: { Swiper, SwiperSlide },
  mounted() {
    window.addEventListener("resize", this.handleResize);
    this.handleResize(); 
  },
  methods: {
    handleResize() {
      this.slidesPerView = this.getSlidesPerView();
    },
    getSlidesPerView() {
      return window.matchMedia("(max-width: 477px)").matches ? 1 : 3;
    },
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
.Testimonial {
  padding: 30px 0px;
  background-color: #ecebf0;
}
.info {
  /* width: 300px; */
  height: auto;
  padding: 5px 40px;
  border-radius: 4px;
  border: 1px solid #ccc;
  background-color: #fff;
}
.text-Testimonial h1 {
  color: orange;
  font-weight: normal;
  position: relative;
  font-size: 15px;
  display: inline-block;
  font-family: "Pacifico", cursive;
}
.text-Testimonial h1::after {
  position: absolute;
  content: "";
  width: 45px;
  height: 2px;
  top: 50%;
  right: -55px;
  margin-top: -1px;
  background: #fea116;
}
.text-Testimonial h1::before {
  position: absolute;
  content: "";
  width: 45px;
  height: 2px;
  top: 50%;
  left: -55px;
  margin-top: -1px;
  background: #fea116;
}
.text-Testimonial h3 {
  font-size: 25px;
}
.oned h1 {
  font-size: 80px;
  color: #fea116;
}
.text-pro h1 {
  font-size: 15px;
  color: #000;
}
.img-test {
  width: 50px;
  height: 50px;
  object-fit: cover;
}
.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
