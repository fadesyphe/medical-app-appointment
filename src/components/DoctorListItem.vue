<template>
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
    <DoctorItemPhoto :photo="photo" :bgColor="bgColor" :bgBlur="bgBlur" />
    <DoctorItemInfo
      :name="name"
      :spezialization="spezialization"
      :rating="rating"
    />
  </div>
</template>

<script>
import DoctorItemPhoto from "./DoctorItemPhoto.vue";
import DoctorItemInfo from "./DoctorItemInfo.vue";
export default {
  components: {
    DoctorItemPhoto,
    DoctorItemInfo,
  },
  props: ["photo", "bgColor", "bgBlur", "name", "spezialization", "rating"],
};
</script>