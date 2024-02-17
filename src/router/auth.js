
const routes = [
  {
    path: "/login-page",
    name: "LoginPage",
    component: () => import('@/views/auths/LoginPage.vue')
  },
  {
    path: "/registration-page",
    name: "RegistrationPage",
    component: () => import('@/views/auths/RegistrationPage.vue')
  },
  {
    path: "/forgot-password-page",
    name: "ForgotPasswordPage",
    component: () => import('@/views/auths/ForgotPasswordPage.vue')
  },
  
  {
    path: "/email-verification-page",
    name: "EmailVerificationPage",
    component: () => import('@/views/auths/EmailVerificationPage.vue')
  },
  {
    path: "/update-password-page",
    name: "ResetPasswordPage",
    component: () => import('@/views/auths/ResetPasswordPage.vue')
  },
  {
    path: "/update-password-page",
    name: "ResetPasswordPage",
    component: () => import('@/views/auths/ResetPasswordPage.vue')
  },
  {
    path: "/detail",
    name: "DetailPage",
    component: () => import('@/views/auths/UserDetail.vue')
  },

];

export default routes;