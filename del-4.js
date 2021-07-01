//Det skall även finnas en funktion på klassen “House” som heter “getAllRooms” som returnerar alla element i arrayen som finns på klassen “House”

class House {
  constructor() {
    this.array = [];
  }
  addRoom(x) {
    this.array.push(x);
  }
  getAllRooms() {
      return this.array;
  }
}



class Room {
    constructor(roomType) {
        this.roomType = roomType;
    }
}

const myHouse = new House();

myHouse.addRoom(new Room ("Bedroom"));
myHouse.addRoom(new Room ("Living room"));
myHouse.addRoom(new Room ("Bathroom"));

// Itererar genom alla rum och skriver ut rumtypen
myHouse.getAllRooms().forEach(display);

function display(value) {
    console.log(value.roomType);
}