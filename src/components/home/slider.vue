<template>
  <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
    <ol class="carousel-indicators">
      <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active" />
      <li data-target="#carouselExampleCaptions" data-slide-to="1" />
      <li data-target="#carouselExampleCaptions" data-slide-to="2" />
    </ol>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="../../assets/slider_1.jpg" class="d-block w-100" style="height: 619px" alt="1">
        <div class="carousel-caption d-none d-md-block">
          <h1>{{ $t('slider.walt_disney') }}</h1>
        </div>
      </div>
      <div class="carousel-item">
        <img src="../../assets/slider_2.jpg" class="d-block w-100" style="height: 619px" alt="2">
        <div class="carousel-caption d-none d-md-block">
          <h1>{{ $t('slider.anonymous') }}</h1>
        </div>
      </div>
      <div class="carousel-item">
        <img src="../../assets/slider_3.jpg" class="d-block w-100" style="height: 619px" alt="3">
        <div class="carousel-caption d-none d-md-block">
          <h1>{{ $t('slider.arnold') }}</h1>
          <span>- Arnold Schwarzenegger -</span>
        </div>
      </div>
    </div>
    <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true" />
      <span class="sr-only">Previous</span>
    </a>
    <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true" />
      <span class="sr-only">Next</span>
    </a>
  </div>
</template>

<script>
    export default {
        name: 'Slider'
    }
</script>