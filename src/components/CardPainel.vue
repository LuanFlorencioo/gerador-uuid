<script setup>
import Logo from "@/components/Logo.vue";
import ButtonGenerate from "@/components/ButtonGenerate.vue";
</script>

<template>
  <div class="w-full sm:max-w-[350px] px-4 py-8 sm:px-8 sm:py-24 bg-gradient-to-b from-secondary/10 to-secondary/40 rounded-b-4xl sm:rounded-4xl flex flex-col items-center gap-8 sm:gap-16 selection:bg-accent">
    <div class="flex flex-col items-center gap-2">
      <Logo />

      <h1 class="font-bold text-xl">UUID V4</h1>
    </div>

    <p class="leading-7 text-center">
      Clique no botão abaixo para gerar UUIDs. Para copiar, basta apenas clicar no UUID desejado quando for gerado.
    </p>

    <ButtonGenerate />
  </div>
</template>