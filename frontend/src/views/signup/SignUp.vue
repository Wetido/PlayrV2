<template>
  <div class="grid-container">
    <div class="left-column">
      <span class="corner-title">Sign Up</span>
      <div class="form">
        <label class="form-label">New login:</label>
        <input class="form-input" v-model="login" type="text" />
        <label class="form-label">New password:</label>
        <input class="form-input" v-model="password" type="password" />
        <label class="form-label">Confirm password:</label>
        <input class="form-input" v-model="passwordConfirm" type="password" />
        <label class="wrongData-alert" v-show="isWrongDataProvided"
          >We need data to register you :)</label
        >
        <div class="buttons-container">
          <button class="default-button signin-button">Sign in</button>
          <button
            class="submit-button default-button"
            @click="handleFormSubmit()"
            type="submit"
          >
            Register
          </button>
        </div>
      </div>
    </div>
    <div class="right-column"></div>
  </div>
</template>

<script>
import { isEmpty } from "../../scripts/Core";

export default {
  name: "SignUp",
  data() {
    return {
      login: "",
      password: "",
      passwordConfirm: "",
      isWrongDataProvided: false,
    };
  },
  methods: {
    checkIsEmpty() {
      if (isEmpty(this.login) || isEmpty(this.password)) {
        this.isWrongDataProvided = true;
      } else {
        this.isWrongDataProvided = false;
      }
      return this.isWrongDataProvided;
    },
    handleChangeInputs() {
      this.checkIsEmpty();
    },

    handleFormSubmit() {
      this.checkIsEmpty();
    },
  },

  watch: {
    login() {
      this.handleChangeInputs();
    },
    password() {
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
.signin-button {
  margin-top: 10px;
  height: 30px;
  width: 100px;
  display: inline-block;
  transition: all 0.2s;
  background-color: #c96f6f;
  color: white;
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
