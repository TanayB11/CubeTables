<template>
  <div class="flex flex-col h-screen justify-center items-center">
    <h3 class="text-lg lg:text-xl xl:text-2xl my-2">
      Welcome, {{ $store.state.auth.firstName }}!
    </h3>
    <button
      class="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
      @click="callSignOut()"
    >
      Log Out
    </button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapActions } from 'vuex'

export default Vue.extend({
  methods: {
    ...mapActions('auth', ['callSignOut']),
  },
})
</script>
