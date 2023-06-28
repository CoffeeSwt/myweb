export const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("@/pages/Home.vue"),
  },
  {
    path: "/test",
    name: "test",
    component: () => import("@/pages/Test.vue"),
  },
];
