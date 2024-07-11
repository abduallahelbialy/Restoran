<template>
   <div class="test" v-if="currentPath === '/servie'">
        <div class="hello d-flex justify-content-center align-items-center">
    <div class="overlay"></div>
    <div class="container">
      <div class="row">
        <div class="col repeated-text">
          <div  class="otext d-flex align-items-center flex-column">
            <h1>
            {{ $t("message.Services") }}
            </h1>
            <p class="mt-2"><span>{{ $t("message.HOMe") }} / {{ $t("message.PAGES") }} </span>/ {{ $t("message.Services") }}</p>
          
          </div>
        </div>
      
      </div>
    </div>
  </div>
    </div>
  <div class="car-land">
    <div class="container">
      <div class="row">
        <div class="text-serv text-center mb-3">
          <h1>Our Services</h1>
          <h3>Explore Our Services</h3>
        </div>
        <div class="d-flex justify-content-around flex-wrap">
          <div
            class="box d-flex flex-column align-items-start mb-3"
            v-for="card in cards"
            :key="card.id"
          >
            <div class="icon">
              <i :class="card.icon" style="font-size: 35px"></i>
            </div>
            <div class="nam">
              <h1>{{ $t(card.nam) }}</h1>
              <p>
                {{ $t(card.des) }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  data() {
    return {
              currentPath: this.$route.path,
      cards: [
        {
          id: 1,
          nam: "car.nam",
          des: "car.descri",
          icon: "pi pi-user",
        },
        {
          id: 2,
          nam: "car.Quality",
          des: "car.descri",
          icon: "pi pi-crown",
        },
        {
          id: 3,
          nam: "car.Online",
          des: "car.descri",
          icon: "pi pi-cart-plus",
        },
        {
          id: 4,
          nam: "car.Servic",
          des: "car.descri",
          icon: "pi pi-headphones",
        },
      ],
    };
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
  opacity: 0.1; 
}

.repeated-text {
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1; 
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
.car-land {
  padding: 20px 0;
  background-color: #ecebf0;
}
.text-serv h1 {
  color: orange;
  font-weight: normal;
  position: relative;
  font-size: 15px;
  display: inline-block;
  font-family: "Pacifico", cursive;
}
.text-serv h1::after {
  position: absolute;
  content: "";
  width: 45px;
  height: 2px;
  top: 50%;
  right: -55px;
  margin-top: -1px;
  background: #fea116;
}
.text-serv h1::before {
  position: absolute;
  content: "";
  width: 45px;
  height: 2px;
  top: 50%;
  left: -55px;
  margin-top: -1px;
  background: #fea116;
}
.text-serv h3 {
  font-size: 25px;
}
.box {
  width: 280px;
  padding: 30px 15px;
  border-radius: 4px;
  background-color: #ffffff;
  transition: 0.3s;
}
.box:hover {
  background-color: #d2881a;
  color: #ffffff;
}
.box:hover .icon {
  color: #ffffff;
}

.icon {
  color: #d2881a;
}

.nam h1 {
  font-size: 18px;
}
</style>
