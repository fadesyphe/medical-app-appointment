<template>
  <main class="p-6">
    <TheCategoriesList />
    <TheDoctorsList />
  </main>
</template>

<script>
import TheDoctorsList from "./TheDoctorsList.vue";
import TheCategoriesList from "./TheCategoriesList.vue";
export default {
  components: {
    TheDoctorsList,
    TheCategoriesList,
  },
};
</script>