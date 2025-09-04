export class AppointmentService {
    private appointments: Appointment[] = [];

    public scheduleAppointment(appointment: Appointment): Appointment {
        this.appointments.push(appointment);
        return appointment;
    }

    public getAppointments(): Appointment[] {
        return this.appointments;
    }

    public cancelAppointment(appointmentId: string): boolean {
        const index = this.appointments.findIndex(app => app.id === appointmentId);
        if (index !== -1) {
            this.appointments.splice(index, 1);
            return true;
        }
        return false;
    }
}