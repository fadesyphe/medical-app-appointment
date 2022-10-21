<template>
  <div
    class="
      overflow-y-auto overflow-x-hidden
      content-scroll
      rounded-[32px_32px_0px_0px]
    "
  >
    <TheHeader />
    <TheMain />
  </div>
  <TheFooter />
</template>

<script>
import BaseIcon from "../components/BaseIcon.vue";
import TheHeader from "../components/TheHeader.vue";
import TheMain from "../components/TheMain.vue";
import TheFooter from "../components/TheFooter.vue";
export default {
  name: "HomeView",
  components: {
    BaseIcon,
    TheHeader,
    TheMain,
    TheFooter,
  },

  methods: {
    hoverCategories() {
      console.log("d");
    },
  },
};
</script>

<style scoped>
.content-scroll::-webkit-scrollbar {
  width: 0;
}
.content-scroll {
  -ms-overflow-style: none;
}
.content-scroll {
  overflow: -moz-scrollbars-none;
}
</style>