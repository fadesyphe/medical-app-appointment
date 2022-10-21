<template>
  <footer class="sticky w-full max-w-[375px] z-50 bottom-[-1px]">
    <nav
      class="
        h-[89px]
        w-full
        flex
        items-center
        bg-white
        rounded-[0px_0px_32px_32px]
        shadow-menu-shadow
      "
    >
      <ul class="w-full flex items-center justify-around">
        <li v-for="link in routerLinks" :key="link.name">
          <router-link :to="`${link.path}`" class="w-8 h-8">
            <BaseIcon
              :name="link.name"
              class="w-[32px] h-[32px] text-[#200E32] mr-[5px] pointer"
            />
          </router-link>
        </li>
      </ul>
    </nav>
  </footer>
</template>

<script>
import BaseIcon from "./BaseIcon.vue";
export default {
  components: {
    BaseIcon,
  },
  data() {
    return {
      routerLinks: [
        { name: "home", path: "/" },
        { name: "calendar", path: "/calendar" },
        { name: "chat", path: "/chat" },
        { name: "profile", path: "/profile" },
      ],
    };
  },
};
</script>