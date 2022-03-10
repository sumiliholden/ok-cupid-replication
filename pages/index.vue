<template>
  <div>
    <CTASection />
    <transition name="show" mode="out-in">
    <LoginModal v-show="this.$store.state.modal" />
    </transition>
  </div>
</template>

<script>
export default {
  transitions: "show",
  name: "IndexPage",
};
</script>
