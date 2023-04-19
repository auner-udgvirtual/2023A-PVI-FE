import { createApp } from "vue";
import { createPinia } from "pinia";
import piniaPersist from "pinia-plugin-persist";

import App from "./App.vue";
import router from "./router";

// jQuery
import "admin-lte/plugins/jquery/jquery.min.js";
// Bootstrap 4
import "admin-lte/plugins/bootstrap/js/bootstrap.bundle.min.js";
// AdminLTE App
import "admin-lte/dist/js/adminlte.min.js";
import "admin-lte/dist/css/adminlte.min.css";
// DataTables & Plugins
import "admin-lte/plugins/datatables/jquery.dataTables.min.js";
// import "datatables.net-bs4/css/dataTables.bootstrap4.min.css";
// import "datatables.net-bs4/js/dataTables.bootstrap4.min.js";
import "admin-lte/plugins/datatables-bs4/css/dataTables.bootstrap4.min.css";
import "admin-lte/plugins/datatables-bs4/js/dataTables.bootstrap4.min.js";
import "admin-lte/plugins/datatables-buttons/css/buttons.bootstrap4.min.css";
import "admin-lte/plugins/datatables-buttons/js/buttons.bootstrap4.min.js";
import "admin-lte/plugins/datatables-buttons/js/buttons.html5.min.js";
import "admin-lte/plugins/datatables-buttons/js/buttons.colVis.min.js";
import "admin-lte/plugins/datatables-responsive/css/responsive.bootstrap4.min.css";
import "admin-lte/plugins/datatables-responsive/js/responsive.bootstrap4.min.js";
import "admin-lte/plugins/datatables-fixedcolumns/css/fixedColumns.bootstrap4.min.css";
import "admin-lte/plugins/datatables-fixedcolumns/js/fixedColumns.bootstrap4.min.js";
// Pace Bar
import "admin-lte/plugins/pace-progress/pace.min.js";
import "admin-lte/plugins/pace-progress/themes/blue/pace-theme-minimal.css";
// import FortAwesome Icons
import { dom, library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";

library.add(fas, far);
dom.watch();

// Toast Notifications
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";

const options = {
  timeout: 5000,
  closeOnClick: true,
  pauseOnFocusLoss: true,
  pauseOnHover: true,
  draggable: true,
  draggablePercent: 0.6,
  showCloseButtonOnHover: false,
  hideProgressBar: false,
  closeButton: "button",
  icon: true,
  rtl: false,
  maxToasts: 5,
  newestOnTop: true,
};

// Base Components
import ContentHeader from "@/components/ui/ContentHeader.vue";
import ContentBody from "@/components/ui/ContentBody.vue";
import Card from "@/components/ui/Card.vue";
import TableData from "@/components/ui/TableData.vue";
import DatePicker from "vue-datepicker-next";
import "vue-datepicker-next/index.css";

const app = createApp(App);
const pinia = createPinia();
pinia.use(piniaPersist);

app.use(pinia);
app.use(router);
app.use(Toast, options);

app.component("ContentHeader", ContentHeader);
app.component("ContentBody", ContentBody);
app.component("BaseCard", Card);
app.component("TableData", TableData);
app.component("DatePicker", DatePicker);

app.mount("#app");
