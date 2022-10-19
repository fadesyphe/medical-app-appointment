<template>
  <form class="flex items-center relative">
    <TheSearchSubmit />
    <TheSearchInput />
  </form>
</template>

<script>
import TheSearchSubmit from "./TheSearchSubmit.vue";
import TheSearchInput from "./TheSearchInput";
export default {
  components: {
    TheSearchSubmit,
    TheSearchInput,
  },
};
</script>