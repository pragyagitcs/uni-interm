export class Student {
    id: number;
    name: string;
    email: string;
    enrolledCourses: string[];

    constructor(id: number, name: string, email: string, enrolledCourses: string[]) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.enrolledCourses = enrolledCourses;
    }
}