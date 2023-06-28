export const routes = [
  {
    path: "/",
    name: "layout",
    component: () => import("@/layout/index.vue"),
    children: [
      {
        path: "/",
        name: "home",
        component: () => import("@/pages/Home.vue"),
      },
      {
        path: "blog/:name",
        name: "blog",
        component: () => import("@/pages/Blog.vue"),
      },
    ],
  },
  {
    path: "/test",
    name: "test",
    component: () => import("@/pages/Test.vue"),
  },
];
