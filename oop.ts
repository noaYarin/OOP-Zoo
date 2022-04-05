//class for animals with four legs
abstract class AnimalsWithFourLegs {
  protected _name: string = "";
  protected _legs: number = 0;
  protected _voice: string = "";

  constructor(name: string, legs: number, voice: string) {
    this.setName(name);
    this.getNumberOfLegs(legs);
    this._voice = voice;
  }
  setName(name: string) {
    if (name.length > 1) {
      this._name = name;
    } else {
      throw new Error("Change your name");
    }
  }
  getNumberOfLegs(legs: number) {
    return (this._legs = legs);
  }
  makeNoise(): string {
    return "I can make noise";
  }
}

//class for animals with wings
abstract class AnimalsWithWings {
  protected _name: string = "";
  protected _legs: number = 0;
  protected _wings: number = 0;
  protected _voice: string = "";
  constructor(name: string, legs: number, wings: number, voice: string) {
    this.getName(name);
    this._legs = legs;
    this.setWings(wings);
    this._voice = voice;
  }
  makeNoise(): void {
    console.log("I can make noise");
  }
  getName(name: string) {
    return (this._name = name);
  }
  setWings(wings: number) {
    if (wings === 2) {
      this._wings = wings;
    } else {
      throw new Error("Wings must be 2!");
    }
  }
}

//class for animals in the sea
abstract class SeaAnimals {
  protected _name: string = "";
  protected _voice: string = "";
  protected _gender: string = "";

  constructor(name: string, voice: string, gender: string) {
    this.getName(name);
    this.getVoice(voice);
    this._gender = gender;
  }

  getName(name: string) {
    return (this._name = name);
  }
  getVoice(voice: string) {
    return (this._voice = voice);
  }
}

interface Fly {
  canFly(): boolean;
}
interface Escape {
  canEscape(): boolean;
}

class Cat extends AnimalsWithFourLegs implements Escape {
  constructor(name: string, legs: number, voice: string) {
    super(name, legs, voice);
  }
  canEscape(): boolean {
    return true;
  }
  override makeNoise(): string {
    return "mio";
  }
}

class Dog extends AnimalsWithFourLegs implements Escape {
  constructor(name: string, legs: number, voice: string) {
    super(name, legs, voice);
  }
  canEscape(): boolean {
    return true;
  }
  override makeNoise(): string {
    return "woof";
  }
}

class Eagle extends AnimalsWithWings implements Fly, Escape {
  _height: number;
  constructor(
    name: string,
    legs: number,
    wings: number,
    voice: string,
    height: number
  ) {
    super(name, legs, wings, voice);
    this._height = height;
  }
  canFly(): boolean {
    return true;
  }
  canEscape(): boolean {
    return true;
  }
  override makeNoise(): void {
    console.log("rkrkrkr");
  }
}

class Pinguin extends AnimalsWithWings implements Fly, Escape {
  constructor(name: string, legs: number, wings: number, voice?: string) {
    super(name, legs, wings, voice);
  }
  canFly(): boolean {
    return false;
  }
  canEscape(): boolean {
    return true;
  }
  override makeNoise(): void {}
}

class Fish extends SeaAnimals {
  constructor(name: string, voice: string, gender: string) {
    super(name, voice, gender);
  }
}
class Shark extends SeaAnimals {
  constructor(name: string, voice: string, gender: string) {
    super(name, voice, gender);
  }
}

let cat = new Cat("lola", 4, "mioooo");
let dog = new Dog("bob", 4, "woof");
let eagle = new Eagle("eigi", 2, 2, "rrr", 1.2);
let pinguin = new Pinguin("pip", 2, 2);
let shark = new Shark("sharki", "", "female");
let fish = new Fish("fishing", "", "male");
console.log(pinguin);
