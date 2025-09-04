export class Appointment {
    id: string;
    studentId: string;
    teacherId: string;
    date: Date;
    status: 'scheduled' | 'completed' | 'canceled';

    constructor(id: string, studentId: string, teacherId: string, date: Date, status: 'scheduled' | 'completed' | 'canceled') {
        this.id = id;
        this.studentId = studentId;
        this.teacherId = teacherId;
        this.date = date;
        this.status = status;
    }
}