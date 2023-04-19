<template>
  <ContentHeader :title="title">
    <template #breadcrumb-items>
      <!-- <li class="breadcrumb-item"><a href="#">Home</a></li> -->
      <li class="breadcrumb-item active">Home</li>
    </template>
  </ContentHeader>
  <ContentBody>
    <template #container>
      <!-- Infografics -->
      <div class="row">
        <div class="col-md col-sm col-6">
          <p class="ml-3">{{ date }}</p>
        </div>
        <div class="col-md col-sm col-6"></div>
      </div>
      <!-- Tables -->
      <div class="row">
        <div class="col-md col-sm col-6">
          <!-- Active On-Demand Tasks -->
          <BaseCard :class="success">
            <template #card-title>Active On-Demand Tasks</template>
            <template #card-tools>
              <button type="button" class="btn btn-tool" @click="postTaskType">
                <i class="fas fa-square-plus"></i>
              </button>
              <button
                type="button"
                class="btn btn-tool"
                data-card-widget="collapse"
              >
                <i class="fas fa-minus"></i>
              </button>
            </template>
            <template #card-body>
              <TaskTable
                :tableHeaders="tableHeadersFull"
                :tableData="getOnDemand()"
              />
            </template>
          </BaseCard>
          <!-- Sanity Checks Tasks -->
          <BaseCard :class="warning">
            <template #card-title>Sanity Checks</template>
            <template #card-tools>
              <button
                type="button"
                class="btn btn-tool"
                data-card-widget="collapse"
              >
                <i class="fas fa-minus"></i>
              </button>
            </template>
            <template #card-body>
              <TaskTable
                :tableHeaders="tableHeadersFull"
                :tableData="getSanityChecks()"
              />
            </template>
          </BaseCard>
          <!-- Long Tasks / Daily Checks -->
          <BaseCard :class="orange">
            <template #card-title>Long Tasks / Daily Checks</template>
            <template #card-tools>
              <button
                type="button"
                class="btn btn-tool"
                data-card-widget="collapse"
              >
                <i class="fas fa-minus"></i>
              </button>
            </template>
            <template #card-body>
              <TaskTable :tableHeaders="tableHeadersFull" />
            </template>
          </BaseCard>
          <!-- Blocked/Paused Tasks -->
          <BaseCard :class="danger">
            <template #card-title>Blocked/Paused Tasks</template>
            <template #card-tools>
              <button
                type="button"
                class="btn btn-tool"
                data-card-widget="collapse"
              >
                <i class="fas fa-minus"></i>
              </button>
            </template>
            <template #card-body>
              <TaskTable :tableHeaders="tableHeadersFull" />
            </template>
          </BaseCard>
          <!-- Upcoming Tasks -->
          <BaseCard :class="info">
            <template #card-title>Upcoming Tasks</template>
            <template #card-tools>
              <button
                type="button"
                class="btn btn-tool"
                data-card-widget="collapse"
              >
                <i class="fas fa-minus"></i>
              </button>
            </template>
            <template #card-body>
              <TaskTable :tableHeaders="tableHeadersFull" />
            </template>
          </BaseCard>
        </div>
        <div class="col-md col-sm col-6">
          <!-- Traffic Lights -->
          <BaseCard :class="primary">
            <template #card-title>Traffic Lights</template>
            <template #card-body>
              <div class="card-body p-0">
                <table class="table table-sm">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Status</th>
                      <th>Working on</th>
                      <th>Available at</th>
                      <th>Then will work on</th>
                      <th style="width: 30px"></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Auner</td>
                      <td>Other</td>
                      <td>Real-Time Status UI/UX Design</td>
                      <td></td>
                      <td>Conquer the world!</td>
                      <td class="text-center">
                        <button type="button" class="btn btn-default btn-sm">
                          <i class="fas fa-pen-to-square"></i>
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </template>
          </BaseCard>
          <!-- Design Tasks -->
          <BaseCard :class="lime">
            <template #card-title>Design Tasks</template>
            <template #card-tools>
              <button
                type="button"
                class="btn btn-tool"
                data-card-widget="collapse"
              >
                <i class="fas fa-minus"></i>
              </button>
            </template>
            <template #card-body>
              <TaskTable :tableHeaders="tableHeadersShort" />
            </template>
          </BaseCard>
          <!-- Testing Runs - Feature Owners -->
          <BaseCard :class="olive">
            <template #card-title>Testing Runs - Feature Owners</template>
            <template #card-tools>
              <button
                type="button"
                class="btn btn-tool"
                data-card-widget="collapse"
              >
                <i class="fas fa-minus"></i>
              </button>
            </template>
            <template #card-body>
              <TaskTable :tableHeaders="tableHeadersShort" />
            </template>
          </BaseCard>
        </div>
      </div>
    </template>
  </ContentBody>
</template>

<script>
import TaskTable from "./components/TaskTable.vue";
import moment from "moment";
import { mapState } from "pinia";
import TaskService from "@/services/task/tasks.service";
import { useTaskStore } from "@/stores/task/taskStore";
import TaskTypeService from "@/services/task/taskTypes.service";

export default {
  components: { TaskTable },
  data() {
    return {
      title: "Real-Time Status - Happy Localization Testing!",
      primary: "card-primary card-outline",
      info: "card-info card-outline",
      success: "card-success card-outline",
      warning: "card-warning card-outline",
      danger: "card-danger card-outline",
      orange: "card-orange card-outline",
      lime: "card-lime card-outline",
      teal: "card-teal card-outline",
      olive: "card-olive card-outline",

      date: moment(new Date()).format("dddd, MMMM Do YYYY [| FW #] w"),
      tableHeadersFull: [
        "Responsible",
        "Ticket / Description",
        " Date received",
        "Time received",
        "Task",
        "ETA",
        "Comments",
      ],
      tableHeadersShort: [
        "Responsible",
        "Ticket / Description",
        " Start date",
        "Task",
        "Comments",
      ],

      taskStore: useTaskStore(),
    };
  },
  computed: {
    ...mapState(useTaskStore, ["getOnDemand", "getSanityChecks"]),
  },
  methods: {
    getTaskData() {},
    getTasksList() {
      TaskService.getTaskList().then((res) => {
        if (res.status == 200) {
          this.taskStore.data = res.data;
        } else {
          // error
          console.log(res.data);
        }
      });
    },
    postTaskType() {
      TaskTypeService.createTaskType({
        description: "Long tasks / Daily Checks",
      }).then((res) => {
        console.log(res.data);
      }).catch;
    },
    getTaskTypeBy() {
      TaskTypeService.readTaskTypeById(1).then((res) => {
        console.log(res.data);
      });
    },
  },
  mounted() {
    this.getTasksList();
  },
};
</script>
