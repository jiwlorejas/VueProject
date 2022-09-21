<template>
  <nav>
      <v-toolbar app>
       <v-app-bar-nav-icon @click='toggleDrawer'></v-app-bar-nav-icon>
      <v-toolbar-title >
        <span class="font-weight-light"> Hey! </span>
        <span>It's JEWEL ROSE</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>

      <!-- dropdown menu -->
    <v-menu
      open-on-hover
    >
      <template v-slot:activator="{ props }">
        <v-btn
          color="primary"
          v-bind="props"
        >
          mjrnlorejas@tip.edu.ph
        </v-btn>
      </template>

      <v-list>
        <v-list-item
          v-for="(item, index) in items"
          :key="index"
          router
          :to="item.path" :prepend-icon="item.icon">
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>

      <v-btn flat color="grey">
        <span>Sign Out</span>
        <v-icon right>exit_to_app</v-icon>
      </v-btn>
      
      
      </v-toolbar>

     <v-navigation-drawer app v-model="drawer" >
       <v-list-item
          v-for="item in items"
          :key="item.title"
          router 
          :to="item.path" :prepend-icon="item.icon">
          <v-list-item-title>{{ item.title }}</v-list-item-title>
          
        </v-list-item>
      
     </v-navigation-drawer>
  </nav>
</template>

<script setup>
  import { ref } from 'vue'
    
  const drawer = ref(false)

  const  items =  ref([
             { title: 'Dashboard', icon: 'mdi-view-dashboard', path: '/dashboard' },
             { title: 'Calculator', icon: 'mdi-calculator', path: '/SimpleMath' },
             { title: 'String App', icon: 'mdi-alphabetical', path: '/StringManip'},
             { title: 'Quiz', icon: 'mdi-earth', path: '/QuizView'},
             { title: 'Scores', icon: 'mdi-star', path: '/scores', color: "#cfc43c" },
             { title: 'About Vuetify', icon: 'mdi-vuetify', path: '/Vuetify'},
             { title: 'About Page', icon: 'mdi-account-circle', path: '/AboutPage'},
          ])
  

 function toggleDrawer(){
  return drawer.value = !drawer.value
 }

 
</script>