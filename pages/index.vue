<template>
  <div>
    <CTASection />
    <LoginModal v-show="this.$store.state.modal" />
  </div>
</template>

<script>
export default {
  name: "IndexPage",
};
</script>
