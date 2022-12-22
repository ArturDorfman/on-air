<template>
  <div class="relative">
    <div class="flex items-start">
      <SideBarModule />

      <div class="flex-1">
        <HeaderModule />

        <main>
          <div class="bg-[#121212] text-white relative">
            <div
              class="h-[275px] bg-gradient-to-b from-[#1f1f1f] tp-[#121212] absolute w-full"
            ></div>

            <RouterView />
          </div>
        </main>
      </div>
    </div>

    <PlayerModule />
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { RouterView } from "vue-router";
import { usePlaylistStore } from "@/stores/play-list.store";

import SideBarModule from "@/views/Sidebar/SidebarModule.vue";
import HeaderModule from "@/views/Header/HeaderModule.vue";
import PlayerModule from "@/views/Player/PlayerModule.vue";

const requestDelay = ref(2000);

const playlistStore = usePlaylistStore();

async function getPlaylist() {
  try {
    await playlistStore.getPlaylist(
      "https://onair.radioapi.io/thisisgo/go/onair.json"
    );
  } catch (err) {
    console.log(err);
  }
}

function init() {
  let timerId = setTimeout(function tick() {
    getPlaylist();
    timerId = setTimeout(tick, requestDelay.value);
  }, requestDelay.value);
}

onMounted(init);
</script>
