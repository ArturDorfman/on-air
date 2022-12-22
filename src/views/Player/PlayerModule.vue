<template>
  <div
    class="w-full bg-[#121212] fixed bottom-0 z-10 border-t border-t-gray-800"
    :class="{ 'py-4': playlist?.length }"
  >
    <div class="flex items-center">
      <SimpleTrackPreview
        v-if="currentTrack"
        :track="currentTrack"
        custom-img-width="w-20"
        class="ml-6"
      />

      <PlayerProgressBar v-if="currentTrack" :current-track="currentTrack" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { usePlaylistStore } from "@/stores/play-list.store";
import type { IPlaylistTrack } from "@/types/general.types";

import SimpleTrackPreview from "@/components/SimpleTrackPreview.vue";
import PlayerProgressBar from "./components/PlayerProgressBar.vue";

const playlistStore = usePlaylistStore();
const playlist = computed(() => playlistStore.playlist);

const currentTrack = computed(
  () =>
    playlist.value?.find(
      (track) => track.status === "playing"
    ) as IPlaylistTrack
);
</script>
