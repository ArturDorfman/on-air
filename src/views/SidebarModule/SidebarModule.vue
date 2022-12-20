<template>
  <aside>
    <a href="#" class="inline-block text-white">
      <div class="flex items-center w-full my-6 px-6">
        <svg viewBox="-2 -2 24 24" class="fill-white block w-[50px]">
          <path
            d="M9.992 0C4.474 0 0 4.474 0 9.992c0 5.518 4.474 9.992 9.992 9.992 5.518 0 9.992-4.474 9.992-9.992C19.984 4.474 15.51 0 9.992 0zm4.348 15.683c-.127.329-.355.512-.59.512a.518.518 0 0 1-.344-.141c-1.796-1.588-3.87-1.843-5.294-1.778-1.578.073-2.735.544-2.747.549-.363.15-.74-.174-.839-.724-.1-.55.114-1.119.477-1.27.052-.022 1.297-.534 3.029-.62a8.939 8.939 0 0 1 2.917.32 8.09 8.09 0 0 1 3.146 1.737c.326.289.436.922.245 1.415zm1.27-3.063c-.15.329-.42.512-.699.512a.677.677 0 0 1-.407-.141c-2.127-1.588-4.584-1.843-6.271-1.778-1.87.073-3.24.544-3.253.549-.431.15-.876-.174-.995-.724-.118-.55.135-1.119.566-1.27.061-.022 1.536-.534 3.587-.62 1.208-.051 2.37.057 3.456.32 1.374.333 2.628.917 3.726 1.737.386.288.516.922.29 1.415zm.782-2.996a.958.958 0 0 1-.5-.142C10.835 6.404 4.276 8.234 4.21 8.252c-.528.153-1.075-.17-1.22-.721-.146-.551.165-1.12.693-1.272.076-.022 1.885-.534 4.4-.62a18.63 18.63 0 0 1 4.24.32c1.686.333 3.223.917 4.57 1.738.474.288.633.921.357 1.414a.985.985 0 0 1-.858.513z"
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
