class Vehicle {
	constructor(make, color, type) {
		this._make = make;
		this._color = color;
		this._type = type;
	}

	get vehicleDetails(){
		return "My ride is a " + this._color + " " + this._type + ", made by " + this._make;
	}

	set vehicleColor(color) {
		if(typeof color === "string"){
			this._color = color;
		}else{
			throw new TypeError('Vehicle.color is not a string')
		}
	}
}

class SuperCar extends Vehicle {
	constructor(make, color, type, topSpeed, cost){
		super(make, color, type);
		this._topSpeed = topSpeed;
		this._cost = cost;
	}

	get superCarDetails(){
		return "My ride is a " + this._color + " " + this._type + ", made by " + this._make + " with a top speed of " + this._topSpeed + " and a cost of " + this._cost;
	}

	set priceTag(cost){
		if(typeof cost === "string"){
			this._cost = cost;
		}else{
			throw new TypeError('SuperCar.cost is not a string'); // Alex was here ;)
		}
	}

}


class Motorcycle extends Vehicle {
	constructor(make, color, type, topSpeed, cost){
		super();
		this._topSpeed = topSpeed;
		this._cost = cost;
	}

	get bikeDetails(){
		return "My bike is a " + this._color + " " + this._type + ", made by " + this._make + " with a top speed of " + this._topSpeed + " and a cost of " + this._cost;
	}

	set bikeSpeed(topSpeed){
		if(typeof topSpeed === "string"){
			this._topSpeed = topSpeed;
		}else{
			throw new TypeError('Motorcycle.topSpeed is not a string');
			}
		}
	}
}


let newVehicle = new Vehicle('Toyota', 'black', 'truck');

let newSuperCar = new SuperCar('Toyota', 'black', 'truck', '2mph', "1.50$");

let newMotorocycle = new Motorcycle('Me', 'red', 'hog', '0.1mph', 'a small loan of a million dollars');

console.log(newMotorocycle.bikeDetails);
