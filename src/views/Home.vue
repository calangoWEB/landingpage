<template>
  <div class="home">
    <Intro />
    <Sobre />
    <Services />
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Intro from "@/components/Intro.vue";
import Sobre from "@/components/Sobre.vue";
import Services from "@/components/Services.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "Home",
  components: {
    Intro,
    Sobre,
    Services,
    Footer
  },
};
</script>
