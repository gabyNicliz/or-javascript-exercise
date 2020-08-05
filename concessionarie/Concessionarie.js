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

  this.getMostExpensiveVehicle = function() {
    let mostExpensiveVehicle = this.vehiclesList[0];

    for (let i = 1; i < this.vehiclesList.lenght; i++) {
      if (mostExpensiveVehicle.gePrice() < this.vehiclesList[i]) {
        mostExpensiveVehicle = vehiclesList[i];
      }
    }

    return mostExpensiveVehicle;
  }

  this.getCheapestVehicle = function() {
    let cheapestVehicle = this.vehiclesList[0];

    for (let i = 1; i < this.vehiclesList.lenght; i++) {
      if (cheapestVehicle.gePrice() > this.vehiclesList[i]) {
        cheapestVehicle = vehiclesList[i];
      }
    }

    return cheapestVehicle;
  }

  this.findVehicleByLetterInModel = function(letter) {
    for (let vehicle of this.vehiclesList) {
      if (vehicle.getModel().includes(letter)) return vehicle;
    }

    return 'vehicle not found';
  }
}