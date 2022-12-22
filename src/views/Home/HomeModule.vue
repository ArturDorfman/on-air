<template>
  <div class="relative pt-6 px-8 pb-12 h-screen">
    <div>
      <div class="flex justify-between items-end mb-4">
        <h2 class="text-2xl font-semibold hover:underline capitalize">
          Tracks
        </h2>
        <RouterLink
          :to="{ name: routerNames.playlist }"
          class="uppercase text-xs font-semibold tracking-widest hover:underline text-gray-400 leading-6"
        >
          See all
        </RouterLink>
      </div>

      <div class="grid grid-cols-2 md:grid-cols-4 gap-5">
        <HomeViewTrack
          v-for="playlistItem in playlistPreview"
          :key="playlistItem.time"
          :track="playlistItem"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { RouterLink } from "vue-router";
import { routerNames } from "@/router";
import { usePlaylistStore } from "@/stores/play-list.store";

import HomeViewTrack from "@/views/Home/components/HomeModuleTrack.vue";

const playlistStore = usePlaylistStore();
const playlistPreview = computed(() => playlistStore.playlist?.slice(0, 8));
</script>
