import { Booking } from '@entities/Booking';
import { BookingRepository } from 'src/database';

class ListBookingService {
  public async execute(): Promise<Booking[]> {
    const booking = BookingRepository.find();

    return booking;
  }
}

export default ListBookingService;
