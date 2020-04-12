<template>
  <div class="stepper-container">
    <template v-for="step in steps">
      <div class="stepper-point" :key="step" :class="step === activeStep ? 'stepper-point-active' : ''"></div>
    </template>
  </div>
</template>

<script>
export default {
  name: "Stepper",
  props: {
    activeStep: {
      type: Number,
      default: 1
    },
    steps: {
      type: Number,
      default: 3
    }
  }
}
</script>

<style scoped>

</style>