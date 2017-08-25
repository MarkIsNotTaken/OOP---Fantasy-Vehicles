class Vehicle {
	constructor(make, color, type) {
		this._make = make;
		this._color = color;
		this._type = type;
	}

	set vehicleColor(color) {
		this._color = "black";
	}

	set vehicleMake(make) {
		this._make = "Toyota";
	}

	set vehicleType(type) {
		this._type = "truck";
	}

	get vehicleDetails(){
		return "My ride is a " + this.color + " " + this.type + ", made by " + this.make + ".";
	}
}

class SuperCar extends Vehicle {
	constructor(make, color, type, topSpeed, cost){
		this.make = make;
		this.color = color;
		this.type = type;
		this.topSpeed = topSpeed;
		this.cost = cost;
	}

}


class Motorcycle extends Vehicle {
	constructor(make, color, type, topSpeed, cost){

	}
}

let details = new Vehicle();

console.log(details.vehicleDetails);