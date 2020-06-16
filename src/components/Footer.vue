<template>
  <v-footer dark padless>
    <v-card
      flat
      tile
      class="secondary lighten-1 white--text text-center"
      style="width:100%"
    >
      <v-container>
        <v-row justify="center">
          <h1 class="display-1 font-weight-light">Contate-nos</h1>
        </v-row>
        <v-row>
          <v-col cols="12"
            ><v-form ref="form" v-model="valid" :lazy-validation="lazy">
              <v-text-field
                v-model="name"
                :counter="10"
                :rules="nameRules"
                label="Nome"
                required
              ></v-text-field>

              <v-text-field
                v-model="email"
                :rules="emailRules"
                label="E-mail"
                required
              ></v-text-field>

              <v-textarea
                v-model="textArea"
                :rules="textAreaRules"
                label="Message"
                required
              />

              <v-btn
                :disabled="!valid"
                color="primary"
                class="mr-4"
                @click="validate"
              >
                Enviar
              </v-btn>
            </v-form></v-col
          >
        </v-row>
      </v-container>
      <v-card-text>
        <v-btn v-for="icon in icons" :key="icon" class="mx-4 white--text" icon>
          <v-icon size="24px" color="white">{{ icon }}</v-icon>
        </v-btn>
      </v-card-text>
      <v-divider></v-divider>

      <v-card-text class="white--text">
        {{ new Date().getFullYear() }} — <strong>J.A</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  data: () => ({
    icons: ["fa-facebook", "fa-twitter", "fa-linkedin", "fa-instagram"],
    valid: true,
    name: "",
    nameRules: [
      (v) => !!v || "Name is required",
      (v) => (v && v.length >= 6) || "O nome precisa ter mais de 6 caracteres",
    ],
    email: "",
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+\..+/.test(v) || "O E-mail precisa ser válido",
    ],
    textArea: "",
    textAreaRules: [
      (v) => !!v || "Text Area is required",
      (v) => (v && v.length >= 10) || "Mínimo de 10 caracteres",
    ],
    lazy: false,
  }),
};
</script>
