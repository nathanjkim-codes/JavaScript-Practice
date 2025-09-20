function findTopSales(products) {
  if (products.length === 0) return null;

  let topProduct = products[0];
  for (let product of products) {
    if (product.sales > topProduct.sales) {
      topProduct = product;
    }
  }

  return topProduct;
}

let products = [
  { name: "Laptop", sales: 1200 },
  { name: "Headphones", sales: 800 },
  { name: "Keyboard", sales: 950 },
  { name: "Monitor", sales: 1500 },
];

console.log(findTopSales(products));
