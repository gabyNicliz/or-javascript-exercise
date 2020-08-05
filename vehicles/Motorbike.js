import Vehicle from './Vehicle.js';

export default function Motorbike(type, brand, model, price, cc) {
  Vehicle.call(this, type, brand, model, price);

  this.cc = cc;

  this.getCC = function() {
    return this.cc;
  }
}