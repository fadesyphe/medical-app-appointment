<template>
  <div class="mb-8">
    <h2 class="font-semibold text-xl leading-[30px] tracking-wide mb-4">
      Categories
    </h2>
    <div>
      <ul
        class="
          flex
          items-center
          justify-between
          gap-5
          overflow-x-auto
          content-scroll
        "
      >
        <li v-for="item in categories" :key="item.name">
          <CategoryItem
            :name="item.name"
            :selectCategory="selectCategory"
            :hoverCategory="hoverCategory"
            @hoverCategoryOn="hoverCategoryOn"
            @hoverCategoryOff="hoverCategoryOff"
            @clickCategory="clickCategory"
          />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import CategoryItem from "./CategoryItem.vue";
export default {
  components: {
    CategoryItem,
  },
  data() {
    return {
      categories: [
        { name: "cardiologist" },
        { name: "dentist" },
        { name: "doctor-pil" },
        { name: "gynecologist" },
        { name: "bud" },
      ],
      selectCategory: "dentist",
      hoverCategory: "",
    };
  },
  methods: {
    hoverCategoryOn(name) {
      this.hoverCategory = name;
    },
    hoverCategoryOff() {
      this.hoverCategory = "";
    },
    clickCategory(name) {
      this.selectCategory = name;
    },
  },
};
</script>

<style scoped>
.content-scroll::-webkit-scrollbar {
  width: 0;
}
.content-scroll {
  -ms-overflow-style: none;
}
.content-scroll {
  overflow-x: -moz-scrollbars-none;
}
</style>