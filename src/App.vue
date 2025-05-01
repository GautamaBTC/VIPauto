<template>
  <div id="app">
    <!-- Глобальная Навигационная Панель -->
    <AppNavBar />
    <!-- Точка маршрутизации -->
    <router-view />
    <!-- Глобальный Футер -->
    <AppFooter />
  </div>
</template>

<script>
import AppNavBar from './components/AppNavBar.vue';
import AppFooter from './components/AppFooter.vue';

export default {
  name: "App",
  components: {
    AppNavBar,
    AppFooter,
  },
};
</script>

<style>
html, body {
  margin: 0;
  padding: 0;
  height: 100%;
  background: linear-gradient(270deg, #4f4f4f, #1f1f1f, #6e6e6e, #1f1f1f);
  background-size: 300% 300%;
  animation: gradientShift 40s linear infinite;
  font-family: 'Inter', sans-serif;
  color: #e8e8e8;
}
</style>