<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <v-btn round large v-if="playerVisible" color="primary" @click="handleClick()">Hide</v-btn>
    <v-btn round large v-else color="primary" @click="handleClick()">Show</v-btn>
    <wap-player v-show="playerVisible" />
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
</style>
