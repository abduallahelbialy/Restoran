<template>
  <div class="team">
    <div class="container">
      <div class="row">
        <div class="text-team text-center mb-2">
          <h1>{{ $t("message.Team") }}</h1>
          <h3>{{ $t("message.Our") }}</h3>
        </div>
        <div
          class="d-flex justify-content-between align-content-center flex-wrap mt-2"
        >
          <div
            class="box-team d-flex flex-column align-items-center mb-3 m-auto"
            v-for="card in cards"
            :key="card.id"
          >
            <div class="img-team">
              <img :src="card.img" alt="" class="img-fluid" />
            </div>
            <div class="nam-team text-center mt-2">
              <h1>{{ $t(card.name) }}</h1>
              <p>{{ $t(card.postio) }}</p>
            </div>
            <div class="d-flex justify-content-center gap-2 flex-wrap">
              <div class="icon-team">
                <i class="pi pi-facebook" style="font-size: 22px"></i>
              </div>
              <div class="icon-team">
                <i class="pi pi-twitter" style="font-size: 22px"></i>
              </div>
              <div class="icon-team">
                <i class="pi pi-instagram" style="font-size: 22px"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import img1 from "../assets/team-1.jpg";
import img2 from "../assets/team-4.jpg";
import img3 from "../assets/team-3.jpg";
import img4 from "../assets/manager.jpg";
export default {
  name: "Team",
  data() {
    return {
      cards: [
        { id: 1, name: "cardnam.1", postio: "cardnam.2", img: img1 },
        { id: 2, name: "cardnam.3", postio: "cardnam.4", img: img2 },
        { id: 3, name: "cardnam.5", postio: "cardnam.6", img: img3 },
        { id: 4, name: "cardnam.7", postio: "cardnam.8", img: img4 },
      ],
    };
  },
};
</script>

<style scoped>
.team {
  padding: 20px 0;
}
.text-team h1 {
  color: orange;
  font-weight: normal;
  position: relative;
  font-size: 15px;
  display: inline-block;
  font-family: "Pacifico", cursive;
}
.text-team h3 {
  font-size: 25px;
}
.text-team h1::after {
  position: absolute;
  content: "";
  width: 45px;
  height: 2px;
  top: 50%;
  right: -55px;
  margin-top: -1px;
  background: #fea116;
}
.text-team h1::before {
  position: absolute;
  content: "";
  width: 45px;
  height: 2px;
  top: 50%;
  left: -55px;
  margin-top: -1px;
  background: #fea116;
}
.box-team {
  width: 260px;
  height: 350px;
  padding: 10px 5px;
  border-radius: 6px;
  box-shadow: 0 0 45px rgba(0, 0, 0, 0.08);
}

.img-team {
  width: 200px;
  height: 200px;
  object-fit: cover;
  transition: transform 0.3s ease;
}
.img-team img {
  border-radius: 50%;
}
.img-team:hover {
  transform: scale(1.05) translate(0px, 0px);
}
.nam-team h1 {
  font-size: 18px;
}
.nam-team p {
  font-size: 18px;
}
.icon-team {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #fea116;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  transition: 0.3s;
}
.icon-team:hover {
  background-color: red;
}
</style>
