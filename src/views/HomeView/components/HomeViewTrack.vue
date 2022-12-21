<template>
  <div
    class="p-4 rounded-md bg-[#1818181] hover:bg-[#272727] duration-200 group"
  >
    <div class="relative">
      <img
        :src="track.previewUrl || track.imageUrl"
        alt="track preview"
        class="rounded shadow-lg"
      />

      <button
        class="h-10 w-10 bg-[#1cd955] rounded-full shadow-xl absolute right-2 bottom-2 flex justify-center items-center duration-200 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 hover:scale-105"
        @click="playTrack"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"
          />
        </svg>
      </button>
    </div>

    <h3 class="mt-4 mb-1 font-semibold tracking-wide capitalize">
      {{ track.title }}
    </h3>
    <p class="text-sm text-gray-400">{{ track.artist }}</p>
  </div>
</template>

<script setup lang="ts">
import type { IPlaylistTrack } from "@/types/general.types";

defineProps<{
  track: IPlaylistTrack;
}>();

function playTrack() {
  console.log("track playing");
}
</script>
