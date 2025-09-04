# Student-Teacher Booking Appointment Application

This application allows students to book appointments with teachers. It provides a user-friendly interface for managing appointments, students, and teachers.

## Features

- **Student Registration**: Students can register and manage their profiles.
- **Teacher Registration**: Teachers can register and manage their profiles.
- **Appointment Management**: Students can book, view, and cancel appointments with teachers.
- **Authentication**: Middleware to ensure secure access to certain routes.

## Project Structure

```
student-teacher-booking-app
├── src
│   ├── app.ts
│   ├── controllers
│   │   ├── appointmentController.ts
│   │   ├── studentController.ts
│   │   └── teacherController.ts
│   ├── models
│   │   ├── appointment.ts
│   │   ├── student.ts
│   │   └── teacher.ts
│   ├── routes
│   │   ├── appointmentRoutes.ts
│   │   ├── studentRoutes.ts
│   │   └── teacherRoutes.ts
│   ├── services
│   │   ├── appointmentService.ts
│   │   ├── studentService.ts
│   │   └── teacherService.ts
│   ├── middlewares
│   │   └── authMiddleware.ts
│   └── types
│       └── index.ts
├── package.json
├── tsconfig.json
└── README.md
```

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd student-teacher-booking-app
   ```
3. Install the dependencies:
   ```
   npm install
   ```

## Usage

1. Start the application:
   ```
   npm start
   ```
2. Access the application at `http://localhost:3000`.

## API Endpoints

- **Students**
  - `POST /students/register`: Register a new student.
  - `GET /students/:id`: Get student details.
  - `PUT /students/:id`: Update student details.

- **Teachers**
  - `POST /teachers/register`: Register a new teacher.
  - `GET /teachers/:id`: Get teacher details.
  - `PUT /teachers/:id`: Update teacher details.

- **Appointments**
  - `POST /appointments`: Create a new appointment.
  - `GET /appointments`: Get all appointments.
  - `DELETE /appointments/:id`: Cancel an appointment.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License.