<template>
  <TopNav></TopNav>
  <router-view />
  <BottomNav></BottomNav>
</template>

<script setup>
import BottomNav from './components/Navbar/BottomNav.vue';
import TopNav from './components/Navbar/TopNav.vue';


</script>
