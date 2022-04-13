import { createRouter, createWebHistory } from 'vue-router';

import Main from '../pages/main/index.vue';
import Artist from '../pages/artist/index.vue';

const routes = [
  {
    path: '/',
    component: Main,
  },
  {
    path: '/artist/:id',
    component: Artist,
  },
  {
    path: '/new/artist',
    component: Artist,
  },
  {
    path: '/new/track',
    component: Artist,
  },
];

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHistory(),
  routes, // short for `routes: routes`
});

export default router;
