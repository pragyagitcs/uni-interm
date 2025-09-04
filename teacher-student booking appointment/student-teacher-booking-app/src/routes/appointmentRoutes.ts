import { Router } from 'express';
import AppointmentController from '../controllers/appointmentController';

const router = Router();
const appointmentController = new AppointmentController();

export function setAppointmentRoutes(app) {
    app.use('/api/appointments', router);
    
    router.post('/', appointmentController.createAppointment.bind(appointmentController));
    router.get('/', appointmentController.getAppointments.bind(appointmentController));
    router.delete('/:id', appointmentController.cancelAppointment.bind(appointmentController));
}