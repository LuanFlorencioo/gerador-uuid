<script setup lang="ts">
import { defineProps, ref } from "vue";
import { CheckCheck, Copy } from "lucide-vue-next";
import { motion } from "motion-v";
import { useUUIDListStore } from "@/stores/uuidList";

type Props = {
	uuid: string;
	hasUsed: boolean;
	delay?: number;
};

const props = defineProps<Props>();
const store = useUUIDListStore();
const mouseIsOver = ref(false);
const hasClicked = ref(props.hasUsed);
const hasCopied = ref(false);

async function clipboard() {
	await navigator.clipboard.writeText(props.uuid);
	store.useUUID(props.uuid);
	hasClicked.value = true;
	hasCopied.value = true;
	setTimeout(() => {
		hasCopied.value = false;
	}, 2000);
}
</script>

<template>
  <motion.li
    :initial="{ opacity: 0, x: -20 }"
    :animate="{ opacity: 1, x: 0, transition: { delay: props.delay } }"
    @click="clipboard"
    class="w-full p-1 hover:bg-primary/10 rounded-md flex items-center gap-2 cursor-pointer group relative"
  >
    <p class="w-full font-mono truncate relative text-primary">
      <span :class="hasClicked ? 'opacity-50' : 'opacity-100'">{{ props.uuid }}</span>
      <span class="w-full h-full items-center justify-center bg-background absolute top-0 left-0 hidden group-hover:flex">{{ hasCopied ? "Copiado" : "Clique para copiar!" }}</span>
    </p>

    <Copy :size="20"/>
  </motion.li>
</template>

<style scoped>
p span:first-child {
  font-family: var(--font-mono);
}
</style>