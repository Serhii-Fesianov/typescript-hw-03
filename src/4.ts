class Key {
  private signature: number;

  constructor() {
    this.signature = Math.random();
  }

  getSignature(): number {
    return this.signature;
  }
}

class Person {
  private key: Key;

  constructor(key: Key) {
    this.key = key;
  }

  getKey(): Key {
    return this.key;
  }
}

abstract class House {
  door: boolean = false;
  protected key: Key;
  tenants: Person[] = [];

  comeIn(person: Person): void {
    if (this.door) {
      this.tenants.push(person);
      console.log("Person came in.");
    } else {
      console.log("Door is closed.");
    }
  }

  abstract openDoor(key: Key): void;
}

class MyHouse extends House {
  constructor(key: Key) {
    super();
    this.key = key;
  }

  openDoor(key: Key) {
    if (this.key.getSignature() === key.getSignature()) {
      this.door = true;
      console.log("Door opened");
    } else {
      console.log("Invalid key");
    }
  }
}

const key = new Key();
const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());
house.comeIn(person);
