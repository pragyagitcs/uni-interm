export class TeacherService {
    private teachers: Teacher[] = [];

    registerTeacher(teacher: Teacher): Teacher {
        this.teachers.push(teacher);
        return teacher;
    }

    getTeacher(id: string): Teacher | undefined {
        return this.teachers.find(teacher => teacher.id === id);
    }

    updateTeacher(id: string, updatedTeacher: Partial<Teacher>): Teacher | undefined {
        const index = this.teachers.findIndex(teacher => teacher.id === id);
        if (index !== -1) {
            this.teachers[index] = { ...this.teachers[index], ...updatedTeacher };
            return this.teachers[index];
        }
        return undefined;
    }

    getAllTeachers(): Teacher[] {
        return this.teachers;
    }
}