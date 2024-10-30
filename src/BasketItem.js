// BasketItem.js
export default class BasketItem {
    constructor(id, ProductName, UnitPrice, quantity = 1) {
      this.id = id;
      this.ProductName = ProductName; // Make sure property name matches JSON
      this.UnitPrice = UnitPrice; // Make sure property name matches JSON
      this.quantity = quantity;
    }
  }
  