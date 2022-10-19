<template>
  <div class="flex flex-wrap gap-5">
    <div
      class="
        w-full
        flex
        items-center
        bg-white
        shadow-[0_5px_30px_rgba(178,178,178,0.2)]
        rounded-2xl
        overflow-hidden
      "
    >
      <div
        class="
          w-[97px]
          h-[94px]
          bg-[#FFF2E4]
          rounded-2xl
          flex
          justify-center
          relative
        "
      >
        <span
          class="
            w-[52px]
            h-[52px]
            rounded-full
            blur-[22px]
            bg-pink-bg
            absolute
            left-1/2
            top-1/2
            -translate-y-1/2 -translate-x-1/2
          "
        ></span>
        <img
          src="../assets/doctors/wilson.png"
          class="w-[72px] h-[79px] mt-auto relative z-10"
          alt="wilson.jpg"
        />
      </div>

      <div class="p-3 capitalize">
        <h2 class="leading-4 text-[#080C2F] font-bold tracking-wide mb-2">
          Dr. Jenny Wilson
        </h2>
        <p class="text-xs leading-3 text-category-text tracking-wide mb-5">
          Dental Surgeon
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
          <BaseIcon
            name="star"
            class="w-[14px] h-[13px] text-[#FFBB0E] mr-[5px]"
          />
          4.8
        </span>
      </div>
    </div>

    <div
      class="
        w-full
        flex
        items-center
        bg-white
        shadow-[0_5px_30px_rgba(178,178,178,0.2)]
        rounded-2xl
        overflow-hidden
      "
    >
      <div
        class="
          w-[97px]
          h-[94px]
          bg-[#D0F8EC]
          rounded-2xl
          flex
          justify-center
          relative
        "
      >
        <span
          class="
            w-[52px]
            h-[52px]
            rounded-full
            blur-[22px]
            bg-[#70FFD0]
            absolute
            left-1/2
            top-1/2
            -translate-y-1/2 -translate-x-1/2
          "
        ></span>
        <img
          src="../assets/doctors/watson.png"
          class="w-[72px] h-[79px] mt-auto relative z-10"
          alt="watson.jpg"
        />
      </div>
      <div class="p-3 capitalize">
        <h2 class="leading-4 text-[#080C2F] font-bold tracking-wide mb-2">
          Dr. Kristin Watson
        </h2>
        <p class="text-xs leading-3 text-category-text tracking-wide mb-5">
          General dentist
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
          <BaseIcon
            name="star"
            class="w-[14px] h-[13px] text-[#FFBB0E] mr-[5px]"
          />
          4.8
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import BaseIcon from "./BaseIcon.vue"
export default {
	components: {
		BaseIcon
	}
}
</script>