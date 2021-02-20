<template>
  <div>
    <label>Login</label>
    <input placeholder="Tu wpisz login" v-model="login" type="text" />
    <label>Hasło</label>
    <input placeholder="Tu wpisz hasło" v-model="password" type="password" />
    <label v-show="isWrongDataProvided">Wypełnij wszystkie pola!</label>
    <button @click="handleFormSubmit()" type="submit">Zarejestruj się</button>
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
input,
label,
button {
  display: block;
  margin: 0 auto;
}

#wrong-password {
  visibility: hidden;
}
</style>
