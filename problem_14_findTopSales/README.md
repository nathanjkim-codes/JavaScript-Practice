# Find Top Sales Exercise

## Description

Create a function `findTopSales(products)` that returns the product(s) with the **highest sales** from a list of products.

Each product looks like this: `{ name: "Product Name", sales: 1000 }`.

## Key Points

- Start by using the first product as the initial top product.
- Use `for...of` to look at each product directly.
- Compare each product’s `sales` with the current top product.
- Update the top product only if the sales is higher.
- Return `null` if the list is empty.
- Do not change the original list.
