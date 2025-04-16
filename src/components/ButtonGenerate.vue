<script setup lang="ts">
import { useUUIDListStore } from "./../stores/uuidList";

const store = useUUIDListStore();
</script>

<template>
  <button
    type="button"
    @click="store.generateUUID()"
    class="w-max px-8 py-2 font-bold text-2xl bg-gradient-to-b from-secondary to-secondary/20 hover:from-accent rounded-md flex items-center gap-2 transition duration-500"
  >
    Gerar UUIDs
  </button>
</template>