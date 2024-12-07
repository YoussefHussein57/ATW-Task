<template>
  <hero-component>
<header-component></header-component>
</hero-component>
<desktop-features></desktop-features>
<desktop-hero></desktop-hero>
<desktop-light></desktop-light>
<desktop-partner></desktop-partner>
</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue';
import HeroComponent from './components/HeroComonent.vue';
import DesktopFeatures from './components/DesktopFeatures.vue';
import DesktopHero from './components/DesktopHero.vue';
import DesktopLight from './components/DesktopLight.vue';
import DesktopPartner from './components/DesktopPartner.vue';

export default {
  name: 'App',
  components: {
    HeaderComponent,
    HeroComponent, 
    DesktopFeatures,
    DesktopHero,
    DesktopLight,
    DesktopPartner
  }
}
</script>

<style lang="scss" scoped>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html{
  font-size: 62.5%;

}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: #f4f4f4;

}
</style>
