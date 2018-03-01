<template>
  <div class="podcast">
    <h1>{{ msg }}</h1>
    <div class="cards-wrapper">
      <v-card v-for="card in cards" :key="card.title">
        <v-card-media :src="card.src" height="200px">
          <v-container fill-height fluid>
            <v-layout fill-height>
              <v-flex xs12 align-end flexbox>
                <span class="headline white--text" v-text="card.title"/>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card-media>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn icon>
            <v-icon>favorite</v-icon>
          </v-btn>
          <v-btn icon>
            <v-icon>bookmark</v-icon>
          </v-btn>
          <v-btn icon>
            <v-icon>share</v-icon>
          </v-btn>
        </v-card-actions>
      </v-card>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'default',
  data: () => ({
    msg: 'Wappapp list',
    cards: [
        { title: 'Janvier', src: 'https://pre00.deviantart.net/4af3/th/pre/i/2014/170/e/f/mountain_landscape_by_ferdinandladera-d7n16ov.jpg' },
        { title: 'Nouveautés', src: 'https://img00.deviantart.net/b398/i/2014/039/5/2/fortress_by_ferdinandladera-d75lzb2.jpg' },
        { title: 'Réunion', src: 'https://img00.deviantart.net/f44e/i/2013/354/7/c/achtorjah_mountain_by_ferdinandladera-d6ypsbl.jpg' }
      ]
  }),
};
</script>

<style>
  .cards-wrapper {
    width: 500px;
  }
  .card {
    width: 100%;
    margin: 1em
  }
</style>

