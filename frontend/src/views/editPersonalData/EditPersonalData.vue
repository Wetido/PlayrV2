<template>
  <div class="edit-personal-data">
    <div v-show="isLoged" class="grid-container">
      <div class="left-column">
      <span class="corner-title">Edit your data</span>
        <div class="form">
          <label class="form-label">Change email:</label>
          <input class="form-input" v-model="email" type="text" />

          <label class="form-label">Change nickname:</label>
          <input class="form-input" v-model="nickname" type="password" />

          <div class="buttons-container">
            <router-link to="/">
              <button class="default-button negative-button">Back to home</button>
            </router-link>
            <button class="submit-button default-button">
            Submit
            </button>
          </div>
        </div>
      </div>
      <div class="right-column">
        <Map />
      </div>
    </div>
    <div v-show="!isLoged">
      <notSignedIn />
    </div>
  </div>
</template>

<script>
import NotSignedIn from "../../components/notSignedIn/NotSignedIn.vue";
import Map from "../../components/Map"
export default {
  name: "EditPersonalData",
  components: {
    NotSignedIn,
    Map
  },
  data() {
    return {
      isLoged: false,
      email: "",
      nickname: ""
    };
  },
  beforeCreate() {
    if (this.$store.getters.getAuthStatus === "success") {
      this.isLoged = true;
    }
  }
};
</script>

<style></style>
