import { Router } from 'express';
import { StudentController } from '../controllers/studentController';

const router = Router();
const studentController = new StudentController();

export function setStudentRoutes(app: Router) {
    app.post('/students', studentController.registerStudent.bind(studentController));
    app.get('/students/:id', studentController.getStudent.bind(studentController));
    app.put('/students/:id', studentController.updateStudent.bind(studentController));
}