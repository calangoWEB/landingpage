<template>
  <div>
    <v-app-bar app :color="color" dark :flat="flat">
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="@/assets/logo.png"
          transition="scale-transition"
          width="50"
        />
      </div>

      <v-spacer></v-spacer>
      <v-app-bar-nav-icon
        @click.stop="drawer = !drawer"
        class="mr-4"
        v-if="isSm"
      />
      <div v-else>
        <v-btn text @click="$vuetify.goTo('#hero', 0, 500)">
          <span class="mr-2">Home</span>
        </v-btn>
        <v-btn text @click="$vuetify.goTo('#sobre', 0, 500)">
          <span class="mr-2">Sobre</span>
        </v-btn>
        <v-btn text @click="$vuetify.goTo('#servicos', 0, 500)">
          <span class="mr-2">Serviços</span>
        </v-btn>
        <v-btn text @click="$vuetify.goTo('#contatos', 0, 500)">
          <span class="mr-2">Contatos</span>
        </v-btn>
      </div>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" app temporary>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title">Título ou logo</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense>
        <v-list-item link @click="$vuetify.goTo('#hero', 0, 500)">
          <v-list-item-content>
            <v-list-item-title class="title">Home</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link @click="$vuetify.goTo('#sobre', 0, 500)">
          <v-list-item-content>
            <v-list-item-title class="title">Sobre</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link @click="$vuetify.goTo('#servicos', 0, 500)">
          <v-list-item-content>
            <v-list-item-title class="title">Serviços</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link @click="$vuetify.goTo('#contatos', 0, 500)">
          <v-list-item-content>
            <v-list-item-title class="title">Contatos</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  data: () => ({
    drawer: null,
    isSm: false,
  }),
  props: {
    color: String,
    flat: Boolean,
  },
  beforeDestroy() {
    if (typeof window !== "undefined") {
      window.removeEventListener("resize", this.onResize, { passive: true });
    }
  },

  mounted() {
    this.onResize();
    window.addEventListener("resize", this.onResize, { passive: true });
  },

  methods: {
    onResize() {
      this.isSm = window.innerWidth < 960;
    },
  },
};
</script>
