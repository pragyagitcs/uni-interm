import { Pet } from './components/Pet';

class VirtualPetSimulator {
    private pet: Pet;
    private gameInterval: NodeJS.Timeout | null = null;

    constructor(petName: string) {
        this.pet = new Pet(petName);
    }

    public start() {
        this.gameLoop();
    }

    private gameLoop() {
        this.gameInterval = setInterval(() => {
            this.pet.agePet();
            this.updatePetStatus();
        }, 1000);
    }

    private updatePetStatus() {
        console.log(`Name: ${this.pet.name}, Age: ${this.pet.age}, Happiness: ${this.pet.happiness}`);
    }

    public stop() {
        if (this.gameInterval) {
            clearInterval(this.gameInterval);
            this.gameInterval = null;
        }
    }
}

const simulator = new VirtualPetSimulator('Fluffy');
simulator.start();