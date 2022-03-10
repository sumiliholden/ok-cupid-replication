<template>
  <footer class="bg-gray-900" aria-labelledby="footer-heading">
    <h2 id="footer-heading" class="sr-only">Footer</h2>
    <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 xl:px-0">
      <div class="xl:grid xl:grid-cols-4 xl:gap-0">
        <div class="mt-8 xl:mt-0 text-center mx-auto">
          <form class="mt-4 sm:flex lg:max-w-md mb-5">
            <div
              class="w-full md:w-72 xl:w-60 mt-3 rounded-md sm:mt-0 sm:ml-3 lg:flex-shrink-0"
            >
              <NuxtLink to="/signup">
                <button
                  type="submit"
                  class="w-full bg-sky-500 border border-transparent rounded-md py-3 px-2 flex items-center justify-center text-sm font-bold text-white hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-indigo-500"
                >
                  JOIN OKCUPID
                </button>
              </NuxtLink>
              <br />
              <p
                class="text-center text-sm font-semibold text-gray-400 tracking-wider"
              >
                © OkCupid 2022
              </p>
            </div>
          </form>
        </div>
        <div class="grid grid-cols-3 gap-8 xl:col-span-3">
          <div class="md:grid md:grid-cols-2 md:gap-8">
            <div
              class="w-full mt-3 rounded-md sm:mt-0 lg:flex-shrink-0"
            >
              <p
                class="text-center text-md font-semibold text-white tracking-wider uppercase"
              >
                LANGUAGE
              </p>
              <br />
              <button
                type="submit"
                id="dropdownButton"
                data-dropdown-toggle="dropdown"
                class="w-full inline-flex justify-between items-center px-1 py-2 border border-white shadow-sm text-xs font-medium rounded-md text-white bg-transparent hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                English
                <svg
                  class="fill-current h-6 w-6 align-right"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                  />
                </svg>
              </button>
            </div>

            <div class="mt-12 md:mt-0">
              <h3
                class="text-md font-semibold text-white tracking-wider uppercase"
              >
                CONDITIONS
              </h3>
              <ul role="list" class="mt-4 space-y-4">
                <li v-for="item in navigation.support" :key="item.name">
                  <a
                    :href="item.href"
                    class="text-xs text-white hover:text-gray-600"
                  >
                    {{ item.name }}
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div class="md:grid md:grid-cols-2 md:gap-8">
            <div>
              <h3
                class="text-md font-semibold text-white tracking-wider uppercase"
              >
                COMPANY
              </h3>
              <ul role="list" class="mt-4 space-y-4">
                <li v-for="item in navigation.solutions" :key="item.name">
                  <a
                    :href="item.href"
                    class="text-xs text-white hover:text-gray-600"
                  >
                    {{ item.name }}
                  </a>
                </li>
              </ul>
            </div>
            <div class="mt-12 md:mt-0">
              <h3
                class="text-md font-semibold text-white tracking-wider uppercase"
              >
                FOLLOW
              </h3>
              <ul role="list" class="mt-4 space-y-4">
                <li v-for="item in navigation.legal" :key="item.name">
                  <a
                    :href="item.href"
                    class="text-xs text-white hover:text-gray-600"
                  >
                    {{ item.name }}
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div class="md:grid md:grid-cols-2 md:gap-9">
            <div>
              <h3
                class="text-md font-semibold text-white tracking-wider uppercase"
              >
                CONTACT
              </h3>
              <ul role="list" class="mt-4 space-y-4">
                <li v-for="item in navigation.company" :key="item.name">
                  <a
                    :href="item.href"
                    class="text-xs text-white hover:text-gray-600"
                  >
                    {{ item.name }}
                  </a>
                </li>
              </ul>
            </div>
            <div class="mt-12 md:mt-0">
              <h3
                class="text-md font-semibold text-white tracking-wider uppercase"
              >
                SPECIAL
              </h3>
              <ul role="list" class="mt-4 space-y-4">
                <li v-for="item in navigation.special" :key="item.name">
                  <a
                    :href="item.href"
                    class="text-xs text-white hover:text-gray-600"
                  >
                    {{ item.name }}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      navigation: {
        solutions: [
          { name: "About", href: "#" },
          { name: "Careers", href: "#" },
          { name: "Press", href: "#" },
          { name: "Ad Choices", href: "#" },
        ],
        support: [
          { name: "Privacy", href: "#" },
          { name: "Cookies - Manage Preferences", href: "#" },
          { name: "Terms", href: "#" },
          { name: "Community Guidelines", href: "#" },
        ],
        company: [
          { name: "Support", href: "#" },
          { name: "Security", href: "#" },
          { name: "Safety Tips", href: "#" },
          { name: "Impressum", href: "#" },
          { name: "Partners", href: "#" },
        ],
        legal: [
          { name: "Blog", href: "#" },
          { name: "Tech Blog", href: "#" },
          { name: "Facebook", href: "#" },
          { name: "Instagram", href: "#" },
          { name: "Twitter", href: "#" },
        ],
        special: [
          { name: "Redeem", href: "#" },
          { name: "Download Apps", href: "#" },
        ],
      },
    };
  },
};
</script>
<style scoped>
.dropdown:hover .dropdown-menu {
  display: block;
}
</style>
