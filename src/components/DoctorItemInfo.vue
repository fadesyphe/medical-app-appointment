<template>
  <div class="p-3 capitalize">
    <h2 class="leading-4 text-[#080C2F] font-bold tracking-wide mb-2">
      {{ name }}
    </h2>
    <p class="text-xs leading-3 text-category-text tracking-wide mb-5">
      {{ spezialization }}
    </p>
    <span
      class="
        flex
        items-center
        text-category-text
        tracking-wide
        text-xs
        leading-3
      "
    >
      <BaseIcon name="star" class="w-[14px] h-[13px] text-[#FFBB0E] mr-[5px]" />
      {{ rating }}
    </span>
  </div>
</template>

<script>
import BaseIcon from "./BaseIcon.vue";
export default {
  components: {
    BaseIcon,
  },
  props: ["name", "spezialization", "rating"],
};
</script>