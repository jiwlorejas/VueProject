<template>
  <v-card
    max-width="800"
    class="ma-10"
  >

    <v-container>
      <v-row dense>
        <v-col cols="12">
          <v-card
            color="#385F73"
            dark
          >
            <v-card-title style="color: white;" class="text-h5">
              Dasboard
            </v-card-title>

            <v-card-subtitle style="color: white;">My profile information can be found here.</v-card-subtitle>

            <v-card-actions>
              <v-btn text>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>

        <v-col
          v-for="(item, i) in items"
          :key="i"
          cols="12"
        >
          <v-card 
            :color="item.color"
            dark
          >
            <div class="d-flex flex-no-wrap">
              <div>
                <v-card-title style="color: white;"
                  class="text-h5"
                  v-text="item.title"
                ></v-card-title>

                <v-card-subtitle style="color: white;" v-text="item.artist"></v-card-subtitle>

                <v-card-actions>
                  <v-btn
                    v-if="item.artist === 'Calculator'"
                    class="ml-2 mt-3"
                    fab
                    icon
                    height="40px"
                    right
                    width="40px"
                  >
                    <v-icon>mdi-play</v-icon>
                  </v-btn>

                  <v-btn
                    v-else
                    class="ml-2 mt-5"
                    outlined
                    rounded
                    small
                  >
                  </v-btn>
                </v-card-actions>
              </div>

              <v-avatar
                class="ma-3"
                size="125"
                tile
              >
                <v-img :src="item.src"></v-img>
              </v-avatar>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>
<script>
  export default {
    data: () => ({
      items: [
        {
          color: '#775fec',
          src: '',
          title: 'String Manipulator',
          artist: 'Contains a string manipulator',
        },
        {
          color: '#ffb6c1',
          src: '',
          title: 'Calculator',
          artist: 'It contains a simple calculator',
        },
        {
          color: '#00c992',
          src: '',
          title: 'Quiz',
          artist: 'Simple Quiz about mathematics',
        },
      ],
    }),
  }
</script>