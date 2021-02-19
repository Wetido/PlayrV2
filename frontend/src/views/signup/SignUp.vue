<template>
  <form @submit="checkForm">
    <label for="newLogin">New login</label>
    <input
      name="newLogin"
      placeholder="for example: doglover12"
      v-model="newLogin"
      type="text"
    />
    <br />
    <label for="newPassword">New Password</label>
    <input
      name="newPassword"
      placeholder="Don't use the same password on multiple websites"
      v-model="newPassword"
      type="password"
    />
    <br />
    <button type="submit">Sign up</button>
  </form>
</template>

<script>
export default {
  name: "SignUp",
  data() {
    return {
      newLogin: "",
      newPassword: ""
    };
  },
  methods: {
    handleFormSubmit() {
      //just console.log for now to see is it working
      console.log(this.newLogin);
      console.log(this.newPassword);
    }
  }
};
</script>

<style></style>
