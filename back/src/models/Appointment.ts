import { v4 as uuidV4 } from 'uuid';

class Appointment {
  id: string;

  provider: string;

  date: Date;

  constructor(provider: string, date: Date) {
    this.id = uuidV4();
    this.provider = provider;
    this.date = date;
  }
}

export default Appointment;
