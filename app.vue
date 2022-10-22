<template>
    <NuxtLayout>
        <NuxtPage/>
    </NuxtLayout>
</template>
<script>
  import HelloIonic from "./components/HelloIonic";

  export default {
    name: "DesktopInfo",
    components: {
      'HelloIonic': HelloIonic,
    },
  }
  </script>