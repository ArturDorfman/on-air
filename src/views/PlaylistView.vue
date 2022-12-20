<template>
  <div>
    <h1>This is an playlist page</h1>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { usePlaylistStore } from "@/stores/play-list.store";

const playlistStore = usePlaylistStore();

const playlist = computed(() => playlistStore.playlist);
</script>
