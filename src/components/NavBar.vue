<style>
  
  </style>
  
  <template>
    <v-toolbar class="toolbarRGB" app>
      <v-toolbar-title></v-toolbar-title>
      <v-spacer></v-spacer>
  
      <div v-if="user.loggedIn">
        <v-btn color="white" class="font-weight-bold" @click.prevent="signOut" href="/" prepend-icon="mdi-logout-variant">
          Logout
        </v-btn>
        <v-menu open-on-hover>
          <template v-slot:activator="{ props }">
            <v-btn icon v-bind="props">
              <v-icon>mdi-dots-vertical</v-icon>
            </v-btn>
          </template>
  
          <v-list>
            <v-list-item v-for="(item, index) in items" :key="index" router :to="item.path" :prepend-icon="item.icon">
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>
      <div v-else>
        <v-btn color="white" class="font-weight-bold" router :to="loginUrl" prepend-icon="mdi-login-variant">
          Login
        </v-btn>
        <v-btn color="white" class="font-weight-bold" router :to="registerUrl" prepend-icon="mdi-account-plus-outline">
          Register
        </v-btn>
      </div>
    </v-toolbar>
    <div v-if="user.loggedIn">
      <v-navigation-drawer style="color:aqua" expand-on-hover rail="true">
        <v-parallax src="https://wallpapercave.com/wp/wp2577110.jpg"
          class="fill-height">
          <v-list>

            <v-list-item link>
          <v-list-item-content>
            <v-list-item-title class="text-h6">
              {{user.data.displayName}}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
            <v-list-item prepend-icon="mdi-logout-variant" subtitle="Logout" @click.prevent="signOut" href="/">
  
            </v-list-item>
          </v-list>
          <v-divider></v-divider>
  
          <v-list density="compact" app>
            <v-list-item v-for="item in items" :key="item.title" router :to="item.path" :prepend-icon="item.icon"
              :color="item.color">
              <v-list-item-title :color="item.color">{{ item.title }}</v-list-item-title>
  
            </v-list-item>
          </v-list>
  
        </v-parallax>
      </v-navigation-drawer>
    </div>
  </template>
  
  <script>
  import { useStore } from "vuex";
  import { useRouter } from "vue-router";
  import { computed } from "vue";
  import { auth } from '../firebase'
  import { database } from "../firebase";
  import { ref } from 'vue'
  export default {
    data() {
      return {
        drawer: false,
        loginUrl: '/',
        registerUrl: '/register',
        items: [
              { title: 'Dashboard', icon: 'mdi-view-dashboard', path: '/dashboard' },
             { title: 'Calculator', icon: 'mdi-calculator', path: '/SimpleMath' },
             { title: 'String App', icon: 'mdi-alphabetical', path: '/StringManip'},
             { title: 'Quiz', icon: 'mdi-earth', path: '/QuizView'},
             { title: 'Quiz Records', icon: 'mdi-history', path: '/MatchHistory' },
             { title: 'About Vuetify', icon: 'mdi-vuetify', path: '/Vuetify'},
             { title: 'About Page', icon: 'mdi-account-circle', path: '/AboutPage'},
        ],
        rail: false,
      }
    },
    setup() {
      const store = useStore()
      const router = useRouter()
      auth.onAuthStateChanged(user => {
        store.dispatch("fetchUser", user);
      });
      const user = computed(() => {
        return store.getters.user;
      });
      const signOut = async () => {
        await store.dispatch('logOut')
        router.push('/login')
      }
      return { user, signOut }
    }
  };
  </script>