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
        <li class="nav-item active">
          <a class="nav-link" href="#"><i class="fas fa-star" /> {{ $t('navbar.take_coaching') }}</a>
        </li>

        <li class="nav-item dropdown">
          <a
            id="target"
            class="nav-link dropdown-toggle"
            href="#"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            {{ $t('navbar.target') }}
          </a>
          <div class="dropdown-menu" aria-labelledby="target">
            <a class="dropdown-item" href="#">{{ $t('navbar.target_menu.body_building') }}</a>
            <a class="dropdown-item" href="#">{{ $t('navbar.target_menu.burning_oil') }}</a>
            <a class="dropdown-item" href="#">{{ $t('navbar.target_menu.strengthened') }}</a>
          </div>
        </li>

        <li class="nav-item">
          <a class="nav-link" href="#">{{ $t('navbar.exercises') }}</a>
        </li>

        <li class="nav-item">
          <a class="nav-link" href="#">{{ $t('navbar.supplements') }}</a>
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
            {{ $t('navbar.others') }}
          </a>
          <div class="dropdown-menu" aria-labelledby="others">
            <a class="dropdown-item" href="#">{{ $t('navbar.target_menu.body_building') }}</a>
            <a class="dropdown-item" href="#">{{ $t('navbar.target_menu.burning_oil') }}</a>
            <a class="dropdown-item" href="#">{{ $t('navbar.target_menu.strengthened') }}</a>
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