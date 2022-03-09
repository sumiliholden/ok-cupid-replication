<template>
  <div class="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-md">
      <button
        v-if="this.$store.state.status > 0"
        @click="back()"
        type="button"
        class="inline-flex font-extrabold items-center px-2.5 py-1.5 text-xs font-medium rounded text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        <svg
          class="svg-icon"
          style="
            width: 1.5em;
            height: 1.5em;
            vertical-align: middle;
            fill: currentColor;
            overflow: hidden;
          "
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M210.4 511.1 641.3 80.2c22.8-22.8 59.8-22.8 82.6 0 22.8 22.8 22.8 59.8 0 82.6L375.7 511.1l348.3 348.3c22.8 22.8 22.8 59.8 0 82.6-22.8 22.8-59.8 22.8-82.6 0L210.4 511.1 210.4 511.1zM210.4 511.1"
          />
        </svg>
      </button>
      <NuxtLink v-else to="/">
        <button
          type="button"
          class="inline-flex font-extrabold items-center px-2 py-2 text-xs font-medium rounded text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          <svg
            class="svg-icon"
            style="
              width: 1.5em;
              height: 1.5em;
              vertical-align: middle;
              fill: currentColor;
              overflow: hidden;
            "
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M590.7456 508.416 1016.832 934.5024 938.0864 1009.664 512 583.5776 78.7456 1024 0 941.6704l433.2544-440.4224L7.168 75.1616 85.9136 0 512 426.0864 938.0864 0 1016.832 82.3296 590.7456 508.416z"
            />
          </svg>
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
