<template>
  <router-link
    to="/notifications"
    class="p-[14px] rounded-[14px] bg-button-blue relative"
  >
    <BaseIcon name="notification" class="w-6 h-6" />
    <span
      v-show="newNotifications"
      class="
        inline
        w-[6px]
        h-[6px]
        rounded-full
        absolute
        top-2.5
        right-2.5
        bg-[#FF4545]
        duration-200
        ease-in
      "
    ></span>
  </router-link>
</template>

<script>
import BaseIcon from "./BaseIcon.vue";
export default {
  components: {
    BaseIcon,
  },
  data() {
    return {
      newNotifications: this.$store.state.newNotifications,
    };
  },
};
</script>