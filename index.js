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
			throw new TypeError('That is not a string')
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
		return "".concat(this.vehicleDetails(), " with a top speed of " + this._topSpeed + " and a cost of " + this._cost);
	}

}


class Motorcycle extends Vehicle {
	constructor(make, color, type, topSpeed, cost){
		super();

	}
}


let newVehicle = new Vehicle();
let newSuperCar = new SuperCar();

console.log(newSuperCar.superCarDetails);
