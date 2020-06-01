import Vue from "vue";
import Vuetify from "vuetify/lib";
import pt from "vuetify/es5/locale/pt";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: "#00947b",
        secondary: "#1f2d41",
      },
    },
  },
  lang: {
    locales: { pt },
    current: "pt",
  },
  icons: {
    iconfont: "fa4",
  },
});
