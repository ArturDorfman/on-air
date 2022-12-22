<template>
  <div
    class="relative pt-6 px-8 pb-12"
    :class="{ 'h-screen': !playlist?.length }"
  >
    <h1 class="text-white text-4xl pt-5 pb-5">Nowplaying</h1>

    <table class="w-full">
      <tr>
        <th
          v-for="heading in tableHeadings"
          :key="heading.value"
          class="py-2 uppercase text-gray-400 text-sm text-left font-light tracking-widest"
        >
          {{ heading.value }}
        </th>
      </tr>

      <tr v-for="(track, idx) in playlist" :key="track.time" class="space-y-8">
        <td>{{ idx + 1 }}</td>

        <SimpleTrackPreview :track="track" />

        <td class="text-gray-400">
          {{ track.album || "no album name" }}
        </td>

        <td class="text-gray-400">
          {{ dayjs(track.time).format("YYYY-MM-DD") }}
        </td>

        <td class="text-gray-400">
          {{ track.duration }}
        </td>
      </tr>
    </table>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { usePlaylistStore } from "@/stores/play-list.store";
import dayjs from "dayjs";

import SimpleTrackPreview from "@/components/SimpleTrackPreview.vue";

const playlistStore = usePlaylistStore();

const playlist = computed(() => playlistStore.playlist);

const tableHeadings = [
  { value: "#" },
  { value: "title" },
  { value: "album" },
  { value: "date added" },
  { value: "duration" },
];
</script>
