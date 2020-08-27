<template>
  <div class="home">
    <chart :chart-data="chartData" />
  </div>
</template>

<script>
// @ is an alias to /src
import Chart from "@/components/Chart";

export default {
  name: "Home",
  components: {
    Chart
  },
  created() {
    this.sockets.unsubscribe("newSpeedometerValue");
    this.sockets.subscribe("newChartData", data => {
      this.fillData(data);
    });
  },
  data() {
    return {
      chartData: {}
    };
  },
  methods: {
    fillData(values) {
      this.chartData = {
        labels: values,
        datasets: [
          {
            label: "Values from Socket.io",
            backgroundColor: "#f87979",
            data: values
          }
        ]
      };
    }
  }
};
</script>
