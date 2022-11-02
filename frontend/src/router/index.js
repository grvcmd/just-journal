import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

//below we're creating the routes
//importing components & views from their local loaction
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      // view to display all topics
      path: '/view-topics',
      name: 'view-topics',
      component: () => import('../views/TopicView.vue')
    },
    {
      // Edit existing topic
      path: '/edit-topic',
      name: 'edit-topic',
      component: () => import('../components/EditTopicComponent.vue')
    },
  ]
})

export default router
