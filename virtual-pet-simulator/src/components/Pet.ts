class Pet {
    name: string;
    age: number;
    happiness: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
        this.happiness = 100; // starts with full happiness
    }

    feed(amount: number): void {
        this.happiness += amount;
        if (this.happiness > 100) {
            this.happiness = 100; // max happiness
        }
    }

    play(duration: number): void {
        this.happiness -= duration;
        if (this.happiness < 0) {
            this.happiness = 0; // min happiness
        }
    }

    sleep(hours: number): void {
        this.happiness += hours * 10; // regain happiness while sleeping
        if (this.happiness > 100) {
            this.happiness = 100; // max happiness
        }
    }
}

export default Pet;