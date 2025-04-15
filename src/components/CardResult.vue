<script setup>
import { ref } from "vue";
import { motion } from "motion-v";
import UuidItem from "@/components/UuidItem.vue";
import { useUUIDListStore } from "@/stores/uuidList";

const store = useUUIDListStore();
const uuidList = ref(store.uuidList);
</script>

<template>
  <motion.div
    v-if="uuidList.length > 0"
    :initial="{ opacity: 0, x: -20, scale: 0.9 }"
    :animate="{ opacity: 1, x: 0, scale: 1 }"
    class="w-full max-w-[250px] mx-auto sm:mx-0 px-4 py-8 sm:border-r sm:border-t sm:border-b sm:rounded-r-2xl sm:bg-primary/5"
  >
    <ul class="w-full flex flex-col gap-2">
      <UuidItem v-for="(item, i) in uuidList" :key="item.uuid" :uuid="item.uuid" :has-used="item.hasUsed" :delay="(i + 1) * 0.1" />
    </ul>
  </motion.div>
</template>