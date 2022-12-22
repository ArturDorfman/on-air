<template>
  <div class="flex items-center mx-3">
    <div class="w-16 mr-2">
      <img :src="track.previewUrl || track.imageUrl" alt="track preview" />
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
}>();
</script>
