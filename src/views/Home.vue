<template>
  <div class="home">
    <Intro />
    <Sobre />
  </div>
</template>

<script>
// @ is an alias to /src
import Intro from "@/components/Intro.vue";
import Sobre from "@/components/Sobre.vue";

export default {
  name: "Home",
  components: {
    Intro,
    Sobre
  },
};
</script>
