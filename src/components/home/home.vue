<template>
  <div>
    <div class="mb-5">
      <slider />
    </div>

    <div class="mb-5">
      <h2 class="label-title">
        {{ $t('programs.title') }}
      </h2>

      <hr class="divider" />

      <programs />
    </div>

    <div class="mb-5">
      <h2 class="label-title">
        {{ $t('calculators.title') }}
      </h2>

      <hr class="divider">

      <calculator />
    </div>
  </div>
</template>

<script>
    import Slider from './slider';
    import Programs from './programs';
    import Calculator from './calculator';

    export default {
        name: 'Home',
        
        components: {
            Calculator,
            Programs,
            Slider
        }
    }
</script>

<style scoped>
.label-title {
  text-align: center;
}

  .divider {
    width: 400px;
    border-top: 1px solid !important;
  }
</style>