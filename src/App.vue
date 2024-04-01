<template>
  <calculator-background />
  <calculator-wrapper />
</template>

<script>
import CalculatorBackground from "@/components/CalculatorBackground.vue";
import CalculatorWrapper from "@/components/CalculatorWrapper.vue";

export default {
  name: "App",
  components: {
    CalculatorBackground,
    CalculatorWrapper,
  },
};
</script>
