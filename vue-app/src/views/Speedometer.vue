<template>
  <div class="speedometer">
    <h1>Speedometer</h1>
    <speedometer-component :speedValue="speedValue" />
  </div>
</template>

<script>
// @ is an alias to /src
import SpeedometerComponent from "../components/Speedometer";

export default {
  name: "Speedometer",
  components: {
    SpeedometerComponent
  },
  created() {
    this.sockets.unsubscribe("newChartData");
    this.sockets.subscribe("newSpeedometerValue", value => {
      this.speedValue = value;
    });
  },
  data() {
    return {
      speedValue: 0
    };
  }
};
</script>
