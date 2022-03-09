<template>
  <div class="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-md">
      <button v-if="this.$store.state.status > 0"
        @click="back()"
        type="button"
        class="inline-flex font-extrabold items-center px-2.5 py-1.5 border border-gray-300 shadow-sm text-xs font-medium rounded text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        BACK
      </button>
      <NuxtLink v-else to='/'>
        <button
          type="button"
          class="inline-flex font-extrabold items-center px-2.5 py-1.5 border border-gray-300 shadow-sm text-xs font-medium rounded text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          BACK
        </button>
      </NuxtLink>

      <h2 class="mt-6 text-center text-xl font-extrabold text-gray-900">
        About you
      </h2>
    </div>

    <SignupEmailForm v-show="this.$store.state.status === 0" />
    <SignupPasswordForm v-show="this.$store.state.status === 1" />
  </div>
</template>
<script>
export default {
  layout: "signup",
  name: "SignupPage",
  methods: {
    back() {
      this.$store.commit("back");
    },
  },
};
</script>
