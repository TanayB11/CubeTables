<template>
  <div class="flex flex-col h-screen justify-center items-center">
    <form>
      <input type="text" class="px-4 py-2 rounded border-2 border-black m-4" placeholder="me@example.com" v-model="email">
      <input type="password" class="px-4 py-2 rounded border-2 border-black" placeholder="•••••••••••••••••" v-model="password">
    </form>
    <div class="flex flex-row items-center">
      <button class="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300" @click="callSignIn({ email: email, password: password })">
        Log In
      </button>
      <NuxtLink class="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 m-2" to="/">
        Home
      </NuxtLink>
    </div>
    <div class="m-2">
      User registration is not ready yet.
    </div>
  </div>  
</template>

<script lang="ts">
import Vue from 'vue'
import { mapActions } from 'vuex'

export default Vue.extend({
  data() {
    return {
      email: '',
      password: '',
    }
  },
  methods: {
    ...mapActions('auth', ['callSignIn'])
  },
})
</script>
