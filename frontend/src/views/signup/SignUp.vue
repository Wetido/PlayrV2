<template>
  <div class="grid-container">
    <div class="left-column">
      <div class="form">
        <label class="form-label">Login:</label>
        <input
          class="form-input"
          placeholder="Tu wpisz login"
          v-model="login"
          type="text"
        />
        <label class="form-label">Hasło:</label>
        <input
          class="form-input"
          placeholder="Tu wpisz hasło"
          v-model="password"
          type="password"
        />
        <label class="wrongData-alert" v-show="isWrongDataProvided"
          >Wypełnij wszystkie pola!</label
        >
        <button @click="handleFormSubmit()" type="submit">
          Zarejestruj się
        </button>
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
@media only screen and (min-width: 800px) {
  .form {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 75%;
    margin: 2em;
  }
}
.form-label {
  color: #8d8d8d;
  font-size: 12px;
  margin-right: auto;
}
.form-input {
  width: 100%;
}
.wrongData-alert {
  color: #c96f6f;
  font-size: 14px;
}
</style>
