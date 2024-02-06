class Key {
  private signature = Math.random();

  getSignature(): number {
    return this.signature;
  }
}

class Person {
  constructor(private key: Key) {}

  getKey(): Key {
    return this.key;
  }
}

abstract class House {
  protected door: boolean = false;

  private tenants: Person[] = [];

  constructor(protected key: Key) {}

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
