<template>
  <footer class="bg-gray-800" aria-labelledby="footer-heading">
    <h2 id="footer-heading" class="sr-only">Footer</h2>
    <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
      <div class="xl:grid xl:grid-cols-3 xl:gap-8">
        <div class="mt-8 xl:mt-0 lg:mr-5 xl:mr-5">
          <form class="mt-4 sm:flex lg:max-w-md mb-5">
            <div
              class="xl:w-1/2 sm:w-full lg:w-full md:w-full mt-3 rounded-md sm:mt-0 sm:ml-3 lg:flex-shrink-0"
            >
              <button
                type="submit"
                class="w-full bg-indigo-500 border border-transparent rounded-md py-5 px-4 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-indigo-500"
              >
                JOIN OKCUPID
              </button>
              
              <br />
              <p
                class="text-center text-sm font-semibold text-gray-400 tracking-wider uppercase"
              >
                © OkCupid 2022
              </p>
            </div>
            <div
              class="xl:w-1/2 sm:w-full lg:w-full md:w-full mt-3 rounded-md sm:mt-0 sm:ml-3 lg:flex-shrink-0"
            >
              <p
                class="text-center text-sm font-semibold text-gray-400 tracking-wider uppercase"
              >
                LANGUAGE
              </p>
              <br />
              <button
                type="submit"
                class="w-full bg-indigo-500 border border-transparent rounded-md py-5 px-4 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-indigo-500"
              >
                ENGLISH
              </button>
            </div>
          </form>
        </div>
        <div class="grid grid-cols-2 gap-8 xl:col-span-2">
          <div class="md:grid md:grid-cols-2 md:gap-8">
            <div>
              <h3
                class="text-sm font-semibold text-gray-400 tracking-wider uppercase"
              >
                COMPANY
              </h3>
              <ul role="list" class="mt-4 space-y-4">
                <li v-for="item in navigation.solutions" :key="item.name">
                  <a
                    :href="item.href"
                    class="text-base text-gray-300 hover:text-white"
                  >
                    {{ item.name }}
                  </a>
                </li>
              </ul>
            </div>
            <div class="mt-12 md:mt-0">
              <h3
                class="text-sm font-semibold text-gray-400 tracking-wider uppercase"
              >
                CONDITIONS
              </h3>
              <ul role="list" class="mt-4 space-y-4">
                <li v-for="item in navigation.support" :key="item.name">
                  <a
                    :href="item.href"
                    class="text-base text-gray-300 hover:text-white"
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
                class="text-sm font-semibold text-gray-400 tracking-wider uppercase"
              >
                CONTACT
              </h3>
              <ul role="list" class="mt-4 space-y-4">
                <li v-for="item in navigation.company" :key="item.name">
                  <a
                    :href="item.href"
                    class="text-base text-gray-300 hover:text-white"
                  >
                    {{ item.name }}
                  </a>
                </li>
              </ul>
            </div>
            <div class="mt-12 md:mt-0">
              <h3
                class="text-sm font-semibold text-gray-400 tracking-wider uppercase"
              >
                FOLLOW
              </h3>
              <ul role="list" class="mt-4 space-y-4">
                <li v-for="item in navigation.legal" :key="item.name">
                  <a
                    :href="item.href"
                    class="text-base text-gray-300 hover:text-white"
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
          { name: "Marketing", href: "#" },
          { name: "Analytics", href: "#" },
          { name: "Commerce", href: "#" },
          { name: "Insights", href: "#" },
        ],
        support: [
          { name: "Pricing", href: "#" },
          { name: "Documentation", href: "#" },
          { name: "Guides", href: "#" },
          { name: "API Status", href: "#" },
        ],
        company: [
          { name: "About", href: "#" },
          { name: "Blog", href: "#" },
          { name: "Jobs", href: "#" },
          { name: "Press", href: "#" },
          { name: "Partners", href: "#" },
        ],
        legal: [
          { name: "Claim", href: "#" },
          { name: "Privacy", href: "#" },
          { name: "Terms", href: "#" },
        ],
      },
    };
  },
};
</script>
