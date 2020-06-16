<template>
  <v-container id="servicos">
    <v-row align="center" justify="center">
      <div class="text-center">
        <h1 class="display-1 font-weight-light">Nossos serviços</h1>
        <p class="font-weight-regular">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>
    </v-row>
    <v-row justify="center" align="center">
      <v-col cols="12" md="4" class="text-center">
        <v-card>
          <v-icon size="50" color="primary" class="ma-6">fa-th</v-icon>
          <h1>Design criativo</h1>
          <v-card-text class="text-justify">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi
            dolor sequi reiciendis omnis blanditiis provident neque rem, esse
            sit deserunt perspiciatis nemo officia asperiores eum. Minima
            consequuntur quod nemo nisi!
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" md="4" class="text-center">
        <v-card>
          <v-icon size="50" color="primary" class="ma-6">fa-desktop</v-icon>
          <h1>Desenvolvimento web</h1>
          <v-card-text class="text-justify">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi
            dolor sequi reiciendis omnis blanditiis provident neque rem, esse
            sit deserunt perspiciatis nemo officia asperiores eum. Minima
            consequuntur quod nemo nisi!
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" md="4" class="text-center">
        <v-card>
          <v-icon size="50" color="primary" class="ma-6">fa-line-chart</v-icon>
          <h1>Marketing digital</h1>
          <v-card-text class="text-justify">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi
            dolor sequi reiciendis omnis blanditiis provident neque rem, esse
            sit deserunt perspiciatis nemo officia asperiores eum. Minima
            consequuntur quod nemo nisi!
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Sobre",
};
</script>
