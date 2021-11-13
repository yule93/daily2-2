import CenterList from './components/CenterList.js';
import CenterView from './components/CenterView.js';

Vue.use(VueRouter);
export default new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "list",
      component: CenterList
    },
    {
      path: "/view",
      name: "view",
      component: CenterView
    }
  ]
});