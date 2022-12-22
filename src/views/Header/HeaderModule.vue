<template>
  <header
    class="bg-[#070707] flex-1 flex justify-between items-center py-3 px-8 sticky top-0 z-10"
  >
    <div class="flex">
      <div
        class="p-1 ml-2 text-gray-400 cursor-pointer"
        @click="routerNavigation('back')"
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
            d="M15.75 19.5L8.25 12l7.5-7.5"
          />
        </svg>
      </div>

      <div
        class="p-1 mr-2 text-gray-400 cursor-pointer"
        @click="routerNavigation('forward')"
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
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          />
        </svg>
      </div>
    </div>

    <div class="hidden sm:block">
      <button
        class="text-white text-sm font-semibold leading-5 tracking-widest uppercase py-2 px-8 rounded-full hover:scale-105"
      >
        Sign up
      </button>

      <button
        class="bg-white text-sm font-semibold leading-5 tracking-widest uppercase py-2 px-8 rounded-full hover:scale-105"
      >
        Log in
      </button>
    </div>
  </header>
</template>

<script setup lang="ts">
import { router, routerNames } from "@/router";

function hasHistory() {
  return window.history.length > 2;
}

function routerNavigation(command: string) {
  if (command === "back") {
    hasHistory() ? router.back() : router.push({ name: routerNames.home });
  } else if (command === "forward") {
    router.forward();
  }
}
</script>
