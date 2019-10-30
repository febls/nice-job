<template>
  <v-app>
    <page-header />
    <v-content id="default-content">
      <nuxt />
    </v-content>
    <page-footer />
  </v-app>
</template>

<script>
import PageHeader from '~/components/partials/header/header'
import PageFooter from '~/components/partials/footer/footer'

export default {
  data() {
    return {
    }
  },
  beforeMount() {
    const vm = this
  },
  components: {
    PageHeader,
    PageFooter
  }
}
</script>