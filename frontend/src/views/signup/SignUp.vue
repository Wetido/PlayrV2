<template>
  <div class="grid-container">
    <div class="left-column">
      <span class="corner-title">Sign Up</span>
      <div class="form">
        <label class="form-label">New login:</label>
        <input class="form-input" v-model="login" type="text" />

        <label class="form-label">email:</label>
        <input class="form-input" v-model="email" type="text" />

        <label class="form-label">New password:</label>
        <input class="form-input" v-model="password" type="password" />

        <label class="form-label">Confirm password:</label>
        <input class="form-input" v-model="passwordConfirm" type="password" />

        <label class="wrongData-alert" v-if="isWrongDataProvided"
          >we need correct data to register you!</label
        >

        <div class="buttons-container">
          <router-link to="signin">
            <button class="default-button negative-button">Sign in</button>
          </router-link>
          <button class="submit-button default-button" @click="handleFormSubmit()" type="submit">
            Register
          </button>
        </div>
      </div>
    </div>
    <div class="right-column">
      <Map />
    </div>
  </div>
</template>

<script>
import { isEmpty } from "../../scripts/Core";
import Map from "../../components/Map";
import axios from "axios";
import { BACKEND_URL, ROUTES } from "@/consts/routes";
import { LOCATIONS } from "@/consts/locations";

export default {
  name: "SignUp",
  components: {
    Map
  },
  data() {
    return {
      login: "",
      email: "",
      password: "",
      passwordConfirm: "",
      isWrongDataProvided: true
    };
  },
  methods: {
    confirmPassword() {
      this.isWrongDataProvided = this.password !== this.passwordConfirm;
    },

    checkIsEmpty() {
      this.isWrongDataProvided =
        isEmpty(this.login) || isEmpty(this.password) || isEmpty(this.email);
    },

    handleChangeInputs() {
      this.checkIsEmpty();
    },

    async handleFormSubmit() {
      if (!this.isWrongDataProvided) {
        const userData = {
          login: this.login,
          password: this.password,
          email: this.email
        };
        try {
          await axios.post(`${BACKEND_URL}/${ROUTES.SIGNUP}`, userData);
          window.alert("Pomyślnie zarejestrowano");
          window.location = LOCATIONS.SIGNIN;
        } catch (e) {
          window.alert("Użytkownik już istnieje");
          console.log(e);
        }
      }
    }
  },

  watch: {
    login() {
      this.handleChangeInputs();
    },
    password() {
      this.handleChangeInputs();
    },
    passwordConfirm() {
      this.confirmPassword();
    },
    email() {
      this.handleChangeInputs();
    }
  }
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
.buttons-container {
  height: 30px;
}
</style>
