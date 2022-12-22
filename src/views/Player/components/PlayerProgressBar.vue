<template>
  <div class="flex items-center w-full">
    <div class="text-white w-1/4 flex justify-end px-3">
      {{ time }}
    </div>

    <div class="flex-grow">
      <div class="h-3 relative rounded-full overflow-hidden">
        <div class="w-full h-full bg-gray-200 absolute"></div>
        <div
          class="transition-all ease-out duration-2000 h-full bg-green-500 relative"
          :style="{ width: progress + '%' }"
        ></div>
      </div>
    </div>

    <div class="text-white w-1/4 px-3">{{ currentTrack.duration }}</div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed, reactive } from "vue";
import type { IPlaylistTrack } from "@/types/general.types";

const progress = ref(0);

const ticker = ref(0);

const time = ref("00:00:00");

const props = defineProps<{
  currentTrack: IPlaylistTrack;
}>();

const trackDurationInSeconds = computed(() =>
  props.currentTrack.duration
    .split(":")
    .reduce((acc, time) => 60 * acc + +time, 0)
);

function formatSeconds(seconds: number) {
  time.value = new Date(seconds * 1000).toISOString().slice(11, 19);
}

function playSong() {
  let timerId = setTimeout(function tick() {
    ticker.value++;
    progress.value = (ticker.value / trackDurationInSeconds.value) * 100;

    formatSeconds(ticker.value);

    timerId = setTimeout(tick, 1000);

    if (ticker.value >= trackDurationInSeconds.value) {
      progress.value = 100;
      ticker.value = trackDurationInSeconds.value;
      time.value = props.currentTrack.duration;
      clearTimeout(timerId);
    }
  }, 1000);
}

onMounted(playSong);
</script>
