<template>
  <div class="col-12">
    <div class="row">
      <div class="col-3" align="center">
        <img style="width: 100px" src="../../assets/calculator_1.png" alt="1">
        <div>
          <a href="#" style="color: #000000">{{ $t('calculators.ideal_weight_calculation') }}</a>
        </div>
      </div>
      <div class="col-3" align="center">
        <img style="width: 100px" src="../../assets/calculator_2.png" alt="2">
        <div>
          <a href="#" style="color: #000000">{{ $t('calculators.body_fat_ratio') }}</a>
        </div>
      </div>
      <div class="col-3" align="center">
        <img style="width: 100px" src="../../assets/calculator_3.png" alt="3">
        <div>
          <a href="#" style="color: #000000">{{ $t('calculators.daily_calorie_needs') }}</a>
        </div>
      </div>
      <div class="col-3" align="center">
        <img style="width: 100px" src="../../assets/calculator_4.png" alt="4">
        <div>
          <a href="#" style="color: #000000">{{ $t('calculators.body_mass_index') }}</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: 'Calculator'
    }
</script>