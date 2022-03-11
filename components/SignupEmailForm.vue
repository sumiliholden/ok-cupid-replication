<template>
  <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
    <h2 class="mt-0 text-center text-3xl font-extrabold text-gray-900">
      Welcome! Who are you?
    </h2>
    <div class="bg-white pt-12 pb-40 px-4 sm:rounded-lg sm:px-10">
      <div class="space-y-6">
        <label for="email" class="block text-sm font-medium text-gray-700">
          Email
        </label>
        <div class="mt-1">
          <input
            v-model="email"
            id="email"
            name="email"
            type="email"
            autocomplete="email"
            required=""
            placeholder="your.email@example.com"
            class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm"
          />
        </div>
      </div>
      <br />
      <div class="flex items-center justify-between">
        <div class="flex items-center">
          <input
            id="remember-me"
            name="remember-me"
            type="checkbox"
            class="h-4 w-4 text-sky-600 focus:ring-sky-500 border-gray-300 rounded"
          />
          <label
            for="remember-me"
            class="ml-2 block text-sm text-gray-900 text-xs"
          >
            I don‘t want to miss discounts & promotional emails from OkCupid
          </label>
        </div>
      </div>

      
    </div>
    <div class="mt-10 px-12">
        <button
          :disabled="isDisabled()"
          @click="next()"
          class="w-full flex justify-center py-5 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-sky-600 hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500 disabled:bg-gray-400"
        >
          NEXT
        </button>
      </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      email: "",
    };
  },
  methods: {
    next() {
      this.$store.commit("signupDone");
    },
    isDisabled() {
      return !/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        this.email
      );
    },
  },
};
</script>
