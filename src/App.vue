<template>
  <v-app>
    <Appbar />
    <v-content class="pt-0">
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
import Appbar from "@/components/Appbar";

export default {
  name: "App",

  components: {
    Appbar,
  },

  watch: {
    $route(to, from) {
      document.title = to.meta.title || "Landing Page";
    },
  },

  data: () => ({
    //
  }),
};
</script>
