export class MyDate {
  year: number;
  month: number;
  day: number;

  constructor(year: number, month: number, day: number) {
    this.year = year;
    this.month = month;
    this.day = day;
  }

  addPadding(value: number) {
    if (value < 10) {
      return `0${value}`;
    }
    return value;
  }

  printFormat(): string {
    return `${this.day}/${this.month}/${this.year}`;
  }

  add(amount: number, type: 'days' | 'months' | 'years') {
    if (type === 'days') {
      this.day += amount;
    }
    if (type === 'months') {
      this.month += amount;
    }
    if (type === 'years') {
      this.year += amount;
    }
  }
}

const myBirth = new MyDate(1998, 7, 3);
console.log(myBirth.printFormat());

myBirth.add(4, 'days');
console.log(myBirth.printFormat());
