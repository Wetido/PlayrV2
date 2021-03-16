<template>
  <div>
    <h1>Musisz się zalogować!</h1>
    <router-link to="/signin">
      <button class="default-button login-redirect-button">
        Przejdź do logowania
      </button>
    </router-link>
  </div>
</template>

<script>
export default {
    name: "NotSignedIn",
};
</script>

<style>
.login-redirect-button {
  background-color: #31c8b6;
  color: white;
  padding: 8px;
}
</style>
