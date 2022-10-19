<template>
  <button
    class="
      py-5
      rounded-[28px]
      h-14
      w-[60px]
      bg-[#fff]
      absolute
      top-0
      left-0
      flex
      items-center
      justify-center
    "
  >
    <BaseIcon name="search" class="w-6 h-6 fill-search-text" />
  </button>
</template>

<script>
import BaseIcon from "./BaseIcon.vue"
export default {
	components: {
		BaseIcon
	}
}
</script>