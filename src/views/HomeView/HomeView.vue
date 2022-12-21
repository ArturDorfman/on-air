<template>
  <div class="h-full md:h-screen bg-[#121212] text-white relative">
    <div
      class="h-[275px] bg-gradient-to-b from-[#1f1f1f] tp-[#121212] absolute w-full"
    ></div>

    <div class="relative pt-6 px-8 pb-12">
      <!-- TODO Fix loader -->
      <LoaderModule v-if="loading" />

      <div>
        <div class="flex justify-between items-end mb-4">
          <h2 class="text-2xl font-semibold hover:underline capitalize">
            Tracks
          </h2>
          <RouterLink
            :to="{ name: routerNames.playlist }"
            class="uppercase text-xs font-semibold tracking-widest hover:underline text-[#b3b3b3] leading-6"
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
  </div>
</template>

<script setup lang="ts">
import { onMounted, computed, ref } from "vue";
import { RouterLink } from "vue-router";
import { routerNames } from "@/router";
import { playlist } from "@/mockData";
import { usePlaylistStore } from "@/stores/play-list.store";

import HomeViewTrack from "@/views/HomeView/components/HomeViewTrack.vue";
import LoaderModule from "@/components/LoaderModule.vue";

const playlistStore = usePlaylistStore();

const loading = ref(false);

const playlistPreview = computed(() => playlistStore.playlist?.slice(0, 8));

async function init() {
  try {
    loading.value = true;
    setInterval(() => {
      playlistStore.getPlaylist(playlist);
    }, 2000);
  } catch (err) {
    console.log(err);
  } finally {
    loading.value = false;
  }
}

onMounted(init);
</script>
