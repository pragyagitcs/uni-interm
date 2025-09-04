export class TeacherController {
    private teachers: any[] = [];

    public registerTeacher(req: any, res: any) {
        const { name, email, subjects } = req.body;
        const newTeacher = { id: this.teachers.length + 1, name, email, subjects };
        this.teachers.push(newTeacher);
        res.status(201).json(newTeacher);
    }

    public getTeacher(req: any, res: any) {
        const teacherId = parseInt(req.params.id);
        const teacher = this.teachers.find(t => t.id === teacherId);
        if (teacher) {
            res.status(200).json(teacher);
        } else {
            res.status(404).json({ message: 'Teacher not found' });
        }
    }

    public updateTeacher(req: any, res: any) {
        const teacherId = parseInt(req.params.id);
        const { name, email, subjects } = req.body;
        const teacherIndex = this.teachers.findIndex(t => t.id === teacherId);
        
        if (teacherIndex !== -1) {
            this.teachers[teacherIndex] = { id: teacherId, name, email, subjects };
            res.status(200).json(this.teachers[teacherIndex]);
        } else {
            res.status(404).json({ message: 'Teacher not found' });
        }
    }
}