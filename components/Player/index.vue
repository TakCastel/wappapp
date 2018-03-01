
<template>
  <div class="player">
    <wap-play-btn/>
    <wap-volume-btn/>
  </div>
</template>

<script>
import ButtonPlay from './Controls/ButtonPlay';
import ButtonVolume from './Controls/ButtonVolume';
import SliderVolume from './Controls/SliderVolume';
import SliderProgress from './Controls/SliderProgress';

export default {
  name: 'Player',
  components: {
    'wap-play-btn': ButtonPlay,
    'wap-volume-btn': ButtonVolume,
    'wap-volume-bar': SliderVolume,
    'wap-progress-bar': SliderProgress,
  },
  data: () => ({
    volume: 80,
    mediaDuration : 0,
    mediaCurrentTime: 0,
  })
};
</script>

<style scoped>
  .player {
    display: flex;
    justify-content: space-between;
    position: absolute;
    background: #212121;
    padding: 2rem;
    bottom: 32px;
    left: 0;
    right: 0;
  }
</style>
