<template>
  <div id="recipeCarousel" class="carousel slide w-100" data-ride="carousel">
    <div class="carousel-inner w-100" role="listbox">
      <div class="carousel-item row no-gutters active">
        <div class="col-3 float-left">
          <img class="img-fluid" src="../../assets/program_1.jpg">
          <div class="carousel-caption">
            <a href="" class="link-style">{{ $t('programs.six_pax_exercises') }}</a>
          </div>
        </div>
        <div class="col-3 float-left">
          <img class="img-fluid" src="../../assets/program_2.jpg">
          <div class="carousel-caption">
            <a href="" class="link-style">{{ $t('programs.biceps_exercises') }}</a>
          </div>
        </div>
        <div class="col-3 float-left">
          <img class="img-fluid" src="../../assets/program_3.jpg">
          <div class="carousel-caption">
            <a href="" class="link-style">{{ $t('programs.chest_exercises') }}</a>
          </div>
        </div>
        <div class="col-3 float-left">
          <img class="img-fluid" src="../../assets/program_4.jpg">
          <div class="carousel-caption">
            <a href="" class="link-style">{{ $t('programs.shoulder_exercises') }}</a>
          </div>
        </div>
      </div>
      <div class="carousel-item row no-gutters">
        <div class="col-3 float-left">
          <img class="img-fluid" src="../../assets/program_5.jpg">
          <div class="carousel-caption">
            <a href="" class="link-style">{{ $t('programs.triceps_exercises') }}</a>
          </div>
        </div>
        <div class="col-3 float-left">
          <img class="img-fluid" src="../../assets/program_6.jpg">
          <div class="carousel-caption">
            <a href="" class="link-style">{{ $t('programs.trapezius_exercises') }}</a>
          </div>
        </div>
        <div class="col-3 float-left">
          <img class="img-fluid" src="../../assets/program_7.jpg">
          <div class="carousel-caption">
            <a href="" class="link-style">{{ $t('programs.back_exercises') }}</a>
          </div>
        </div>
        <div class="col-3 float-left">
          <img class="img-fluid" src="../../assets/program_8.jpg">
          <div class="carousel-caption">
            <a href="" class="link-style">{{ $t('programs.leg_exercises') }}</a>
          </div>
        </div>
      </div>
    </div>
    <a class="carousel-control-prev" href="#recipeCarousel" role="button" data-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true" />
      <span class="sr-only">Previous</span>
    </a>
    <a class="carousel-control-next" href="#recipeCarousel" role="button" data-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true" />
      <span class="sr-only">Next</span>
    </a>
  </div>
</template>

<script>
    export default {
        name: 'Programs'
    }
</script>

<style scoped>
.link-style {
  background: #ffffff;
  color: #000000;
}
</style>