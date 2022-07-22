import _ from "lodash";

export function categorizeProducts(products, categories, currentCategory) {
  if (currentCategory === 1)
    return products.filter((product) => product.category_id != 1);
  else
    return products.filter((product) => product.category_id === currentCategory);
}
