<template>
  <aside
    class="bg-black h-screen w-64 text-gray-400 hidden md:flex flex-col sticky top-0"
  >
    <a href="#" class="inline-block text-white ml-2">
      <div class="flex items-center w-full my-6 px-6">
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
            d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z"
          />
        </svg>

        <p class="text-white ml-2 text-3xl">On Air</p>
      </div>
    </a>

    <nav class="flex flex-col px-6 space-y-2">
      <RouterLink
        :to="{ name: routerNames.home }"
        class="flex items-center hover:text-white mx-2 px-4 py-2 rounded duration-300"
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
            d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
          />
        </svg>
        <span class="ml-4 text-sm font-semibold">Home</span>
      </RouterLink>

      <RouterLink
        :to="{ name: routerNames.playlist }"
        class="flex items-center hover:text-white mx-2 px-4 py-2 rounded duration-300"
      >
        <svg
          role="img"
          aria-hidden="true"
          class="w-6 h-6"
          viewBox="0 0 24 24"
          data-encore-id="icon"
          stroke-width="1.5"
          stroke="currentColor"
        >
          <path
            d="M3 22a1 1 0 01-1-1V3a1 1 0 012 0v18a1 1 0 01-1 1zM15.5 2.134A1 1 0 0014 3v18a1 1 0 001 1h6a1 1 0 001-1V6.464a1 1 0 00-.5-.866l-6-3.464zM9 2a1 1 0 00-1 1v18a1 1 0 102 0V3a1 1 0 00-1-1z"
          ></path>
        </svg>
        <span class="ml-4 text-sm font-semibold">Playlist</span>
      </RouterLink>
    </nav>
  </aside>
</template>

<script setup lang="ts">
import { routerNames } from "@/router";
</script>

<style scoped lang="scss">
.router-link-active {
  @apply bg-[#2d2b2b];
}
</style>
