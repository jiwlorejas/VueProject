<template>
  <v-card
    class="mx-auto"
    max-width="344"
  >
    <v-img
      src="https://scontent.fmnl25-3.fna.fbcdn.net/v/t1.15752-9/307094960_413025154283920_9176470491832355066_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeEU858tk4q2WtgBFYN0-_i2RTveCnc0nfxFO94KdzSd_NFggOVbYn_WmVsHqdbOyuW0EuOuKT6jHwo_gIapPLNV&_nc_ohc=JwJQHVB-QKgAX8VeyaX&_nc_ht=scontent.fmnl25-3.fna&oh=03_AVIr_ETh44hjJf2MPBKt341Pl8J3xmgld7cSCDqpVtitHQ&oe=634EEDDC"
      height="200px"
    ></v-img>

    <v-card-title>
      Jewel Rose Lorejas
    </v-card-title>

    <v-card-subtitle>
      a 4th yr college studying BSIT @ TIP-Manila.
    </v-card-subtitle>

    <v-card-actions>
      <v-btn
        color="orange lighten-2"
        text
      >
        About Me:
      </v-btn>

      <v-spacer></v-spacer>

      <v-btn
        icon
        @click="show = !show"
      >
        <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

        <v-card-text>
          I am a simple girl who enjoys keeping life simple, and I am a kind-hearted person. As I get older, 
          I dream of living independently. I want to be in loving relationships, but I don't want to be dependent on anyone. 
          I want to be financially and emotionally self-sufficient and strong. I enjoy learning and trying new things in life. 
          I am grateful for what I have and want to do everything that I can to make others happy.
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
</template>

<script>
  export default {
    data: () => ({
      show: false,
    }),
  }
</script>