<template>
  <div
    class="fixed z-50 inset-0 bg-gray-900 bg-opacity-60 overflow-y-auto h-full w-full px-4"
  >
    <div class="relative top-20 mx-auto shadow-lg rounded-md bg-white max-w-sm">
      <!-- Modal header -->
      <div
        class="flex justify-end items-center text-white text-xl rounded-t-md px-4 py-4"
      >
        <button class="text-gray-800" @click="closeModal()">
          <svg
            class="svg-icon"
            style="
              width: 1em;
              height: 1em;
              vertical-align: middle;
              fill: currentColor;
              overflow: hidden;
            "
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M960 780.736 691.008 512 960 243.264 780.736 64 512 332.864 243.136 64 64 243.264 332.736 512 64 780.736 243.136 960 512 691.136 780.736 960z"
            />
          </svg>
        </button>
      </div>

      <!-- Modal body -->
      <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <h2
          class="mt-6 text-center px-4 text-2xl font-bold text-gray-900"
        >
          Enter email and password
        </h2>
        <div class="bg-white py-8 px-10 shadow sm:rounded-lg ">
          <form class="space-y-6" action="#" method="POST">
            <div>
              <label
                for="email"
                class="block text-sm font-medium text-gray-700"
              >
                Email address
              </label>
              <div class="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autocomplete="email"
                  required=""
                  class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <label
                for="password"
                class="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <div class="mt-1">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autocomplete="current-password"
                  required=""
                  class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm"
                />
              </div>
            </div>

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
                  class="ml-2 block text-sm text-gray-900"
                >
                  Remember me
                </label>
              </div>

              <div class="text-sm">
                <a href="#" class="font-medium text-sky-600 hover:text-sky-500">
                  Forgot your password?
                </a>
              </div>
            </div>

            <div>
              <button
                type="submit"
                class="w-full flex justify-center py-5 px-4 border border-transparent rounded-md shadow-sm text-md font-bold text-white bg-sky-600 hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500"
              >
                NEXT
              </button>
            </div>
          </form>

          <div class="mt-6">
            <div class="relative">
              <div class="absolute inset-0 flex items-center">
                <div class="w-full border-t border-gray-300" />
              </div>
              <div class="relative flex justify-center text-sm">
                <span class="px-2 bg-white text-gray-500 text-lg">
                  or 
                </span>
              </div>
            </div>

            <div class="mt-6 grid grid-cols-1 gap-1">
              <button
                type="submit"
                class="w-full flex justify-center py-5 px-4 border border-transparent rounded-md shadow-sm text-md font-bold text-white bg-sky-600 hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500"
              >
                LOGIN WITH PHONE
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    closeModal() {
      this.$store.commit("closeModal");
    },
  },
};
</script>
