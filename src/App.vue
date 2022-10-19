<template>
  <div
    class="
      w-full
      max-w-[375px]
      h-full
      max-h-[812px]
      rounded-[32px]
      overflow-hidden
      bg-[#F8FAFF]
    "
  >
    <router-view />
  </div>
</template>

<style>
#app {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html,
body {
  height: 100%;
  width: 100%;
}
body {
  background: #b5c1ff;
  font-family: "Poppins", sans-serif;
  font-size: 16px;
}
</style>
