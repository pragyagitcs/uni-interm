import { Router } from 'express';
import TeacherController from '../controllers/teacherController';

const router = Router();
const teacherController = new TeacherController();

router.post('/teachers', teacherController.registerTeacher.bind(teacherController));
router.get('/teachers/:id', teacherController.getTeacher.bind(teacherController));
router.put('/teachers/:id', teacherController.updateTeacher.bind(teacherController));

export default function setTeacherRoutes(app) {
    app.use('/api', router);
}