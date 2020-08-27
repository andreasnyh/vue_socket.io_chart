<template>
  <div class="home">
    <chart :chart-data="chartData" />
  </div>
</template>

<script>
// @ is an alias to /src
import Chart from "@/components/Chart";
import io from "socket.io-client";
let socket = io.connect("http://localhost:5000");

export default {
  name: "Home",
  components: {
    Chart
  },
  created() {
    this.getRealTimeData();
  },
  data() {
    return {
      chartData: {}
    };
  },
  methods: {
    getRealTimeData() {
      socket.on("newChartData", data => {
        // console.log(data);
        // this.chartData = data;
        this.fillData(data);
      });
    },
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
