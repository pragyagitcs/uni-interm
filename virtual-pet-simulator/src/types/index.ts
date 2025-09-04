export interface PetData {
    name: string;
    age: number;
    happiness: number;
}

export interface Action {
    type: string;
    payload?: any;
}