<template>
  <div class="flex items-start">
    <SideBarModule />

    <div class="flex-1">
      <HeaderModule />

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
