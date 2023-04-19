<template>
  <div class="table-responsive-xxl m-3">
    <table
      class="table table-bordered table-striped"
      id="datatable"
      data-page-length="10"
    >
      <thead>
        <tr>
          <th v-for="col in tableHeaders" :key="col">
            {{ col }}
          </th>
        </tr>
      </thead>
    </table>
  </div>
</template>

<script>
import $ from "jquery";

export default {
  props: [
    "title",
    "pagination",
    "headers",
    "data",
    "tableHeaders",
    "method",
    "fixedColumn",
    "extraButtons",
  ],
  data() {
    return {
      methodClick: this.method,
      tableView: null,
    };
  },
  methods: {
    destroyTable() {
      this.tableView.destroy();
    },
    resizeTable() {
      this.tableView.destroy();
      this.createTable();
    },
    createTable() {
      this.tableView = $("#datatable").DataTable({
        data: this.data,
        columns: this.headers,
        autoWidth: false,
        stateSave: true,
        createdRow: function (row, data) {
          if (
            data["experiment_result"] === "Roll forward" ||
            data["experiment_result"] === "Roll out"
          ) {
            $("td", row).addClass("table-success");
          }
        },
        dom:
          "<'row'<'col-sm-12 col-md-3'l><'col-sm-12 col-md-6'B><'col-sm-12 col-md-3'f>>" +
          "<'row'<'col-sm-12'tr>>" +
          "<'row'<'col-sm-12 col-md-5'i><'col-sm-12 col-md-7'p>>",
        fixedColumns: {
          left: this.fixedColumn,
        },
        scrollX: true,
        buttons: {
          buttons: this.extraButtons,
        },
        order: [1, "desc"],
      });
    },
  },
  created() {
    window.addEventListener("resize", this.resizeTable);
  },
  unmounted() {
    window.removeEventListener("resize", this.resizeTable);
  },
  updated() {
    this.createTable();
  },
};
</script>

<style>
.table a {
  text-decoration: none;
}
.table a:hover {
  background-color: white;
}

td .img-container {
  position: relative;
}
td .img-container:before {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0);
}
td .img-container:hover::before {
  background-color: rgba(0, 0, 0, 0.5);
}
td .img-container img {
  display: block;
}
td .img-container button {
  position: absolute;
  top: 25%;
  left: 80%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  opacity: 0;
}
td .img-container:hover button {
  opacity: 1;
}
.table thead th {
  /* color: green; */
  vertical-align: top;
}
</style>
