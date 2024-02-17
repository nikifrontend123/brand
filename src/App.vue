<template>
  <TopNav v-if="!hideBottomNav"></TopNav>
  <router-view />
  <BottomNav v-if="!hideBottomNav"></BottomNav>
</template>

<script >
import BottomNav from './components/Navbar/BottomNav.vue';
import TopNav from './components/Navbar/TopNav.vue';
export default {
  components: {
    TopNav,
    BottomNav,
  },
  computed: {
    hideBottomNav() {
      const hiddenPages = ['ProfilePage', 'CatalogDetailPage', 'EmailVerificationPage', 'ForgotPasswordPage', 'LoginPage', 'OTPPage', 'RegistrationPage', 'ResetPasswordPage'];
      return hiddenPages.includes(this.$route.name);
    },
  },
}

</script>
