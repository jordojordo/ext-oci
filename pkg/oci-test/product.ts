import { IPlugin } from '@shell/core/types';

import { Product } from './types/product';

export function init($plugin: IPlugin, store: any) {
  const BLANK_CLUSTER = '_';

  const { product } = $plugin.DSL(store, Product.name);

  product({
    icon:    'gear',
    inStore: 'management',
    weight:  100,
    to:      {
      name:      `${ Product.name }-c-cluster`,
      path:      `/${ Product.name }/c/:cluster/dashboard`,
      params:      {
        product: Product.name,
        cluster: BLANK_CLUSTER,
        pkg:     Product.name
      }
    }
  });
}
