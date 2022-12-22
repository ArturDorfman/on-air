<template>
  <div class="flex items-center mx-3">
    <div class="mr-2" :class="[customImgWidth || 'w-16']">
      <img
        v-if="track.imageUrl"
        :src="track.previewUrl || track.imageUrl"
        alt="track preview"
      />
      <div v-else class="w-16 h-16 bg-info"></div>
    </div>

    <div class="space-y-2">
      <h3 class="text-white">{{ track.title }}</h3>
      <p class="text-gray-400 text-sm">{{ track.artist }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { IPlaylistTrack } from "@/types/general.types";

defineProps<{
  track: IPlaylistTrack;
  customImgWidth?: string;
}>();
</script>
