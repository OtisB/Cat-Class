console.clear();

class Cat {
  constructor(name) {
    this._name = name;
    this._tiredness = 10;
    this._hunger = 10;
    this._loneliness = 10;
    this._happyness = 10;

    // this._tiredness = randomValue();
    // this._hunger = randomValue();
    // this._loneliness = randomValue();
    // this._happyness = randomValue();
  }

  get name() {
    return this._name;
  }

  get tiredness() {
    if (this._tiredness > 0)
      return this._tiredness >= 5 ? "I'am VERY tired!" : "I'am a little tired!";
    else return "I'am not tired at all.";
  }

  get hunger() {
    if (this._hunger > 0)
      return this._hunger >= 5 ? "I'am VERY hungry!" : "I'am a little hungry!";
    else return "I'am not hungry at all.";
  }

  get loneliness() {
    if (this._loneliness > 0) {
      return this._loneliness >= 5
        ? "I'am VERY lonely!"
        : "I'am a little lonely!";
    } else {
      return "I'am not lonely at all.";
    }
  }

  get happiness() {
    if (this._happyness > 0) {
      return this._happyness >= 5 ? "I'am VERY happy!" : "I'am a little happy!";
    } else {
      return "I'am a little sad.";
    }
  }

  feeling() {
    const catsFeelings = [];
    catsFeelings.push(this._tiredness);
    catsFeelings.push(this._hunger);
    catsFeelings.push(this._loneliness);
    catsFeelings.push(this._happyness);

    return catsFeelings;
  }

  sleep(value) {
    if (this._tiredness > 0) {
      if (this._tiredness - value >= 0) {
        this._tiredness -= value;
      } else {
        this._tiredness = 0;
      }
      this._hunger++;
      this._loneliness++;
    }
  }

  feed(value) {
    if (this._hunger > 0) {
      if (this._hunger - value >= 0) {
        this._hunger -= value;
      } else {
        this._hunger = 0;
      }
    }
    this._tiredness++;
  }

  pet(value) {
    if (this._hunger > 3) {
      console.log("Feed me first!");
    } else {
      this._happyness += value;
      this._tiredness++;
      this._loneliness = this._loneliness > 0 ? this._loneliness-- : 0;
      if (this._loneliness > 0) {
        this._loneliness--;
      }
    }
  }
}

let simonsCat = new Cat("Simon's Cat");
console.log(simonsCat.name);
simonsCat.sleep(randomValue());
simonsCat.feed(randomValue());
simonsCat.pet(randomValue());
console.log(simonsCat.feeling());
console.log(simonsCat.tiredness);
console.log(simonsCat.hunger);
console.log(simonsCat.loneliness);
console.log(simonsCat.happiness);

const strayCat = new Cat("Some Stray Cat");
console.log(strayCat.name);
strayCat.sleep(randomValue());
//strayCat.feed(randomValue());
//strayCat.pet(randomValue());
console.log(strayCat.feeling());
console.log(strayCat.tiredness);
console.log(strayCat.hunger);
console.log(strayCat.loneliness);
console.log(strayCat.happiness);

function randomValue() {
  return Math.floor(Math.random() * 11);
}
