<script setup lang="ts">
import { Fingerprint } from "lucide-vue-next";
import { motion } from "motion-v";
</script>

<template>
  <motion.main
    :initial="{ opacity: 0 }"
    :animate="{ opacity: 1 }"
    :transition="{ delay: .8 }"
    class="w-full min-h-screen flex flex-col items-center justify-center gap-8"
  >
    <Fingerprint class="text-accent" />

    <h1 class="font-bold text-2xl text-primary">Hello World</h1>

    <p class="max-w-[300px] font-mono leading-6 line-clamp-4 text-center">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis ab impedit et numquam inventore repudiandae labore quisquam corporis illum ipsa nobis corrupti id, necessitatibus voluptas culpa odio repellendus omnis dolorem suscipit facere voluptates libero perspiciatis a. Quasi, earum ut illum voluptate quisquam maxime quis, assumenda dolorum in sapiente eum praesentium!
    </p>

    <button class="w-max h-16 px-8 bg-gradient-to-b rounded-lg from-secondary to-secondary font-bold text-3xl">
      Get Started
    </button>
  </motion.main>
</template>

<style scoped>
</style>
