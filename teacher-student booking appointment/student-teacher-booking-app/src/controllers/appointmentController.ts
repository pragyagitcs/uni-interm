class AppointmentController {
    constructor(private appointmentService: AppointmentService) {}

    async createAppointment(req: Request, res: Response) {
        try {
            const appointmentData = req.body;
            const newAppointment = await this.appointmentService.createAppointment(appointmentData);
            res.status(201).json(newAppointment);
        } catch (error) {
            res.status(500).json({ message: 'Error creating appointment', error });
        }
    }

    async getAppointments(req: Request, res: Response) {
        try {
            const appointments = await this.appointmentService.getAppointments();
            res.status(200).json(appointments);
        } catch (error) {
            res.status(500).json({ message: 'Error retrieving appointments', error });
        }
    }

    async cancelAppointment(req: Request, res: Response) {
        try {
            const appointmentId = req.params.id;
            await this.appointmentService.cancelAppointment(appointmentId);
            res.status(204).send();
        } catch (error) {
            res.status(500).json({ message: 'Error canceling appointment', error });
        }
    }
}

export default AppointmentController;