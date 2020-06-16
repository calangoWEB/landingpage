<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" sm="4" class="d-none d-sm-flex">
        <v-img
          src="@/assets/designer.svg"
          width="800"
          style="display:block, margin-right:auto, margin-left:auto"
        />
      </v-col>
      <v-col cols="12" sm="8" class="text-center">
        <h1 class="display-1 font-weight-light mb-6">Quem somos nós</h1>
        <p class="body-1 text-justify">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. At tempora
          quia quaerat eaque possimus exercitationem eius aut veritatis fuga
          suscipit? Necessitatibus nesciunt dolores obcaecati accusantium maxime
          accusamus, reprehenderit dolor cum.
        </p>
        <p class="body-1 text-justify">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. At tempora
          quia quaerat eaque possimus exercitationem eius aut veritatis fuga
          suscipit? Necessitatibus nesciunt dolores obcaecati accusantium maxime
          accusamus, reprehenderit dolor cum.
        </p>
      </v-col>
      <v-btn rounded outlined class="ma-6" color="primary">Ler mais</v-btn>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Sobre",
};
</script>
