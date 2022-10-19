<template>
  <button
    :class="classes"
    @mouseover="$emit('hoverCategoryOn', name)"
    @mouseleave="$emit('hoverCategoryOff', name)"
    @click="$emit('clickCategory', name)"
  >
    <img
      class="w-6 h-6"
      :src="require(`../assets/doctor-categories/${name}.png`)"
      :alt="`${name}`"
    />
  </button>
</template>

<script>
export default {
  props: ["name", "selectCategory", "hoverCategory"],
  computed: {
    classes() {
      return [
        "w-[67px]",
        "h-[67px]",
        "rounded-full",
        "flex",
        "items-center",
        "justify-center",
        "shadow-[0_5px_30px_rgba(178,178,178,0.2)]",
        "duration-200",
        "ease-in",
        this.hoverCategory == this.name || this.selectCategory == this.name
          ? "bg-[#51A8FF]"
          : "bg-white",
      ];
    },
  },
  emits: ["hoverCategoryOn", "hoverCategoryOff", "clickCategory"],
};
</script>