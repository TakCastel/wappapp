<template>
  <div class="homepage">
    <h1>{{ msg }}</h1>
    <v-btn round large v-if="playerVisible" color="primary" @click="handleClick()">Hide</v-btn>
    <v-btn round large v-else color="primary" @click="handleClick()">Show</v-btn>
    <transition name="slide-fade">
      <wap-player v-show="playerVisible" />
    </transition>
  </div>
</template>

<script>
import Player from '@/components/Player';

export default {
  layout: 'default',
  components: {
    'wap-player': Player,
  },
  data: () => ({
    msg: 'Welcome to the WappApp',
    playerVisible: false,
  }),
  methods: {
    handleClick() {
      this.playerVisible = !this.playerVisible;
    },
  },
};
</script>

<style>
h1 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #35495E;
}

/* Les animations d'entrée (« enter ») et de sortie (« leave »)  */
/* peuvent utiliser différentes fonctions de durée et de temps.  */
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateY(10px);
  opacity: 0;
}
</style>
