<template>
  <div class="flex flex-wrap gap-5 max-h-[208px]">
    <DoctorListItem
      v-for="item in doctorsList"
      :key="item.photo"
      :photo="item.photo"
      :bgColor="item.bgColor"
      :bgBlur="item.bgBlur"
      :name="item.name"
      :spezialization="item.spezialization"
      :rating="item.rating"
    />
  </div>
</template>

<script>
import BaseIcon from "./BaseIcon.vue";
import DoctorListItem from "./DoctorListItem.vue";
export default {
  components: {
    BaseIcon,
    DoctorListItem,
  },
  data() {
    return {
      doctorsList: this.$store.state.doctorsList,
    };
  },
};
</script>
