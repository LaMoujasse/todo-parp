<template>
  <!-- <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta charset="utf-8"> -->
    <title>Connexion</title>
  <!-- </head> -->
  <div class="global">
    <div class="form-wrapper">
      <form id="login-user">
        <div class="username">
          <label for="username"> Nom d'utilisateur </label>
          <input type="text" id="username" v-model="username" class="form-username" placeholder="Nom d'utilisateur">
        </div>
        <div class="password">
          <label for="password"> Mot de passe </label>
          <input type="text" id="password" v-model="password"  class="form-password" placeholder="Mot de passe">
        </div>
        <div class="button-login">
          <button type="button" class="btn-login" @click="LogUser"> S'identifier </button>
        </div>
        <div class="button-signup">
          <button type="button" class="btn-signup" @click="Signup"> S'inscrire </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import router from '../router'
import {server} from '../utils/helper'

export default{
  userData() {
    return {
      username: '',
      password: ''
    };
  },
  methods: {
    async LogUser() {
      try {
        const response = await axios
        .post(`${server.baseURL}/auth/login`, {
          username: this.username,
          password: this.password
        });

        if (response.status === 200) {
          router.push('/logged');
        }
      }
      catch (error) {
        console.error('Erreur lors de l\'authentifiaciton', error);
      }
    },

    Signup() {
      router.push('/signup'); 
    }
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* Style de base pour le corps de la page */
.global {
  font-family: Arial, sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70vh;
}

/* Style du conteneur du formulaire */
.form-wrapper {
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  padding: 20px;
  width: 300px;
}

/* Style des étiquettes des champs */
.label {
  font-weight: bold;
  margin-bottom: 5px;
}

/* Style des champs de saisie */
.form-username,
.form-password {
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 3px;
}

/* Style du bouton de connexion */
.btn-login {
  background-color: #42b983;
  color: #fff;
  border: none;
  padding: 10px 15px;
  border-radius: 3px;
  cursor: pointer;
  float: left;
}

.btn-signup {
  background-color: #42b983;
  color: #fff;
  border: none;
  padding: 10px 15px;
  border-radius: 3px;
  cursor: pointer;
  float: left;
  margin-left: 75px;
  clear: none;
}

/* Style au survol du bouton */
.btn-login:hover,
.btn-signup:hover {
  background-color: #339468;
}

/* Style pour centrer le bouton */
.button-login,
.button-signup {
  text-align: center;
}
</style>