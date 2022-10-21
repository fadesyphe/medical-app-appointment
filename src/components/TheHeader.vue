<template>
  <header class="px-6 pb-6 pt-16 bg-[#51A8FF] rounded-[32px] text-white">
    <div class="flex justify-between items-center">
      <h2 class="font-medium leading-4 tracking-wide">
        Hi, {{ this.$store.state.personal }}
      </h2>

      <TheNotification />
    </div>
    <h1 class="text-4xl font-semibold mb-12 tracking-tighter">
      Let’s find <br />
      your top doctor!
    </h1>
    <TheSearch />
  </header>
</template>

<script>
import TheSearch from "./TheSearch.vue";
import TheNotification from "./TheNotification.vue";
export default {
  components: {
    TheSearch,
    TheNotification,
  },
};
</script>