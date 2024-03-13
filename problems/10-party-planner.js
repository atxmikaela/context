// Your code here
class PartyPlanner {
	constructor(){
		this.guestList = []
	}
	addToGuestList(name){
		this.guestList.push(name)
	}
	throwParty(){
		if(!this.guestList.length){
			return "Gotta add people to the guest list"
		}
		else{
			// let guests = ''
			// for(let i = 0; i < this.guestList.length; i++){
			// 	guests += this.guestList[i]
			// }
			return `Welcome to the party ${this.guestList.join(' and ')}`
		}
	}
}

/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

try {
	module.exports = PartyPlanner;
} catch {
	module.exports = null;
}
