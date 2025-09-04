export class StudentService {
    private students: Student[] = [];

    registerStudent(student: Student): Student {
        this.students.push(student);
        return student;
    }

    getStudent(id: string): Student | undefined {
        return this.students.find(student => student.id === id);
    }

    updateStudent(id: string, updatedData: Partial<Student>): Student | undefined {
        const studentIndex = this.students.findIndex(student => student.id === id);
        if (studentIndex !== -1) {
            this.students[studentIndex] = { ...this.students[studentIndex], ...updatedData };
            return this.students[studentIndex];
        }
        return undefined;
    }

    getAllStudents(): Student[] {
        return this.students;
    }
}