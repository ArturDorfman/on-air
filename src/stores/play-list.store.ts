import axios from "axios";

import { ref } from "vue";
import { defineStore } from "pinia";
import type { IPlaylistTrack } from "@/types/general.types";

export const usePlaylistStore = defineStore("playlistStore", () => {
  const playlist = ref<IPlaylistTrack[] | null>(null);

  async function getPlaylist(payload: string) {
    const { data } = await axios.get(payload);
    playlist.value = data.nowplaying;
  }

  return {
    playlist,
    getPlaylist,
  };
});
