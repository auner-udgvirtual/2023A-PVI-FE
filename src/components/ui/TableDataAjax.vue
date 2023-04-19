<template>
  <div class="table-responsive-xxl">
    <table class="table" id="datatableAjax" data-page-length="10">
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
    "headers",
    "data",
    "tableHeaders",
    "method",
    "hightlightCol",
    "url",
    "dataSrc",
  ],
  data() {
    return {
      tableView: null,
    };
  },
  methods: {
    resizeTable() {
      this.tableView.destroy();
      this.createTable();
    },
    createTable() {
      var that = this;
      // var editModalMarket = new bootstrap.Modal(
      //   document.getElementById("editModalMarket"),
      //   {
      //     backdrop: "static",
      //     keyboard: false,
      //   }
      // );
      // var editModalFeature = new bootstrap.Modal(
      //   document.getElementById("editModalFeature"),
      //   {
      //     backdrop: "static",
      //     keyboard: false,
      //   }
      // );
      let tableView = $("#datatableAjax").DataTable({
        ajax: {
          url: "https://intlqatool.partners.test-godaddy.com/qa-dashboard-api/feature-availability/",
          dataSrc: this.dataSrc,
        },
        // data: this.data,
        columns: this.headers,
        // columnDefs: [
        //   {
        //     targets: [0, 1, -2, -1],
        //     className: "noVis",
        //   },
        // ],
        autoWidth: true,
        stateSave: true,
        fixedColumns: {
          left: 2,
        },
        responsive: true,
        scrollX: true,
        dom:
          "<'row'<'col-sm-12 col-md-6'l><'col-sm-12 col-md-3'B><'col-sm-12 col-md-3'f>>" +
          "<'row'<'col-sm-12'tr>>" +
          "<'row'<'col-sm-12 col-md-5'i><'col-sm-12 col-md-7'p>>",
        buttons: {
          buttons: [
            {
              extend: "csv",
              text: '<i class="bi bi-filetype-csv"></i>',
              titleAttr: "Export CSV",
              filename: "data-report",
              exportOptions: {
                columns: ":visible",
              },
            },
            // {
            //   extend: "colvis",
            //   text: "Mkt Col Vis",
            //   columns: ":not(.noVis)",
            //   collectionLayout: "fixed columns",
            //   collectionTitle: "Markets Visibility Control",
            //   // postfixButtons: ["colvisRestore"],
            // },
            // {
            //   extend: "colvisGroup",
            //   text: "Show all",
            //   show: ":hidden",
            // },
          ],
        },
        order: [1, "asc"],
      });

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

<style>
.table a {
  text-decoration: none;
}

.table a:hover {
  background-color: white;
}

table.dataTable.display tbody tr.DTFC_NoData {
  background-color: transparent;
}

tr.even td {
  background-color: #fff;
}

tr.odd td {
  background-color: #f9f9f9;
}

tr.selected td {
  background-color: #a6b4cd;
}
/* #detailedDatatable_wrapper > div:nth-child(2) > div > div > div.dataTables_scrollHead > div > table */
/* #detailedDatatable_wrapper > div:nth-child(2) > div > div > div.dataTables_scrollHead > div > table > thead > tr */
table.dataTable thead tr th.dtfc-fixed-left {
  background-color: #fff;
}

tfoot th {
  background-color: white;
}

tr.dt-rowReorder-moving td.dtfc-fixed-left,
tr.dt-rowReorder-moving td.dtfc-fixed-right {
  border-top: 2px solid #555 !important;
  border-bottom: 2px solid #555 !important;
}

tr.dt-rowReorder-moving td.dtfc-fixed-left:first-child {
  border-left: 2px solid #555 !important;
}

tr.dt-rowReorder-moving td.dtfc-fixed-right:last-child {
  border-right: 2px solid #555 !important;
}
</style>
