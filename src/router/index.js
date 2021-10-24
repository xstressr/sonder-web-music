import JYDiscover from '@/pages/discover'
import JYMine from '@/pages/mine'
import JYFriend from '@/pages/friend'


const routes = [
  {
    path: "/",
    exact: true,
    component: JYDiscover
  },
  {
    path: "/mine",
    component: JYMine
  },
  {
    path: "/friend",
    component: JYFriend
  },

];

export default routes;