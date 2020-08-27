<template>
  <div>
    <vue-speedometer
      :maxSegmentLabels="1"
      :minValue="0"
      :maxValue="100"
      :customSegmentStops="[0, 25, 50, 77, 100]"
      :segmentColors="['#5959ac', '#AAA', '#123', '#456', '#789']"
      needleColor="#000"
      :currentValueText="'Current Value: \${value}'"
      :value="speedValue"
      textColor="${textColor}"
    />
  </div>
</template>

<script>
import VueSpeedometer from "vue-speedometer";
export default {
  name: "SpeedometerComponent",
  components: { VueSpeedometer },
  props: ["speedValue"]
};
</script>

<style></style>
