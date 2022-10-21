<template>
  <div :class="backgroundClasses">
    <span :class="blurClasses"></span>
    <img
      :src="require(`../assets/doctors/${photo}.png`)"
      class="w-[72px] h-[79px] mt-auto relative z-10"
      alt="wilson.jpg"
    />
  </div>
</template>

<script>
export default {
  props: ["photo", "bgColor", "bgBlur"],
  computed: {
    backgroundClasses() {
      return [
        "w-[97px]",
        "h-[94px]",
        "rounded-2xl",
        "flex",
        "justify-center",
        "relative",
        `bg-[${this.bgColor}]`,
      ];
    },
    blurClasses() {
      return [
        "w-[52px]",
        "h-[52px]",
        "rounded-full",
        "blur-[22px]",
        "absolute",
        "left-1/2",
        "top-1/2",
        "-translate-y-1/2 -translate-x-1/2",
        `bg-${this.bgBlur}`,
      ];
    },
  },
};
</script>