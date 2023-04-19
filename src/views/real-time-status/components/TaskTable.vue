<template>
  <div class="card-body p-0">
    <table class="table table-sm">
      <thead>
        <tr>
          <th v-for="col in tableHeaders" :key="col">
            {{ col }}
          </th>
          <th style="width: 40px"></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="row in tableData" :key="row.id">
          <td>{{ row.user_profile }}</td>
          <td>{{ row.description }}</td>
          <td>{{ row.received_date }}</td>
          <td>{{ row.received_time }}</td>
          <td>{{ row.ticket }}</td>
          <td>{{ row.eta }}</td>
          <td>{{ row.comments }}</td>
          <td>
            <div class="btn-group">
              <button
                type="button"
                class="btn btn-default btn-sm"
                @click="updateTask(row.id)"
              >
                <i class="fas fa-pen-to-square"></i>
              </button>
              <button
                type="button"
                class="btn btn-default btn-sm"
                @click="deactivateTask(row.id)"
              >
                <i class="fas fa-square-check"></i>
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>

  <Modal :id="newTask">
    <template #modal-title>New Task</template>
    <template #modal-body>
      <div class="modal-body">
        <div class="container-fluid">
          <form class="row" id="newTaskForm">
            <!-- Responsible -->
            <div class="col-12 m-1">
              <label for="inputNewResponsible" class="form-label"
                >Responsible</label
              >
              <input
                type="text"
                class="form-control"
                id="inputNewResponsible"
                disabled
              />
            </div>
            <!-- Description -->
            <div class="col-md-12 m-1">
              <label for="inputNewTicketDesc" class="form-label"
                >Ticket / Description</label
              >
              <input type="text" class="form-control" id="inputNewTicketDesc" />
            </div>
            <!-- Date and Time Received -->
            <div class="form-row col-md-12 m-1">
              <div class="col-6">
                <label for="inputNewDR" class="form-label">Date Received</label>
                <!-- <date-picker
                  v-model:value="updateTimeNew"
                  v-model:open="openTimeNew"
                  type="datetime"
                  placeholder="Select date and time"
                  @change="handleChangeTimeNew"
                  :shortcuts="shortcuts"
                >
                </date-picker> -->
              </div>
              <div class="col-6">
                <label for="inputNewTR" class="form-label">Time Received</label>
                <!-- <date-picker
                  v-model:value="updateTimeNew"
                  v-model:open="openTimeNew"
                  type="datetime"
                  placeholder="Select date and time"
                  @change="handleChangeTimeNew"
                  :shortcuts="shortcuts"
                >
                </date-picker> -->
              </div>
            </div>
            <!-- Task -->
            <div class="col-12 m-1">
              <label for="inputNewTask" class="form-label">Task</label>
              <input type="text" class="form-control" id="inputNewTask" />
            </div>
            <!-- ETA -->
            <div class="col-12 m-1">
              <label for="inputNewETA" class="form-label">ETA</label>
              <!-- <date-picker
                  v-model:value="updateTimeNew"
                  v-model:open="openTimeNew"
                  type="datetime"
                  placeholder="Select date and time"
                  @change="handleChangeTimeNew"
                  :shortcuts="shortcuts"
                >
                </date-picker> -->
            </div>
            <!-- Comments -->
            <div class="col-12 m-1">
              <label for="inputNewComments" class="form-label">Comments</label>
              <input type="text" class="form-control" id="inputNewComments" />
            </div>
          </form>
        </div>
      </div>
    </template>
    <template #modal-footer>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">
          Cancel
        </button>
        <button type="button" id="newExperiment" class="btn btn-primary">
          Save
        </button>
      </div>
    </template>
  </Modal>
</template>

<script>
import { mapState } from "pinia";
import TaskService from "@/services/task/tasks.service";
import { useTaskStore } from "@/stores/task/taskStore";
import Modal from "@/components/ui/Modal.vue";
import $ from "jquery";

export default {
  props: ["isLoading", "tableHeaders", "tableData"],
  components: { Modal },
  data() {
    return {
      newTask: "newTaskModal",
      editTask: "editTaskModal",
    };
  },
  computed: {
    ...mapState(useTaskStore, ["getTaskById"]),
  },
  methods: {
    updateTask(id) {
      $("#newTaskModal").modal("show");
      console.log(this.getTaskById(id));
    },
    deactivateTask(id) {
      TaskService.deactivateTask(id);
    },
  },
};
</script>

<style scoped>
.table thead th,
.table tbody td {
  /* color: green; */
  vertical-align: middle;
}
</style>
