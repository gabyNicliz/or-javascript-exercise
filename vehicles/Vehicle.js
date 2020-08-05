export default function Vehicle(type, brand, model, price) {
  this.type = type;
  this.brand = brand;
  this.model = model;
  this.price = price;

  this.getType = function() {
    return this.type;
  }

  this.getBrand = function() {
    return this.brand;
  }

  this.getModel = function() {
    return this.model;
  }

  this.getPrice = function() {
    return this.price;
  }
}
