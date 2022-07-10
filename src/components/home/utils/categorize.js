import _ from "lodash";

export function categorizeProducts(products, currentCategory) {
  if (currentCategory === "All")
    return products.filter((product) => product.category != "All");
  else
    return products.filter((product) => product.category === currentCategory);
}
