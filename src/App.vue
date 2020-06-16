<template>
  <v-app>
    <Appbar :color="color" />
    <v-content class="pt-0">
      <router-view />
    </v-content>
    <v-scale-transition>
      <v-btn
        fab
        v-show="fab"
        v-scroll="onScroll"
        dark
        fixed
        bottom
        right
        color="secondary"
        @click="toTop"
      >
        <v-icon>fa-arrow-up</v-icon>
      </v-btn>
    </v-scale-transition>
  </v-app>
</template>

<script>
import Appbar from "@/components/Appbar";

export default {
  name: "App",

  components: {
    Appbar,
  },

  data: () => ({
    fab: null,
    color: "",
  }),

  created() {
    const top = window.pageYOffset || 0;
    if (top <= 20) {
      this.color = "transparent";
    }
  },

  watch: {
    $route(to, from) {
      document.title = to.meta.title || "Landing Page";
    },
    fab(value) {
      if (value) {
        this.color = "secondary";
      } else {
        this.color = "transparent";
      }
    },
  },

  methods: {
    onScroll(e) {
      if (typeof window === "undefined") return;
      const top = window.pageYOffset || e.target.scrollTop || 0;
      this.fab = top > 20;
    },
    toTop() {
      this.$vuetify.goTo(0);
    },
  },
};
</script>
