// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from "~/layouts/Default.vue";
import "prismjs/themes/prism.css";
import "normalize.css";
import "./css/style.scss";

import VueClipboard from "vue-clipboard2";

export default function(Vue, { router, head, isClient }) {
  Vue.use(VueClipboard);
  head.link.push({
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css?family=Lobster+Two&display=swap",
  }),
    head.link.push({
      rel: "stylesheet",
      href:
        "https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800&display=swap",
    }),
    head.link.push({
      rel: "stylesheet",
      href:
        "https://maxst.icons8.com/vue-static/landings/line-awesome/line-awesome/1.3.0/css/line-awesome.min.css",
    }),
    head.link.push({
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css?family=Satisfy&display=swap",
    }),
    // Set default layout as a global component
    Vue.component("Layout", DefaultLayout);
}
