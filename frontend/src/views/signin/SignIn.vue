<template>
  <div class="grid-container">
    <div class="left-column">
      <span class="corner-title">Sign in</span>
      <div class="form">
        <label class="form-label">email:</label>
        <input class="form-input" v-model="email" type="text"/>
        <label class="form-label">password:</label>
        <input class="form-input" v-model="password" type="password"/>
        <label class="wrongData-alert" v-show="isWrongDataProvided">
          we need correct data to sign you in!</label>
        <div class="buttons-container">
          <router-link to="/signup">
            <button class="default-button signup-button">Register</button>
          </router-link>
          <button
            class="submit-button default-button"
            @click="handleFormSubmit()"
            type="submit"
          >
            Sign in
          </button>
        </div>
      </div>
    </div>
    <div class="right-column">
      <Map></Map>
    </div>
  </div>
</template>

<script>
import {isEmpty} from "../../scripts/Core";
import Map from '../../components/Map'
import axios from "axios";
import {BACKEND_URL, ROUTES} from "@/consts/routes";

export default {
  name: "SignIn",
  data() {
    return {
      email: "",
      password: "",
      isWrongDataProvided: false,
    };
  },
  methods: {
    checkLoginDataEmptyNotEmpty() {
      return !(isEmpty(this.email) || isEmpty(this.password));
    },

    handleChangeInputs() {
      this.checkLoginDataEmptyNotEmpty();
    },

    async handleFormSubmit() {

      if (this.checkLoginDataEmptyNotEmpty()) {

        try{
          const response = await axios.post(`${BACKEND_URL}/${ROUTES.LOGIN}`,
            {email: this.email, password: this.password})

          this.$store.dispatch('actionAuthSuccess', response.data)
        }catch(error){
          window.alert('Blad logowania');
        }
      }

    },
  },
  components: {
    Map: Map
  },
  watch: {
    login() {
      this.handleChangeInputs();
    },
    password() {
      this.handleChangeInputs();
    },
    email() {
      this.handleChangeInputs();
    },
  },
};
</script>

<style scoped>
/* form style*/
@media only screen and (min-width: 800px) {
  .form {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 75%;
    margin: 2em;
    margin-top: 5em;
  }
}

.form-label {
  color: #8d8d8d;
  font-size: 12px;
  margin-right: auto;
  margin-top: 10px;
}

.form-input {
  width: 95%;
  border-radius: 6px;
  outline: none;
  border: none;
  background-color: #f3f3f3;
  height: 31px;
  margin-top: 5px;
  font-family: "Montserrat", sans-serif;
  padding-left: 5%;
}

.wrongData-alert {
  color: #c96f6f;
  font-size: 14px;
}

.submit-button {
  margin-top: 10px;
  height: 30px;
  width: 100px;
  display: inline-block;
  transition: all 0.2s;
  background-color: #31c8b6;
  color: white;
  margin-left: 2em;
}

.signup-button {
  margin-top: 10px;
  height: 30px;
  width: 100px;
  display: inline-block;
  transition: all 0.2s;
  background-color: #c96f6f;
  color: white;
}

.buttons-container {
  height: 30px;
}

/* rest of left collumn */
.corner-title {
  position: absolute;
  top: 15px;
  left: 15px;
  font-size: 36px;
  font-weight: 300;
}
</style>
