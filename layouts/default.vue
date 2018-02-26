<template>
    <v-app id="inspire" dark>
    <header>
      <v-navigation-drawer
        clipped
        fixed
        v-model="drawer"
        app
      >
        <v-list>
          <router-link 
          v-for="item in menu" 
          :key="item.id"
          @click.native="handleClick()"
          :to="{path: item.link}"
        >
            <v-list-tile>
              <v-list-tile-action>
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>{{ item.title }}</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </router-link>
        </v-list>
      </v-navigation-drawer>
      <v-toolbar app fixed clipped-left>
        <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
        <v-toolbar-title>WappApp</v-toolbar-title>
      </v-toolbar>
    </header>
    <v-content>
      <v-container fluid fill-height>
        <v-layout justify-center align-center>
          <v-flex shrink>
            <nuxt />
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
    <v-footer app fixed>
      <span class="ml-3" >&copy; 2018</span>
      <span class="ml-3">
        <a style="color: white" href="">Mentions légales</a>
      </span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'app',
  data: () => ({
    drawer: false,
    menu: [
      {
        icon: 'home',
        title: 'Home',
        link: '/',
      },
      {
        icon: 'music_note',
        title: 'Podcasts',
        link: '/podcast',
      },
    ],
  }),
  methods: {
    handleClick() {
      this.drawer = false;
    },
  },
};
</script>

<style scoped>
body {
  margin: 0;
  font-family: 'Muli', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 100%;
}

main {
  text-align: center;
}

li {
  display: block;
  margin: 0;
}
li:hover {
  background: #5d5d5d;
}

.application {
  background: linear-gradient(-45deg, #41b883, #35495d);
  color: #ffffff;
}

.navigation-drawer a {
  color: #ffffff;
  text-decoration: none; 
}

.navigation-drawer > i.material-icons {
  font-size: 1.5em;
}
</style>
