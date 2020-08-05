import Vehicle from './Vehicle.js';

export default function Car(type, brand, model, price, amountOfDoors) {
  Vehicle.call(this, type, brand, model, price);

  this.amountOfDoors = amountOfDoors;

  this.getAmountOfDoors = function() {
    return this.amountOfDoors;
  }
}