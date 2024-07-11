<template>
    
        <div class="hello d-flex justify-content-center align-items-center">
    <div class="overlay"></div>
    <div class="container">
      <div class="row">
        <div class="col repeated-text">
          <div  class="otext d-flex align-items-center flex-column">
            <h1>
            {{ $t("message.ContactUs") }}
            </h1>
            <p class="mt-2"><span>{{ $t("message.HOMe") }} / {{ $t("message.PAGES") }} </span>/  {{ $t("message.ContactUs") }}</p>
          
          </div>
        </div>
      
      </div>
    </div>
  </div>
  <div class="conus">
    <div class="container">
      <div class="row">
         <div class="text-cons text-center">
          <h1>{{ $t("message.ContactUs") }}</h1>
          <h2>{{ $t("message.ContactQuery") }}</h2>
        </div>
        <div
          class="d-flex justify-content-evenly flex-wrap align-items-center mt-2 mb-4 inf"
        >
          <div class="text-contacy">
            <h1>{{ $t("message.Reservation") }}</h1>
            <div class="icon d-flex gap-2 align-items-center">
              <i class="pi pi-envelope"></i>
              <span class="fw-medium">book@example.com</span>
            </div>
          </div>
          <div class="text-contacy">
            <h1>{{ $t("message.General") }}</h1>
            <div class="icon d-flex gap-2 align-items-center">
              <i class="pi pi-envelope"></i>
              <span class="fw-medium">info@example.com </span>
            </div>
          </div>
          <div class="text-contacy">
            <h1>{{ $t("message.Technical") }}</h1>
            <div class="icon d-flex gap-2 align-items-center">
              <i class="pi pi-envelope"></i>
              <span class="fw-medium">tech@example.com </span>
            </div>
          </div>
        </div>
        <div class="d-flex justify-content-evenly align-items-center mt-3 flex-wrap-reverse">

       <div class="map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27302.91477512708!2d31.54756728662974!3d31.196774419230092!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f77b4e4a1e5cb1%3A0x6569d088dea10882!2z2LTYsdio2YrZhtiMINmF2K_ZitmG2Kkg2LTYsdio2YrZhtiMINmF2LHZg9iyINi02LHYqNmK2YbYjCDZhdit2KfZgdi42Kkg2KfZhNiv2YLZh9mE2YrYqQ!5e0!3m2!1sar!2seg!4v1720689241354!5m2!1sar!2seg"
              height="450"
              style="border: 0"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
                <div class="foa">
            <form @submit.prevent="validateForm">
              <div class="d-flex justify-content-center gap-2">
                <div class="mb-3">
                  <input type="text" class="form-control" v-model="formData.name" :placeholder="$t('message.yourName')" />
                  <small v-if="errors.name">{{ errors.name }}</small>
                </div>
                <div class="mb-3">
                  <input type="email" class="form-control" v-model="formData.email" :placeholder="$t('message.Email')" />
                  <small v-if="errors.email">{{ errors.email }}</small>
                </div>
              </div>
              <div class="mb-3">
                <input type="text" class="form-control" v-model="formData.subject" :placeholder="$t('message.Subject')" />
                <small v-if="errors.subject">{{ errors.subject }}</small>
              </div>
              <div class="mb-3">
                <textarea class="form-control" v-model="formData.message" :placeholder="$t('message.Message')" rows="3"></textarea>
                <small v-if="errors.message">{{ errors.message }}</small>
              </div>
              <div class="mb-2 d-flex justify-content-center bba">
                <button type="submit">{{ $t('message.BookNow') }}</button>
              </div>
            </form>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Cons",
 data() {
    return {
      formData: {
        name: '',
        email: '',
        subject: '',
        message: ''
      },
      errors: {}
    };
  },
  methods: {
    validateForm() {
      this.errors = {};
      if (!this.formData.name) {
        this.errors.name = this.$t('message.nameRequired');
      }
      if (!this.formData.email) {
        this.errors.email = this.$t('message.emailRequired');
      } else if (!this.validEmail(this.formData.email)) {
        this.errors.email = this.$t('message.emailInvalid');
      }
      if (!this.formData.subject) {
        this.errors.subject = this.$t('message.subjectRequired');
      }
      if (!this.formData.message) {
        this.errors.message = this.$t('message.messageRequired');
      }
      if (Object.keys(this.errors).length === 0) {
        this.submitForm();
      }
    },
    validEmail(email) {
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@(([^<>()[\]\.,;:\s@"]+\.)+[^<>()[\]\.,;:\s@"]{2,})$/i;
      return re.test(email);
    },
    submitForm() {
      alert(this.$t('message.formSubmitted'));
    }
  }
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
.conus {
  padding: 20px 0;
}
.text-cons h1 {
  color: orange;
  font-weight: normal;
  position: relative;
  font-size: 15px;
  display: inline-block;
  font-family: "Pacifico", cursive;
}
.icon i {
  color: #fea116;
}
.text-contacy h1 {
  color: orange;
  font-weight: normal;
  position: relative;
  font-size: 15px;
  display: inline-block;
  font-family: "Pacifico", cursive;
}
.text-contacy h1::after {
  position: absolute;
  content: "";
  width: 45px;
  height: 2px;
  top: 50%;
  right: -55px;
  margin-top: -1px;
  background: #fea116;
}
.text-cons h1::after {
  position: absolute;
  content: "";
  width: 45px;
  height: 2px;
  top: 50%;
  right: -55px;
  margin-top: -1px;
  background: #fea116;
}
.text-cons h1::before {
  position: absolute;
  content: "";
  width: 45px;
  height: 2px;
  top: 50%;
  left: -55px;
  margin-top: -1px;
  background: #fea116;
}
.form-control {
    padding: 16px;
   
}
 textarea{
    resize: none !important;
}
.bba button{
width: 100%;
  background: #fea116;
color: #fff;
border: none;
padding: 12px;
border-radius: 4px;
}
.map iframe{
    width: 600px;
}
@media (max-width:477px) {
  .map iframe{
    width: 300px;
    margin-bottom: 10px;
}  
.inf{
    flex-direction: column;
}
}
</style>
