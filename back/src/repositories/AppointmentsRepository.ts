import { isEqual } from 'date-fns';
import Appointment from '../models/Appointment';

class AppointmentsRepository {
  private appointments: Array<Appointment>;

  constructor() {
    this.appointments = [];
  }

  public create(provider: string, date: Date): Appointment {
    const appointment = new Appointment(provider, date);
    this.appointments.push(appointment);
    return appointment;
  }

  public findByDate(date: Date): Appointment | null {
    const thereIsAppointmentInSamedate = this.appointments.find(appointment =>
      isEqual(date, appointment.date),
    );
    return thereIsAppointmentInSamedate || null;
  }
}

export default AppointmentsRepository;
