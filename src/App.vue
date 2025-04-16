<script setup lang="ts">
import CardResult from "./components/CardResult.vue";
import CardPainel from "./components/CardPainel.vue";

console.log(
	"Seja bem-vindo ao meu projeto Vue 3 com Tailwind CSS e Vite! 🚀👩‍🚀",
);
</script>

<template>
  <main class="w-full min-h-screen bg-gradient-to-t from-secondary/10 flex flex-col sm:flex-row sm:items-center sm:justify-center">
    <CardPainel />

    <CardResult />
  </main>
</template>