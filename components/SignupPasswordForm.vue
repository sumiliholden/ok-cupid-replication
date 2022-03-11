<template>
  <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
    <h2 class="mt-0 text-center text-3xl font-extrabold text-gray-900">
      Create a password
    </h2>
    <div class="bg-white pt-12 pb-52 px-4 sm:rounded-lg sm:px-10">
      <div class="space-y-6">
        <label for="password" class="block text-sm font-medium text-gray-700">
          Password
        </label>
        <div class="mt-1">
          <input
            v-model="password"
            id="password"
            name="password"
            type="password"
            autocomplete="current-password"
            required=""
            placeholder="6 characters minimum"
            class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm"
          />
        </div>
      </div>

    </div>
    <div class="mt-12 px-12">
      <button
        :disabled="isDisabled()"
        @click="done()"
        type="submit"
        class="w-full flex justify-center py-5 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-sky-600 hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500 disabled:bg-gray-400"
      >
        SIGN UP
      </button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      password: "",
    };
  },
  methods: {
    done() {
      window.location.href = "/";
    },
    isDisabled() {
      if (this.password === "" || this.password.length < 6) return true;
    },
  },
};
</script>
