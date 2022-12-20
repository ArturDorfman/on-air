import axios from "axios";

import { ref } from "vue";
import { defineStore } from "pinia";
import type { IPlaylistTrack } from "@/types/general.types";

export const usePlaylistStore = defineStore("playlistStore", () => {
  const playlist = ref<IPlaylistTrack[] | null>(null);

  async function getPlaylist(list: IPlaylistTrack[], url?: string) {
    if (url) {
      playlist.value = await axios.get(url);
    } else {
      playlist.value = list;
    }
  }

  return {
    playlist,
    getPlaylist,
  };
});
