export class StudentController {
    private students: any[] = [];

    public registerStudent(req: any, res: any) {
        const { name, email, enrolledCourses } = req.body;
        const newStudent = { id: this.students.length + 1, name, email, enrolledCourses };
        this.students.push(newStudent);
        res.status(201).json(newStudent);
    }

    public getStudent(req: any, res: any) {
        const studentId = parseInt(req.params.id);
        const student = this.students.find(s => s.id === studentId);
        if (student) {
            res.status(200).json(student);
        } else {
            res.status(404).json({ message: 'Student not found' });
        }
    }

    public updateStudent(req: any, res: any) {
        const studentId = parseInt(req.params.id);
        const studentIndex = this.students.findIndex(s => s.id === studentId);
        if (studentIndex !== -1) {
            const updatedData = req.body;
            this.students[studentIndex] = { ...this.students[studentIndex], ...updatedData };
            res.status(200).json(this.students[studentIndex]);
        } else {
            res.status(404).json({ message: 'Student not found' });
        }
    }
}