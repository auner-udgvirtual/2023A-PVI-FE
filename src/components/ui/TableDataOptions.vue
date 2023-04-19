<template>
  <div class="table-responsive-xxl">
    <table
      class="table table-bordered table-striped"
      id="datatableOptions"
      data-page-length="5"
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
  props: ["tableHeaders", "DataTableOptions"],
  data() {
    return {
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
      var tableView = $("#datatableOptions").DataTable(this.DataTableOptions);
      this.tableView = tableView;
    },
  },
  created() {
    window.addEventListener("resize", this.resizeTable);
  },
  unmounted() {
    window.removeEventListener("resize", this.resizeTable);
  },
  mounted() {
    this.createTable();
  },
};
</script>
