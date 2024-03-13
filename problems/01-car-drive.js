// Your code here
class Car {
	constructor(speed){
		this.speed = 0
	}

	drive(newSpeed) {
		this.speed = newSpeed
		return this.speed
	}
}

let honda = new Car()
console.log(honda)

let bmw = new Car()
honda.drive(60)
bmw.drive(30)
console.log(honda)
console.log(bmw)
/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

try {
	module.exports = Car;
} catch {
	module.exports = null;
}
