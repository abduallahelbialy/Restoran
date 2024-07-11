<template>
  <div class="contact-us">
    <div class="container">
      <div class="row">
        <div
          class="box-form d-flex justify-content-center flex-wrap align-items-center overflow-hidden"
        >
          <div class="video-section">
            <video controls>
              <source
                src="../assets/Close-up Footage Of A Hot Dish On A Clay Pot · Free Stock Video.mp4"
                type="video/mp4"
              />
              {{ $t("message.Your") }}
            </video>
          </div>
          <div class="one-form">
            <form @submit.prevent="submitForm">
              <div class="text-form d-flex flex-column align-items-start p-4">
                <h1>{{ $t("message.Reservation") }}</h1>
                <h3>{{ $t("message.Online") }}</h3>
              </div>
              <div
                class="inpu d-flex gap-3 justify-content-center align-items-center flex-wrap"
              >
                <input
                  type="text"
                  v-model="name"
                  :placeholder="$t('message.rourname')"
                  required
                />
                <input
                  type="email"
                  v-model="email"
                  :placeholder="$t('message.Email')"
                  required
                />
              </div>
              <div
                class="inpu mb-3 p-3 d-flex gap-3 justify-content-center align-items-center flex-wrap"
              >
                <input
                  type="number"
                  v-model="dateTime"
                  :placeholder="$t('message.Date')"
                  required
                />
                <select v-model="numberOfPeople" required>
                  <option value="1">{{ $t("message.People1") }}</option>
                  <option value="2">{{ $t("message.People2") }}</option>
                  <option value="3">{{ $t("message.People3") }}</option>
                  <option value="4">{{ $t("message.People4") }}</option>
                  <option value="5">{{ $t("message.People5") }}</option>
                </select>
              </div>
              <div class="inpu justify-content-center d-flex mb-3">
                <textarea
                  v-model="specialRequest"
                  :placeholder="$t('message.Special')"
                  required
                ></textarea>
              </div>
              <div class="btn d-flex justify-content-center">
                <button type="submit">{{ $t("message.BookNow") }}</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useToast } from "vue-toastification";
export default {
  name: "contact-us",
  data() {
    return {
      numberOfPeople: "1",
      name: "",
      email: "",
      dateTime: "",
      specialRequest: "",
    };
  },
  methods: {
    submitForm() {
      const toast = useToast();
      toast.success(this.$t("message.successMessage"));
      // Add form submission logic here
    },
  },
};
</script>

<style scoped>
.contact-us {
  padding: 20px 0;
}
.video-section {
  width: 50%;
}
.video-section video {
  width: 100%;
  height: auto;
}
.one-form {
  margin-top: -10px;
  width: 50%;
  background-color: #0f172b;
}

@media (max-width: 477px) {
  .one-form {
    width: 100%;
    background-color: #0f172b;
  }
  .inpu textarea {
    width: 290px !important;
  }
  .btn button {
    width: 290px !important;
  }
  .video-section {
    width: 100%;
    padding: 10px 2px;
  }
}
.text-form {
  padding: 22px;
}
.text-form h3 {
  color: #fff;
}
.text-form h1 {
  color: orange;
  font-weight: normal;
  position: relative;
  font-size: 15px;
  display: inline-block;
  font-family: "Pacifico", cursive;
}
.text-form h1::after {
  position: absolute;
  content: "";
  width: 45px;
  height: 2px;
  top: 50%;
  right: -55px;
  margin-top: -1px;
  background: #fea116;
}
.inpu {
  margin-bottom: -10px;
}

.inpu select {
  width: 250px;
  padding: 12px;
  border-radius: 4px;
  outline: none;
  border: 1px solid #ddd;
}
.inpu input {
  width: 250px;
  padding: 12px;
  border-radius: 4px;
  outline: none;
  border: 1px solid #ddd;
}
.inpu input:focus {
  border: 3px solid #fea116;
}
.btn button {
  width: 505px;
  margin-top: -10px;
}
.inpu textarea {
  width: 510px;
  border-radius: 4px;
  resize: none;
  outline: none;
  height: 80px;
  margin-top: -23px;
}
</style>
