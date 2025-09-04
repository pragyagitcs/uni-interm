import express from 'express';
import { json } from 'body-parser';
import { setAppointmentRoutes } from './routes/appointmentRoutes';
import { setStudentRoutes } from './routes/studentRoutes';
import { setTeacherRoutes } from './routes/teacherRoutes';
import { authenticate } from './middlewares/authMiddleware';

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(json());
app.use(authenticate);

// Routes
setAppointmentRoutes(app);
setStudentRoutes(app);
setTeacherRoutes(app);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});