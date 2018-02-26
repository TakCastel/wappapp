
<template>
  <div class="player">
    Hello !
  </div>
</template>

<script>
// Important note : When imported, the player MUST be displayed as last tag element

export default {
  name: 'Player',
};
</script>

<style scoped>
  .player {
    position: absolute;
    background: #212121;
    padding: 2rem;
    bottom: 32px;
    left: 0;
    right: 0;
  }
</style>
