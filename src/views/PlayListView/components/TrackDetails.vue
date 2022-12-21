<template>
  <div></div>
</template>

<script setup lang="ts">
import type { IPlaylistTrack } from "@/types/general.types";

defineProps<{
  track: IPlaylistTrack;
}>();
</script>
