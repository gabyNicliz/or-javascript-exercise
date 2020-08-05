import Concessionarie from './concessionarie/Concessionarie.js';
import Car from './vehicles/Car.js';
import Motorbike from './vehicles/Motorbike.js';

let concessionarie = new Concessionarie();

concessionarie.addVehicle(new Car('car', 'Peugeot', '206', 200000, 4));
concessionarie.addVehicle(new Motorbike('motorbike', 'Honda', 'Titan', 60000, '125c'));
concessionarie.addVehicle(new Car('car', 'Peugeot', '208', 250000, 5));
concessionarie.addVehicle(new Motorbike('motorbike', 'Yamaha', 'YBR', 80500.50, '160c'));

let vehiclesList = concessionarie.getVehiclesList()

for (let vehicle of vehiclesList) {
  if (vehicle.getType() == 'motorbike') {
    let formatedPrice = '' + vehicle.getPrice().toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    console.log(
      'Marca: ' + vehicle.getBrand() 
      + ' // Modelo: ' + vehicle.getModel()
      + ' // Cilindrada: ' + vehicle.getCC() 
      + ' // Precio: $' + formatedPrice);
  }

  if (vehicle.getType() == 'car') {
    let formatedPrice = '' + vehicle.getPrice().toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    console.log(
      'Marca: ' + vehicle.getBrand() 
      + ' // Modelo: ' + vehicle.getModel() 
      + ' // Puertas: ' + vehicle.getAmountOfDoors() 
      + ' // Precio: $' + formatedPrice);
  }
}

console.log('=============================');

let sortedList = concessionarie.getVehiclesListInDecreasingOrder();

let mostExpensiveVehicle = sortedList[0]
console.log('Vehículo más caro: ' + mostExpensiveVehicle.getBrand(), mostExpensiveVehicle.getModel());

let cheapestVehicle = sortedList[sortedList.length - 1];
console.log('Vehículo más barato: ' + cheapestVehicle.getBrand(), cheapestVehicle.getModel());

let vehicle = concessionarie.findVehicleByLetterInModel('Y');
let formatedPrice = '' + vehicle.getPrice().toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
console.log('Vehículo que contiene en el modelo la letra ‘Y’: ' 
+ vehicle.getBrand() + ' ' + vehicle.getModel() 
+ ' $' + formatedPrice);

console.log('=============================');

for (let vehicle of sortedList) {
  console.log(vehicle.getBrand() + ' ' + vehicle.getModel());
}