<template>
  <TheHeader />
  <TheMain />
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
