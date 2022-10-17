export class Animal {
  constructor(public name: string) {}

  move() {
    console.log('Moving along!');
  }

  greeting() {
    return `Hellow i'm ${this.name}`;
  }
}

export class Dog extends Animal {
  constructor(name: string, public owner: string) {
    super(name);
  }

  woof(times: number): void {
    for (let index = 0; index < times; index++) {
      console.log('Woof!');
    }
  }
}

const fifi = new Animal('fifi');
fifi.move();
console.log(fifi.greeting());

const cheis = new Dog('cheis', 'Alex');
cheis.move();
console.log(cheis.greeting());
cheis.woof(3);
console.log(cheis.owner);
