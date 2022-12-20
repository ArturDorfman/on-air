<template>
  <h2>Home</h2>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { playlist } from "@/mockData";
import { usePlaylistStore } from "@/stores/play-list.store";

const playlistStore = usePlaylistStore();

async function init() {
  try {
    setInterval(() => {
      playlistStore.getPlaylist(playlist);
    }, 2000);
  } catch (err) {
    console.log(err);
  }
}

onMounted(init);
</script>
