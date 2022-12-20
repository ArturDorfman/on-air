<template>
  <div class="flex items-start">
    <SideBarModule
      class="bg-black h-screen w-64 text-[#B2B2B2] flex flex-col sticky top-0"
    />

    <div class="flex-1">
      <HeaderModule
        class="bg-[#070707] flex-1 flex justify-between items-center py-3 px-8 sticky top-0"
      />

      <main>
        <RouterView />
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import { RouterView } from "vue-router";
import SideBarModule from "@/views/SidebarModule/SidebarModule.vue";
import HeaderModule from "@/views/HeaderModule/HeaderModule.vue";
</script>
