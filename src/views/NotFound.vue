<template>
  <v-container>
    <v-row align="center" justify="center" class="mt-12 pt-12">
      <v-col cols="12" class="text-center">
        <h1 class="display-2 font-weight-light">Página não encontrada</h1>
        <v-btn color="primary" class="mt-6" outlined rounded link to="/">Início</v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-img src="@/assets/notFound.svg" max-width="900" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Home",
  components: {},
};
</script>
