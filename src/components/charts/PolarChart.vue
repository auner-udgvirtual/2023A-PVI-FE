<template>
  <div>
    <canvas id="polar-chart" height="180px"></canvas>
  </div>
</template>

<script>
import Chart from "chart.js";

export default {
  name: "PolarProjectChart",
  props: ["labels", "data", "label"],
  data() {
    return {
      chart: null,
      polarChartData: null,
    };
  },
  methods: {
    createChart() {
      this.polarChartData = {
        type: "bar",
        data: {
          labels: this.labels,
          datasets: [
            {
              label: this.label,
              data: this.data,
              backgroundColor: "rgba(89,199,207,.5)",
              borderColor: "#09757A",
              borderWidth: 2,
              pointStyle: "circle",
              pointRadius: 5,
              pointHoverRadius: 10,
            },
          ],
        },
        options: {
          indexAxis: "y",
          // Elements options apply to all of the options unless overridden in a dataset
          // In this case, we are setting the border of each horizontal bar to be 2px wide
          elements: {
            bar: {
              borderWidth: 2,
            },
          },
          responsive: true,
          plugins: {
            legend: {
              position: "right",
            },
            title: {
              display: true,
              text: "Chart.js Horizontal Bar Chart",
            },
          },
        },
        // options: {
        //   indexAxis: "y",
        //   responsive: true,
        //   // lineTension: 1,
        //   plugins: {
        //     legend: {
        //       position: "right",
        //     },
        //     // title: {
        //     //   display: true,
        //     //   text: 'Chart.js Horizontal Bar Chart'
        //     // }
        //   },
        //   // scales: {
        //   //   yAxes: [
        //   //     {
        //   //       ticks: {
        //   //         beginAtZero: true,
        //   //         padding: 25,
        //   //       },
        //   //     },
        //   //   ],
        //   // },
        // },
      };
      const ctx = document.getElementById("polar-chart");
      this.chart = new Chart(ctx, this.polarChartData);
    },
  },
  updated() {
    this.chart.update();
  },
  mounted() {
    this.createChart();
  },
};
</script>
