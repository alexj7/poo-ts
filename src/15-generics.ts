import { Dog } from './09-protected';

function getValue<T>(value: T) {
  const array: T[] = [value];
  return value;
}

getValue(12).toFixed();
getValue<number>(12).toFixed();
getValue<string>('12').toLocaleLowerCase;
getValue<number[]>([12]).pop();

const fifi = new Dog('fifi', 'nico');
getValue<Dog>(fifi).greeting();
