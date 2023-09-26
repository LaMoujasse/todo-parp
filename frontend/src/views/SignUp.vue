<template>
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta charset="utf-8">
    <title>Inscription</title>
  </head>
  <div class="global">
    <p class="missing"> {{ messageError }}</p>
    <div class="form-wrapper">
      <form id="signup-user">
        <div class="email">
          <label for="email"> Adresse mail </label>
          <input type="text" id="email" v-model="email"  class="form-email" placeholder="Adresse mail">
        </div>
        <div class="username">
          <label for="username"> Nom d'utilisateur </label>
          <input type="text" id="username" v-model="username" class="form-username" placeholder="Nom d'utilisateur">
        </div>
        <div class="password">
          <label for="password"> Mot de passe </label>
          <input type="text" id="password" v-model="password"  class="form-password" placeholder="Mot de passe">
        </div>
        <div class="button-signup">
          <button type="button" class="btn-signup" @click="SignupUser"> S'inscrire </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import router from '../router'
import {server} from '../utils/helper'
import { required, email } from '@vuelidate/validators'
import {useVuelidate} from '@vuelidate/core'

  export default {
    setup() {
      return {v$ : useVuelidate()}
    },
    userData() {
      return {
        messageError  : '',
        email    : '',
        username : '',
        password : ''
      };
    },
    validation() {
      return {
        email    : {required, email},
        username : {required},
        password : {required}
      }
    },
    methods: {
      async SignupUser() {
        
        try {
          const response = await axios.post(`${server.baseURL}/user`, {
            email: this.email,
            username: this.username,
            password: this.password
          });
          if (response.status === 201) {
            router.push('/connection')
          }
        }

        catch(error) {
          if (error.response.status === 409){
            if (!this.email || !this.password || !this.username){
              console.error('Vous devez remplir tous les champs', error);
              alert('Vous devez remplir tous les champs du formulaire');
            }
            if (this.email && this.username && this.password){
              if (!this.v$.email && !this.v$.username){
                console.error('Email ou nom d\'utilisateur déjà pris',error) 
                alert('Email ou nom d\'utilisateur déjà pris')
              }
            }
          }
          // console.error('Erreur lors de l\'inscription', error);
        }
      },
    }
  }
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
.form-password,
.form-email {
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 3px;
}

/* Style du bouton de connexion */
.btn-signup {
  background-color: #42b983;
  color: #fff;
  border: none;
  padding: 10px 15px;
  border-radius: 3px;
  cursor: pointer;
}

/* Style au survol du bouton */
.btn-signup:hover {
  background-color: #339468;
}

/* Style pour centrer le bouton */
.button-signup {
  text-align: center;
}
</style>