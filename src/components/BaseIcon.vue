<template>
  <svg
    :class="$attrs || 'h-5 w-5'"
    viewBox="0 0 24 24"
    fill="currentColor"
    v-html="path"
  ></svg>
</template>

<script>
import icons from "../icons.js";
export default {
  props: ["name"],

  data() {
    return {
      path: icons[this.name],
    };
  },
};
</script>