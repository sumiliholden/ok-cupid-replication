<!-- Please remove this file from your project -->
<template>
  <div>
    <div class="max-w-7xl mx-auto py-10 px-4 sm:px-6 md:py-5 lg:px-8 lg:py-5">
      <h1 class="splashdtf-top-text-heading">DATING FOR EVERY SINGLE PERSON</h1>
      <div class="relative py-6 lg:py-4">
        <div class="md:w-2/5">
          <p class="mt-3 text-lg text-gray-800">
            OkCupid is the only dating app that matches you on what matters to
            you.
          </p>
          <p class="mt-3 text-lg text-gray-800">
            You deserve to find who you’re looking for. Meet them today!
          </p>
        </div>
        <div class="md:w-1/3">
          <p class="mt-3 text-lg text-gray-800">
            By clicking Join, you agree to our Terms. Learn how we process your
            data in our Privacy Policy and Cookies Policy.
          </p>
        </div>
      </div>
      <div class="mt-4">
        <div class="rounded-md">
          <NuxtLink to="/signup">
            <a
              class="w-full md:w-96 shadow inline-flex items-center justify-center px-10 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-800 hover:bg-gray-500"
            >
              JOIN OKCUPID
            </a>
          </NuxtLink>
        </div>
      </div>
      <br />
      <div class="splashdtf-mobile">
        <span class="splashdtf-mobile-text">GET THE APP</span
        ><a
          class="splashdtf-mobile-buttons splashdtf-mobile-buttons--googleplay"
          href="https://play.google.com/store/apps/details?id=com.okcupid.okcupid&amp;referrer=utm_source%3Ddesktophome%2526utm_medium%253Dweb"
          ><span class="screen-reader-only">Google Play</span></a
        ><a
          class="splashdtf-mobile-buttons splashdtf-mobile-buttons--appstore"
          href="https://itunes.apple.com/app/apple-store/id338701294?pt=296162&amp;ct=desktophome%20Score&amp;mt=8"
          ><span class="screen-reader-only">App Store</span></a
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CTASection",
};
</script>
<style scoped>
h1 {
  width: 65%;
  margin: 0 8px 16px;
  font-size: 3.625rem;
  line-height: 64px;
  color: #fff;
  letter-spacing: 2px;
  font-weight: 900;
  -webkit-text-stroke: 2px;
  -webkit-text-stroke-color: #000;
  text-shadow: -1px 1px #000, -2px 2px #000, -3px 3px #000, -4px 4px #000,
    -5px 5px #000, -6px 6px #000, -7px 7px #000, -8px 8px #000;
  padding: 0;
}
.splashdtf-top-text-manifesto {
  padding-top: 20px;
  width: 460px;
  font-size: 1.25rem;
  line-height: 30px;
}
.splashdtf-mobile-buttons--googleplay {
  background-image: url(https://cdn.okccdn.com/media/img/dtf/apps_googleplay2.png);
}
.splashdtf-mobile-buttons--appstore {
  background-image: url(https://cdn.okccdn.com/media/img/dtf/apps_apple.png);
}
.splashdtf-mobile-buttons--googleplay,
.splashdtf-mobile-buttons--appstore {
  background-repeat: no-repeat;
  background-position: top left;
}

.splashdtf-mobile-buttons {
  display: inline-block;
  margin-right: 17px;
  width: 64px;
  height: 43px;
  line-height: 43px;
}

/* TEXT */
.splashdtf-mobile-text {
  margin-right: 26px;
  font-weight: bold;
  font-size: 1rem;
  line-height: 43px;
  letter-spacing: 1px;
}
.screen-reader-only {
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;
}
</style>
