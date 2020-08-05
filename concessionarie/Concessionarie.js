import Car from '../vehicles/Car.js';
import Motorbike from '../vehicles/Motorbike.js';

export default function Concessionarie() {
  this.vehiclesList = [];

  this.addVehicle = function(vehicle) {
    this.vehiclesList.push(vehicle);
  }

  this.getVehiclesList = function() {
    return this.vehiclesList;
  }

  this.getVehiclesListInDecreasingOrder = function() {
    let listToSort = [...this.vehiclesList];

    listToSort.sort((a, b) => b.getPrice() - a.getPrice());

    return listToSort;
  }

  this.findVehicleByLetterInModel = function(letter) {
    for (let vehicle of this.vehiclesList) {
      if (vehicle.getModel().includes(letter)) return vehicle;
    }

    return 'vehicle not found';
  }
}