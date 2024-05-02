import { Product } from '../types/product';

import Dashboard from '../pages/index.vue';

const BLANK_CLUSTER = '_';

const routes = [
  {
    name:      `${ Product.name }-c-cluster`,
    path:      `/${ Product.name }/c/:cluster`,
    component: Dashboard,
    meta:      {
      product: Product.name,
      cluster: BLANK_CLUSTER,
      pkg:     Product.name
    }
  }
];

export default routes;
