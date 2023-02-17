import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'root',
    component: "",
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes // * it is a shorthand for routes:routes, key and value is the same
          // * so by destructuring it will 'routes' only
    
});

export default router; // * it's like we are exposing the router to use by other components. Check tha main.js