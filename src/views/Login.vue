<template>
  <center>
    <v-card color="#45B39D">
      <v-card color="#D4EFDF" tonal width="800" class="ma-10 pa-10" elevation="10">
        
        <v-card-title>
          <h1 style="font-weight: bold; margin-bottom: 20px; color: black;">Login</h1>
        </v-card-title>
        <div v-if="error" class="alert alert-danger">{{error}}</div>
        <form action="#" @submit.prevent="Login">
          <div class="textfields">
            <v-text-field prepend-icon="mdi-email" color="purple" class="mb-5" id="email" type="email" label="Email" v-model="email">
            </v-text-field>
            <v-text-field prepend-icon="mdi-lock" color="purple" id="password" type="password" label="Password" v-model="password">
            </v-text-field>
          </div>
          <v-btn id="loginBtn" elevation="5" height="60" block type="submit">
            <strong>Login</strong>
          </v-btn>

          <h3><strong>New user?</strong><router-link to="/register" id="link-register"><strong> Create an account</strong></router-link></h3>
        </form>
      </v-card>
      </v-card>
  </center>
</template>
  
<script>
import { ref } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
export default {
  name: "LoginComponent",
  setup() {
    const email = ref('')
    const password = ref('')
    const error = ref(null)
    const store = useStore()
    const router = useRouter()
    const Login = async () => {
      try {
        await store.dispatch('logIn', {
          email: email.value,
          password: password.value
        })
        router.push('/dashboard')
      }
      catch (err) {
        error.value = err.message
      }
    }
    return { Login, email, password, error }
  }
};
</script>
<style>
#loginBtn {
  margin-bottom: 40px;
  margin-top: 40px;
  background-color: #4a27c5;
  color: rgb(7, 7, 7);
  font-size: 20px;
}

#loginBtn:hover {
  background-color: rgb(108, 136, 179);
  color: rgb(19, 18, 18);
}

.textfields {
  margin-top: 40px;
  margin-bottom: 20px;
}

#link-register {
  color: rgb(118, 132, 214);
  background-color: transparent;
}

#link-register:hover {
  color: #021d27;
}

template {
  background-color: rgb(5, 27, 29);

}
</style>