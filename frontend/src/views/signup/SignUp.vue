<template>
  <div>
    <label>Login</label>
    <input placeholder="Tu wpisz login" v-model="login" type="text" />
    <label>Hasło</label>
    <input placeholder="Tu wpisz hasło" v-model="password" type="password"/>
    <label id="wrong-password">Podales błędne dane</label>
    <button @click="handleFormSubmit()" type="submit">Zarejestruj się</button>
  </div>
</template>

<script>
import { isEmpty } from '../../scripts/Core';

export default {
  name: "SignUp",
  data() {
    return {
      login: "",
      password: ""
    };
  },
  methods: {
    handleChangeInputs() {
      if(!isEmpty(this.login) || !isEmpty(this.password)){
        document.getElementById('wrong-password').style.visibility = 'visible';
      }else{
        document.getElementById('wrong-password').style.visibility = 'hidden';
      }
    },

    handleFormSubmit(){
      //CHECK DATA AND DO STH
    }
  },

  watch: {
    login(){
      this.handleChangeInputs()
    },
    password(){
      this.handleChangeInputs()
    },
  }
};
</script>

<style scoped>
input,
label,
button {
  display: block;
  margin: 0 auto;
}

#wrong-password{
  visibility: hidden;
}
</style>
