export interface Appointment {
    id: string;
    studentId: string;
    teacherId: string;
    date: Date;
    status: 'scheduled' | 'canceled' | 'completed';
}

export interface Student {
    id: string;
    name: string;
    email: string;
    enrolledCourses: string[];
}

export interface Teacher {
    id: string;
    name: string;
    email: string;
    subjects: string[];
}