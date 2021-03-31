<template>
  <div class="flex flex-col h-screen justify-center items-center">
    <div class="text-center font-light">
      <h1 class="text-3xl lg:text-4xl xl:text-5xl my-2">cubetables</h1>
      <h3 class="text-lg lg:text-xl xl:text-2xl my-2">
        a curated database of cubing algorithms
      </h3>
    </div>
    <div class="my-8">
      <NuxtLink to="/login" class="p-4 rounded bg-gray-200 hover:bg-gray-300">
        Get Started
      </NuxtLink>
      <a
        href="https://github.com/TanayB11/cubetables"
        class="p-4 rounded bg-gray-200 hover:bg-gray-300 m-2"
        target="_blank"
      >
        GitHub
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>
