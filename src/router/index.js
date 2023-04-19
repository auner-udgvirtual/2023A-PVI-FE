import { createRouter, createWebHistory } from "vue-router";
import { useAuthStore } from "@/stores/authStore";
// import AuthService from "@/services/auth/auth.service";

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  linkExactActiveClass: "active",
  routes: [
    {
      path: "/login",
      name: "login",
      component: () =>
        import(
          /* webpackChunkName: "LoginPage" */ "@/views/auths/LoginPage.vue"
        ),
    },
    {
      path: "/",
      name: "home",
      component: () => import("@/views/HomeView.vue"),
      // meta: { requiresAuth: true },
      children: [
        {
          name: "rt-status",
          path: "",
          component: () =>
            import(
              /* webpackChunkName: "RTStatusPage"*/ "@/views/real-time-status/RealTimeStatus.vue"
            ),
        },
        {
          name: "settings",
          path: "/settings",
          component: () =>
            import(
              /* webpackChunkName: "RTStatusPage"*/ "@/views/SettingsView.vue"
            ),
        },
      ],
    },
    {
      path: "/:notFound(.*)",
      redirect: "/",
    },
  ],
});

router.beforeEach((to, from, next) => {
  const store = useAuthStore();
  const publicPages = ["/login"];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = store.isAuthenticated;

  // trying to access a restricted page + not logged in
  // redirect to login page
  if (authRequired && !loggedIn) {
    next({ name: "login" });
  } else {
    next();
  }
});

// router.beforeEach((to, from, next) => {
//   // Verify is route requires authentication
//   if (to.meta.requiresAuth) {
//     // Verify if user is authenticated
//     if (AuthService.isAuth()) {
//       // if so, allow navigation to route
//       next();
//     } else {
//       // if not authenticated, redirect to login page
//       next({ name: "login" });
//     }
//   } else {
//     // if route doesn't require auth allow to continue
//     next();
//   }
// });

export default router;
