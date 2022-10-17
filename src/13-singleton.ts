export class zinliService {
  static instance: zinliService | null = null;

  private constructor(private _name: string) {}

  get name() {
    return this._name;
  }

  static create(name: string) {
    if (zinliService.instance === null) {
      zinliService.instance = new zinliService(name);
    }
    return zinliService.instance;
  }
}

const myService1 = zinliService.create('Service 1');
const myService2 = zinliService.create('Service 2');

console.log('instancias:', myService1 === myService2);
console.log('name de instancias:', myService1.name === myService2.name);
