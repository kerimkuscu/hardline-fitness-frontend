<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <a class="navbar-brand" href="/" style="font-size: 30px">{{ $t('page_title') }}</a>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon" />
    </button>

    <div id="navbarSupportedContent" class="collapse navbar-collapse">
      <ul class="navbar-nav mr-auto">

        <li class="nav-item">
          <a class="nav-link" href="/exercises">{{ $t('navbar.exercises') }}</a>
        </li>

        <li class="nav-item">
          <a class="nav-link" href="https://www.supplementler.com/">{{ $t('navbar.supplements') }}</a>
        </li>

        <li class="nav-item dropdown">
          <a
            id="others"
            class="nav-link dropdown-toggle"
            href="#"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            {{ $t('navbar.calculators') }}
          </a>
          <div class="dropdown-menu" aria-labelledby="others">
            <a class="dropdown-item" href="https://www.agirsaglam.com/ideal-kilo/">{{ $t('navbar.calculators_menu.ideal_weight_calculation') }}</a>
            <a class="dropdown-item" href="https://www.agirsaglam.com/vucut-yag-orani-hesaplama/">{{ $t('navbar.calculators_menu.body_fat_ratio') }}</a>
            <a class="dropdown-item" href="https://www.agirsaglam.com/gunluk-kalori-ihtiyaci-hesaplama/">{{ $t('navbar.calculators_menu.daily_calorie_needs') }}</a>
            <a class="dropdown-item" href="https://www.agirsaglam.com/vucut-kitle-indeksi-bmi/">{{ $t('navbar.calculators_menu.body_mass_index') }}</a>
          </div>
        </li>
      </ul>
      <div>
        <locale-language />
      </div>
    </div>
  </nav>
</template>

<script>
    import LocaleLanguage from './locale-language';

    export default {
        name: 'Navbar',
        
        components: {
            LocaleLanguage
        }
    }
</script>