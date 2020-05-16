<template>
  <div>
    <select v-model="$i18n.locale" style="background: #343a40;color: white;border: 0" class="form-control">
      <option v-for="language in localeLanguage" :key="language.value" :value="language.value">
        {{ language.text }}
      </option>
    </select>
  </div>
</template>

<script>
    export default {
        name: 'LocaleLanguage',

        data: (self = this) => ({
            localeLanguage: [
                { value: 'en', text: self.$i18n.t('en') },
                { value: 'tr', text: self.$i18n.t('tr') }
            ],
        })
    }
</script>