<template>
  <header
    class="bg-[#070707] flex-1 flex justify-between items-center py-3 px-8 sticky top-0 z-10"
  >
    <div class="flex">
      <!-- TODO fix router links -->
      <!-- cursor-not-alowed -->
      <RouterLink to="" class="text-[#969696] p-1 ml-2">
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
      </RouterLink>

      <RouterLink to="" class="text-[#969696] p-1 mr-2">
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
      </RouterLink>
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
