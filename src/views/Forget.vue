<template>
  <div class="forget">
    <div class="container">
      <div class="row">
        <form @submit.prevent="submitForm">
          <div class="cnet">
            <div class="text-center mb-4">
              <h1>Forget password</h1>
            </div>
            <div class="foregt-input m-auto mb-3">
              <input
                type="tel"
                :placeholder="$t('message.phone')"
                v-model="phone"
                required
              />
            </div>
            <div class="btn d-flex justify-content-center align-items-center">
              <button type="submit">Send</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Forget",
  data() {
    return {
      phone: "",
    };
  },
  methods: {
    validatePhone() {
      const phoneRegex = /^[0-9]{11}$/; // مثال للتحقق من رقم هاتف مكون من 10 أرقام
      return phoneRegex.test(this.phone);
    },
    submitForm() {
      if (this.validatePhone()) {
        this.$router.push('/'); // تغيير المسار إلى المسار المطلوب
      } else {
        alert('Invalid phone number');
      }
    }
  }
};
</script>





<style scoped>
.forget{
    /* padding: 20px 0; */
    background-image: url(../assets/bacfor.png);
    background-size:cover;
    background-position: 100%;
    height: 100vh;
    position: relative;
}
@media (max-width:477px) {
    .forget{
            margin-top: -40px
    }
}
.foregt-input input{
width: 300px;
padding: 7px;
outline: none;
border: 1px solid #ddd;
border-radius: 4px;
}
.foregt-input input::placeholder{
    text-align: center;
}
.cnet{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50% , -50%);
}
.cnet h1{
    color: red;
}
</style>