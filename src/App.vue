<template>
  <div class="container">
    <h1>Oauth de Google</h1>
    <div v-if="login" class="user-info">
      <h2>{{ user.name }}</h2>
      <img :src="user.picture" alt="User Profile" />
      <p>{{ user.email }}</p>
      <button @click="logout">Cerrar sesión</button>
    </div>
    <div v-else>
      <GoogleLogin :callback="callback" prompt auto-login />
    </div>
  </div>
</template>

<script>
import { decodeCredential, googleLogout } from "vue3-google-login";
export default {
  data() {
    return {
      login: false,
      user: null,
    };
  },
  methods: {
    callback(response) {
      console.log("Sesión iniciada");
      this.login = true;
      this.user = decodeCredential(response.credential);
    },
    logout() {
      googleLogout();
      this.login = false;
    },
  },
};
</script>

<style scoped>
.container {
  text-align: center;
  margin-top: 50px;
}
.user-info {
  margin-top: 20px;
}
button {
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
</style>
