<template>
  <div class="small">
    <LineChart :chart-data="chartData" :option="options" />
  </div>
</template>

<script>
import LineChart from "@/components/charts/LineChart";

export default {
  name: "Chart",
  components: {
    LineChart
  },
  props: ["chartData"],
  mounted() {
    console.log(this.chartData);
  },
  data() {
    return {
      options: {
        scales: {
          xAxes: [
            {
              display: true,
              scaleLabel: {
                display: true,
                labelString: "Fetched values"
              }
            }
          ],
          yAxes: [
            {
              display: true,
              ticks: {
                beginAtZero: true,
                steps: 10,
                stepValue: 5,
                max: 100
              }
            }
          ]
        }
      }
    };
  }
};
</script>

<style>
.small {
  max-width: 500px;
  margin: 50px auto;
}
</style>
