export class Teacher {
    id: string;
    name: string;
    email: string;
    subjects: string[];

    constructor(id: string, name: string, email: string, subjects: string[]) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.subjects = subjects;
    }
}