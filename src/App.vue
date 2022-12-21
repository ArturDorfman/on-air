<template>
  <div class="flex items-start">
    <SideBarModule />

    <div class="flex-1">
      <HeaderModule />

      <main>
        <div class="h-full md:h-screen bg-[#121212] text-white relative">
          <div
            class="h-[275px] bg-gradient-to-b from-[#1f1f1f] tp-[#121212] absolute w-full"
          ></div>

          <!-- TODO Fix loader -->
          <LoaderModule v-if="false" />

          <RouterView />
        </div>
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { RouterView } from "vue-router";
import { playlist } from "@/mockData";
import { usePlaylistStore } from "@/stores/play-list.store";

import SideBarModule from "@/views/SidebarModule/SidebarModule.vue";
import HeaderModule from "@/views/HeaderModule/HeaderModule.vue";
import LoaderModule from "@/components/LoaderModule.vue";

const loading = ref(false);

const playlistStore = usePlaylistStore();

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
