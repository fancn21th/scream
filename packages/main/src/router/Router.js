import { createRouter, createWebHashHistory } from 'vue-router';
import { BasicLayout } from '@/layouts';

// Trunk A
const trunkA = () => import('@/pages/trunkA/TrunkA.vue');
const branchA = () => import('@/pages/trunkA/pages/branchA/BranchA.vue');

export const routes = [
  { path: '/', redirect: { name: 'shared-screen' } },
  {
    path: '/shared-screen/',
    name: 'shared-screen',
    component: BasicLayout,
    redirect: { name: 'trunk-a' },
    children: [
      {
        path: 'trunk-a',
        name: 'trunk-a',
        component: trunkA,
        redirect: { name: 'branch-a' },
        children: [
          {
            path: 'branch-a',
            name: 'branch-a',
            component: branchA,
          },
        ],
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
