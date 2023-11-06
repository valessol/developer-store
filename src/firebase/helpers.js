export const checkStock = (products, cartItems) => {
  const outOfStock = cartItems.filter((item) => {
    const dbProduct = products.find((product) => product.id === item.id);
    if (dbProduct) {
      return dbProduct.stock < item.selectedQuantity;
    }
    return false;
  });
  return outOfStock;
};
